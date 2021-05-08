import React, { useState } from 'react';
import Layout from 'components/Layout';

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
      <div className="flex flex-col items-center justify-center w-full max-w-sm px-4 mx-auto mt-16">
        <form onSubmit={handleSubmit} className="w-full">
          <label className="pb-1 text-sm">
            <p>Email</p>
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full p-4  rounded-xl"
            />
          </label>
          <button type="submit" className="w-full py-2 mt-4 btn">
            {loading ? 'Loading...' : 'Send'}
          </button>
          {errorMsg && <p className="text-error">{errorMsg}</p>}
          {successMsg && <p className="text-main-4">{successMsg}</p>}
        </form>
      </div>
    </Layout>
  );
};

export default ResetPassword;
