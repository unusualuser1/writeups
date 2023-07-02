import React from "react";
const gitToken : string = process.env.TOKEN as string;
import { fetchRepoFiles } from "@/components/fetchFunc";
import { json } from "stream/consumers";
import Box from "@/components/Box";
import Link from "next/link";

interface File{
    name: string;
    path: string;
    type: string;
    url: string;
    download_url: string;
  }

export default async function difficulty({params} : any){
    const {dif} = params;
    let content = null;
    let response = await fetchRepoFiles('Wanasgheo','Writeups', gitToken, `/HackTheBox/${dif}?ref=main`);
    console.log(response);
  
    return (
        <div>
            {response?.map((resp : File) => {
                    return (
                        <Link href={`/${dif}/${resp.name}`}>
                            <div>
                                <h1>{resp.name}</h1>
                            </div>
                        </Link>
                    )
                })}
        </div>
    );
}