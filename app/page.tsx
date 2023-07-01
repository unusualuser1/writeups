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
  return (
    <DiffPreview name = {name} />
  )
  
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
      </div>
      <Footer/>
    </main>
  )
}
  
