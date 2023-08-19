import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import gfm from "remark-gfm";
import { PageWrapper } from "@/components/PageWrapper";
import rehypeRaw from "rehype-raw";
import React from "react";
import {
  atomDark,
  oneDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";

export default async function MDRenderer({ decodedContent }: any) {
  return (
    <>
      <PageWrapper>
        <div
          className="md:px-[100px] md:pt-[100px] md:text-[20px]
                        sm:px-[50px]
                        xld:px-[450px]
                        ld:px-[250px]
                        xsm:text-[14px] xsm:px-[35px]
                        md: writeup
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
      </PageWrapper>
    </>
  );
}
