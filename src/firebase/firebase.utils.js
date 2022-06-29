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
    // console.log(user);
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      // console.log("User exists", docSnap.data());
      return;
    } else {
      await setDoc(doc(db, "users", user.uid), user);
    }
  }
  return;
};


export const deleteLoggedInUser = user =>{
  // 1. check the user is on the database.
  // 2. if found then delete user from the database
  // 3. Sign out from the system
  return;
}

export const updateUserInfo = (user, info) => {
  // 1. check the user is on the database
  // 2. if found then go to the next line
  // 3. check the last date and time of last update
  // 4. if it was before atleast last week then return
  // 5. if not then go to next line
  // 6. update user with info object and also update date and time of this update
  // 
  return;
}

export const createReview = () => {
return;
}