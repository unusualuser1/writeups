
import { PageWrapper } from "@/components/PageWrapper";
import { getDirectoryData, getDirFile } from "@/lib/apiUtils";
import DiffPreview from '@/components/DiffPreview';
import { Endpoints, OctokitResponse } from "@octokit/types";
import { components } from "@octokit/openapi-types"
import BoxPreview from "@/components/BoxPreview";
import Filter from "@/components/Filter";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Box } from "@/components/Box";
import { Metadata } from "next";
/*
function compareDiff(a:any,b:any):number{
  const difficulties = ["Easy","Medium","Hard","Insane"];
  return difficulties.indexOf(a.name) - difficulties.indexOf(b.name);
}*/

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: '0xwriteups',
  description: 'Pronto',
  verification: { google: 'T2FrRrzXLHAe12g7Tf0b-r0P_0anHnydtBJOPcG53Ro', },
  keywords : ['0xwriteups','writeups','htb','htb machines','hack the box','hack the box writeups','htb writeups','0Xwriteups','devel','soccer','devel writeup','socer writeup'],
};

type DirectoryItem = components["schemas"]["content-directory"];

export default async function HTB_Home() {
  const dirs = await getDirectoryData('HackTheBox');
  const promises = dirs.map( (d)=>{return getDirectoryData(d.path)});
  const r = await Promise.all(promises);
  
  const boxes = r.reduce((a,b)=> {return a.concat(b)})
  const boxProps = await Promise.all(boxes.map(async (box)=> {
    const decodedContent = await getDirFile(box.path+`/${box.name}.txt`)
    return {
      name : box.name,
      path : box.path,
      sha : box.sha,
      decodedContent : decodedContent
    }
  }))

  const options = [
    { value : 'Easy' },
    { value : 'Medium' },
    { value : 'Hard' },
    { value : 'Insane' },
  ]

  return (  
    
    <main>
      {/* <PageWrapper> */}
      <Filter items={boxProps} options={options}/>
      {/* </PageWrapper> */}
    </main>
    
  );
}
