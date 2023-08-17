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
        {/* <PageWrapper> */}
          <div className=" bg-[#111111] rounded xsm:w-[150px] xsm:m-auto xm:w-[40vw] xm:translate-x-[30vw] xm:m-0 flex flex-wrap py-[50px] justify-center text-right border-2 border-[#3F4246]">
            <select onChange={e => setDifficulty(e.target.value)} className=" bg-[#3F4246] xm:fixed  right-[20px] -translate-y-[40px] rounded">
            <option value="all">All</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
              <option value="Insane">Insane</option>
            </select>
            
            <div className="flex flex-wrap w-full h-full justify-center px-[20px]">
              {boxes?.filter((box)=>{
                if(difficulty !== 'all'){
                  return box.path.includes(difficulty)
                }else{
                  return box.path.includes('HackTheBox')
                }
              }).map((box) =><Box name={box.name} difficulty={box.path.split("/")[1]} path={box.path} key={box.sha} decodedContent={box.decodedContent}/>)}
            </div>
          </div>
        {/* </PageWrapper> */}
      </>

    );      
}

const Box = ({name, difficulty,path, decodedContent}:any) =>{
  
  
  return(

    <div className="flex xm:flex-wrap
                    md:w-[300px] 
                    xm:w-[250px] xm:h-[250px]
                    xsm:w-[100px] xsm:h-[100px]
                    m-2
                    bg-white 
                    justify-center rounded-[50px]
                    transform hover:scale-[0.95]
                    transition-all"
    >
      <Link href={`/HTB/${difficulty}/${name}`} className="w-[100px] h-[100px] relative">
        <div className=" w-full h-full  ">
          <Image className="rounded-[50px]" layout='fill' objectFit='contain' objectPosition="center" loading='lazy' src={decodedContent}  alt=" "/>
        </div>
      </Link> 

      
      <div className="flex md:w-[200px] md:h-[30px] xmd:h-[100px] xm:w-[150px] xm:h-[30px] xsm:w-0 justify-center items-center "> 
        <center><h2 className="text-black  ">{name}</h2></center>
      </div>

      <div className="xsm:invisible xm:visible xsm:w-0 md:px-[50px] md:py-[20px] xm:px-[20px] xm:py-[5px] xm:w-full md:h-[150px] xm:h-[120px] flex items-center justify-center  text-black">
        asdsads
      </div>
    </div>
  )
}

/**
 * <button className="py-2 px-4 bg-blue-500 text-white rounded shadow-md" id="dropdown-button" onClick={toggleDropdown}>
          
          menu a tendina  <i className="border-solid border-white border-r-2   border-b-2 display: inline-block p-[3px] transform: rotate-[45deg]" id="dropdown-icon"></i>
        </button>
        <ul className="absolute hidden mt-2 py-2 w-32 bg-white rounded shadow-md" id="dropdown-menu">
          <li><a className="block px-4 py-2 hover:bg-gray-100"></a></li>
        </ul>
 */