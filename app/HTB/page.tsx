
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { PageWrapper } from "@/components/PageWrapper";
import { fetchGitRepo } from "@/functions/fetchUserRepo";
import { GitHubData } from '@/interfaces/GitHubData';
import { fetchDifficulties } from '@/functions/fetchDifficulties';
import DiffPreview from '@/components/DiffPreview';

const gitToken = process.env.TOKEN as string;

function compareDiff(a:any,b:any):number{
  const difficulties = ["Easy","Medium","Hard","Insane"];
  return difficulties.indexOf(a.name) - difficulties.indexOf(b.name);
}

export default async function HTB_Home() {

  const difficulties = (await fetchDifficulties()).data;
  difficulties.sort(compareDiff);
  console.log('diff',difficulties)
  return (
    <main>
      <PageWrapper>
        <div className="flex flex-wrap w-full h-screen items-center justify-center pt-28 pb-36 px-10">
        {difficulties?.map((difficulty : any) => (
            difficulties && <DiffPreview key={difficulty.path} difficulty={difficulty} />
          ))}
        </div>
      </PageWrapper>
    </main>
  );
}
