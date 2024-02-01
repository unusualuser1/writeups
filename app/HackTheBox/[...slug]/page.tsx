
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
import next, { Metadata } from "next/types";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: '0xwriteups',
  description: 'Pronto',
  verification: { google: 'T2FrRrzXLHAe12g7Tf0b-r0P_0anHnydtBJOPcG53Ro', },
  keywords : ['0xwriteups','writeups','htb','htb machines','hack the box','hack the box writeups','htb writeups','0Xwriteups','devel','soccer','devel writeup','socer writeup'],
};

interface PageProps {
  params: {
    slug: string[]
  }
}

const page: FC<PageProps> = async ({ params }) => {

  const { slug } = params || {};
  const response: any = await fetch(`https://api.github.com/repos/Wanasgheo/Writeups/contents/HackTheBox/${slug[0]}/${slug[1]}/README.md?ref=main`, { next: { revalidate: 60 } }).then(res => res.json());
  return (
    <>
      <div className="bottom-2 right-0 w-screen h-[40px] flex fixed z-50 px-[8px] justify-end">
        <TopOfPageButton />
      </div>
      <MDRenderer decodedContent={atob(response.content)} />
    </>
  );
}

export async function generateStaticParams() {
  const dirs = await getDirectoryData('HackTheBox');
  const promises = dirs.map( (d)=>{return getDirectoryData(d.path)});
  const r = await Promise.all(promises);
  const boxes = r.reduce((a, b) => { return a.concat(b) })
  return boxes.map((box) => {
    return {
      slug: [box.path.split('/')[1], box.name]
    }
  })
}

export default page


