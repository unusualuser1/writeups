'use client';

import React, { useEffect, useState } from "react";
import { fetchRepoFiles } from "@/components/fetchFunc";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import gfm from "remark-gfm";
import Component from "@/components/Box";
import { fetchWriteup } from "@/functions/fetchWriteup";
import { GitHubData } from "@/interfaces/GitHubData";
const gitToken: string = process.env.TOKEN as string;

export default function Boxes({ params }: any) {
  console.log(params);
  const { difficulty, name } = params || {};
  const [decodedContent, setDecodedContent] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      const response: any = await fetchWriteup( difficulty, name);

      const decodedContent = response.content
        ? atob(response.content.toString())
        : "";
      setDecodedContent(decodedContent);
    }

    fetchData();
  }, [difficulty, name]);

  const codeString = "export default function Home(){<div></div>}";

  return (
    <>
      <div className="px-[250px] justify-center">
        <ReactMarkdown
          remarkPlugins={[gfm]}
          children={decodedContent ?? ""}
          components={{ code: Component }}
        />
      </div>
    </>
  );
}
