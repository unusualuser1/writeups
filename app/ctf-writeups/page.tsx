import { getDirectoryData, getDirFile } from "@/lib/apiUtils";
import React, { FC } from "react";
import Search from "@/components/Search";
import { resolve } from "path";
import { rejects } from "assert";
import { decode } from "punycode";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: '0xwriteups',
  description: 'Pronto',
  verification: { google: 'T2FrRrzXLHAe12g7Tf0b-r0P_0anHnydtBJOPcG53Ro', },
  keywords : ['0xwriteups','writeups','htb','htb machines','hack the box','hack the box writeups','htb writeups','0Xwriteups','devel','soccer','devel writeup','socer writeup'],
};


export default async function ctf() {
  const dirs = await getDirectoryData('ctf-writeups');
  const promises = dirs.map( (d)=>{return getDirectoryData(d.path)});
  const r = await Promise.all(promises);
  const ctfs = r.reduce((a,b)=> {return a.concat(b)})
  const ctfProps = await Promise.all(ctfs.map(async (ctf)=> {
    const decodedContent = await getDirFile(ctf.path+`/${ctf.name}.txt`)
    return {
      name : ctf.name,
      path : ctf.path,
      sha : ctf.sha,
      decodedContent : decodedContent
    }
  }))

  const options = [
    { value : 'TeenableCtf-2023' },
  ]
  return (  
    <main>
    {/* <PageWrapper> */}
    <Search items={ctfProps} options={options}/>
    {/* </PageWrapper> */}
  </main>
  );
}
//<Search items={ctfProps} options={options}/>