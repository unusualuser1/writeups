import Header from "./components/Header"
import Footer from "./components/Footer"
import MainContent from "./components/MainContent"
import DiffPreview from "./components/Difficulty"

export default function Home() {
  return (
    <main>
      <Header/>


      <div className="flex flex-wrap w-full h-screen  pt-20 pb-36 bg-slate-500 justify-center items-center ">
        <DiffPreview/>
        <DiffPreview/>
        <DiffPreview/>
        <DiffPreview/>
      </div>
      

      <Footer/>

      
    </main>
  )
}
