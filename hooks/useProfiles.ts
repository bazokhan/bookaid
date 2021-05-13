import { ApolloError, useLazyQuery, useQuery } from '@apollo/client';
import { User } from '@prisma/client';
import profileByUsernameGql from 'gql/profileByUsername.gql';
import { useCallback, useMemo } from 'react';

type ProfileQueryHookReturn = {
  getProfileByUsername?: (username: string) => Promise<void>,
  profile: User,
  loading: boolean,
  error: ApolloError
};

export const useProfileByUsername = ({
  username
}: {
  username: string
}): ProfileQueryHookReturn => {
  const { data, loading, error } = useQuery(profileByUsernameGql, {
    variables: { username },
    skip: !username
  });

  const profile = useMemo(() => data?.user, [data?.user]);

  return { profile, loading, error };
};

export const useProfileByUsernameLazy = (): ProfileQueryHookReturn => {
  const [getProfileByUsernameQuery, { data, loading, error }] = useLazyQuery(
    profileByUsernameGql
  );

  const getProfileByUsername = useCallback(
    async username => {
      try {
        await getProfileByUsernameQuery({ variables: { username } });
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    },
    [getProfileByUsernameQuery]
  );

  const profile = useMemo(() => data?.user, [data?.user]);

  return { getProfileByUsername, profile, loading, error };
};
