import BoxPreview from "@/components/BoxPreview";
import { getDirectoryData } from "@/lib/apiUtils";

export default async function Difficulty({params} : any){
  const {difficulty} = params;
  const boxes = await getDirectoryData(`HackTheBox/${difficulty}`);
  //console.log("boxes",boxes)
    return (
      <div className=" w-[full] h-[400px] min-w-[300px] bg-slate-500 translate-y-28 py-8 px-8 rounded-lg m-4">
          {boxes && boxes?.map((box:any) => (
            <BoxPreview key={box.sha} box={box} difficulty={difficulty}/>
          ))}
      </div>
  );
}
/**
 * 
 */