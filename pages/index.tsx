import React, { useCallback } from 'react';
import Layout from 'components/Layout';
import { useUser } from 'hooks/useUser';
import { useAccountMutations, useMyAccounts } from 'hooks/useAccounts';
import { withApollo } from 'lib/WithApollo';

const Home: React.FC = () => {
  const user = useUser({ redirectTo: '/login' });
  const {
    createAccount,
    createAccountLoading,
    createAccountError
  } = useAccountMutations({ user });
  const { myAccounts, loading, error } = useMyAccounts({ user });
  const onSubmit = useCallback(
    async e => {
      e.preventDefault();
      const name = e.currentTarget.accountName.value;
      if (!name) return;
      await createAccount(name);
    },
    [createAccount]
  );

  return (
    <Layout>
      <h1>{user?.username}</h1>
      {error ? (
        <div>Error</div>
      ) : loading ? (
        <div>Loading...</div>
      ) : myAccounts?.length ? (
        myAccounts.map(account => <p key={account.id}>{account.name}</p>)
      ) : (
        <div>No accounts yet</div>
      )}
      <h2>Create account</h2>
      {createAccountError ? <p>{createAccountError?.message}</p> : null}
      <form onSubmit={onSubmit}>
        <input
          name="accountName"
          placeholder="account name"
          disabled={createAccountLoading}
        />
        <button type="submit" disabled={createAccountLoading}>
          {createAccountLoading ? 'loading..' : 'Create'}
        </button>
      </form>
    </Layout>
  );
};

export default withApollo({ ssr: false })(Home);
