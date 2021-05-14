import { ApolloError, useMutation, useQuery } from '@apollo/client';
import { Account, User, Permission } from '@prisma/client';
import createAccountGql from 'gql/createAccount.gql';
import createAccountPermissionGql from 'gql/createAccountPermission.gql';
import deleteAccountPermissionGql from 'gql/deleteAccountPermission.gql';
import myAccountsGql from 'gql/myAccounts.gql';
import { useCallback, useMemo } from 'react';

type MyAccountsQueryHookReturn = {
  myAccounts: Account[],
  loading: boolean,
  error: ApolloError
};

export const useMyAccounts = ({
  user
}: {
  user: User
}): MyAccountsQueryHookReturn => {
  const { data, loading, error } = useQuery(myAccountsGql, {
    variables: { userID: user?.id },
    skip: !user?.id
  });

  const myAccounts = useMemo(() => data?.myAccounts, [data?.myAccounts]);

  return { myAccounts, loading, error };
};

type AccountMutationHookReturn = {
  createAccount: (name: string) => Promise<void>,
  createAccountLoading: boolean,
  createAccountError: ApolloError,
  createAccountPermission: (profile: User, account: Account) => Promise<void>,
  createPermissionLoading: boolean,
  createPermissionError: ApolloError,
  deleteAccountPermission: (permission: Permission) => Promise<void>,
  deletePermissionLoading: boolean,
  deletePermissionError: ApolloError
};

export const useAccountMutations = ({
  user
}: {
  user: User
}): AccountMutationHookReturn => {
  const [
    createAccountMutation,
    { loading: createAccountLoading, error: createAccountError }
  ] = useMutation(createAccountGql, {
    refetchQueries: [{ query: myAccountsGql, variables: { userID: user?.id } }]
  });

  const createAccount = useCallback(
    async name => {
      try {
        await createAccountMutation({ variables: { userID: user?.id, name } });
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    },
    [createAccountMutation, user?.id]
  );

  const [
    createAccountPermissionMutation,
    { loading: createPermissionLoading, error: createPermissionError }
  ] = useMutation(createAccountPermissionGql, {
    refetchQueries: [{ query: myAccountsGql, variables: { userID: user?.id } }]
  });

  const createAccountPermission = useCallback(
    async (profile, account, role = 'VIEWER') => {
      try {
        await createAccountPermissionMutation({
          variables: { userID: profile?.id, accountID: account?.id, role }
        });
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    },
    [createAccountPermissionMutation]
  );

  const [
    deleteAccountPermissionMutation,
    { loading: deletePermissionLoading, error: deletePermissionError }
  ] = useMutation(deleteAccountPermissionGql, {
    refetchQueries: [{ query: myAccountsGql, variables: { userID: user?.id } }]
  });

  const deleteAccountPermission = useCallback(
    async permission => {
      try {
        await deleteAccountPermissionMutation({
          variables: { permissionID: permission?.id }
        });
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    },
    [deleteAccountPermissionMutation]
  );

  return {
    createAccount,
    createAccountLoading,
    createAccountError,
    createAccountPermission,
    createPermissionLoading,
    createPermissionError,
    deleteAccountPermission,
    deletePermissionLoading,
    deletePermissionError
  };
};
