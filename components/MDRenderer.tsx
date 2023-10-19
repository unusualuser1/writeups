import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import React from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import {
  atomDark,
  oneDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { Content } from "next/font/google";

export default function MDRenderer({ decodedContent }: any) {
  return (
    <>
      <div
        className="md:px-[100px] md:pt-[100px] md:text-[20px]
                        sm:px-[50px]
                        xld:px-[450px]
                        ld:px-[250px]
                        xsm:text-[14px] xsm:px-[35px]
                        md:writeup
                        text-white"
      >
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          remarkPlugins={[gfm]}
          components={{
            code({ node, inline, className, children, lang, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  {...props}
                  codeTagProps={{ style: { fontSize: "inherit" } }}
                  customStyle={{ fontSize: 18 }}
                  style={oneDark}
                  language={lang}
                  PreTag="div"
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {decodedContent}
        </ReactMarkdown>
      </div>
    </>
  );
}

/**
 * <PageWrapper>
      <div dangerouslySetInnerHTML={{__html:processedContent.toString()}} className="md:px-[100px] md:pt-[100px] md:text-[20px]
                        sm:px-[50px]
                        xld:px-[450px]
                        ld:px-[250px]
                        xsm:text-[14px] xsm:px-[35px]
                        md: writeup
                        text-white"/>
      </PageWrapper>
 */

/**
 * const processedContent = await unified()
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
 */

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
