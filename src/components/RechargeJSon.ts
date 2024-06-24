import { getPosts } from "@/config/crude"
import { toast } from "react-toastify";
import fs from 'fs-extra';

//need to edit a data.json 
export const RechargeJSon = async () => {
    try {
        const res = await getPosts();
        if (res.length === 0) {
            console.log("No hay datos");
            return;
        }
        fs .writeFileSync('data.json', JSON.stringify(res));
        toast.success("Datos Recargados");
    }
    catch (e) {
        console.log(e);
    }
}
