
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import gfm from "remark-gfm";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { PageWrapper } from "@/components/PageWrapper";
import rehypeRaw from "rehype-raw";
import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'
import parse from 'remark-parse'
import html from 'remark-html'
import {remark} from 'remark'
import rehypeHighlight from 'rehype-highlight'
import remarkGfm from "remark-gfm";
import rehypePrettyCode from 'rehype-pretty-code';

export default async function MDRenderer({decodedContent}: any){
  
  const processedContent = await unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypePrettyCode, {
    theme:'one-dark-pro',
    keepBackground: false
  })
  .use(rehypeStringify)
  .use(rehypeRaw)
  .process(decodedContent);
  return (
    <>
      <PageWrapper>
      <div dangerouslySetInnerHTML={{__html:processedContent.toString()}} className="md:px-[100px] md:pt-[100px] md:text-[20px]
                        sm:px-[50px]
                        xld:px-[450px]
                        ld:px-[250px]
                        xsm:text-[14px] xsm:px-[35px]
                        md: writeup"/>
      </PageWrapper>
      
    </>
  );
}


/**
 *  <div className="md:px-[150px] md:py-[100px] md:text-[20px]
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
        </div>*/