import Link from "next/link";
import { GitHubData } from "@/interfaces/GitHubData";

export default function DiffPreview ( {difficulty} : any){
    const { name } = difficulty;
     let x ='';
 
     if (name ==='Easy')
         x = '#4cde2f';
     else if(name === 'Medium')
         x = '#ffa500';
     else if(name == 'Hard')
         x = '#ff0000';
     else
         x = '#8a8880';
     return(
         <Link href={`/HTB/${name}`} className="m-1">
             <div className=" w-[250px] h-[300px] justify-center items-center rounded-xl bg-slate-300 m-2">
                 <img className="w-full h-3/4 rounded-lg border-[5px] bg-[../HTB_logo.png]" style={{borderColor:x}} src="../HTB_logo.png"></img>
                 <h1 className=" pt-6 pb-6 text-black text-center align-text-bottom">{name}</h1>
             </div>
         </Link>
         
         
         
     )
}
