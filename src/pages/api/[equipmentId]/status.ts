/*
A Status belongs to an Equipment.
When the status is changed, it can affect the Equipment's orders.
POST: Add a new status to an Equipment.
*/
import { NextApiRequest, NextApiResponse } from 'next'

const POST = (req: NextApiRequest, res: NextApiResponse) => {
  const { equipmentId } = req.query;
  const status = req.body;
  console.log(req.query, typeof req.body, req.body)
  res.status(200).json({ equipmentId, status });
}

export default (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      return POST(req, res);
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  };
}