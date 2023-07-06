import { GitHubData } from "@/interfaces/GitHubData"; 
const gitToken = process.env.TOKEN;

export function fetchDifficulties(): Promise<GitHubData[]> {
  return fetch(`https://api.github.com/repos/Wanasgheo/Writeups/contents/HackTheBox?ref=main`, { headers : { Authorization : `Bearer ${gitToken}` }})
    .then(response => response.json());
}
