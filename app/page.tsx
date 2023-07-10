import { fetchDifficulties } from "@/functions/fetchDifficulties"
import { fetchBoxes } from "@/functions/fetchBoxes";
import BoxPreview from "@/components/BoxPreview";
import Link from "next/link";
import { Octokit } from "@octokit/rest";
import { GitHubData } from "@/interfaces/GitHubData";
import { fetchWriteup } from "@/functions/fetchWriteup";

const octokit = new Octokit({
  auth: process.env.TOKEN
});

export default async function Home(){
    //get all commits
    const commits = await octokit.rest.repos.listCommits({
      owner : 'Wanasgheo',
      repo: 'Writeups',
    })
    
    //pick latest commit

    const commitResponse = await octokit.rest.repos.getCommit({
      owner : 'Wanasgheo',
      repo: 'Writeups',
      ref: commits.data[0].sha,
    })
    
    //console.log(commitResponse)
    const commitData = commitResponse.data.files || [];
    const {status, filename } = commitData[0];
    console.log(status, filename);
    let g;
    const readme = await octokit.request(`GET /repos/Wanasgheo/Writeups/contents/${filename}`);

    const decodedContent = readme?.data.content ? atob(readme?.data.content.toString()) : "";
    console.log(decodedContent)
    
    return(
        <main>
            
        </main>
    )
}

/**
 * <Link href={`/HTB/${difficulty}/${response.data[0].name}`}>

          <div className="inline-flex w-[25vw] h-1/4 m-2
          bg-white 
          rounded-lg 
          min-w-[300px]">
              <div className=" object-contain aspect-[3/2] w-full">
                <img className=" rounded-l-lg h-full" src="../../HTB_logo.png"  alt="" />
              </div>
              
              <div className="flex w-full justify-center items-center "> 
                <center><h2 className="text-black align-middle">{box[0].name}</h2></center>
              </div>
          </div>
        </Link> 

        
 */