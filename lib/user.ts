import { Prisma, User } from '@prisma/client';
import crypto from 'crypto';
import prisma from './prisma';

export const createUser = async ({
  username,
  password,
  email
}: {
  username: string,
  password: string,
  email: string
}): Promise<User> => {
  // Here you should create the user and save the salt and hashed password (some dbs may have
  // authentication methods that will do it for you so you don't have to worry about it):
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
    .toString('hex');
  const userCreateInput: Prisma.UserCreateInput = {
    email,
    username,
    hash,
    salt
  };

  const user = await prisma.user.create({ data: userCreateInput });

  // This is an in memory store for users, there is no data persistence without a proper DB
  // users.push(user);

  return user;
};

// Here you should lookup for the user in your DB
// using username or email
export const findUser = async ({
  username
}: {
  username: string
}): Promise<User> =>
  // users.find(user => user.username === username);
  prisma.user.findFirst({
    where: {
      OR: [{ username }, { email: username }]
    },
    rejectOnNotFound: true
  });

// Compare the password of an already fetched user (using `findUser`) and compare the
// password for a potential match
export const validatePassword = (
  user: User,
  inputPassword: string
): boolean => {
  const inputHash = crypto
    .pbkdf2Sync(inputPassword, user.salt, 1000, 64, 'sha512')
    .toString('hex');
  const passwordsMatch = user.hash === inputHash;
  return passwordsMatch;
};

export const updateUserPassword = async ({
  password,
  email
}: {
  password: string,
  email: string
}): Promise<User> => {
  // Here you should create the user and save the salt and hashed password (some dbs may have
  // authentication methods that will do it for you so you don't have to worry about it):
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
    .toString('hex');

  const user = await prisma.user.update({
    where: {
      email
    },
    data: {
      hash,
      salt
    }
  });

  // This is an in memory store for users, there is no data persistence without a proper DB
  // users.push(user);

  return user;
};
