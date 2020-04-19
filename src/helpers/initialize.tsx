import firebase from 'firebase/app';
import dotenv from 'dotenv';

/**
 * @function initialize Firebase app
 */
export const initialize = (): void => {
  dotenv.config();

  firebase.initializeApp({
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DATABASEURL,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId:
      process.env.REACT_APP_MESSAGINGSENDERID,
  });
};
