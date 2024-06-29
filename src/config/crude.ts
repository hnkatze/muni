import { getDownloadURL, listAll, ref } from "firebase/storage";
import { Data, firebaseStorage } from "./firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
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
    await addDoc(collection(Data, "contacts"), contact);
  } catch (e) {
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
    throw error;
  }
};
// create a function to delete a ContactData in the database
export const deleteContact = async (id: string): Promise<void> => {
  try {
    await deleteDoc(doc(Data, "contacts", id));
  } catch (error) {
    throw error;
  }
};
//create a function to create a new IPost in the database
export const createPost = async (post: Proyecto): Promise<void> => {
  try {
    await addDoc(collection(Data, "posts"), post);
  } catch (e) {
    throw e;
  }
};
//create a function to get all the IPost in the database inluding the id
export const getPosts = async (): Promise<IPostId[]> => {
  try {
    const querySnapshot = await getDocs(collection(Data, "posts"));
    const posts: IPostId[] = [];
    querySnapshot.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
      const data = doc.data() as Proyecto;
      posts.push({ id: doc.id, ...data });
    });
    return posts;
  } catch (error) {
    throw error;
  }
};
// create a function to delete a IPost in the database
export const deletePost = async (id: string): Promise<void> => {
  try {
    await deleteDoc(doc(Data, "posts", id));
  } catch (error) {
    throw error;
  }
};
