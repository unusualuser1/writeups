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
                <div className="">
                    <Link href={`/${'HTB'}/${difficulty}`}>
                        <Image className=" rounded-lg border-[5px] bg-[/HTB_logo.png]" 
                            width={250} height={250} style={{borderColor:x}} src="/HTB_logo.png" alt="Image" loading="lazy"/>
                    </Link>
                </div>
                <div className="w-full flex justify-center"><h1 className=" text-black text-center align-text-bottom">{difficulty}</h1></div>
            </div>
         
         
         
     )
}
