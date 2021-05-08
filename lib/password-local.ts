import Local from 'passport-local';
import { findUser, User, validatePassword } from './user';

export const localStrategy = new Local.Strategy(
  (
    username: string,
    password: string,
    done: (err: Error, user?: User) => void
  ) => {
    findUser({ username })
      .then(user => {
        if (user && validatePassword(user, password)) {
          done(null, user);
        } else {
          done(new Error('Invalid username and password combination'));
        }
      })
      .catch(error => {
        done(error);
      });
  }
);
