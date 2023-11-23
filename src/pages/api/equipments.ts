// This is the information needed for the dashboard.

import { NextApiRequest, NextApiResponse } from 'next';
import { getEquipments } from '@/utils/equipmentData';

export default (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      return res.status(200).json(getEquipments());
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  };
}
