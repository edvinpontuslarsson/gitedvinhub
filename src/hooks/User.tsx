import firebase from 'firebase/app';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

export const UserState = () =>
  useAuthState(firebase.auth());
