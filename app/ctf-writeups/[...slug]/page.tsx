import { getReadmeContent } from "@/lib/apiUtils";
import MDRenderer from "@/components/MDRenderer";
import { getDirectoryData } from "@/lib/apiUtils";
import TopOfPageButton from "@/components/backTopOfPage";
import Feedback from "@/components/feedbackBox";
import { useState } from "react";

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
        <div className="fixed w-[40px] h-[150px] flex justify-end 
                      xsm:bottom-10 md:right-[40px]
                      xsm:right-[10px]">
          {/* <Feedback /> */}
          <TopOfPageButton/>
          
        </div> 
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
