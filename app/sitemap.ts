import { Metadata, MetadataRoute } from 'next'
import { getAllBoxes, getAllCtfs } from '@/lib/apiUtils'; 

export default async function sitemap(): Promise<MetadataRoute.Sitemap>{
    const baseurl = 'https://0xwriteups.vercel.app';
    const boxes = await getAllBoxes();
    const ctfs = await getAllCtfs();
  

  const boxesUrls = boxes.map((box)=>{
    return{
        url:`${baseurl}/${box.path}`,
        lastModified: new Date(),
    };
  }) ?? [];

  const ctfsUrls = ctfs.map((ctf)=>{
    return{
        url:`${baseurl}/${ctf.path}`,
        lastModified: new Date(),
    };
  }) ?? [];


  return [
    {
      url: baseurl,
      lastModified: new Date(),
    },
    ...boxesUrls,
    ...ctfsUrls
  ]
}