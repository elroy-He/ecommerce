import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import { Fragment } from "react";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    createUserDocumentFromAuth(response.user);
    console.log(response);
    console.log("working");
  };

  return (
    <Fragment>
      <h1> Sign In Page </h1>
      <button onClick={logGoogleUser}>
        Sign In With Google Popup
      </button>
    </Fragment>
  );
};

export default SignIn;
