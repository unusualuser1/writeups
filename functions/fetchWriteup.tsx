import { GitHubData } from "@/interfaces/GitHubData"; 

export function fetchWriteup(difficulty : string, name : string): Promise<GitHubData[]> {
  return fetch(`https://api.github.com/repos/Wanasgheo/Writeups/contents/HackTheBox/${difficulty}/${name}/README.md?ref=main`)
    .then(response => response.json());
}
