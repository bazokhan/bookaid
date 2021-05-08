import React from 'react';
import Link from 'next/link';

type Props = {
  isLogin: boolean,
  errorMessage?: string,
  onSubmit: (event: React.FormEvent) => void
};

const Form: React.FC<Props> = ({ isLogin, errorMessage, onSubmit }) => (
  <form onSubmit={onSubmit}>
    {!isLogin && (
      <label className="pb-1 text-sm">
        <p>Email</p>
        <input
          type="email"
          name="email"
          required
          placeholder="Your email address"
          className="w-full p-4 mb-6 rounded-xl"
        />
      </label>
    )}
    <label className="pb-1 text-sm">
      <p>{isLogin ? 'Email / Username' : 'Username'}</p>
      <input
        type="text"
        name="username"
        required
        placeholder={isLogin ? 'Email or Username' : 'Username'}
        className="w-full p-4 mb-6 rounded-xl"
      />
    </label>
    <label className="pb-1 text-sm">
      <p>Password</p>
      <input
        type="password"
        name="password"
        required
        placeholder="Enter your password"
        className="w-full p-4 mb-6 rounded-xl"
      />
    </label>
    {!isLogin && (
      <label className="pb-1 text-sm">
        <p>Repeat password</p>
        <input
          type="password"
          name="rpassword"
          required
          placeholder="Repeat password"
          className="w-full p-4 mb-6 rounded-xl"
        />
      </label>
    )}

    <div>
      {isLogin ? (
        <>
          <button type="submit" className="w-full py-4 btn">
            Login
          </button>
          <Link href="/signup">
            <a className="mt-3 block hover:text-main-3">
              I don't have an account (go to signup)
            </a>
          </Link>
          <Link href="/login/reset-password">
            <a className="mt-2 block hover:text-main-3">
              Forget your password? reset now
            </a>
          </Link>
        </>
      ) : (
        <>
          <button type="submit" className="w-full py-4 btn">
            Signup
          </button>
          <Link href="/login">
            <a className="mt-5 hover:text-main-3">
              I already have an account (go to login)
            </a>
          </Link>
        </>
      )}
    </div>

    {errorMessage && <p className="text-error">{errorMessage}</p>}
  </form>
);

Form.defaultProps = { errorMessage: null };

export default Form;
