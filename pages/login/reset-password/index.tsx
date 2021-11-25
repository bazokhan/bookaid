import React, { useState } from 'react';
import Layout from 'components/Layout';
import Input from 'components/Form/Input';
import Button from 'components/Button/Button';
import ErrorMessage from 'components/States/ErrorMessage';
import Stack from 'components/Layout/Stack';

const ResetPassword: React.FC = () => {
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim() === '' || !email) setErrorMsg('Email must be provided.');
    else setErrorMsg('');

    try {
      setLoading(true);
      setErrorMsg('');
      setSuccessMsg('');

      const validationRes = await fetch('/api/auth/validate-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      if (validationRes.status !== 200) {
        throw new Error(await validationRes.text());
      }

      const res = await fetch('/api/auth/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });

      if (res.status === 200) {
        setSuccessMsg('Email sent successfully');
      } else {
        throw new Error(await res.text());
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      // eslint-disable-next-line no-console
      console.error('An unexpected error happened occurred:', error);
      setErrorMsg(error.message);
    }
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <Stack>
          <Input
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            onChange={e => setEmail(e.target.value)}
            value={email}
          />

          <Button loading={loading} type="submit">
            Send
          </Button>
          {errorMsg ? <ErrorMessage error={new Error(errorMsg)} /> : null}
          {successMsg ? (
            <p className="text-green-600 font-bold">{successMsg}</p>
          ) : null}
        </Stack>
      </form>
    </Layout>
  );
};

export default ResetPassword;
