'use client';
import { getDirectoryData, getDirFile} from "@/lib/apiUtils";
import HTB_Home from "@/app/HTB/page";
import { ChangeEventHandler, SelectHTMLAttributes } from "react";
import { useEffect,useState } from "react";
import BoxPreview from "./BoxPreview";
import { Endpoints, OctokitResponse } from "@octokit/types";
import { components } from "@octokit/openapi-types"
import Link from "next/link";
import Image from "next/image";
import { octokit } from "@/lib/octo";
import { PageWrapper } from "./PageWrapper";
import Box from "./Box";

type BoxItemProps = {
  name : string,
  path : string,
  sha : string
  decodedContent : string
}

  type DirectoryItem = components["schemas"]["content-directory"];
  export default function Filter({ boxes }: { boxes: { name: string; path: string; sha: string; decodedContent: string}[]; }) {
  //console.log('b',boxes) 
 
  const [difficulty, setDifficulty] : any = useState('all')
   /*
  const [boxes, setBoxes] = useState<DirectoryItem>()*/
    
    useEffect(()=>{
      /*
      const getData = () => {
        Promise.all([getDirectoryData('HackTheBox/Easy'),getDirectoryData('HackTheBox/Medium')]).then(r => setBoxes(r.reduce((a,b)=> {return a.concat(b)})))
      }
      
      if(!boxes){
        getData()
      }*/

        window.addEventListener('click',function(e){
            if(!document.getElementById('dropdown-button')?.contains(e.target as Node)){
                document.getElementById('dropdown-menu')?.classList.add('hidden')
            }
        })
        
    },[])


    
    return(
      <>
        <PageWrapper>

          <div className=" bg-[#111111] rounded w-[60vw] translate-x-[20vw] flex flex-wrap py-[50px] justify-center text-right border-2 border-[#3F4246]">      
            <select onChange={e => setDifficulty(e.target.value)} className=" bg-[#3F4246] fixed right-[20px] -translate-y-[40px] rounded">
            <option value="all">All</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
              <option value="Insane">Insane</option>
            </select>
            
            <div className="flex flex-wrap w-full h-full justify-center m:px-[10px]">
              {boxes?.filter((box)=>{
                if(difficulty !== 'all'){
                  return box.path.includes(difficulty)
                }else{
                  return box.path.includes('HackTheBox')
                }
              }).map((box) =><Box name={box.name} difficulty={box.path.split("/")[1]} key={box.sha} decodedContent={box.decodedContent}/>)}
            </div>
          </div>
        </PageWrapper>
      </>

    );      
}


/**
 * <button className="py-2 px-4 bg-blue-500 text-white rounded shadow-md" id="dropdown-button" onClick={toggleDropdown}>
          
          menu a tendina  <i className="border-solid border-white border-r-2   border-b-2 display: inline-block p-[3px] transform: rotate-[45deg]" id="dropdown-icon"></i>
        </button>
        <ul className="absolute hidden mt-2 py-2 w-32 bg-white rounded shadow-md" id="dropdown-menu">
          <li><a className="block px-4 py-2 hover:bg-gray-100"></a></li>
        </ul>
 */