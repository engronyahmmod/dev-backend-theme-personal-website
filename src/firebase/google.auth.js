import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

export const loginWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  //   provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
  const auth = getAuth();
  auth.languageCode = "it";

  signInWithPopup(auth, provider)
    .then((result) => {
      //   const credential = GoogleAuthProvider.credentialFromResult(result);
      //   const token = credential.accessToken;
      //   const user = result.user;
      //   console.log(credential, token, user);
    })
    .catch((error) => {
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      //   // The email of the user's account used.
      //   const email = error.customData.email;
      //   // The AuthCredential type that was used.
      //   const credential = GoogleAuthProvider.credentialFromError(error);
      //   console.log(errorCode, errorMessage, email, credential);
    });
};
