
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { PageWrapper } from "@/components/PageWrapper";
import { fetchGitRepo } from "@/functions/fetchUserRepo";
import { GitHubData } from '@/interfaces/GitHubData';
import { fetchDifficulties } from '@/functions/fetchDifficulties';
import DiffPreview from '@/components/DiffPreview';

const gitToken = process.env.TOKEN as string;

export default async function HTB_Home() {

  const difficulties = await fetchDifficulties();
  return (
    <main>
      <PageWrapper>
        <div className="flex flex-wrap w-full h-screen items-center justify-center pt-28 pb-36 px-10">
          {difficulties?.map((difficulty) => (
            difficulties && <DiffPreview key={difficulty.path} difficulty={difficulty} />
          ))}
        </div>
      </PageWrapper>
    </main>
  );
}
