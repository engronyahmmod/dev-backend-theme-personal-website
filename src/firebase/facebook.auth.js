import { FacebookAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

export const loginWithFacebook = () => {
  const provider = new FacebookAuthProvider();
  const auth = getAuth();

  signInWithPopup(auth, provider)
    .then((result) => {
      // const user = result.user;
      // const credential = FacebookAuthProvider.credentialFromResult(result);
      // const accessToken = credential.accessToken;
      // console.log(user, credential, accessToken);
    })
    .catch((err) => {
      // const error = err.code;
      // const errorMessage = err.message;
      // const email = err.customData.email;
      // const credential = FacebookAuthProvider.credentialFromError(err);
      // console.log(error, errorMessage, email, credential);
    });
};
