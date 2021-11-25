import React from 'react';
import { useUser } from 'hooks/useUser';
import Layout from 'components/Layout';
import Title from 'components/Typography/Title';
import Stack from 'components/Layout/Stack';

const Profile: React.FC = () => {
  const user = useUser({ redirectTo: '/login' });

  return (
    <Layout>
      <Title>My Acoount</Title>
      {user ? (
        <Stack>
          <p className="text-main-4">Username: </p>
          <p className="font-bold py-2 px-4">{user.username}</p>
          <p className="text-main-4">Email: </p>
          <p className="font-bold py-2 px-4">{user.email}</p>
        </Stack>
      ) : null}
    </Layout>
  );
};

export default Profile;
