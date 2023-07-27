import Link from "next/link";

export default function BoxPreview ( {box, difficulty} : any){
    return(
        <Link href={`/HTB/${difficulty}/${box.name}`}>

          <div className="inline-flex 
                          w-[25vw] 
                          h-1/4 
                          m-2
                          bg-white 
                          rounded-lg 
                          min-w-[300px]"
          >
              <div className=" object-contain aspect-[3/2] w-full">
                <img className=" rounded-l-lg h-full" src="../../HTB_logo.png"  alt="" />
              </div>
              
              <div className="flex w-full justify-center items-center "> 
                <center><h2 className="text-black align-middle">{box.name}</h2></center>
              </div>
          </div>
        </Link> 
      );
}

/**
 * 
 */