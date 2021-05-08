import React, { useState } from 'react';
import Router from 'next/router';
import { useUser } from 'hooks/useUser';
import Layout from 'components/Layout';
import Form from 'components/Form';
import { LoginForm } from 'common/types';
import validateUsername from 'helpers/validateUsername';

const Signup: React.FC = () => {
  useUser({ redirectTo: '/', redirectIfFound: true });

  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<LoginForm>) {
    e.preventDefault();

    if (errorMsg) setErrorMsg('');

    const body = {
      username: e.currentTarget.username.value.toLowerCase(),
      password: e.currentTarget.password.value,
      email: e.currentTarget.email.value.toLowerCase()
    };

    if (body.password !== e.currentTarget.rpassword.value) {
      setErrorMsg(`The passwords don't match`);
      return;
    }

    if (!body.username) {
      setErrorMsg(`UserName is required`);
      return;
    }
    if (!body.email) {
      setErrorMsg(`Email is required`);
      return;
    }
    if (body.password?.length < 6) {
      setErrorMsg('Password need to be at least 6 chars');
      return;
    }

    if (body.username?.length < 3) {
      setErrorMsg('Username need to be at least 3 chars');
      return;
    }

    if (!validateUsername(body.username)) {
      setErrorMsg(
        `Invalid username, must start with a letter, no special chars`
      );
      return;
    }

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      if (res.status === 200) {
        Router.push('/login');
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
        <p className="text-2xl font-bold text-black">Create your account </p>
        <Form isLogin={false} errorMessage={errorMsg} onSubmit={handleSubmit} />
      </div>
    </Layout>
  );
};

export default Signup;
