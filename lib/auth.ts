import Iron from '@hapi/iron';
import { NextApiRequest, NextApiResponse } from 'next';
import { MAX_AGE, setTokenCookie, getTokenCookie } from './auth-cookies';
import { User } from './user';

export const setLoginSession = async (
  res: NextApiResponse,
  session: User
): Promise<void> => {
  const createdAt = Date.now();
  // Create a session object with a max age that we can validate later
  const obj = { ...session, createdAt, maxAge: MAX_AGE };
  const token = await Iron.seal(
    obj,
    process.env.NEXT_PUBLIC_TOKEN_SECRET,
    Iron.defaults
  );
  setTokenCookie(res, token);
};

export const getLoginSession = async (req: NextApiRequest): Promise<User> => {
  const token = getTokenCookie(req);

  if (!token) return null;

  const session = await Iron.unseal(
    token,
    process.env.NEXT_PUBLIC_TOKEN_SECRET,
    Iron.defaults
  );
  const expiresAt = session.createdAt + session.maxAge * 1000;

  // Validate the expiration date of the session
  if (Date.now() > expiresAt) {
    throw new Error('Session expired');
  }

  return session;
};
