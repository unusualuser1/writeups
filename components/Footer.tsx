import Image from "next/legacy/image";

export default function Footer(){
    return (
        <>
            <div className="text-white bg-Footer relative h-[100px] z-10 bottom-0 clear-both px-16 py-5 mt-[100px]"> {/*se non funge rimettere  mt-[-100px]*/}

                <div className="flex justify-center">
                    <p>Follow us :!</p>
                </div>

                <div className="flex justify-center w-full h-full">
                    <div className="w-[40px] h-[40px] relative">
                        <Image layout='fill' objectFit='contain' objectPosition="center" src="/Insta.png" alt="Instagram" loading="lazy"/>
                    </div>
                    <div className="w-[40px] h-[40px] relative">
                        <Image layout='fill' objectFit='contain' objectPosition="center" src="/Facebook.png" alt="FaceBook" loading="lazy"/>
                        </div>
                    <div className="w-[40px] h-[40px] relative">
                        <Image layout='fill' objectFit='contain' objectPosition="center" src="/Linkedin.png" alt="Linkedin" loading="lazy"/>
                    </div>
                </div>

                

            </div>
        </>
    )
} 