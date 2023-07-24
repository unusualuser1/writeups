export default function HomePageLearn(){
    return(
        <div className="inline-flex 
                        translate-x-[20vw]
                        bg-[#495464]
                        h-[400px] 
                        w-[60vw] items-center 
                        rounded-[200px]"
        >

            <div className="
                                z-50 
                                bg-white
                                rounded-[50%]
                                h-[400px] w-[400px]"
            >
                <img src="../Learn_icon.png" alt="Learn icon" className="w-full h-4/3" ></img> 
            </div>
            
            <p className=" text-center translate-x-[20px] font-semibold"
            > 
                Here u will find a lot of content to learn the basis to hack the boxes 
            </p> 
            
        </div>
    )
}