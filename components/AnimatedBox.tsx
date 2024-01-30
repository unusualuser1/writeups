
import Image from "next/legacy/image";
import Link from "next/link";
import { useEffect } from "react";


interface Props {
    srcImg: string,
    pathLink: string,
}

const AnimatedBox: React.FC<Props> = ({ srcImg, pathLink }) => {

    useEffect(() => {
        var elemenstToWatch = document.querySelectorAll('.check');
        var callback: IntersectionObserverCallback = function (items) {
            items.forEach((item) => {
                if (item.isIntersecting) {
                    item.target.classList.add('in-page-animatedBox');
                } else {
                    item.target.classList.remove('in-page-animatedBox');
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
        <div className=" check w-full h-full bg-transparent rounded-[40px]">
            
            <Link className="w-full h-full" href={pathLink}>
                <Image layout='fill' objectFit='contain' loading="lazy"  alt="lastUpload" src={srcImg}/>
            </Link>
        </div>
    );
}

export default AnimatedBox;