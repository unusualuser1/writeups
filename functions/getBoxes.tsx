import { octokit } from "@/lib/octo";

export function getBoxes(difficulty : string) {
  try {
    return octokit.rest.repos.getContent({
      owner:'Wanasgheo',
      repo:'Writeups',
      path:`HackTheBox/${difficulty}`,
    }) 
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
}
