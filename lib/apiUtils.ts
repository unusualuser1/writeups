import { octokit } from "./octo";
import { components } from "@octokit/openapi-types"

//type DirectoryItem = components["schemas"]["content-directory"][number];

const owner = 'Wanasgheo';
const repo='Writeups';

async function getDirectoryData(x:string){
  try {
    const { data } =  await  octokit.rest.repos.getContent({
      owner: owner,
      repo: repo,
      path:`${x}`,
    }) 

    if (!Array.isArray(data)) return [];
    
    return data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
}

async function getReadmeData(difficulty : string, name : string) {
  try {
    const { data } =  await octokit.rest.repos.getReadmeInDirectory({
      owner:'Wanasgheo',
      repo:'Writeups',
      dir:`HackTheBox/${difficulty}/${name}`,
    }) 

    return data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
}

export{getDirectoryData, getReadmeData};