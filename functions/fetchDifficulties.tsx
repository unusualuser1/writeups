import { GitHubData } from "@/interfaces/GitHubData"; 

export function fetchDifficulties(): Promise<GitHubData[]> {
  return fetch(`https://api.github.com/repos/Wanasgheo/Writeups/contents/HackTheBox?ref=main`)
    .then(response => response.json());
}
