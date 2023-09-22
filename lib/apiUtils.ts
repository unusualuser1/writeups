import { type } from "os";
import { octokit } from "./octo";
import { components } from "@octokit/openapi-types"

//type DirectoryItem = components["schemas"]["content-directory"][number];

//mettere in un file ed esportarli in modo che non siano visibili su git
const owner = 'Wanasgheo';
const repo='Writeups';

/*
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
*/

type dir = {
  name:string,
  path:string,
  sha:string,
  url:string
}

async function getDirectoryData(x:string): Promise<dir[]>{
  try {
    const response:any = await fetch(`https://api.github.com/repos/Wanasgheo/Writeups/contents/${x}`,{next:{revalidate:60}}).then(res=>res.json());
    return response;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
}


async function getCommits(){
  try {
    const { data } =  await  octokit.rest.repos.listCommits({
      owner: 'Wanasgheo',
      repo: 'Writeups',
    }) 
    if(!Array.isArray(data)) return;

    return data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
}

async function getReadmeContent(path : string) {
  try {
    const { data } =  await octokit.rest.repos.getReadmeInDirectory({
      owner:'Wanasgheo',
      repo:'Writeups',
      dir:path,
    }) 

    return atob(data.content)
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
}

async function getDirFile(path : string) {
  try {
    const { data } = await octokit.rest.repos.getContent({
      owner: 'Wanasgheo',
      repo: 'Writeups',
      path: `${path}`,
    }) 
    if(Array.isArray(data)) throw new Error('Failed to fetch data');
    if(data.type !== 'file') throw new Error('Failed to fetch data');
    return atob(data.content)
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
}

async function getAllBoxes(){
  const r = await Promise.all([getDirectoryData('HackTheBox/Easy'),getDirectoryData('HackTheBox/Medium')])
  return r.reduce((a,b)=> {return a.concat(b)})
}

async function getAllCtfs(){
  const r = await Promise.all([getDirectoryData('ctf-writeups/TeenableCtf-2023')])
  return r.reduce((a,b)=> {return a.concat(b)})
}

export{getDirectoryData, getReadmeContent, getCommits, getDirFile, getAllBoxes, getAllCtfs};