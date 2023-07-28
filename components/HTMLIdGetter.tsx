
"use client"

import { useEffect, useState } from "react";


export async function getFileContent(filePath:string): Promise<string>{
    const response = await fetch(filePath);
    return await response.text();
}



export default function getIdsFromHtml(html: string): string[]{
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const elementsWithIds = doc.querySelectorAll('div');
    const idList: string[] = [];

    elementsWithIds.forEach((element)=>{
        if(element.id != '')
            idList.push(element.id);
    })

    return idList;
    
}

export function loadIds(filePath:string): string[]{
    const [fileContent, setFileContent] = useState<string>('');
    const [ids, setIds] = useState<string[]>([]);
    

    useEffect(() => {
        const filePath = 'http://localhost:3000/Learn/WikiLearn'
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

    return ids;
}

