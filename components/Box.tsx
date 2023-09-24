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

    <div className="xm:w-full xm:h-[150px] xm:rounded-[30px]
                    xsm:w-[100px] xsm:h-[100px] xsm:rounded-[50px]
                    bg-[#3c3c3c] m-2
                    transform hover:scale-[0.95]
                    transition-all items-center xm:px-3
                    inline-flex justify-center xm:space-x-4 group"

    >
      
      <div className=" w-[100px] h-[100px] relative">
        <Link href={path}>
          <Image className="rounded-[50px]" layout='fill' objectFit='contain' objectPosition="center" loading='lazy' src={parsedData.link}  alt="box-image"/>
        </Link>
      </div>
      <div className="xsm:w-0 xsm:space-x-0 xsm:invisible
                      xm:space-x-2 xm:flex xm:flex-wrap xm:items-center xm:py-2 xm:w-[80%] xm:h-full xm:visible xm:justify-center">
        
        <div className="flex justify-center items-center 
                        xsm:w-0 xsm:invisible
                        xm:visible xm:w-[105px] xm:h-[30%] xm:rounded-[8px] xm:border-white xm:border-2 xm:duration-1000
                      group-hover:bg-white group-hover:text-[#3c3c3c] group-hover:duration-1000"
        >
        {name}
        </div>
        
        <div className="filter
                        xsm:w-0 xsm:invisible
                        xm:visible xm:w-full xm:h-[70%] xm:flex xm:flex-wrap xm:justify-center xm:items-center "
        >
            <div className="xm:duration-1000 
                      md:group-hover:bg-[#136db6] md:group-hover:text-white md:group-hover:duration-1000">{parsedData.os}</div>
            <div className="xm:duration-1000 
                      md:group-hover:bg-[#136db6] md:group-hover:text-white md:group-hover:duration-1000">{parsedData.difficulty}</div>
            <div className="xm:duration-1000 
                      md:group-hover:bg-[#136db6] md:group-hover:text-white md:group-hover:duration-1000">{parsedData.release}</div>
            <div className="xm:duration-1000 
                      md:group-hover:bg-[#136db6] md:group-hover:text-white md:group-hover:duration-1000">{parsedData.state}</div>
        </div>
      </div>
    </div>
  )
}