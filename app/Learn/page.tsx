"use client"

import { useEffect, useState } from "react";
import { getFileContent } from "@/components/HTMLIdGetter";
import getIdsFromHtml from "@/components/HTMLIdGetter";
import Learn_HackTools from "@/components/Learn_HackTools";
import { PageWrapper } from "@/components/PageWrapper";


export default function Learn_Home(){

    const [fileContent, setFileContent] = useState<string>('');
    const [ids, setIds] = useState<string[]>([]);
    
    const filePath = 'http://localhost:3000/Learn/WikiLearn/'

    useEffect(() => {
        
        getFileContent(filePath)
            .then((content) =>{
                setFileContent(content);
                const ids = getIdsFromHtml(content);
                console.log(ids);
                setIds(ids);
                
                console.log(content)
            })
            .catch((error)=>{
                console.error('Errore durante il recupero del contenuto del file', error);
            });
    }, []);
    
    return(
        <main>
            <PageWrapper>
                {/* icon */}
                <div id="ciao" className="flex justify-center">
                    <div className="
                                        bg-white
                                        rounded-[50%]
                                        h-[200px] w-[200px]"
                                    
                >
                        <img src="../Learn_icon.png" alt="Learn icon" className="w-full h-4/3" ></img> 
                    </div>
                </div>

                {/* content start */}
                <div id="Learn_Content" className=" flex 
                                                    translate-y-[250px]
                                                    translate-x-[17.5vw]
                                                    max-w-[1350px]  
                                                    w-[65vw] 
                                                    h-[400px]
                                                    px-1 py-1"
                >
                    {/* Hack Tools */}
                    <div className="
                                    w-[65%] 
                                    h-[300px] 
                                    border-2 
                                    border-rose-600
                                    rounded-xl
                                    px-2 py-2"
                    >
                        <Learn_HackTools/>
                    </div>
                    
                    {/* something else */}
                    <div className="w-[35%]
                                    h-full 
                                    border-2 
                                    border-rose-600
                                    bg-white
                                    px-4
                                    py-6
                                    text-black
                                    rounded-xl
                                    overflow-hidden 
                                    overflow-y-scroll"
                    >
                    <ul>
                        {ids.map((id)=>(
                            <li key={id}>{id}</li>
                        ))}
                    </ul>
                    </div>
                </div>
            </PageWrapper>
        </main>
    )
}