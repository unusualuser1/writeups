
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import gfm from "remark-gfm";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { PageWrapper } from "@/components/PageWrapper";
import rehypeRaw from "rehype-raw";


export default async function MDRenderer({decodedContent}: any){
  return (
    <>
      <PageWrapper>
        <div className="md:px-[150px] md:py-[100px] md:text-[20px]
                        xsm:text-[14px] xsm:px-[35px]
                        md: writeup">
        <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
          remarkPlugins={[gfm]}
            children={decodedContent}
            components={{
              code({node, inline, className, children, ...props}) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    {...props}
                    codeTagProps={{ style: { fontSize: "inherit" } }}
                    customStyle={{ fontSize: 18 }}
                    children={String(children).replace(/\n$/, '')}
                    style={atomOneDark}
                    language={match[1]}
                    PreTag="div"
                  />
                ) : (
                  <code {...props} className={className}>
                    {children}
                  </code>
                )
              }
            }}
          />
        </div>
      </PageWrapper>
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