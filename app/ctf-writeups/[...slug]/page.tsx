import { getReadmeContent } from "@/lib/apiUtils";
import MDRenderer from "@/components/MDRenderer";
import { getDirectoryData } from "@/lib/apiUtils";

interface PageProps{
  params:{
    slug : string[]
  }
}

export default async function Page({params}:PageProps) {
  const { slug } = params || {}
  const res = await getReadmeContent(`ctf-writeups/${slug[0]}/${slug[1]}`)
    return (  
      <main>
        <MDRenderer decodedContent={res}/>
      </main>
    );
  }

  export async function generateStaticParams(){
    const r = await Promise.all([getDirectoryData('ctf-writeups/TeenableCtf-2023')])
    const items = r.reduce((a,b)=> {return a.concat(b)})
    return items.map((item) => {
      return{
        slug:[item.path.split('/')[1],item.name]
      }
    })
  }