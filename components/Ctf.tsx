import Link from "next/link";

type Props = {
    name : string,
    path : string,
    decodedContent : string
  }

//   <div className="flex md:w-[200px] md:h-[30px] xmd:h-[100px] xm:w-[150px] xm:h-[30px] xsm:w-0 justify-center items-center "> 
//                         <center><h2 className="text-white xsm:invisible md:visible  ">{name.toLowerCase()}</h2></center>
//                     </div>

//                     <div className="xsm:invisible xm:visible xsm:w-0 md:px-[50px] md:py-[20px] xm:px-[20px] xm:py-[5px] xm:w-full md:h-[100px] md:w-[100px] xm:h-[120px] flex items-center justify-center  text-white">
//                     <p>{parsedData.description}</p>
//                     </div>

export const Ctf = ({name,path,decodedContent}:Props) =>{
    const parsedData = JSON.parse(decodedContent);
    return(
        <>
                <Link   href={path} 
                        className=" xm:w-full xm:h-[150px] xm:rounded-[30px]
                                    xsm:w-[100px] xsm:h-[100px] xsm:rounded-[50px]
                                    bg-[#3c3c3c] m-2
                                    transform hover:scale-[0.95]
                                    transition-all items-center xm:px-3
                                    inline-flex justify-center xm:space-x-4"
                >
                    
                    <div className="xm:w-[30%] h-full flex text-center items-center
                                    xsm:w-full xsm:justify-center"
                    >
                        {name.toLowerCase()}
                    </div>

                    <div className="xm:w-[50%] xm:visible h-full flex text-center items-center
                                    xsm:w-0 xsm:invisible "
                    >
                    {parsedData.description}
                    </div>
                    
                </Link>

        </>
    )
}