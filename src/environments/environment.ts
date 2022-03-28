import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: 'AIzaSyCKPW5H0b04eP6yhJquIocGxpduGl0o8OE',
    authDomain: 'techtrainingionic.firebaseapp.com',
    projectId: 'techtrainingionic',
    storageBucket: 'techtrainingionic.appspot.com',
    messagingSenderId: '418519744645',
    appId: '1:418519744645:web:681b7f27680ce8f53ba9ec'
  }
};

const app = initializeApp(environment.firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore();
