import Link from "next/link"
import Image from "next/image"

type BoxItemProps = {
  name : string,
  difficulty : string,
  decodedContent : string
}

export const Box = ({name, difficulty, decodedContent}:BoxItemProps) =>{
  const parsedData = JSON.parse(decodedContent);
  
  return(

    <div className="flex xm:flex-wrap
                    md:w-[300px] 
                    xm:w-[250px] xm:h-[250px]
                    xsm:w-[100px] xsm:h-[100px]
                    m-2
                    bg-[#3c3c3c] 
                    justify-center rounded-[50px]
                    transform hover:scale-[0.95]
                    transition-all"
    >
      <Link href={`/HTB/${difficulty}/${name}`} className="w-[100px] h-[100px] relative">
        <div className=" w-full h-full  ">
          <Image className="rounded-[50px]" layout='fill' objectFit='contain' objectPosition="center" loading='lazy' src={parsedData.link}  alt=" "/>
        </div>
      </Link> 

      
      <div className="flex md:w-[200px] md:h-[30px] xmd:h-[100px] xm:w-[150px] xm:h-[30px] xsm:w-0 justify-center items-center "> 
        <center><h2 className="text-white xsm:invisible md:visible  ">{name}</h2></center>
      </div>

      <div className="xsm:invisible xm:visible xsm:w-0 md:px-[50px] md:py-[20px] xm:px-[20px] xm:py-[5px] xm:w-full md:h-[150px] xm:h-[120px] flex items-center justify-center  text-white">
        asdsads
      </div>
    </div>
  )
}