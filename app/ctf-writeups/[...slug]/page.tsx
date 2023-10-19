import { getReadmeContent } from "@/lib/apiUtils";
import MDRenderer from "@/components/MDRenderer";
import { getDirectoryData } from "@/lib/apiUtils";
import TopOfPageButton from "@/components/backTopOfPage";
import Feedback from "@/components/feedbackBox";
import { useState } from "react";

interface PageProps {
  params: {
    slug: string[]
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = params || {}
  const res = await getReadmeContent(`ctf-writeups/${slug[0]}/${slug[1]}`)

  return (
    <main>
      <div className="bottom-2 right-0 w-screen h-[40px] flex fixed z-50 px-[8px] justify-end">
        <TopOfPageButton />
      </div>
      <MDRenderer decodedContent={res} />
    </main>
  );
}

export async function generateStaticParams() {
  const dirs = await getDirectoryData('ctf-writeups');
  const promises = dirs.map( (d)=>{return getDirectoryData(d.path)});
  const r = await Promise.all(promises);
  const items = r.reduce((a,b)=> {return a.concat(b)})
  return items.map((item) => {
    return {
      slug: [item.path.split('/')[1], item.name]
    }
  })
}
