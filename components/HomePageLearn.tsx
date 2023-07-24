import Link from "next/link"

export default function HomePageLearn(){
    return(
        <div className="inline-flex 
                        translate-x-[20vw]
                        bg-[#495464]
                        h-[400px] 
                        w-[60vw] items-center 
                        rounded-[200px]"
        >
            <Link href="/Learn">
                <div className="
                                    z-50 
                                    bg-white
                                    rounded-[50%]
                                    h-[400px] w-[400px]"
                >
                    <img src="../Learn_icon.png" alt="Learn icon" className="w-full h-4/3" ></img> 
                </div>
            </Link>

            <p className=" text-center translate-x-[20px] font-semibold"
            > 
                Here u will find a lot of content to learn the basis to hack the boxes 
                <br /> Let's start ! 
            </p> 
            
        </div>
    )
}