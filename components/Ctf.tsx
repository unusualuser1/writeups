import Link from "next/link";

type Props = {
    name : string,
    path : string,
    decodedContent : string
  }


export const Ctf = ({name,path,decodedContent}:Props) =>{
    const parsedData = JSON.parse(decodedContent);
    return(
        <>
        <Link href={path}>
            <div className="flex xm:flex-wrap
        md:w-[650px] 
        xm:w-[250px] xm:h-[150px]
        xsm:w-[100px] xsm:h-[100px]
        m-2
        bg-[#3c3c3c] 
        justify-left rounded-[50px]
        transform hover:scale-[0.95]
        transition-all"
>
            <div className="flex md:w-[200px] md:h-[30px] xmd:h-[100px] xm:w-[150px] xm:h-[30px] xsm:w-0 justify-center items-center "> 
                <center><h2 className="text-white xsm:invisible md:visible  ">{name.toLowerCase()}</h2></center>
            </div>

            <div className="xsm:invisible xm:visible xsm:w-0 md:px-[50px] md:py-[20px] xm:px-[20px] xm:py-[5px] xm:w-full md:h-[100px] md:w-[100px] xm:h-[120px] flex items-center justify-center  text-white">
            <p>{parsedData.description}</p>
            </div>
            </div>
        </Link>
        </>
    )
}