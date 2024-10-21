import Navbar from "../Component/Navbar"
import Image from "next/image"
export default function About(){
    return(
        <div className="h-14 bg-gradient-to-r from-purple-500 to-pink-400 min-h-screen flex-col mb-4 p-4 ">
   <p className="text-center text-black font-serif font-bold text-2xl"> ABOUT PAGE</p>
  

<h2 className="text-center text-5xl text-orange-700 m-4 animate-bounce text-transform: uppercase text-wrap: pretty">“Want to know what makes us special? Let's unveil our story!” </h2>
<div className="flex justify">
<Image 
src="/about page.image.jpg"
       alt= "About image"
       width="500"
       height= "300">
        </Image> 

<h1 className="text-left text-2xl text-black font-serif "> Your ultimate destination for beauty and relaxation in the heart of Karachi! Founded in 2015, Glamour Grove was born out of a passion for enhancing natural beauty and empowering individuals to feel their best. Our mission is to provide exceptional beauty services in a welcoming and luxurious environment, where each client leaves feeling rejuvenated and radiant. Our talented team of experienced beauticians and therapists, who are dedicated to their craft, are here to pamper you with personalized services tailored to your unique needs. At Glamour Grove, we believe in using high-quality, eco-friendly products that are kind to both you and the environment, ensuring that your beauty routine aligns with our commitment to sustainability. Join us in our journey of self-care and beauty, where every visit is not just an appointment, but an experience that celebrates you. Discover the beauty within you at Glamour Grove, where elegance meets comfort!</h1>
            </div>
            </div>)}