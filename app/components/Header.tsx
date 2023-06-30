export default function Header() {
    return (
        <>
            <div className ="fixed z-50 inline-flex h-14 w-full pr-8 bg-yellow-500">
              <div className="px-30 m-1">
                <img className="w-25 h-20 " src=""></img>
              </div>
              <div className="flex justify-end items-center w-full"> 
                <ul className="inline-flex space-x-8 m-1.5 ">
                  <li>Home</li>
                  <li>HTB</li>
                  <li>Latest Upload</li>
                </ul>
              </div>
            </div>
        </>
    )
}      