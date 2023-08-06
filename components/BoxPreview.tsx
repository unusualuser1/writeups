import Link from "next/link";
import { getDirectoryData } from "@/lib/apiUtils";
import { octokit } from "@/lib/octo";

export default async function BoxPreview ( {box, difficulty} : any){
  //box.path+`/${box.name}.txt`
  const { data } =  await  octokit.rest.repos.getContent({
    owner: 'Wanasgheo',
    repo: 'Writeups',
    path: box.path+`/${box.name}.txt`,
  }) 
  if(Array.isArray(data)) throw new Error('Failed to fetch data');
  if(data.type !== 'file') throw new Error('Failed to fetch data');
  const decodedContent = atob(data.content)
  console.log(decodedContent)

  
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
                <img className=" rounded-l-[150px] h-full" src={decodedContent}  alt="" />
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