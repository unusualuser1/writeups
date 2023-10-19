
import { PageWrapper } from "@/components/PageWrapper";
import { getDirectoryData, getDirFile } from "@/lib/apiUtils";
import DiffPreview from '@/components/DiffPreview';
import { Endpoints, OctokitResponse } from "@octokit/types";
import { components } from "@octokit/openapi-types"
import BoxPreview from "@/components/BoxPreview";
import Filter from "@/components/Filter";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Box } from "@/components/Box";
/*
function compareDiff(a:any,b:any):number{
  const difficulties = ["Easy","Medium","Hard","Insane"];
  return difficulties.indexOf(a.name) - difficulties.indexOf(b.name);
}*/

export const metadata = {
  title: 'Hack The Box Writeups',
  description: 'Writeups are here',
}

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
