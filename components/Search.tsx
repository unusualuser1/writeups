'use client';

import { useEffect,useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PageWrapper } from "./PageWrapper";
import { Box } from "./Box";
import React from "react";
import { Ctf } from "./Ctf";
import { itemsProps } from "@/lib/types";


  export default function Search({ items, options, }: itemsProps) {
  const [text, setText] : any = useState('')

    return(
      <>
        {/* <PageWrapper> */}
          <div className="text-white bg-[#111111] rounded xsm:w-[150px] xsm:m-auto xm:w-[40vw] xm:translate-x-[30vw] xm:m-0 flex flex-wrap py-[50px] justify-center text-right border-2 border-[#3F4246]">
            <input 
            onChange={e => setText(e.target.value)}
            className=" bg-[#3F4246] xm:fixed  right-[20px] -translate-y-[40px] rounded"
            placeholder="  Search here"
            />
             
            <div className="flex flex-wrap w-full h-full justify-center m:px-[10px]">
              {items?.filter((ctf)=>{
                if(text !== ''){
                  return ctf.path.toLowerCase().includes(text)
                }else{
                  return ctf.path.includes('/')
                }
              }).map((ctf) =><Ctf name={ctf.name} path={ctf.path} key={ctf.sha} decodedContent={ctf.decodedContent}/>)}
            </div>
          </div>
        {/* </PageWrapper> */}
      </>

    );      
}