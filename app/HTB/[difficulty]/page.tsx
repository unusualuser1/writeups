'use client';

import { useState, useEffect} from "react";
const gitToken : string = process.env.TOKEN as string;
import { fetchRepoFiles } from "@/components/fetchFunc";
import { json } from "stream/consumers";
import BoxPreview from "@/components/BoxPreview";
import Link from "next/link";
import { fetchBoxes } from "@/functions/fetchBoxes";
import { GitHubData } from "@/interfaces/GitHubData";

export default async function Difficulty({params} : any){
    const {difficulty} = params;
  const boxes = await fetchBoxes(difficulty);
    return (
      <div className=" w-[full] h-[400px] min-w-[300px] bg-slate-500 translate-y-28 py-8 px-8 rounded-lg m-4">
          {boxes && boxes?.map((box) => (
            boxes && <BoxPreview key={box.path} box={box} difficulty={difficulty}/>
          ))}
      </div>
  );
    
}