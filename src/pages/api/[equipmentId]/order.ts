/*
An Order belongs to an Equipment.
It can be added by a supervisor.

*/
import { NextApiRequest, NextApiResponse } from 'next';
import { equipmentData } from '@/utils/equipmentData';

export default (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      const { equipmentId } = req.query;
      const equipment = equipmentData.find((equipment) => equipment.id === equipmentId);
      if (!equipment) {
        return res.status(404).end(`Equipment with id ${equipmentId} not found.`);
      }
      const orderId = req.body;
      equipment.queuedOrders.push(orderId);
      return res.status(200).json(equipmentData);
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  };
}
