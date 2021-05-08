import React, { useState } from 'react';
import Layout from 'components/Layout';
import Router, { useRouter } from 'next/router';

const ResetPassword: React.FC = () => {
  const { query } = useRouter();
  const [errMsg, setErrMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const [newPassword, setNewPassword] = useState({
    password: '',
    confirm: ''
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);
      setErrMsg('');
      const res = await fetch('/api/auth/verify-token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: query?.token })
      });

      const data = await res.json();
      const { confirm, password } = newPassword;
      if (confirm === password && confirm.trim() !== '') {
        const response = await fetch('/api/auth/reset-password', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ password, email: data.email })
        });
        if (response.status === 200) Router.push('/login');
      } else {
        setErrMsg('passwords must match!');
      }
      setLoading(false);
    } catch (err) {
      setErrMsg('Invalid Token!');
    }
  }

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center w-full max-w-sm px-4 mx-auto mt-16">
        <form onSubmit={handleSubmit} className="w-full">
          <label className="pb-1 text-sm">
            <p className="mt-3">Password</p>
            <input
              type="password"
              name="new-password"
              required
              placeholder="Enter new password"
              className="w-full p-4 rounded-xl"
              value={newPassword.password}
              onChange={e =>
                setNewPassword({ ...newPassword, password: e.target.value })
              }
            />
          </label>
          <label className="pb-1 text-sm">
            <p className="mt-3">Confirm Password</p>
            <input
              type="password"
              name="confirm-password"
              required
              placeholder="Enter confirm password"
              className="w-full p-4 rounded-xl"
              value={newPassword.confirm}
              onChange={e =>
                setNewPassword({ ...newPassword, confirm: e.target.value })
              }
            />
          </label>

          <button type="submit" className="w-full py-2 mt-4 btn">
            {loading ? 'Loading...' : 'Reset'}
          </button>
          {errMsg && <p className="text-error">{errMsg}</p>}
        </form>
      </div>
    </Layout>
  );
};

export default ResetPassword;
