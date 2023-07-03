import Link from "next/link";

interface File{
    name: string;
    path: string;
    type: string;
    url: string;
    download_url: string;
  }

export default function DiffPreview ( {difficulty} : any){
   const {name, url} = difficulty;
    let x ='';

    if (name=='Easy')
        x = '#4cde2f';
    else if(name == 'Medium')
        x = '#c47621';
    else if(name == 'Hard')
        x = '#800909';
    else
        x = '#8a8880';
    return(
        <Link href={`/${name}`} className="m-1">
            <div className=" w-[250px] h-[300px] justify-center items-center rounded-xl bg-slate-300 m-2">
                <img className="w-full h-3/4 rounded-lg border-4 bg-[../HTB_logo.png]" style={{borderColor:x}} src="../HTB_logo.png"></img>
                <h1 className=" pt-6 pb-6 text-black text-center align-text-bottom">{name}</h1>
            </div>
        </Link>
        
        
        
    )
}