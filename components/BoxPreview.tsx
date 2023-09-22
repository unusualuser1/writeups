import Link from "next/link";
import { getDirFile, getDirectoryData } from "@/lib/apiUtils";
import { octokit } from "@/lib/octo";
import Image from "next/legacy/image";

export default async function BoxPreview ( {box, difficulty} : any){
  //box.path+`/${box.name}.txt`
  /*
  const { data } = await octokit.rest.repos.getContent({
    owner: 'Wanasgheo',
    repo: 'Writeups',
    path: box.path+`/${box.name}.txt`,
  }) 
  if(Array.isArray(data)) throw new Error('Failed to fetch data');
  if(data.type !== 'file') throw new Error('Failed to fetch data');
  const decodedContent = atob(data.content)
  
  */
 let decodedContent = "";
  try{
	  decodedContent = await getDirFile(box.path+`/${box.name}.txt`)
	}catch{
    //decodedContent = "https://yt3.googleusercontent.com/ytc/AOPolaR5R7bueWAUHc7ctRNCy5r63xddkeL17RDHOwxAlw=s900-c-k-c0x00ffffff-no-rj";
  }
  return(
    

    <div className="flex 
                    m:w-[400px] m:h-[100px]
                    xsm:w-[100px] xsm:h-[100px]
                    m-2
                    bg-white 
                    justify-center rounded-[50px]"
    >
      <Link href={`/HTB/${difficulty}/${box.name}`}>
        <div className=" relative w-[100px] h-full  ">
          <Image className="rounded-[50px]" layout='fill' objectFit='contain' objectPosition="center" loading='lazy' src={decodedContent}  alt="writeupImage"/>
        </div>
      </Link> 

      
      <div className="flex m:w-full xsm:w-0 justify-center items-center "> 
        <center><h2 className="text-black xsm:invisible m:visible ">{box.name}</h2></center>
      </div>
    </div>
  );
}

/**
 * 
 */
