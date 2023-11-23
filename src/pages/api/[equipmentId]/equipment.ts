import { NextApiRequest, NextApiResponse } from 'next';
import { equipmentData } from '@/utils/equipmentData';

export default (req: NextApiRequest, res: NextApiResponse) => {
  console.warn(req.method, req.query);
  switch (req.method) {
    case 'GET':
      const { equipmentId } = req.query;
      const equipment = equipmentData.find((equipment) => equipment.id === equipmentId);
      if (!equipment) {
        return res.status(404).end(`Equipment with id ${equipmentId} not found.`);
      }
      return res.status(200).json(equipment);
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  };
}
