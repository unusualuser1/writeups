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

interface HomePageProps{
  decodeContent : string,
  boxPath : string[]
}

const HomePageBoxes : React.FC<HomePageProps> = ({decodeContent,boxPath}) => {

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
                        <Link href={`/HTB/${boxPath[1]}/${boxPath[2]}`} className="" >
                            <img className=" rounded-l-[150px] " src={decodeContent} alt="lastWriteupUploaded"></img>
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

export default HomePageBoxes;