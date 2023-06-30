export default function BorderSpawner(name : any){
    if(name == "Easy"){
      return(
        <div className=" w-[20vw] h-[300px] justify-center items-center pt-16 pb-32 rounded-xl bg-white m-2 border-4 border-Easy">
            <h1 className=" text-black text-center align-text-bottom ">{name}</h1>
          </div>
      )
    }else if(name == "Medium" ){
      return(
        <div className=" w-[20vw] h-[300px] justify-center items-center pt-16 pb-32 rounded-xl bg-white m-2 border-4 border-Medium">
            <h1 className=" text-black text-center align-text-bottom ">{name}</h1>
          </div>
      )
    }else if(name == "Hard" ){
      return(
        <div className=" w-[20vw] h-[300px] justify-center items-center pt-16 pb-32 rounded-xl bg-white m-2 border-4 border-Hard">
            <h1 className=" text-black text-center align-text-bottom ">{name}</h1>
          </div>
      )
    }else{
      return(
        <div className=" w-[20vw] h-[300px] justify-center items-center pt-16 pb-32 rounded-xl bg-white m-2 border-4 border-Insane">
            <h1 className=" text-black text-center align-text-bottom ">{name}</h1>
          </div>
      )
    }
  }