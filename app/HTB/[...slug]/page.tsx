import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import gfm from "remark-gfm";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { getDirFile, getReadmeContent } from "@/lib/apiUtils";
import { PageWrapper } from "@/components/PageWrapper";
import rehypeRaw from "rehype-raw";
import MDRenderer from "@/components/MDRenderer";
import TopOfPageButton from "@/components/backTopOfPage";

export default async function Boxes({ params }: any) {
  const { slug} = params || {};
  const response = await getReadmeContent(`HackTheBox/${slug[0]}/${slug[1]}`);
  //console.log(response)
  return (
    <>
      <div className="fixed w-[40px] h-[40px] flex justify-end 
                      xsm:bottom-10 md:right-[40px]
                      xsm:right-[10px]">
        <TopOfPageButton/>
      </div> 
      <MDRenderer decodedContent={response}/>
    </>
  );
}
