import { ApolloError, useMutation, useQuery } from '@apollo/client';
import { Account, User } from '@prisma/client';
import createAccountGql from 'gql/createAccount.gql';
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
  createAccountError: ApolloError
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

  return { createAccount, createAccountLoading, createAccountError };
};
