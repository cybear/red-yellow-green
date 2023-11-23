/*
A Status belongs to an Equipment.
When the status is changed, it can affect the Equipment's orders.
POST: Add a new status to an Equipment.
*/
import { getEquipment } from '@/utils/equipmentData';
import { NextApiRequest, NextApiResponse } from 'next'

export type Status = {
  color: 'red' | 'yellow' | 'green';
  text: 'Standing still' | 'Starting up' | 'Winding down' | 'Producing';
};

const getNewStatus = (oldColor: Status['color'], newColor: Status['color']) => {
  if (newColor === 'green') return 'Producing';
  if (newColor === 'red') return 'Standing still';
  if (newColor === 'yellow' && oldColor === 'green') return 'Winding down';
  if (newColor === 'yellow' && oldColor === 'red') return 'Starting up';
  throw new Error('Invalid color combo');
};

const PUT = (req: NextApiRequest, res: NextApiResponse) => {
  const { equipmentId } = req.query;
  const newColor = req.body;
  const currentEquipment = getEquipment(equipmentId as string);
  if (!currentEquipment) {
    return res.status(404).end(`Equipment ${equipmentId} not found.`);
  }
  const oldColor = currentEquipment.currentColor;
  if (oldColor !== newColor) {
    // Start a new order
    if (newColor === 'green') {
      const newOrder = currentEquipment.queuedOrders.shift();
      if (newOrder) {
        currentEquipment.currentOrder = newOrder;
      }
    }

    // Complete the current order
    if (currentEquipment.currentColor === 'green' && newColor !== 'green') {
      if (currentEquipment.currentOrder) {
        currentEquipment.completedOrders.push(currentEquipment.currentOrder);
        currentEquipment.currentOrder = null;
      }
    }
  }
  const newStatus = getNewStatus(oldColor, newColor);
  currentEquipment.currentColor = newColor;
  currentEquipment.currentStatus = newStatus;
  console.log('Updated', currentEquipment);
  const obj = {
    equipmentId,
    color: newColor,
    status: newStatus
  };
  return res.status(200).json(obj);
}

export default (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'PUT':
      return PUT(req, res);
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  };
}