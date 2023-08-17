"use client"
import { motion } from "framer-motion";

import Link from "next/link";
import { octokit } from "@/lib/octo";
import gfm from "remark-gfm";

import { unified } from "unified";
import remarkParse from "remark-parse"
import { PageWrapper } from "./PageWrapper";
import Image from "next/legacy/image";

interface HomePageProps{
  htbDecoded : string,
  learnDecoded : string,
  learnPath : string[],
  htbPath : string[]
}

const HomePageBoxes : React.FC<HomePageProps> = ({htbDecoded,htbPath,learnDecoded,learnPath}) => {

    htbDecoded = htbDecoded

    const handleMouseEnter = (event:any) =>{
        if(window.innerWidth>768){
            const target = event.currentTarget;
            target.style.width='100%';
            target.style.color='white';
            target.style.fontSize='25px';
            target.style.background='#495464';
            target.zIndex = '1';
            target.style.transition = 'width 0.7s';
        }
        
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
    
    // xsm:translate-y-[40px] m:translate-[30px] object-contain sm:w-[100px] m:w-[200px]
    // 
    return(
        <PageWrapper>
          <div className="md:flex md:relative   md:translate-x-[20vw]
                          md:w-[60vw] md:h-[550px] md:flex-nowrap 
                          xsm:flex xsm:flex-wrap xsm:w-full xsm:items-center  xsm:justify-center"
          >
            <motion.div className=" gradient text-white rounded-lg 
                                    m:w-1/2 m:h-[350px] m:m-2 
                                    xsm:w-full xsm:h-[300px] xsm:py-10 xsm:px-4 xsm:m-2"
                        initial={{x: 0}}
                        onMouseEnter={(event) => handleMouseEnter(event)}
                        onMouseLeave={(event) => handleMouseLeave(event)}
            >
                <div className="w-full h-[50px] text-center"><p className="xsm:text-[12px] sm:text-base">LAST LEARN UPLOADED</p></div>
                <div className="relative py-4  w-full h-[80%] xsm:flex sm:flex-none m:flex xsm:justify-center xsm:w-full">
                    
                    <Link href={`/HTB/${htbPath[1]}/${htbPath[2]}`} >
                        <Image layout='fill' objectFit='contain' objectPosition="center" className=" rounded-l-[150px]" loading="lazy"  alt="lastLearn" src={htbDecoded}/>
                    </Link>
                    
                </div>
                    
            </motion.div>

            <motion.div className=" gradient text-white rounded-lg 
                                    m:w-1/2 m:h-[350px] m:m-2 
                                    xsm:w-full xsm:h-[300px] xsm:py-10 xsm:px-4 xsm:m-2"
                        initial={{x: 0}}
                        onMouseEnter={(event) => handleMouseEnter(event)}
                        onMouseLeave={(event) => handleMouseLeave(event)}
            >
                <div className="w-full h-[50px] text-center"><p className="xsm:text-[12px] sm:text-base">LAST LEARN UPLOADED</p></div>
                <div className="relative w-full h-[80%] xsm:flex sm:flex-none m:flex xsm:justify-center xsm:w-full">
                    
                    <Link href={`Learn/${learnPath[1]}`}>
                        <Image layout='fill' objectFit='contain' objectPosition="center" className="rounded-l-[150px]" loading="lazy"  alt="lastLearn" src={learnDecoded}/>
                    </Link>
                    
                </div>
                    
            </motion.div>
          </div>
        </PageWrapper>
        
      )
}

export default HomePageBoxes;