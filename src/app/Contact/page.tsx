import Navbar from "../Component/Navbar"
import Link from "next/link";
import Image from "next/image";
export default function ContactPage(){
    return(
<div className="min-h-screen flex flex-col items-center mb-4 p-4 bg-gradient-to-r from-purple-500 to-pink-400"> 
  <h1 className="text-center text-black font-serif font-bold text-2xl mb-4">CONTACT PAGE</h1>

  
  <h2 className="text-2xl font-bold mb-4 text-center text-5xl' text-rose-900 animate-pulse">GLAMOUR GROVE!</h2>
  {/* Contact Information Section */}
  <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg flex flex-col items-center">
  <h1 className="text-4xl font-bold mb-8 text-black animate-bounce flex flex-col items-center">Contact Us</h1>
    <p className="text-center text-lg mb-6 text-gray-700">
      We would love to hear from you! Reach out to us via the information below.
    </p>
    <div className="text-gray-800 space-y-4 text-center">
      <p><strong>Phone:</strong> +123 456 7890</p>
      <p><strong>Email:</strong> info@glamourgrove.com</p>
      <p><strong>Address:</strong> 123 Beauty Avenue, Glamour City, 45678</p>
      <p><strong>Business Hours:</strong> Mon-Sat: 9:00 AM - 7:00 PM, Sunday: Closed</p>
    </div>
    
    {/* Call Us Button */}
    <div className="flex justify-center mt-6">
      <Link href="tel:+1234567890" className="bg-green-800 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-lg">
        Call Us Now
      </Link>
    </div>
  </div>

  {/* Social Media Links Section */}
  <div className="mt-12 w-full max-w-lg flex flex-col items-center">
    <h3 className="text-xl font-semibold text-white mb-4 text-center">Follow Us on Social Media</h3>
    <div className="flex space-x-6 justify-center">
      <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <Image src="/instagram-icon.png" alt="Instagram" width={40} height={40} />
      </Link>
      <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <Image src="/facebook-icon.png" alt="Facebook" width={40} height={40} />
      </Link>
      <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <Image src="/twitter-icon.png" alt="Twitter" width={40} height={40} />
      </Link>
    </div>
  </div>
</div>)}






