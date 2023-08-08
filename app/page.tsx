import HomePageBoxes from "@/components/HomePageBoxes"
import HomePageLearn from "@/components/HomePageLearn"
import { octokit } from "@/lib/octo";

export default async function Home(){
    let boxPath;
    let decodeContent = '';
    let x :string[] = [''];
    const commits = await octokit.rest.repos.listCommits({
      owner : 'Wanasgheo',
      repo: 'Writeups',
      path: 'HackTheBox'
    })
    
    for(const commit of commits.data){
      const commitResponse = await octokit.rest.repos.getCommit({
        owner : 'Wanasgheo',
        repo: 'Writeups',
        ref : commit.sha
      })

      const commitData = commitResponse.data.files || [];
      const addedFile = commitData.find(e => e.status === 'added' && e.filename.includes("README.md") && e.filename.includes("HackTheBox") );

      if(addedFile){
        boxPath = addedFile.filename.replace("README.md","");
        break;
      }
    }
    
    if(boxPath){
        x = boxPath.split("/")
      const { data } =  await  octokit.rest.repos.getContent({
        owner: 'Wanasgheo',
        repo: 'Writeups',
        path: boxPath+`${x[2]}.txt`,
      }) 
      if(Array.isArray(data)) throw new Error('Failed to fetch data');
      if(data.type !== 'file') throw new Error('Failed to fetch data');
      decodeContent = atob(data.content);       
    }
    return(
        <main>
            <HomePageBoxes decodeContent={decodeContent} boxPath={x}/>
            <HomePageLearn/>
        </main>
    )
}