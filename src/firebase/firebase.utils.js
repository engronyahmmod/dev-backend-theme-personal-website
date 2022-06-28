import { collection, addDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

export const hireMe = async (data) => {
  let error = false;
  let errorMessage = null;
  let dataSubmited = true;
  let id = null;
  try {
    const docRef = await addDoc(collection(db, "hireRequests"), data);
    dataSubmited = true;
    id = docRef.id;
  } catch (err) {
    error = true;
    errorMessage = err;
  }
  return [error, errorMessage, dataSubmited, id];
};

export const createUserWhoIsLoggedIn = async (user) => {
  if (Boolean(user)) {
    console.log(user);
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("User exists", docSnap.data());
      return;
    } else {
      await setDoc(doc(db, "users", user.uid), user);
    }
  }
  return;
};
