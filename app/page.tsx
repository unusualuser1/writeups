import { motion } from "framer-motion";
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
    const readme = await octokit.request(`GET /repos/Wanasgheo/Writeups/contents/${filename}`);

    const decodedContent = readme?.data.content ? atob(readme?.data.content.toString()) : "";

    const handleMouseEnter = (event) =>{
        const target = event.currentTarget;
        target.style.width='100%';
        target.style.color='white';
        target.style.fontSize='25px';
        target.style.background='#3a606e';
        target.zIndex = '1';
        target.style.transition = 'width 0.3s';
    }

    const handleMouseLeave = (event) =>{
        const target = event.currentTarget;
        target.style.width='33%';
        target.style.color='white';
        target.style.background='linear-gradient(rgba(255, 255, 255, 0.2),#061826)';
        target.style.fontSize='16px';
        target.zIndex = '0';
        target.style.transition = 'width 0.3s';
    }

    return(
        <main>
            <div className="flex
                            relative
                            w-screen
                            h-[550px] 
                            py-[80px] 
                            space-x-4
                            px-36"
            >
                <motion.div className=" gradient
                                        w-1/3
                                        text-white
                                        py-16
                                        px-4
                                        rounded-lg"
                            initial={{x: 0}}
                            onMouseEnter={(event) => handleMouseEnter(event)}
                            onMouseLeave={(event) => handleMouseLeave(event)}
                >
                    <center>
                        <p>ULTIMA MACCHINA CARICATA</p>
                    </center>
                </motion.div>

                <motion.div className=" gradient
                                        w-1/3
                                        h-full
                                        py-16
                                        px-4
                                        text-white
                                        rounded-lg"
                            initial={{x: 0}}
                            onMouseEnter={(event) => handleMouseEnter(event)}
                            
                            onMouseLeave={(event) => handleMouseLeave(event)}

                >
                    <center>
                        <p>ULTIMO LEARN CARICATO</p>
                    </center>
                </motion.div>

                <motion.div className=" gradient
                                        w-1/3
                                        h-full
                                        py-16
                                        px-4
                                        text-white
                                        rounded-lg "
                            initial={{ x: 0}}
                            onMouseEnter={(event) => handleMouseEnter(event)}
                            onMouseLeave={(event) => handleMouseLeave(event)}
                            

                >   
                    <center><h1>I PIU' CERCATI</h1></center>
                </motion.div>
            </div>
            
        </main>
    )
}