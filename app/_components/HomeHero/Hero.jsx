"use client";
import Link from "next/link";
import "./home.css";
function Hero() {
  return (
    <div className="img h-screen  flex justify-center items-center">
      <div className="container m-auto">
        <div className="text-center" >
           <div className="text-[50px] font-[600] text-[#d07635] mb-3">
              <p >Hagoga is the essence of food </p>
              <p>Home . Farmer</p>
           </div>
           <div>
             <Link href={'/menu'} className="btn bg-[#d07635] hover:bg-orange-500  border-none rounded-4xl text-[18px] text-[#fff] w-45 tracking-[3]">
             Menu</Link>
             <Link href={'/about'} className="btn m-3  border-none rounded-4xl text-[18px] w-45 tracking-[3]"> Learn More</Link>
           </div>
      </div>
      </div>  
    </div>
  )
}

export default Hero