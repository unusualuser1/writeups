import Link from "next/link"
import Image from "next/image"

type BoxItemProps = {
  name : string,
  difficulty : string,
  decodedContent : string
}

export default function Box({name, difficulty, decodedContent}:BoxItemProps){
  
  
  return(

    <div className="flex 
                    m:w-[400px] m:h-[100px]
                    xsm:w-[100px] xsm:h-[100px]
                    m-2
                    bg-white 
                    justify-center rounded-[50px]"
    >
      <Link href={`/HTB/${difficulty}/${name}`}>
        <div className=" relative w-[100px] h-full  ">
        <img className="rounded-[50px]" loading='lazy' src={decodedContent}  alt=" "/>
        </div>
      </Link> 

      
      <div className="flex m:w-full xsm:w-0 justify-center items-center "> 
        <center><h2 className="text-black xsm:invisible m:visible ">{name}</h2></center>
      </div>
    </div>
  )
}