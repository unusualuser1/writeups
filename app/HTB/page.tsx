import Header from "../../components/Header"
import Footer from "../../components/Footer"
import DiffPreview from "../../components/DiffPreview"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Anybody } from "next/font/google";
import BorderSpawner from "@/components/BorderSpawner";
import { fetchRepoFiles } from "@/components/fetchFunc";
import {PageWrapper} from "@/components/PageWrapper";
import { File } from "@/interfaces/File";
const gitToken : string = process.env.TOKEN as string;

export default async function HTB_Home() {
  const x = await fetchRepoFiles('Wanasgheo','Writeups', gitToken);
  const dir = x.find( (file : File) => file.name === 'HackTheBox' && file.type === 'dir');

  const contentHTB = (await fetch(dir.url , { headers: { Authorization: `Bearer ${gitToken}` } }));
  const difficulties = await contentHTB.json();
  return (
    <main>
      <PageWrapper>
        <div className="flex flex-wrap w-full h-screen items-center justify-center pt-28 pb-36 px-10">
          {difficulties?.map((difficulty : File)=>{
              return <DiffPreview key={difficulty.path} difficulty={difficulty}/>
          })}
        </div>
        
      </PageWrapper>
    </main>
  )
}
  
