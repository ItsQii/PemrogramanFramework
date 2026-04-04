import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  addDoc,
} from "firebase/firestore";
import app from "./firebase";
import bcrypt from "bcrypt";

const db = getFirestore(app);

export async function retrieveProducts(collectionName: string) {
  const snapshot = await getDocs(collection(db, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}

export async function retrieveDataById(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(db, collectionName, id));
  const data = snapshot.data();

  return data;
}

export async function signIn(email: string) {
  const q = query(collection(db, "users"), where("email", "==", email));
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (data) {
    return data[0];
  } else {
    return null;
  }
}

export async function signUp(userData: any, callback: Function) {
  const q = query(
    collection(db, "users"),
    where("email", "==", userData.email)
  );

  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (data.length > 0) {
    // Kirim object error jika email sudah ada
    callback({
      status: false,
      message: "Email already exists",
    });
  } else {
    userData.password = await bcrypt.hash(userData.password, 10);
    userData.role = "member";
    
    await addDoc(collection(db, "users"), userData)
      .then(() => {
        // Kirim object success
        callback({
          status: true,
          message: "User registered successfully",
        });
      })
      .catch((error: any) => {
        // Kirim object error jika database bermasalah
        callback({
          status: false,
          message: error.message,
        });
      });
  }
}