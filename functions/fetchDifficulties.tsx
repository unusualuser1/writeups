import { Octokit } from "octokit";
import { GitHubData } from "@/interfaces/GitHubData";

const octokit = new Octokit({
  auth: process.env.TOKEN
});

export async function fetchDifficulties() {
  try {
    return await octokit.request("GET /repos/Wanasgheo/Writeups/contents/HackTheBox", { 
      sort: "updated",
      direction: "desc"
    });
  } catch (error) {
    console.error('Failed to fetch difficulties:', error);
    throw new Error('Failed to fetch data');
  }
}
