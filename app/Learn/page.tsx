import ReactDOMServer from 'react-dom/server';
import getIdsFromHtml from "@/components/HTMLIdGetter";
import { PageWrapper } from "@/components/PageWrapper";
import WikiLearn_Page from "./[subject]/page";
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import Link from 'next/link';
import { octokit } from '@/lib/octo';
import { Endpoints } from "@octokit/types"
import { getDirFile, getDirectoryData } from '@/lib/apiUtils';
import AnimatedElement from '@/components/AnimatedElement';
import Image from "next/legacy/image";

//type Data = Endpoints["GET /repos/{owner}/{repo}/contents/{path}"]["response"]["data"];

    async function LearnPreview({id}:any){
        const decodedContent = await getDirFile(id.path+`/${id.name}.txt`)
        return(
            <AnimatedElement id={id.name} link={decodedContent}/>
        )
    }


export default async function Learn_Home(){

    const data = await getDirectoryData("Learn");

    {/* code to list the "id" of the main sections*/}
    //const fileContent = ReactDOMServer.renderToString(<WikiLearn_Page/>);

    //const ids = getIdsFromHtml(fileContent);
    //console.log(ids);
    
    //console.log(fileContent);

    return(
        <main>

            <PageWrapper>

                {/* icon */}
                <div className="flex justify-center ">
                    <div className="    bg-white
                                        rounded-[50%]
                                        xsm:h-[70px] xsm:w-[70px]
                                        sm:h-[150px] sm:w-[150px]
                                        md:h-[200px] md:w-[200px]
                                        relative"       
                >
                        <Image src="/Learn_icon.png" alt="Learn icon" layout='fill' objectFit='contain' objectPosition="center" loading='lazy'/> 
                    </div>
                </div>


                {/* Content Start */}
                <div className="bg-slate-500 rounded-xl flex justify-center flex-wrap translate-y-[50px] py-5
                                xsm:w-[70vw] xsm:translate-x-[15vw]
                                sm:w-[70vw] sm:translate-x-[15vw]
                                md:w-[50vw] md:translate-x-[25vw]">
                    {data?.map( (id) =>
                       <LearnPreview id={id} key={id.path}/>
                    )}
                    
                </div>

                


            </PageWrapper>
        </main>
    )
}