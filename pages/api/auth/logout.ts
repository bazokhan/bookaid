import { removeTokenCookie } from 'lib/auth-cookies';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  removeTokenCookie(res);
  res.writeHead(302, { Location: '/' });
  res.end();
};
