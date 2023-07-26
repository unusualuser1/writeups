import { octokit } from "@/lib/octo";

export function getDifficulties(){
  try {
    return octokit.rest.repos.getContent({
      owner:'Wanasgheo',
      repo:'Writeups',
      path:'HackTheBox',
    }) 
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
}
