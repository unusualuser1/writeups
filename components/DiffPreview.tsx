import Link from "next/link";
import { components } from "@octokit/openapi-types"
import Image from "next/legacy/image";

export default function DiffPreview ( {difficulty} : any){
    {/*w-full h-3/4  rounded-lg border-[5px] bg-[/../HTB_logo.png*/}
     let x ='';
 
     if (difficulty ==='Easy')
         x = '#4cde2f';
     else if(difficulty === 'Medium')
         x = '#ffa500';
     else if(difficulty == 'Hard')
         x = '#ff0000';
     else
         x = '#8a8880';
     return(
         
            <div className="relative flex flex-wrap w-[250px] h-[300px] rounded-xl bg-slate-300 m-2">
                <div className=" w-full relative h-[80%]  rounded-lg border-[5px] bg-[/HTB_logo.png]" style={{borderColor:x}}>
                    <Link href={`/${'HTB'}/${difficulty}`}>
                        <Image layout='fill' objectFit='cover' objectPosition="center" loading='lazy' 
                              src="/HTB_logo.png" alt="Image"/>
                    </Link>
                </div>
                <div className="w-full flex justify-center"><h1 className=" text-black text-center align-text-bottom">{difficulty}</h1></div>
            </div>
         
         
         
     )
}
