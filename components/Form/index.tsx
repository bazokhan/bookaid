import React from 'react';
import Stack from 'components/Layout/Stack';
import ErrorMessage from 'components/States/ErrorMessage';
import Button from 'components/Button/Button';
import LinkButton from 'components/Button/LinkButton';
import Input from './Input';

type Props = {
  isLogin: boolean,
  errorMessage?: string,
  onSubmit: (event: React.FormEvent) => void
};

const Form: React.FC<Props> = ({ isLogin, errorMessage, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <Stack>
      {!isLogin && (
        <Input
          label="Email"
          type="email"
          name="email"
          required
          placeholder="Your email address"
        />
      )}
      <Input
        label={isLogin ? 'Email' : 'Username'}
        name="username"
        required
        placeholder={isLogin ? 'Email' : 'Username'}
      />
      <Input
        label="Password"
        type="password"
        name="password"
        required
        placeholder="Enter your password"
      />
      {!isLogin && (
        <Input
          label="Repeat password"
          type="password"
          name="password"
          required
          placeholder="Repeat password"
        />
      )}

      {isLogin ? (
        <>
          <Button type="submit" className="w-full py-4 btn">
            Login
          </Button>
          <LinkButton href="/signup">Don't have an account? Signup</LinkButton>
          <LinkButton href="/login/reset-password">
            Forget your password? reset now
          </LinkButton>
        </>
      ) : (
        <>
          <Button type="submit" className="w-full py-4 btn">
            Signup
          </Button>
          <LinkButton href="/login">Already have an account? Login</LinkButton>
        </>
      )}

      {errorMessage && <ErrorMessage error={new Error(errorMessage)} />}
    </Stack>
  </form>
);

Form.defaultProps = { errorMessage: null };

export default Form;
