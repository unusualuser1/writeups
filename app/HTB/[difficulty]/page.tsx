import React from "react";
const gitToken : string = process.env.TOKEN as string;
import { fetchRepoFiles } from "@/components/fetchFunc";
import { json } from "stream/consumers";
import Box from "@/components/Box";
import Link from "next/link";

export default async function Difficulty({params} : any){
    const {difficulty} = params;
    let response = await fetchRepoFiles('Wanasgheo','Writeups', gitToken, `/HackTheBox/${difficulty}?ref=main`);
    return (
      <div className=" w-[full] h-[400px] min-w-[300px] bg-slate-500 translate-y-28 py-8 px-8 rounded-lg m-4">
          
          {response?.map((resp : File) => {
            return(
              <Link href={`/HTB/${difficulty}/${resp.name}`}>

                <div className="inline-flex w-[25vw] h-1/4 m-2
                bg-white 
                rounded-lg 
                min-w-[200px]"> 
                    <div className=" object-contain aspect-[3/2] w-full">
                      <img className=" rounded-l-lg h-full" src="../../HTB_logo.png"  alt="" />
                    </div>
                    
                    <div className="flex w-full justify-center items-center "> 
                      <center><h2 className="text-black align-middle">{resp.name}</h2></center>
                    </div>
                </div>
              </Link> 
            )
          })}

      </div>
  );
    
}