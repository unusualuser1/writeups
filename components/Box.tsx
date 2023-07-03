export default function Box({ response } : any){
    //console.log(response)
    return(
        <div>
            {response?.map((resp : File) => {
              <div className="w-1/2 h-[150px] 
                              rounded-lg bg-orange-400
                              ">
                  <div className="w-full h-3/4 ">
                      <img className="w-full aspect-[2/3] object-contain" 
                           src="../HTB_logo.png"
                      ></img>
                  </div>                

                  <h1 className="text-center align-text-bottom" >{resp.name}</h1>
              </div>
            })}

          <h1>dentro</h1>

        </div>
    );
}