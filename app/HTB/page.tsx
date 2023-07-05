'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { PageWrapper } from "@/components/PageWrapper";
import { fetchGitRepo } from "@/functions/fetchUserRepo";
import { GitHubData } from '@/interfaces/GitHubData';
import { fetchDifficulties } from '@/functions/fetchDifficulties';
import DiffPreview from '@/components/DiffPreview';

const gitToken = process.env.TOKEN as string;

export default function HTB_Home() {
  const [difficulties, setDifficulties] = useState<GitHubData[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetchDifficulties();
      setDifficulties(response);
    }

    fetchData();
  }, []);
  
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
