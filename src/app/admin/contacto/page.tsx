'use client'
import { useAuthStore } from "@/config/authStoreProvider";
import { getContacts } from "@/config/crude";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";



export default function Contacto() {
    const [contacts, setContacts] = useState<ContactDataWithId[]>([]);
 const router = useRouter();
 const user = useAuthStore((state) => state.user);
useEffect(() => {
    if (!user) {
        router.push("/admin");
    }
    async function getContactsss() {
        const data: ContactDataWithId[] = await getContacts();
        setContacts(data);
    }
    getContactsss();
    console.log(contacts);
}
, [])
    return (
        <div>
            Hola Contacto
        </div>
     );
}