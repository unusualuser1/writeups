import HomePageBoxes from "@/components/HomePageBoxes"
import HomePageLearn from "@/components/HomePageLearn"
import HomePage from "@/components/HomePage_v2"
import { getDirFile } from "@/lib/apiUtils";
import { octokit } from "@/lib/octo";
import type { Metadata } from "next";


export const metadata: Metadata = { robots: { index: false, follow: false }, 
                                   title: '0xWriteups', 
                                   description: 'Pronto', 
                                   verification: { google: 'T2FrRrzXLHAe12g7Tf0b-r0P_0anHnydtBJOPcG53Ro', }, };


export default async function Home(){
    

    let htbCommit;
    let htbPath;
    let learnCommit;
    let learnPath;

    const commits = await octokit.rest.repos.listCommits({
      owner : 'Wanasgheo',
      repo: 'Writeups',
      per_page:100
    })
    
    for(const commit of commits.data){
      const commitResponse = await octokit.rest.repos.getCommit({
        owner : 'Wanasgheo',
        repo: 'Writeups',
        ref : commit.sha
      })
      const commitData = commitResponse.data.files || [];
      
      if(!learnCommit){
        learnCommit = commitData.find(e => e.status === 'added' && e.filename.includes("README.md") && e.filename.includes("ctf-writeups") );
        if(learnCommit){
          learnPath = learnCommit.filename.replace("README.md","");
        }
      }


      if(!htbCommit){
        htbCommit = commitData.find(e => e.status === 'added' && e.filename.includes("README.md") && e.filename.includes("HackTheBox") );
        if(htbCommit){
          htbPath = htbCommit.filename.replace("README.md","");
        }
        
      }
      
      if(htbCommit && learnCommit){
        break;
      }
      
    }

      const [htbDecoded,learnDecoded] = await Promise.all([await getDirFile(htbPath+`${(htbPath as string).split("/")[2]}.txt`),
      await getDirFile(learnPath+`${(learnPath as string).split("/")[2]}.txt`)])
      const parsedData = JSON.parse(learnDecoded)
      const htbParsed = JSON.parse(htbDecoded)



    return(
      <>
        <main>
            <HomePage htbDecoded={htbParsed.link} htbPath={(htbPath as string)} 
            learnDecoded={parsedData.link} learnPath={(learnPath as string)}/>
        </main>
      </>
    )
};
/**
 * <HomePageBoxes htbDecoded={htbDecoded} htbPath={(htbPath as string).split("/")} 
          learnDecoded={learnDecoded} learnPath={(learnPath as string).split("/")}/>
          <HomePageLearn/>
 */


