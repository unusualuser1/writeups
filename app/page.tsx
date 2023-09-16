import HomePageBoxes from "@/components/HomePageBoxes"
import HomePageLearn from "@/components/HomePageLearn"
import { getDirFile } from "@/lib/apiUtils";
import { octokit } from "@/lib/octo";
import Head from 'next/head';



export const metadata = {
  title: 'Writeups',
  description: 'Here u can find a lot of stuff',
}


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
          <Head>
            <meta name="google-site-verification" content="T2FrRrzXLHAe12g7Tf0b-r0P_0anHnydtBJOPcG53Ro" />
            <title>0xWriteups</title>
          </Head>
            <HomePageBoxes htbDecoded={htbParsed.link} htbPath={(htbPath as string)} 
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


