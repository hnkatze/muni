import { toast } from "react-toastify";
import { createContact, getContactsPrisma } from "./crude";

export async function  handleSubtmitContactForm(data: ContactData) {
    try {
    
        await createContact(data).then(() => {
            toast.success("Listo, Nos Pondremos En Contacto Contigo Pronto.");
        }
        );    
    } catch (error) {
        toast.error("Parece que hubo un error, por favor intenta de nuevo más tarde.");
    }
}

export async function getContacts (): Promise<ContactDataWithId[]> {
    try {
       const contacts = await getContactsPrisma();
       return contacts;
    } catch (error) {
        console.error("Error getting documents: ", error);
        throw error;
    }
}
