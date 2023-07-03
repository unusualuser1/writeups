import React from "react";
import { fetchRepoFiles } from "@/components/fetchFunc";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import gfm from "remark-gfm"
const gitToken : string = process.env.TOKEN as string;

export default async function Boxes({params}:any){
    const {dif, boxes} = params || {};
    let response = await fetchRepoFiles('Wanasgheo','Writeups', gitToken, `/HackTheBox/${dif}/${boxes}/README.md?ref=main`);
    console.log(response);


    const decodedContent = response.content
    ? atob(response.content.toString())
    : '';

    return(
        <div>
            <ReactMarkdown remarkPlugins={[gfm]} children={decodedContent ?? ''} />
        </div>
    );
}