
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import gfm from "remark-gfm";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { getDirFile, getReadmeContent } from "@/lib/apiUtils";
import { PageWrapper } from "@/components/PageWrapper";
import rehypeRaw from "rehype-raw";
import MDRenderer from "@/components/MDRenderer";
import TopOfPageButton from "@/components/backTopOfPage";
import { FC } from "react";
import { getDirectoryData } from "@/lib/apiUtils";
import Feedback from "@/components/feedbackBox";
import { useState } from "react";

interface PageProps{
  params:{
    slug : string[]
  }
}

const page: FC<PageProps> = async ({ params }) => {
  const { slug} = params || {};
  const response:any = await fetch(`https://api.github.com/repos/Wanasgheo/Writeups/contents/HackTheBox/${slug[0]}/${slug[1]}/README.md?ref=main`,{next:{revalidate:60}}).then(res=>res.json());

  

  //console.log(response)
  return (
    <>
      <div className="fixed w-[40px] h-[150px] flex justify-end 
                      xsm:bottom-10 md:right-[40px]
                      xsm:right-[10px]">
        {/* <Feedback /> */}
        <TopOfPageButton/>
      </div> 
      <MDRenderer decodedContent={atob(response.content)}/>
    </>
  );
}

export async function generateStaticParams(){
  const r = await Promise.all([getDirectoryData('HackTheBox/Easy'),getDirectoryData('HackTheBox/Medium')])
  const boxes = r.reduce((a,b)=> {return a.concat(b)})
  return boxes.map((box) => {
    return{
      slug:[box.path.split('/')[1],box.name]
    }
  })
}

export default page

