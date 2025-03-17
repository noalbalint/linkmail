import { doc, getDoc, addDoc, collection } from "firebase/firestore";
import { db } from '../../firebase.ts'

async function pushEmail(value: string): Promise<string> {
  try {
    const docRef = await addDoc(collection(db, "emails"), {
      mailto: value,
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding document:", error);
    throw error;
  }
}

async function getEmail(mailCode: string): Promise<string> {
  try {
    const docRef = await doc(db, "emails", `${mailCode}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data()?.mailto;
    } else {
      throw new Error('Email not found');
    }
  } catch (error) {
    console.error("Error getting document:", error);
    throw error;
  }
}

export {
  pushEmail,
  getEmail,
}