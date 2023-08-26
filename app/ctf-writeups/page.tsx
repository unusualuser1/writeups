import { getDirectoryData, getDirFile } from "@/lib/apiUtils";
import React, { FC } from "react";
import Search from "@/components/Search";
export default async function ctf() {
  const r = await Promise.all([getDirectoryData('ctf-writeups/TeenableCtf-2023')])
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