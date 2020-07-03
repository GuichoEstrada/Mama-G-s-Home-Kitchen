import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDy6XDyFBEZVRjB90GHau1AyGe6dUWzJAM",
  authDomain: "mama-g-db.firebaseapp.com",
  databaseURL: "https://mama-g-db.firebaseio.com",
  projectId: "mama-g-db",
  storageBucket: "mama-g-db.appspot.com",
  messagingSenderId: "708201919839",
  appId: "1:708201919839:web:110d225bc3018eb67072ea",
  measurementId: "G-YTTCJ13RS3"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  
  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
        console.log('Error creating user', error.user);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);



const facebookProvider = new firebase.auth.FacebookAuthProvider();
facebookProvider.setCustomParameters({
  prompt: 'select_account'
});
export const signInWithFacebook = () => auth.signInWithPopup(facebookProvider);


export default firebase;