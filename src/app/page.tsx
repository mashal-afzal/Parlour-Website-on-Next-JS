import Image from "next/image";
import Navbar from "./Component/Navbar";
export default function Home() {
  return (
   <div className="h-14 bg-gradient-to-r from-purple-500 to-pink-400 min-h-screen flex-col mb-4 p-4 ">
   <p className="text-center text-black font-serif font-bold text-2xl"> HOME PAGE</p>
      <p className="m-4 text-center text-rose-900 font-serif text-5xl animate-bounce">"WELCOME TO GLAMOUR GROVE PARLOUR WEBSITE"</p>
      <p className="text-center font-extrabold text-red-950 animate-pulse"> Where Every Visit is a Glamorous Escape! </p>
      <div className="flex justify">
      <Image 
      src="/home page.image.jpg"
       alt= "Home page" 
       width="500"
       height= "300"></Image> 
    <h1 className="text-5xl font-bold text-gray-800 mb-4 m-10">Experience Timeless Beauty and Unmatched Relaxation</h1> </div>
  <div>
      <p className="text-lg text-black-900 font-serif" text-4xl>
      Step into a world of elegance and serenity at our luxurious parlour, where beauty meets sophistication. Whether it's a refreshing facial, a flawless hairstyle, intricate Mehendi or stunning makeup looks, our skilled professionals ensure a transformative experience tailored to your unique beauty needs. Indulge yourself with our premium services and leave feeling rejuvenated, radiant, and confident.
    </p> </div>
    <div className="flex justify-center m-4 bg-blue-500 text-white p-4rounded-lg hover:bg-blue-600 shadow-lg text-center">
    <button className="w-50 px-2 py-2 text-lg rounded-full animate-pulse">
      Book Your Appointment Today</button>
  </div>
</div>
    )}