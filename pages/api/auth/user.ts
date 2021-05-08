import { getLoginSession } from 'lib/auth';
import { findUser } from 'lib/user';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    const session = await getLoginSession(req);
    const user = (session && (await findUser(session))) ?? null;

    res.status(200).json({ user });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    res.status(500).end('Authentication token is invalid, please log in');
  }
};
