import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.REACT_APP_MESSENGER_ID,
    appId: process.REACT_APP_APP_ID
};
firebase.initializeApp(config);