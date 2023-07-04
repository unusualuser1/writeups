'use client';

import React from "react";
import { fetchRepoFiles } from "@/components/fetchFunc";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import gfm from "remark-gfm"
import Component from "@/components/Box";
const gitToken : string = process.env.TOKEN as string;


export default async function Boxes({params}:any){
    console.log(params)
    const {difficulty, name} = params || {};
    let response : any = await fetchRepoFiles('Wanasgheo','Writeups', gitToken, `/HackTheBox/${difficulty}/${name}/README.md?ref=main`);

    const decodedContent = response.content
    ? atob(response.content.toString())
    : '';

    const codeString = "export default function Home(){<div></div>}";
    return(
        <> 
            <div className="px-[250px] justify-center">
             <ReactMarkdown remarkPlugins={[gfm]} children={decodedContent ?? ''}  components={{code:Component}}/>
            </div>
        </>
       
    );
}