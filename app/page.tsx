import Header from "../components/Header"
import Footer from "../components/Footer"
import DiffPreview from "../components/Difficulty"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Anybody } from "next/font/google";
import BorderSpawner from "@/components/BorderSpawner";

const gitToken : string = process.env.TOKEN as string;

interface File{
  name: string;
  path: string;
  type: string;
  url: string;
  download_url: string;
}

async function fetchRepoFiles(owner : string, repo : string, token : string) {
  try {
    const url = `https://api.github.com/repos/${owner}/${repo}/contents/`;
    const headers = { Authorization: `Bearer ${token}` };
    const response = await fetch(url, { headers });

    if (response.ok) {
      return await response.json();  
    } else {
      throw new Error('Failed to fetch repository files');
    }
  } catch (error) {
    console.error(error);
  }
}; 




const Machine = ({file} : any) => {
  const {name} = file || {};
  if(name == "Easy"){
    return(
      <div className=" w-[20vw] h-[300px] justify-center items-center pt-16 pb-32 rounded-xl m-2 border-4 border-Easy bg-local bg-[https://repository-images.githubusercontent.com/518513212/13cd778f-d5ef-4d5a-b156-a7c10bb49c83]">
          <h1 className=" text-black text-center align-text-bottom ">{name}</h1>
        </div>
    )
  }else if(name == "Medium" ){
    return(
      <div className=" w-[20vw] h-[300px] justify-center items-center pt-16 pb-32 rounded-xl m-2 border-4 border-Medium bg-local bg-[https://repository-images.githubusercontent.com/518513212/13cd778f-d5ef-4d5a-b156-a7c10bb49c83]">
          <h1 className=" text-black text-center align-text-bottom ">{name}</h1>
        </div>
    )
  }else if(name == "Hard" ){
    return(
      <div className=" w-[20vw] h-[300px] justify-center items-center pt-16 pb-32 rounded-xl m-2 border-4 border-dashed border-Hard bg-local bg-[https://repository-images.githubusercontent.com/518513212/13cd778f-d5ef-4d5a-b156-a7c10bb49c83]">
          <h1 className=" text-black text-center align-text-bottom ">{name}</h1>
        </div>
    )
  }else{
    return(
      <div className=" w-[20vw] h-[300px] justify-center items-center pt-16 pb-32 rounded-xl m-2 border-4 border-dashed border-Insane bg-local bg-[https://repository-images.githubusercontent.com/518513212/13cd778f-d5ef-4d5a-b156-a7c10bb49c83]">
          <h1 className=" text-black text-center align-text-bottom ">{name}</h1>
        </div>
    )
  }
}

export default async function Home() {
  const x = await fetchRepoFiles('Wanasgheo','Writeups', gitToken);

  const dir = x.find( (file : File) => file.name === 'HackTheBox' && file.type === 'dir');

  const contentHTB = (await fetch(dir.url , { headers: { Authorization: `Bearer ${gitToken}` } }));
  const difficulties = await contentHTB.json();
  return (
    <main>
      <Header/>
      <div className="flex flex-wrap w-full h-screen items-center justify-center pt-28 pb-36 px-10">
        {difficulties?.map((difficulty : File)=>{
            return <Machine key={difficulty.path} file={difficulty}></Machine>
        })}
        <DiffPreview/>
        <DiffPreview/>
      </div>
      <Footer/>
    </main>
  )
}
  
