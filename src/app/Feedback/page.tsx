import Navbar from "../Component/Navbar"
import Link from "next/link";
import Image from "next/image";
export default function FeedbackPage(){
    return(
<div className="min-h-screen flex flex-col items-center mb-4 p-4 bg-gradient-to-r from-purple-500 to-pink-400"> 
  <h1 className="text-center text-black font-serif font-bold text-2xl mb-4">FEEDBACK PAGE</h1>
 {/* Feedback Form */}
        <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-4 text-center text-yellow-500">We Value Your Feedback</h2>
          <textarea
            rows= {4}
            placeholder="Write your feedback here..."
            className="w-full p-4 border border-gray-300 rounded-lg mb-4"
            required
          />
          <div className="flex justify-center">
            <button type="submit" className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg font-semibold">
              Submit Feedback
            </button>
          </div>
        </form>
  
        {/* A message after submission (optional) */}
        <p className="mt-4 text-white">Thank you for your feedback!</p>
      </div>
    );
  }
  