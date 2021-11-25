import React, { useState } from 'react';
import { useUser } from 'hooks/useUser';
import Layout from 'components/Layout';
import Form from 'components/Form';
import { LoginForm } from 'common/types';
import Title from 'components/Typography/Title';

const Login: React.FC = () => {
  useUser({ redirectTo: '/', redirectIfFound: true });

  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<LoginForm>) {
    e.preventDefault();

    if (errorMsg) setErrorMsg('');

    const body = {
      username: e.currentTarget.username.value.toLowerCase(),
      password: e.currentTarget.password.value
    };

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      if (res.status === 200) {
        window.location.replace('/profile');
      } else {
        throw new Error(await res.text());
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('An unexpected error happened occurred:', error);
      setErrorMsg(error.message);
    }
  }

  return (
    <Layout>
      <div className="flex flex-col items-center w-full max-w-sm px-4 mx-auto mt-16">
        <Title>Log in</Title>
        <Form isLogin errorMessage={errorMsg} onSubmit={handleSubmit} />
      </div>
    </Layout>
  );
};

export default Login;
