import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  addDoc,
  where,
} from "firebase/firestore";
import app from "./firebase";

const db = getFirestore(app);

export async function retrieveProducts(collectionName: string) {
  const snapshot = await getDocs(collection(db, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}

export async function retrieveDataByID(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(db, collectionName, id));
  const data = snapshot.data();
  return data;
}

// === TAMBAHAN BARU: FUNGSI SIGN UP ===
export async function signUp(
  userData: {
    email: string;
    fullname: string;
    password: string; // (Note: Di dunia nyata password harus di-hash, tapi kita ikuti modul dulu)
  },
  callback: Function
) {
  // 1. Mencari apakah ada user di database yang emailnya sama dengan yang diinput
  const q = query(
    collection(db, "users"),
    where("email", "==", userData.email)
  );
  
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  // console.log("Query result:", data);

  // 2. Logika Pengecekan
  if (data.length === 0) {
    // Jika length === 0 (user belum ada) -> boleh daftar
    await addDoc(collection(db, "users"), userData);
    callback({
      status: true,
      message: "Register success",
    });
  } else {
    // Jika data ada isinya -> email sudah terdaftar
    callback({
      status: false,
      message: "User already exists",
    });
  }
}