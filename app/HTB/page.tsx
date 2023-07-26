import { PageWrapper } from "@/components/PageWrapper";
import { getDifficulties } from '@/functions/getDifficulties';
import DiffPreview from '@/components/DiffPreview';

function compareDiff(a:any,b:any):number{
  const difficulties = ["Easy","Medium","Hard","Insane"];
  return difficulties.indexOf(a.name) - difficulties.indexOf(b.name);
}

export default async function HTB_Home() {
  
  const difficulties = await getDifficulties();
  if(Array.isArray(difficulties.data)){
    difficulties.data.sort(compareDiff);
    return (
      <main>
        <PageWrapper>
          <div className="flex flex-wrap w-full h-screen items-center justify-center pt-28 pb-36 px-10">
          {difficulties.data?.map((difficulty : any) => (
              difficulties && <DiffPreview key={difficulty.sha} difficulty={difficulty} />
            ))}
          </div>
        </PageWrapper>
      </main>
    );
  }
  
}
