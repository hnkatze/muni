import { getDownloadURL, listAll, ref } from "firebase/storage";
import { firebaseStorage } from "./firebase";

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
