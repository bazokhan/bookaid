import { ApolloError, useLazyQuery, useQuery } from '@apollo/client';
import { User } from '@prisma/client';
import profileByUsernameGql from 'gql/profileByUsername.gql';
import profilesByUsernameGql from 'gql/profilesByUsername.gql';
import { useCallback, useMemo } from 'react';

type ProfileQueryHookReturn = {
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

type ProfilesQueryHookReturn = {
  getProfileByUsername: (username: string) => Promise<void>,
  profiles: User[],
  loading: boolean,
  error: ApolloError
};

export const useProfileByUsernameLazy = (): ProfilesQueryHookReturn => {
  const [getProfileByUsernameQuery, { data, loading, error }] = useLazyQuery(
    profilesByUsernameGql
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

  const profiles = useMemo(() => data?.users, [data?.users]);

  return { getProfileByUsername, profiles, loading, error };
};
