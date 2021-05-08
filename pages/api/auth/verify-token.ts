import Iron from '@hapi/iron';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { token } = req.body;

  // Create a session object with a max age that we can validate later
  const email = await Iron.unseal(
    token,
    process.env.NEXT_PUBLIC_TOKEN_SECRET,
    Iron.defaults
  );

  res.status(200).json(email);
};
