import React from 'react';
import { UserState } from '../../hooks/User';
import Loading from './Loading';

const Start = () => {
  const [user, loading] = UserState();

  return (
    <>
      {user ? (
        <p>Display info</p>
      ) : loading ? (
        <Loading />
      ) : (
        <p>Sign in page</p>
      )}
    </>
  );
};

export default Start;
