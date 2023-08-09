import BoxPreview from "@/components/BoxPreview";
import { PageWrapper } from "@/components/PageWrapper";
import { getDirectoryData } from "@/lib/apiUtils";

export default async function Difficulty({params} : any){
  const {difficulty} = params;
  const boxes = await getDirectoryData(`HackTheBox/${difficulty}`);
  //console.log("boxes",boxes)
    return (
      <PageWrapper>
        <div className="flex 
                        flex-wrap
                        justify-center
                        w-[80vw] 
                        h-[full] 
                        translate-x-[10vw] 
                        bg-slate-500 
                        translate-y-28 
                        py-8 
                        rounded-lg ">
            {boxes && boxes?.map((box:any) => (
              <BoxPreview key={box.sha} box={box} difficulty={difficulty}/>
            ))}
        </div>
      </PageWrapper>
  );
}
/**
 * 
 */