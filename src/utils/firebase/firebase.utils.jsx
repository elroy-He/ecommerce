import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBDE8GPsA1EV0UQkcLzZSR2ACqDjZ8BxD4",
  authDomain: "ecom-db-60293.firebaseapp.com",
  projectId: "ecom-db-60293",
  storageBucket: "ecom-db-60293.appspot.com",
  messagingSenderId: "130737005248",
  appId: "1:130737005248:web:45119c89285b5246f10325",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, provider);
};

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  // takes 3 arguments, db -- colletion -- unique id
  // This ref will be created even if the collection was never created in the db
  const userDocRef = doc(db, "users", userAuth.uid);

  // snapshot is used to check the data in the document
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    // creates user if userDoc does not exist
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("There's an error creating user", error.message);
    }
  }
  return userDocRef;
};
