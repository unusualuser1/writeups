
import { PageWrapper } from "@/components/PageWrapper";
import { getDirectoryData, getDirFile } from "@/lib/apiUtils";
import DiffPreview from '@/components/DiffPreview';
import { Endpoints, OctokitResponse } from "@octokit/types";
import { components } from "@octokit/openapi-types"
import BoxPreview from "@/components/BoxPreview";
import Filter from "@/components/Filter";
import GoogleAnalytics from "@/components/GoogleAnalytics";
/*
function compareDiff(a:any,b:any):number{
  const difficulties = ["Easy","Medium","Hard","Insane"];
  return difficulties.indexOf(a.name) - difficulties.indexOf(b.name);
}*/

type DirectoryItem = components["schemas"]["content-directory"];

export default async function HTB_Home() {
  const r = await Promise.all([getDirectoryData('HackTheBox/Easy'),getDirectoryData('HackTheBox/Medium')])
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


  return (  
    
    <main>
      {/* <PageWrapper> */}
      <Filter boxes={boxProps}/>
      {/* </PageWrapper> */}
    </main>
    
  );
}
