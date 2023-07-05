import { GitHubData } from "@/interfaces/GitHubData"; 

export function fetchBoxes(difficulty : string): Promise<GitHubData[]> {
  return fetch(`https://api.github.com/repos/Wanasgheo/Writeups/contents/HackTheBox/${difficulty}?ref=main`)
    .then(response => response.json());
}
