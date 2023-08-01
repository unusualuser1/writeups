export default function Footer(){
    return (
        <>
            <div className=" bg-Footer relative h-[100px] clear-both mt-20 mb-4 mr-4 ml-4 rounded-xl px-16 py-5"> {/*se non funge rimettere  mt-[-100px]*/}

                <div className="flex justify-center">
                    <p>Follow us :]</p>
                </div>

                <div className="flex justify-center w-full h-full">
                    <div className="w-[40px] h-[40px] object-contain">
                        <img className="h-4/3 w-full" src="../Insta.png" alt="Instagram" />
                    </div>
                    <div className="w-[40px] h-[40px] object-contain">
                        <img className="h-4/3 w-full" src="../Facebook.png" alt="FaceBook" />
                        </div>
                    <div className="w-[40px] h-[40px] object-contain">
                        <img className="h-4/3 w-full" src="../Linkedin.png" alt="Linkedin" />
                    </div>
                </div>

                

            </div>
        </>
    )
} 