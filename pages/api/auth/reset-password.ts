import { updateUserPassword } from 'lib/user';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    await updateUserPassword(req.body);
    res.status(200).send({ done: true });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    let { message } = error;
    res.status(500).end(message);
  }
};
