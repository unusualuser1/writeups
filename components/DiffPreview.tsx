import Link from "next/link";
import { components } from "@octokit/openapi-types"

export default function DiffPreview ( {difficulty} : any){
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
         <Link href={`/${'HTB'}/${difficulty}`} className="m-1">
            <div className=" justify-center items-center rounded-xl bg-slate-300 m-2">
                <img className="w-full h-3/4 rounded-lg border-[5px] bg-[../HTB_logo.png]" style={{borderColor:x}} src="../HTB_logo.png"></img>
                <h1 className=" pt-6 pb-6 text-black text-center align-text-bottom">{difficulty}</h1>
            </div>
         </Link>
         
         
         
     )
}
