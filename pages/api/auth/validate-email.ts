import { findUser } from 'lib/user';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    await findUser({ username: req.body.email.toLowerCase() });
    res.status(200).json({ valid: true });
  } catch (err) {
    res.status(500).json('This user does not exist');
  }
};
