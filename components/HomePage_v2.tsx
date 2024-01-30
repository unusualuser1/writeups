'use client'
import { useEffect } from "react";
import AnimatedBox from "./AnimatedBox";

interface HomePageProps {
    htbDecoded: string,
    learnDecoded: string,
    learnPath: string,
    htbPath: string
}

const HomePage: React.FC<HomePageProps> = ({ htbDecoded, htbPath, learnDecoded, learnPath }) => {

    useEffect(() => {
        var elemenstToWatch = document.querySelectorAll('.watch');
        var callback: IntersectionObserverCallback = function (items) {
            items.forEach((item) => {
                if (item.isIntersecting) {
                    item.target.classList.add('in-page');
                } else {
                    item.target.classList.remove('in-page');
                }
            });
        }


        var observer = new IntersectionObserver(callback, { threshold: 0.5 });
        elemenstToWatch.forEach((element) => {
            observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>

            {/* Introducing phrase */}
            <div className="relative h-auto p-8">
                <div className="absolute inset-0 bg-white bg-opacity-40 blur-3xl">
                </div>
                <h1 className="relative z-9 text-center text-[40px] text-white">
                    <i>Celebrating the Art of Hacking: One Machine at a Time</i>
                </h1>
            </div>


            <div className="w-[70%] h-[200vh] md:w-[50%] ">

                {/* First Section */}
                <div className="w-full h-[30%] watch">
                    <div className="w-full h-auto">
                        <h2 className="mb-[10px] text-3xl">Titolo sezione 1</h2>
                        <p className=" text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis assumenda accusamus quos exercitationem quo neque in libero quis ab ex earum,
                            
                        </p>
                    </div>
                </div>


                {/* Second Section */}
                <div className="w-full h-[30%] watch flex flex-wrap ">
                    <div className="md:w-[50%] w-full h-auto">
                        <h2 className="mb-[10px] text-3xl">Titolo sezione 2</h2>
                        <p className=" text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis assumenda accusamus quos exercitationem quo neque in libero quis ab ex earum,
                            <br /><br /> <a href="/HackTheBox" className=" font-normal text-blue-700"> Follow the link</a>
                        </p>
                    </div>

                    <div className="md:w-[40%] w-[80%] aspect-square md:ml-auto m-auto">
                        <AnimatedBox srcImg={htbDecoded} pathLink={htbPath} />
                    </div>
                </div>



                {/* Third Section */}
                <div className="w-full h-[30%] watch flex flex-wrap">
                    <div className="md:w-[50%] h-auto">
                        <h2 className="mb-[10px] text-3xl">Titolo sezione 3</h2>
                        <p className=" text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis assumenda accusamus quos exercitationem quo neque in libero quis ab ex earum,
                            <br /><br /> <a href="/ctf-writeups" className=" font-light"> Follow the link</a>
                        </p>
                    </div>

                    <div className="md:w-[40%] w-[80%] aspect-square md:ml-auto m-auto">
                        <AnimatedBox srcImg={learnDecoded} pathLink={learnPath} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage