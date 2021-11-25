import React, { useCallback, useEffect, useState } from 'react';
import Layout from 'components/Layout';
import { useUser } from 'hooks/useUser';
import { useAccountMutations, useMyAccounts } from 'hooks/useAccounts';
import { useProfileByUsernameLazy } from 'hooks/useProfiles';
import { useDebounce } from 'use-debounce/lib';
import Title from 'components/Typography/Title';
import DataWrapper from 'components/States/DataWrapper';
import Input from 'components/Form/Input';
import Button from 'components/Button/Button';
import LinkButton from 'components/Button/LinkButton';
import ErrorMessage from 'components/States/ErrorMessage';
import Stack from 'components/Layout/Stack';

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
  const [activeAccount, setActiveAccount] = useState(null);

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
      <Stack>
        <Title>My accounts</Title>
        <DataWrapper
          error={error}
          loading={loading}
          data={myAccounts}
          emptyTitle="No accounts yet!"
        >
          {myAccounts?.map(account => (
            <div
              key={account.id}
              className="border border-gray-700 border-dashed rounded-default p-4"
            >
              <div className="flex justify-between mb-4">
                <LinkButton href={`/${account.id}`}>{account.name}</LinkButton>
                <Button
                  onClick={() =>
                    setActiveAccount(account === activeAccount ? null : account)
                  }
                >
                  Share with other users
                </Button>
              </div>
              <DataWrapper
                error={error}
                loading={loading}
                data={account.permissions}
                emptyTitle="Not shared yet!"
              >
                {account.permissions?.map(p => (
                  <div key={p.id} className="flex justify-start items-center">
                    <p className="mx-2">Users with permissions: </p>
                    <Button onClick={() => deleteAccountPermission(p)}>
                      {p.user?.username}{' '}
                      <span className="mx-2 text-xs italic">
                        Click to revoke permission
                      </span>
                    </Button>
                    <p className="mx-2">Role: </p>
                    <Button onClick={() => onChangeRole(p, p.role)}>
                      {p.role}{' '}
                      <span className="mx-2 text-xs italic">
                        Click to change it
                      </span>
                    </Button>
                  </div>
                ))}
              </DataWrapper>
              {activeAccount === account ? (
                <Stack>
                  <Input
                    label="Search profiles to share your account with"
                    name="Search"
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
                        <Button
                          key={p.id}
                          onClick={() =>
                            createAccountPermission(p, activeAccount)
                          }
                        >
                          {p.username}
                        </Button>
                      ))}
                    </DataWrapper>
                  ) : null}
                </Stack>
              ) : null}
            </div>
          ))}
        </DataWrapper>
      </Stack>
      <Stack>
        {createAccountError ? (
          <ErrorMessage error={createAccountError} />
        ) : null}
        <form onSubmit={onSubmit}>
          <Input
            label="Create account"
            name="accountName"
            placeholder="account name"
            disabled={createAccountLoading}
          />
          <Button type="submit" loading={createAccountLoading}>
            Create Account
          </Button>
        </form>
      </Stack>
    </Layout>
  );
};

export default Home;
