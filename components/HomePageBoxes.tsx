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
    const [img,setImg] = useState([""]);
    useEffect(()=>{
      async function fetchData(){
        let boxPath = null;
        const commits = await octokit.rest.repos.listCommits({
          owner : 'Wanasgheo',
          repo: 'Writeups',
          path: 'HackTheBox'
        })
        
        for(const commit of commits.data){
          const commitResponse = await await octokit.rest.repos.getCommit({
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
          const x = boxPath.split("/")
          setImg(x);
          const { data } =  await  octokit.rest.repos.getContent({
            owner: 'Wanasgheo',
            repo: 'Writeups',
            path: boxPath+`${x[2]}.txt`,
          }) 
          if(Array.isArray(data)) throw new Error('Failed to fetch data');
          if(data.type !== 'file') throw new Error('Failed to fetch data');
          setDecodedContent(atob(data.content))       
        }
        /*
        
        const f = img.split("/");
        const { data } =  await  octokit.rest.repos.getContent({
          owner: 'Wanasgheo',
          repo: 'Writeups',
          path: img+`${f[2]}.txt`,
        }) 
        if(Array.isArray(data)) throw new Error('Failed to fetch data');
        if(data.type !== 'file') throw new Error('Failed to fetch data');
        setDecodedContent(atob(data.content))       
        
        setR(f)*/
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
                <div className="flex justify-center w-full ">
                    <div className="translate-y-[30px] object-contain w-[200px]">
                        <Link href={`/HTB/${img[1]}/${img[2]}`} className="" >
                            <img className=" rounded-l-[150px] " src={decodedContent} alt="lastWriteupUploaded"></img>
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
