"use client"
import ReactDOMServer from 'react-dom/server';
import getIdsFromHtml from "@/components/HTMLIdGetter";
import { PageWrapper } from "@/components/PageWrapper";
import WikiLearn_Page from "./WikiLearn/page";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { InView } from 'react-intersection-observer';
import Link from 'next/link';
import { octokit } from '@/lib/octo';
import { Endpoints } from "@octokit/types"

//type Data = Endpoints["GET /repos/{owner}/{repo}/contents/{path}"]["response"]["data"];


export default function Learn_Home(){



    const [learn,setLearn] : any= useState();

    useEffect(()=>{
        octokit.rest.repos.getContent({
            owner: 'Wanasgheo',
            repo: 'Writeups',
            path:"Learn",
          }).then(r => {
            const { data } = r;
                if(Array.isArray(data)){
                    setLearn(data)
                }
            }
            );
        
    },[])
    
    {/* animation code for scroll */}
    const AnimatedElement = (id:string) => {
        

        return(
            <InView trackVisibility>
                {({inView , ref}) => (
                    <motion.div key={id} 
                                className=" bg-white text-black m-2 rounded-xl text-center animated-element
                                            xsm:w-[50px] xsm:h-[50px]
                                            sm:w-[70px] sm:h-[110px]
                                            m:w-[100px] m:h-[130px]
                                            md:w-[150px] md:h-[180px]
                                            ld:w-[200px] ld:h-[230px]"
                                ref={ref}
                                initial={{scale: 0}} 
                                animate={{scale: inView ? 1 : 0 }} 
                                transition={{duration: 0.4}} 
                    >
                        <div className="xsm:w-full
                                        sm:w-full 
                                        md:w-full"
                        >
                            <Link href={"../Learn/WikiLearn#" + id} className="  ">
                                <img src="../../HTB_logo.png" alt="section_img" className=" w-full h-4/3 rounded-b-xl rounded-r-xl" loading='lazy'></img>
                            </Link>

                        </div>
                        <div className='flex items-center justify-center
                                        
                                        sm:w-full
                                        md:w-full'
                        >
                            <p className='xsm:invisible sm:visible '>{id}</p>  {/*TODO: manage ha to show id name for screens < 230px*/}
                        </div>
                        
                    </motion.div>
                )}
                
            </InView>
        )
    }

    

    {/* code to list the "id" of the main sections*/}
    const fileContent = ReactDOMServer.renderToString(<WikiLearn_Page/>);

    //const ids = getIdsFromHtml(fileContent);
    //console.log(ids);
    
    //console.log(fileContent);
    
    return(
        <main className="">

            <PageWrapper>

                {/* icon */}
                <div className="flex justify-center ">
                    <div className="    bg-white
                                        rounded-[50%]
                                        xsm:h-[70px] xsm:w-[70px]
                                        sm:h-[150px] sm:w-[150px]
                                        md:h-[200px] md:w-[200px]"
                                    
                >
                        <img src="../Learn_icon.png" alt="Learn icon" className="w-full h-4/3" ></img> 
                    </div>
                </div>


                {/* Content Start */}
                <div className="bg-slate-500 rounded-xl flex justify-center flex-wrap translate-y-[50px] py-5
                                xsm:w-[70vw] xsm:translate-x-[15vw]
                                sm:w-[70vw] sm:translate-x-[15vw]
                                md:w-[50vw] md:translate-x-[25vw]">
                    {learn?.map( (id : any) =>
                        AnimatedElement(id.name)
                    )}
                    
                </div>

                


            </PageWrapper>
        </main>
    )
}