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


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = async () => {
    try {
        await auth.signInWithPopup(provider);
        alert('signed in succesfully');
    } catch (error) {
        alert(error.message)
    }
}

export const createUserProfile = (userAuth, additionData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = userRef.get();

    if (!snapShot.exists) {
        const { email, displayName } = userAuth;
        const createdAt = new Date();

        try {

            userRef.set({
                email,
                displayName,
                createdAt,
                username: additionData
            });
        } catch (error) {
            console.log(error)
        }

    }

    return userRef;

}
export const createContactProfile = async (state) => {

    const complainRef = firestore.collection('complaints');
    const snapShot = complainRef.get();
    console.log(snapShot);
    try {
        const { name, phone, details, email, subject } = state;
        const createdAt = new Date();
        complainRef.add({
            name,
            phone,
            email,
            subject,
            details,
            createdAt
        })
    } catch (error) {
        console.log(error)
    }
};



export default firebase;