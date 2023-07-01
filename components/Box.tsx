export default function Box({ response } : any){
    //console.log(response)
    return(
        <div>
            {response?.map((resp : File) => {
                return (
                    <div>
                        <h1>{resp.name}</h1>
                    </div>
                )
            })}
        </div>
    );
}