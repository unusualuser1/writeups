import DiffPreview from "./Difficulty"

export default function MainContent(){
    return(
        <>
            <div className="flex-wrap z-10 bg-red-700 h-44 translate-y-32 ">
                <DiffPreview/>
                <DiffPreview/>
                <DiffPreview/>
                <DiffPreview/>

            </div>
        </>
    )
} 