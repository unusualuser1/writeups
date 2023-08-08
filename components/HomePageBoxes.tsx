"use client"
import { motion } from "framer-motion";

import Link from "next/link";
import { octokit } from "@/lib/octo";
import gfm from "remark-gfm";

import { unified } from "unified";
import remarkParse from "remark-parse"
import { PageWrapper } from "./PageWrapper";

interface HomePageProps{
  decodeContent : string,
  boxPath : string[]
}

const HomePageBoxes : React.FC<HomePageProps> = ({decodeContent,boxPath}) => {

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
    
    
    return(
      <PageWrapper>
        <div className="m:flex m:relative pt-[100px]  m:translate-x-[20vw]
                        m:w-[60vw] m:h-[550px] m:flex-nowrap 
                        xsm:flex xsm:flex-wrap xsm:w-full xsm:items-center  xsm:justify-center"
        >
            <motion.div className=" gradient text-white rounded-lg 
                                    m:w-1/2 m:h-[350px] m:m-2 
                                    xsm:w-full xsm:h-[300px] xsm:py-10 xsm:px-4 xsm:m-2"
                        initial={{x: 0}}
                        onMouseEnter={(event) => handleMouseEnter(event)}
                        onMouseLeave={(event) => handleMouseLeave(event)}
            >
                <div className="  w-full h-[50px] text-center"><p className="xsm:text-[12px] sm:text-base">ULTIMA MACCHINA CARICATA</p></div>
                <div className="xsm:flex sm:flex-none m:flex xsm:justify-center xsm:w-full 
"
                >
                    <div className="xsm:translate-y-[40px] m:translate-[30px] object-contain sm:w-[100px] m:w-[200px]">
                        <Link href={`/HTB/${boxPath[1]}/${boxPath[2]}`} >
                            <img className=" rounded-l-[150px] " src={decodeContent} alt="lastWriteupUploaded"></img>
                        </Link>
                    </div>
                </div>
                    
            </motion.div>

            <motion.div className=" gradient text-white rounded-lg 
                                    m:w-1/2 m:h-[350px] m:m-2 
                                    xsm:w-full xsm:h-[300px] xsm:py-10 xsm:px-4 xsm:m-2"
                        initial={{x: 0}}
                        onMouseEnter={(event) => handleMouseEnter(event)}
                        onMouseLeave={(event) => handleMouseLeave(event)}
            >
                <div className="  w-full h-[50px] text-center"><p className="xsm:text-[12px] sm:text-base">ULTIMO LEARN CARICATO</p></div>
                <div className="xsm:flex sm:flex-none m:flex xsm:justify-center xsm:w-full 
"
                >
                    <div className="xsm:translate-y-[40px] m:translate-[30px] object-contain sm:w-[100px] m:w-[200px]">
                        <Link href={``} >
                            <img className=" rounded-l-[150px] " src={decodeContent} alt="lastWriteupUploaded"></img>
                        </Link>
                    </div>
                </div>
                    
            </motion.div>
        </div>
      </PageWrapper>
      
    )
}

export default HomePageBoxes;