import { createUser } from 'lib/user';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    await createUser(req.body);
    res.status(200).send({ done: true });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    let { message } = error;
    if (message.includes('constraint failed on the fields: (`username`)')) {
      message = 'Username already used';
    }
    if (message.includes('Unique constraint failed on the fields: (`email`)')) {
      message = 'Email already used';
    }
    res.status(500).end(message);
  }
};
