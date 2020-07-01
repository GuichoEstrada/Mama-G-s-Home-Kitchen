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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);



const provider2 = new firebase.auth.FacebookAuthProvider();
provider2.setCustomParameters({
  prompt: 'select_account'
});
export const signInWithFacebook = () => auth.signInWithPopup(provider2);


export default firebase;