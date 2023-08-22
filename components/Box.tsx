import Link from "next/link"
import Image from "next/image"

type BoxItemProps = {
  name : string,
  path : string,
  decodedContent : string
}

export const Box = ({name, path, decodedContent}:BoxItemProps) =>{
  const parsedData = JSON.parse(decodedContent);
  return(

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
      <Link href={path} className="w-[100px] h-[100px] relative">
        <div className=" w-full h-full m-7">
          <Image className="rounded-[50px]" layout='fill' objectFit='contain' objectPosition="center" loading='lazy' src={parsedData.link}  alt=" "/>
        </div>
      </Link> 

      
      <div className="flex md:w-[200px] md:h-[30px] xmd:h-[100px] xm:w-[150px] xm:h-[30px] xsm:w-0 justify-center items-center "> 
        <center><h2 className="text-white xsm:invisible md:visible  ">{name}</h2></center>
      </div>

      <div className="xsm:invisible xm:visible xsm:w-0 md:px-[50px] md:py-[20px] xm:px-[20px] xm:py-[5px] xm:w-full md:h-[100px] md:w-[100px] xm:h-[120px] flex items-center justify-center  text-white">
      <ul className=" writeup">
          <li>{parsedData.os}</li>
          <li>{parsedData.difficulty}</li>
          <li>{parsedData.release}</li>
          <li>{parsedData.state}</li>
        </ul>
      </div>
    </div>
  )
}