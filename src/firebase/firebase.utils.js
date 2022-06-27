import { collection, addDoc } from "firebase/firestore";
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
