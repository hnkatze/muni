import { getDownloadURL, listAll, ref } from "firebase/storage";
import { Data, firebaseStorage } from "./firebase";
import {
  addDoc,
  collection,
  DocumentData,
  getDocs,
  QueryDocumentSnapshot,
} from "firebase/firestore";

//create a get image function with return a promise IHero[]
export const getUrl = async (folder: string): Promise<IHero[]> => {
  const storageRef = ref(firebaseStorage, folder);
  const list = await listAll(storageRef);
  const urls = list.items.map(async (item) => {
    const url = await getDownloadURL(item);
    return { name: item.name, url };
  });
  return Promise.all(urls);
};


//create a function to create a new ContactData in the database
export const createContact = async (contact: ContactData): Promise<void> => {
try {
    const docRef = await addDoc(collection(Data, "contacts"), contact);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
};

//create a function to get all the ContactData in the database inluding the id
export const getContacts = async (): Promise<ContactDataWithId[]> => {
  try {
    const querySnapshot = await getDocs(collection(Data, "contacts"));
    const contacts: ContactDataWithId[] = [];
    querySnapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
      const data = doc.data() as ContactData; 
      contacts.push({ id: doc.id, ...data });
    });
    return contacts;
  } catch (error) {
    console.error("Error getting documents: ", error);
    throw error;
  }
};
 