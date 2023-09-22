'use client';

import { useEffect,useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PageWrapper } from "./PageWrapper";
import { Box } from "./Box";
import React from "react";
import { itemsProps } from "@/lib/types";


  export default function Filter({ items, options, }: itemsProps) {
    
  const [difficulty, setDifficulty] : any = useState('all')
    return(
      <>
        {/* <PageWrapper> */}
          <div className="text-white bg-[#111111] rounded xsm:w-[150px] xsm:m-auto xm:w-[40vw] xm:translate-x-[30vw] xm:m-0 flex flex-wrap py-[50px] justify-center text-right border-2 border-[#3F4246]">
            <select onChange={e => setDifficulty(e.target.value)} className=" bg-[#3F4246] xm:fixed  right-[20px] -translate-y-[40px] rounded">

            <option value="all">All</option>
              {options.map((option)=>{
                return <option value={option.value} key={option.value}>{option.value}</option>
              })}
            </select>
            
            <div className="flex flex-wrap w-full h-full justify-center m:px-[10px]">
              {items?.filter((box)=>{
                if(difficulty !== 'all'){
                  return box.path.includes(difficulty)
                }else{
                  return box.path.includes('/')
                }
              }).map((box) =><Box name={box.name} path={box.path} key={box.sha} decodedContent={box.decodedContent}/>)}
            </div>
          </div>
        {/* </PageWrapper> */}
      </>

    );      
}
