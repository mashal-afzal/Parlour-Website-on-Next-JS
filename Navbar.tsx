import Link from "next/link";
export default function Navbar(){
    return(
        <div className="bg-black text-justify  flex justify-between items-center h-16">
        <Link href="Home" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-yellow-500">Home</Link>
        <Link href="About" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-yellow-500">About</Link>
        <Link href="Services" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-yellow-500">Services</Link>
        <Link href="Contact" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-yellow-500">Contact</Link>
        <Link href="Feedback" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-yellow-500">Feedback</Link>
        <Link href="Reviews" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-yellow-500">Review</Link>
           
        </div>
    )
}