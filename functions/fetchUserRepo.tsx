import { GitHubData } from '@/interfaces/GitHubData';

export function fetchGitRepo(): Promise<GitHubData[]> {
  return fetch(`https://api.github.com/repos/Wanasgheo/Writeups/contents`)
    .then(response => response.json());
}
