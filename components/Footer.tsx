import Image from "next/legacy/image";

export default function Footer(){
    return (
        <>
            <div className="text-white bg-Footer flex flex-wrap relative h-[100px] z-10 bottom-0 left-0 px-16 py-5 mt-[100px]"> {/*se non funge rimettere  mt-[100px]*/}

                <div className="flex justify-center w-full h-1/2">
                    <p>Follow us ｡◕‿◕｡ </p>
                </div>

                <div className="flex justify-center w-full h-1/2 space-x-2">
                    <div className="w-[40px] h-[40px] relative hover:scale-[0.8] rounded-xl hover:bg-white hover:cursor-pointer transition duration-700">
                        <Image className="hover:filter hover:brightness-0 transition  duration-700" layout='fill' objectFit='contain' objectPosition="center" src="/Insta.png" alt="Instagram" loading="lazy"/>
                    </div>
                    <div className="w-[40px] h-[40px] relative hover:scale-[0.8] rounded-xl hover:bg-white hover:cursor-pointer transition duration-700">
                        <Image className="hover:filter hover:brightness-0 transition  duration-700" layout='fill' objectFit='contain' objectPosition="center" src="/Facebook.png" alt="FaceBook" loading="lazy"/>
                        </div>
                    <div className="w-[40px] h-[40px] relative hover:scale-[0.8] rounded-xl hover:bg-white hover:cursor-pointer transition duration-700">
                        <Image className="hover:filter hover:brightness-0 transition  duration-700" layout='fill' objectFit='contain' objectPosition="center" src="/Linkedin.png" alt="Linkedin" loading="lazy"/>
                    </div>
                </div>

                

            </div>
        </>
    )
} 