import { octokit } from "@/lib/octo";

export function getWriteup(difficulty : string, name : string) {
  try {
    return octokit.rest.repos.getReadmeInDirectory({
      owner:'Wanasgheo',
      repo:'Writeups',
      dir:`HackTheBox/${difficulty}/${name}`,
    }) 
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
}
