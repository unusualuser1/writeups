
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

