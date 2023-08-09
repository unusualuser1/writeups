import Link from "next/link";
import { getDirectoryData } from "@/lib/apiUtils";
import { octokit } from "@/lib/octo";

export default async function BoxPreview ( {box, difficulty} : any){
  //box.path+`/${box.name}.txt`
  const { data } = await octokit.rest.repos.getContent({
    owner: 'Wanasgheo',
    repo: 'Writeups',
    path: box.path+`/${box.name}.txt`,
  }) 
  if(Array.isArray(data)) throw new Error('Failed to fetch data');
  if(data.type !== 'file') throw new Error('Failed to fetch data');
  const decodedContent = atob(data.content)
  console.log(decodedContent)

  
  return(
    

    <div className="flex 
                    m:w-[350px] m:h-[100px]
                    xsm:w-[100px] xsm:h-[100px]
                    m-2
                    bg-white 
                    justify-center rounded-[50px]"
    >
      <Link href={`/HTB/${difficulty}/${box.name}`}>
        <div className=" object-contain w-[100px]  ">
          <img className=" w-full h-[4/3]" src={decodedContent}  alt="writeupImage"></img>
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