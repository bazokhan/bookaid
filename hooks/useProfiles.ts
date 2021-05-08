import { ApolloError,  useQuery } from '@apollo/client';
import profileByUsernameGql from 'gql/profileByUsername.gql';
import {  useMemo } from 'react';

type ProfileQueryHookReturn = {
  profile: any,
  loading: boolean,
  error: ApolloError
};

export const useProfileByUsername = ({
  user,
  username
}): ProfileQueryHookReturn => {
  const { data, loading, error } = useQuery(profileByUsernameGql, {
    variables: { username },
    skip: !username
  });

  const profile = useMemo(() => data?.user, [data?.user]);

 
  return { profile, loading, error };
};
