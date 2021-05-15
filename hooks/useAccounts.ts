import { ApolloError, useMutation, useQuery } from '@apollo/client';
import { Account, User, Permission } from '@prisma/client';
import { AccountData } from 'common/types';
import accountByIDGql from 'gql/accountByID.gql';
import createAccountGql from 'gql/createAccount.gql';
import createAccountPermissionGql from 'gql/createAccountPermission.gql';
import deleteAccountPermissionGql from 'gql/deleteAccountPermission.gql';
import myAccountsGql from 'gql/myAccounts.gql';
import updateAccountPermissionGql from 'gql/updateAccountPermission.gql';
import { useCallback, useMemo } from 'react';

type AccountByIDQueryHookReturn = {
  account: AccountData[],
  loading: boolean,
  error: ApolloError
};

export const useAccountByID = ({
  accountID
}: {
  accountID: number
}): AccountByIDQueryHookReturn => {
  const { data, loading, error } = useQuery(accountByIDGql, {
    variables: { accountID },
    skip: !accountID
  });

  const account = useMemo(() => data?.account, [data?.account]);

  return { account, loading, error };
};

type MyAccountsQueryHookReturn = {
  myAccounts: AccountData[],
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
  updateAccountPermission: (
    permission: Permission,
    role: string
  ) => Promise<void>,
  updatePermissionLoading: boolean,
  updatePermissionError: ApolloError,
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
    updateAccountPermissionMutation,
    { loading: updatePermissionLoading, error: updatePermissionError }
  ] = useMutation(updateAccountPermissionGql, {
    refetchQueries: [{ query: myAccountsGql, variables: { userID: user?.id } }]
  });

  const updateAccountPermission = useCallback(
    async (permission, role) => {
      try {
        await updateAccountPermissionMutation({
          variables: { permissionID: permission?.id, role }
        });
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    },
    [updateAccountPermissionMutation]
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
    updateAccountPermission,
    updatePermissionLoading,
    updatePermissionError,
    deleteAccountPermission,
    deletePermissionLoading,
    deletePermissionError
  };
};
