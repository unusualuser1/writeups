'use client';
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";
import { Octokit } from "@octokit/rest";
import gfm from "remark-gfm";

import { unified } from "unified";
import remarkParse from "remark-parse"


const octokit = new Octokit({
  auth: process.env.TOKEN
});

export default async function HomePage3Boxes(){
    let count=0;  

    const commits = await octokit.rest.repos.listCommits({
      owner : 'Wanasgheo',
      repo: 'Writeups',
    })
    
    //pick latest commit

    let commitResponse = await octokit.rest.repos.getCommit({
      owner : 'Wanasgheo',
      repo: 'Writeups',
      ref: commits.data[0].sha,
    })

    let commitData = commitResponse.data.files || [];

    while(commitData[0].status !== 'modified' && !commitData[0].filename.includes('README.md') && !commitData[0].filename.includes('HackTheBox')){
      
      commitResponse = await octokit.rest.repos.getCommit({
        owner : 'Wanasgheo',
        repo: 'Writeups',
        ref: commits.data[count].sha,
      })
  
      commitData = commitResponse.data.files || [];
      count++;
    }

    
    //console.log('count:',count);
    
    const {status, filename } = commitData[0];

    const dif_box = filename.split('/')
    //console.log(dif_box)
    const readme = await octokit.request(`GET /repos/Wanasgheo/Writeups/contents/${filename}`);
    //console.log(readme)
    const decodedContent = readme?.data.content ? atob(readme?.data.content.toString()) : "";
    //console.log(decodedContent);
    const processor = unified().use(remarkParse);
    const ast = processor.parse(decodedContent);

    const elements:any = [];
    traverse(ast);

    function traverse(node : any) {
      elements.push(node);
      if (node.children) {
        node.children.forEach((child:any) => {
          traverse(child);
        });
      }
    }
    let img:any;
    elements.forEach((element:any) => {
      if(element.type === 'image'){
        img = element;
        return;
      }
      
    });

    const handleMouseEnter = (event:any) =>{
        const target = event.currentTarget;
        target.style.width='100%';
        target.style.color='white';
        target.style.fontSize='25px';
        target.style.background='#3a606e';
        target.zIndex = '1';
        target.style.transition = 'width 0.3s';
    }

    const handleMouseLeave = (event:any) =>{
        const target = event.currentTarget;
        target.style.width='33%';
        target.style.color='white';
        target.style.background='linear-gradient(rgba(255, 255, 255, 0.2),#061826)';
        target.style.fontSize='16px';
        target.zIndex = '0';
        target.style.transition = 'width 0.3s';
    }
    
    
    
    return(
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
                    LAST UPLOAD
                    <Link href={`/HTB/${dif_box[1]}/${dif_box[2]}`} className="w-2/3 h-300">
                        <Image src={img.url} alt={img.alt} width="300" height={"300"} className=" rounded-lg"/>
                    </Link>
                    
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
    )
}

