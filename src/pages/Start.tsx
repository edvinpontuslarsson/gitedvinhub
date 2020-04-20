import React from 'react';
import { UserState } from '../hooks/User';
import Loading from './Loading';
import SignIn from './SignIn';

const Start = () => {
  const [user, loading] = UserState();

  return (
    <>
      {user ? (
        <p>Display info</p>
      ) : loading ? (
        <Loading />
      ) : (
        <SignIn />
      )}
    </>
  );
};

export default Start;
