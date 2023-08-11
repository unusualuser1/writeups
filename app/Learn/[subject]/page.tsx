
import { octokit } from "@/lib/octo";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import gfm from "remark-gfm";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { getReadmeContent } from "@/lib/apiUtils";
import { PageWrapper } from "@/components/PageWrapper";
import rehypeRaw from "rehype-raw";
import MDRenderer from "@/components/MDRenderer";

export default async function WikiLearn_Page({params}:any){
    const { subject } = params;
    const { data } = await octokit.rest.repos.getReadmeInDirectory({
        owner:'Wanasgheo',
        repo:'Writeups',
        dir:`Learn/${subject}`
    })

    const decodedContent = data.content
    ? atob(data.content.toString())
    : "";
  return (
    <>
      <MDRenderer decodedContent={decodedContent}/>
    </>
  );
}


/**
 *  <main>
            { ids have to be short for mobile screen reasons }
            <div id="NMAP">asdsad</div>
            <div id="2">sadsad</div>
            <div id="3">asdsad</div>
            <div id="4">asdsad</div>
            <div id="5">asdasda</div>
            <div id="6">asdasd</div>
            <div id="7">asdasd</div>
            <div id="8">asdsad</div>
            <div id="9">asdasd</div>
            <div id="10">asdsad</div>
        </main>*/