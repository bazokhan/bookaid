import React from 'react';
import { useUser } from 'hooks/useUser';
import Layout from 'components/Layout';

const Profile: React.FC = () => {
  const user = useUser({ redirectTo: '/login' });

  return (
    <Layout>
      <h1 className="w-full text-center font-extrabold my-8">My Acoount</h1>
      {user ? (
        <div className="w-96 mx-auto grid grid-cols-2 items-center p-8 rounded-default border border-main-5">
          <p className="text-main-4">Username: </p>
          <p className="font-bold py-2 px-4">{user.username}</p>
          <p className="text-main-4">Email: </p>
          <p className="font-bold py-2 px-4">{user.email}</p>
        </div>
      ) : null}
    </Layout>
  );
};

export default Profile;
