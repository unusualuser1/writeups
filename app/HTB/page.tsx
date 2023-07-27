import { PageWrapper } from "@/components/PageWrapper";
import { getDirectoryData } from "@/lib/apiUtils";
import DiffPreview from '@/components/DiffPreview';
import { Endpoints, OctokitResponse } from "@octokit/types";
import { components } from "@octokit/openapi-types"


function compareDiff(a:any,b:any):number{
  const difficulties = ["Easy","Medium","Hard","Insane"];
  return difficulties.indexOf(a.name) - difficulties.indexOf(b.name);
}

//type DirectoryItem = components["schemas"]["content-directory"];

export default async function HTB_Home({params}:any) {
  
  const difficulties = await getDirectoryData('HackTheBox');
  difficulties.sort(compareDiff)

  return (
    <main>
      <PageWrapper>
        <div className="flex flex-wrap w-full h-screen items-center justify-center pt-28 pb-36 px-10">
        {difficulties?.map((difficulty) => (
            difficulties && <DiffPreview key={difficulty.sha} difficulty={difficulty.name} />
          ))}
        </div>
      </PageWrapper>
    </main>
  );
}
