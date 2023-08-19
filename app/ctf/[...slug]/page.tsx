import { getReadmeContent } from "@/lib/apiUtils";
import MDRenderer from "@/components/MDRenderer";

export default async function ctf({params}:any) {
  const { slug } = params || {}
  console.log(`ctf-writeups/${slug[0]}/${slug[1]}`)
  const res = await getReadmeContent(`ctf-writeups/${slug[0]}/${slug[1]}`)
    return (  
      <main>
        <MDRenderer decodedContent={res}/>
      </main>
    );
  }
