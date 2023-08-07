'use client'
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";
import gfm from "remark-gfm";

import { PageWrapper } from "./PageWrapper";
import { Octokit } from "octokit";
import { unified } from "unified";
import remarkParse from "remark-gfm";


const octokit = new Octokit({
  auth: process.env.TOKEN
});

export default async function HomePageBoxes(){
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
        target.style.background='#495464';
        target.zIndex = '1';
        target.style.transition = 'width 0.3s';
    }

    const handleMouseLeave = (event:any) =>{
        const target = event.currentTarget;
        target.style.width='50%';
        target.style.color='white';
        target.style.background='linear-gradient(rgba(255, 255, 255, 0.2),#061826)';
        target.style.fontSize='16px';
        target.zIndex = '0';
        target.style.transition = 'width 0.3s';
    }
    
    
    return(
      <PageWrapper>
        <div className="flex
                        relative
                        w-[60vw]
                        h-[550px] 
                        py-[100px] 
                        space-x-4
                        translate-x-[20vw]"
        >
            <motion.div className=" gradient
                                    w-1/2
                                    text-white 
                                    py-10
                                    px-4
                                    rounded-lg"
                        initial={{x: 0}}
                        onMouseEnter={(event) => handleMouseEnter(event)}
                        onMouseLeave={(event) => handleMouseLeave(event)}
            >
                <center>ULTIMA MACCHINA CARICATA<br/><br/>
                     <Link href={`/HTB/${dif_box[1]}/${dif_box[2]}`} className="">
                        <Image src={img.url} alt={img.alt} width="200" height="100" className=" rounded-xl"/>
                      </Link> 
                    
                </center>
            </motion.div>

            <motion.div className=" gradient
                                    w-1/2
                                    h-full
                                    py-10
                                    px-4
                                    text-white
                                    rounded-lg"
                        initial={{x: 0}}
                        onMouseEnter={(event) => handleMouseEnter(event)}
                        
                        onMouseLeave={(event) => handleMouseLeave(event)}

            >
                <center>
                    <p>ULTIMO LEARN CARICATO<br/><br/></p>
                </center>
            </motion.div>
        </div>
      </PageWrapper>
    )
}

