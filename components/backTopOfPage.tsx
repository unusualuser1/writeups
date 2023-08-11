'use client'
export default function TopOfPageButton(){
    const scrollToTop = () =>{
        window.scrollTo({
            top:0,
            behavior: 'smooth',
        })
    }
    
    return(
        <button onClick={scrollToTop} className=" bg-white w-[40px] h-[40px] pt-[2px] rounded-[100%]">
            <img src="../../../frecciaSu.png" className=" rotate-180"></img>
        </button>
    )
}