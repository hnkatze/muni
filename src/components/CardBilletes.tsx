import Image from "next/image";



export default function CardBilletes({srcs, alt} :{srcs:string, alt:string} ) {

    return (

        <div className=" ">
            <Image alt={alt} width={350} height={250} src={srcs} />
        </div>
    );
}