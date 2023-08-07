"use client"
import { motion, useScroll } from "framer-motion";

import Image from "next/image";
import Link from "next/link";
import { octokit } from "@/lib/octo";
import gfm from "remark-gfm";

import { unified } from "unified";
import remarkParse from "remark-parse"
import { PageWrapper } from "./PageWrapper";
import { useEffect, useState } from "react";


export default function HomePageBoxes(){
    const [decodedContent,setDecodedContent] = useState("");
    const [r,setR] = useState([""]);
    useEffect(()=>{
      async function fetchData(){
        let count = 0;
        let x = true;
        const commits = await octokit.rest.repos.listCommits({
          owner : 'Wanasgheo',
          repo: 'Writeups',
          path: 'HackTheBox'
        })
        
        let commitResponse = null;
        let commitData = null;
        let img = '';
        
        //setImg(commits.data[0].sha)
        do{
          commitResponse = await octokit.rest.repos.getCommit({
            owner:'Wanasgheo',
            repo:'Writeups',
            ref: commits.data[count].sha});
  
            commitData = commitResponse.data.files || [];
            commitData.forEach(e => {
              if(e.status === 'added' && e.filename.includes("README.md") && e.filename.includes("HackTheBox")){
                img = e.filename.replace("README.md","");
                x = false;
              }
            })
            count++;
        }while(x)
        const f = img.split("/");
        const { data } =  await  octokit.rest.repos.getContent({
          owner: 'Wanasgheo',
          repo: 'Writeups',
          path: img+`${f[2]}.txt`,
        }) 
        if(Array.isArray(data)) throw new Error('Failed to fetch data');
        if(data.type !== 'file') throw new Error('Failed to fetch data');
        setDecodedContent(atob(data.content))       
        
        setR(f)
      }

      fetchData();
    },[]);
    

    const handleMouseEnter = (event:any) =>{
        const target = event.currentTarget;
        target.style.width='100%';
        target.style.color='white';
        target.style.fontSize='25px';
        target.style.background='#495464';
        target.zIndex = '1';
        target.style.transition = 'width 0.7s';
    }

    const handleMouseLeave = (event:any) =>{
        const target = event.currentTarget;
        target.style.width='50%';
        target.style.color='white';
        target.style.background='linear-gradient(rgba(255, 255, 255, 0.2),#061826)';
        target.style.fontSize='16px';
        target.zIndex = '0';
        target.style.transition = 'width 0.7s';
    }
    
    
    return(
      
      <PageWrapper>
        <div className="flex relative py-[100px] space-x-4 translate-x-[20vw]
                        w-[60vw] h-[550px] 
                        "
        >
            <motion.div className=" gradient
                                    w-1/2
                                    h-[350px]
                                    text-white 
                                    py-10
                                    px-4
                                    rounded-lg                                    "
                        initial={{x: 0}}
                        onMouseEnter={(event) => handleMouseEnter(event)}
                        onMouseLeave={(event) => handleMouseLeave(event)}
            >
                <div className="w-full h-[50px] text-center">ULTIMA MACCHINA CARICATA</div>
                <div className="flex justify-center w-full h-[300px]">
                    <div className="translate-y-[30px] object-contain w-[200px]">
                        <Link href={`/HTB/${r[1]}/${r[2]}`} className="" >
                            <img className=" rounded-l-[150px] " src={'https://www.hackthebox.com/storage/avatars/0fb6455a29eb4f2682f04a780ce26cb1.png'} alt="lastWriteupUploaded"></img>
                        </Link>
                    </div>
                </div>
                    
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
               <div className="w-full h-[50px] text-center">ULTIMA LEARN CARICATO</div>
                <div className="flex justify-center w-full h-[300px]">
                    <div className=" object-contain w-[200px]">
                        <Link href={``} className="" >
                            <img className=" rounded-l-[150px] " src={''} alt=""></img>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
      </PageWrapper>
      
    )
}

/*
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

*/
