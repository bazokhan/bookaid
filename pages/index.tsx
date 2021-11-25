import React, { useCallback, useEffect, useState } from 'react';
import Layout from 'components/Layout';
import { useUser } from 'hooks/useUser';
import { useAccountMutations, useMyAccounts } from 'hooks/useAccounts';
import { useProfileByUsernameLazy } from 'hooks/useProfiles';
import { useDebounce } from 'use-debounce/lib';
import Link from 'next/link';
import Title from 'components/Typography/Title';
import DataWrapper from 'components/States/DataWrapper';

const Home: React.FC = () => {
  const user = useUser({ redirectTo: '/login' });
  const {
    createAccount,
    createAccountLoading,
    createAccountError,
    createAccountPermission,
    updateAccountPermission,
    deleteAccountPermission
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

  const [searchValue, setSearchValue] = useState('');
  const [debouncedSearchValue] = useDebounce(searchValue, 500);

  const {
    getProfileByUsername,
    profiles,
    loading: searchProfileLoading,
    error: searchProfileError
  } = useProfileByUsernameLazy();

  useEffect(() => {
    const search = async () => {
      await getProfileByUsername(debouncedSearchValue);
    };
    search();
  }, [debouncedSearchValue, getProfileByUsername]);

  const onChangeRole = useCallback(
    async (permission, role) => {
      if (role === 'VIEWER') {
        await updateAccountPermission(permission, 'EDITOR');
      } else if (role === 'EDITOR') {
        await updateAccountPermission(permission, 'ADMIN');
      } else if (role === 'ADMIN') {
        await updateAccountPermission(permission, 'VIEWER');
      }
    },
    [updateAccountPermission]
  );

  return (
    <Layout>
      <Title>{user?.username}</Title>
      <DataWrapper
        error={error}
        loading={loading}
        data={myAccounts}
        emptyTitle="No accounts yet!"
      >
        {myAccounts?.map(account => (
          <div key={account.id}>
            <Link href={`/${account.id}`}>
              <a>{account.name}</a>
            </Link>
            {account.permissions?.length ? (
              account.permissions.map(p => (
                <div key={p.id}>
                  <button onClick={() => deleteAccountPermission(p)}>
                    {p.user?.username}
                  </button>
                  <button onClick={() => onChangeRole(p, p.role)}>
                    {p.role}
                  </button>
                </div>
              ))
            ) : (
              <p>Not shared yet</p>
            )}
          </div>
        ))}
      </DataWrapper>

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
      <p>==============================</p>
      <input
        placeholder="search profiles"
        onChange={e => setSearchValue(e.target.value)}
      />
      {debouncedSearchValue ? (
        <DataWrapper
          error={searchProfileError}
          loading={searchProfileLoading}
          data={profiles}
          emptyTitle="No users found!"
        >
          {profiles?.map(p => (
            <button
              key={p.id}
              onClick={() => createAccountPermission(p, myAccounts?.[0])}
            >
              {p.username}
            </button>
          ))}
        </DataWrapper>
      ) : null}
    </Layout>
  );
};

export default Home;
