"use client";
import Image from "next/image";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";


function navbar() {

  const links=[
    {id:crypto.randomUUID() , title:'Home' ,href:"/"},
    {id:crypto.randomUUID() , title:'About' ,href:"/about"},
    {id:crypto.randomUUID() , title:'Menu' ,href:"/menu"},
    {id:crypto.randomUUID() , title:'Contact' ,href:"/contact"},
  ]
  return (
 <div className="navbar bg-[#4d4940b0] shadow-sm  fixed z-10 ">
  <div className="navbar-start">
    <div className="dropdown ">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> adadawd</svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          {links.map(links=>(
            <li key={links.id}>
              <Link href={links.href}>{links.title}</Link>
            </li>
          ))}
      </ul>
    </div>
    <Link href={'/'}>
    <Image src={"/logo.png"} alt="logo" width={60} height={60} className=" ml-8" />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-lg font-[600] text-[#fff] tracking-[2]">
          {links.map(links=>(
            <li key={links.id}>
              <Link href={links.href}>{links.title}</Link>
            </li>
          ))}
    </ul>
  </div>
  <div className="navbar-end">

   
    <Link href={'/cart'} className=" mx-3"><FaCartPlus className="text-white size-7"/></Link>

<div className="dropdown mr-5 dropdown-end">
  <div tabIndex={0}  className=" m-1"><RxAvatar className="size-10 text-white cursor-pointer" /></div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-30 p-2 text-center shadow-sm">
     <Link href={'/'} className="  btn rounded-md  tracking-[2] ">Login</Link>
    <Link href={'/'} className=" btn rounded-md tracking-[1]">Register</Link>
  </ul>
</div>

  </div>
</div>
  )
}

export default navbar