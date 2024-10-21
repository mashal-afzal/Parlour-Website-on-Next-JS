import Navbar from "../Component/Navbar"
import Image from "next/image";
import Link from "next/link";
export default async function Service(){
    await new Promise((resolve)=> {setTimeout(resolve,5000);
        
    })
    return(
        <div className="h-14 bg-gradient-to-r from-purple-500 to-pink-400 min-h-screen flex-col mb-4 p-4 "> 
            <h1 className="text-center text-black font-serif font-bold text-2xl"> SERVICES PAGE</h1>
            <nav className="mb-6">
  <h2 className="text-9xl text-center text-yellow-950">Variety Of Offerings! </h2>
  <ul className="list-none"></ul>
        
            <ul className="list-item">
            
          <h1>  <Link href="/Services/Facials"className=" text-black  text-8xl px-4 py-2 rounded-md hover:bg-yellow-500">Facials</Link> </h1>
          
      <h1> <Link href="/Services/Mehendi"className=" text-black text-8xl px-4 py-2 rounded-md hover:bg-yellow-500">Mehendi </Link> </h1>
      <h1> <Link href="Services/Makeup"className="text-black text-8xl px-4 py-2 rounded-md hover:bg-yellow-500">Makeup</Link> </h1>
       <h1> <Link href="Services/Haircut"className="text-black text-8xl px-4 py-2 rounded-md hover:bg-yellow-500">Haircut</Link> </h1>
        <h1> <Link href="Services/MeniAndPedi"className="text-black text-8xl px-4 py-2 rounded-md hover:bg-yellow-500">Menicure And Pedicure</Link>  </h1>
               
              </ul> </nav> </div>
                
    )
}