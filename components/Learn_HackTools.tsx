import Link from "next/link"




export default function Learn_HackTools(){
    return(
        <>
            <div className="    text-black
                                flex 
                                justify-center
                                border-2 
                                border-green-600
                                h-[50px]
                                bg-white
                                rounded-xl"
            >
                Scanning tools
            </div>


           
            <div className="text-black
                            flex flex-col
                            border-2 
                            border-green-600
                            w-full
                            h-[232px]"
            >   
                {/* ROW 1 */}
                <div className="flex w-full h-1/2">
                    
                    <div className="border-2 
                                    border-orange-500 
                                    w-[50%]
                                    flex"
                    >
                        <Link href="/Learn/HackTools#nmap     ">
                            {/* questo link serve per raggiungere una sezione specifica di una pagina, 
                            per farlo bisogna assegnare a quell asezione un id che è uguale alla parte 
                            dopo l'"#" nel link */}
                            <div className=" w-[150px] h-full object-contain aspect-[3/2] ">
                                <img src="../nmap.jpeg" className="h-full rounded-l-xl" alt="nmap_img" />
                            </div>
                        </Link>   
                        <div className=" bg-white text-black w-full h-full text-center rounded-r-xl py-9 align-middle"
                        >
                            NMAP
                        </div>
                        

                    </div>

                    <div className="border-2 
                                    border-orange-500 
                                    w-[50%]
                                    flex"
                    >
                        <Link href="/NMAP/#nmap     ">
                            {/* questo link serve per raggiungere una sezione specifica di una pagina, 
                            per farlo bisogna assegnare a quell asezione un id che è uguale alla parte 
                                dopo l'"#" nel link */}
                            <div className=" w-[150px] h-full object-contain aspect-[3/2] ">
                                <img src="../nmap.jpeg" className="h-full rounded-l-xl" alt="nmap_img" />
                            </div>
                        </Link>   
                        <div className=" bg-white text-black w-full h-full text-center rounded-r-xl py-9 align-middle"
                        >
                            NMAP
                        </div>
                        

                    </div>
                    
                </div>
                {/* END ROW 1 */}

                {/* ROW 2 */}
                <div className="flex w-full h-1/2">
                    <div className="border-2 
                                    border-orange-500 
                                    w-[50%]
                                    flex"
                    >
                        <Link href="/NMAP/#nmap     ">
                            {/* questo link serve per raggiungere una sezione specifica di una pagina, 
                            per farlo bisogna assegnare a quell asezione un id che è uguale alla parte 
                                dopo l'"#" nel link */}
                            <div className=" w-[150px] h-full object-contain aspect-[3/2] ">
                                <img src="../nmap.jpeg" className="h-full rounded-l-xl" alt="nmap_img" />
                            </div>
                        </Link>   
                        <div className=" bg-white text-black w-full h-full text-center rounded-r-xl py-9 align-middle"
                        >
                            NMAP
                        </div>
                        

                    </div>
                    <div className="border-2 
                                    border-orange-500 
                                    w-[50%]
                                    flex"
                    >
                        <Link href="/NMAP/#nmap     ">
                            {/* questo link serve per raggiungere una sezione specifica di una pagina, 
                            per farlo bisogna assegnare a quell asezione un id che è uguale alla parte 
                                dopo l'"#" nel link */}
                            <div className=" w-[150px] h-full object-contain aspect-[3/2] ">
                                <img src="../nmap.jpeg" className="h-full rounded-l-xl" alt="nmap_img" />
                            </div>
                        </Link>   
                        <div className=" bg-white text-black w-full h-full text-center rounded-r-xl py-9 align-middle"
                        >
                            NMAP
                        </div>

                    </div>
                </div>
                {/* END ROW 2 */}


            </div>
        </>
    )
}