'use client'
import { useShoppingCart } from "@/context/ShoppingCartContext";
import Link from "next/link";
import { useState } from "react";

export default function Navb(){
    const [sideNav,setSideNav] = useState(false)
    const showHideNav = ({event}:any) => {
        setSideNav(sideNav => !sideNav)
    }
    const {cartQuantity} = useShoppingCart()

    return (
    <>
        <nav className="sticky top-0 px-4 py-4 flex justify-between items-center bg-neutral-900 text-neutral-100 shadow-neutral-100 shadow-sm ">
            <Link href="/">
                <svg className="h-10 hover:scale-110 duration-500 ease-in-out" viewBox="0 0 843 468" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M592 68H292V468H592V68ZM482 128H352V408H482C509.614 408 532 385.614 532 358V178C532 150.386 509.614 128 482 128Z" fill="#F5F5F5"/>
                    <path d="M162.138 8.00538C166.28 0.830993 175.454 -1.62712 182.629 2.51501L325.373 84.9286C325.851 85.2047 326.015 85.8163 325.739 86.2946L299.055 132.513C298.779 132.991 298.167 133.155 297.689 132.879L154.945 50.4653C147.77 46.3232 145.312 37.1493 149.454 29.9749L162.138 8.00538Z" fill="#F5F5F5"/>
                    <path d="M183.141 187.399C187.283 180.224 196.457 177.766 203.631 181.908L322.11 250.312L294.426 298.262L175.947 229.859C168.772 225.716 166.314 216.543 170.456 209.368L183.141 187.399Z" fill="#F5F5F5"/>
                    <path d="M15.185 261.99C19.3271 254.816 28.501 252.358 35.6754 256.5L319.5 420.366L292 467.998L8.17539 304.131C1.001 299.989 -1.45714 290.815 2.685 283.641L15.185 261.99Z" fill="#F5F5F5"/>
                    <rect x="575" y="68" width="268" height="65" rx="15" fill="#F5F5F5"/>
                    <rect x="575" y="403" width="268" height="65" rx="15" fill="#F5F5F5"/>
                    <rect x="575" y="236" width="171" height="65" rx="15" fill="#F5F5F5"/>
                </svg>
            </Link>
            
            <div className="hidden w-full lg:block lg:w-auto" id="navbar-default">
                <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
                    <li className="hover:scale-110 duration-500">
                    <Link className="group text-neutral-100 text-xl transition-all duration-300 ease-in-out font-semibold" href="/">
                            <span className="bg-left-bottom bg-gradient-to-r from-neutral-100 to-neutral-100 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                                Home
                            </span>
                        </Link>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 rotate-90">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                        </svg>
                    </li>
                    <li className="hover:scale-110 duration-500">
                        <Link className="group text-neutral-100 text-xl transition-all duration-300 ease-in-out font-semibold" href="/products">
                            <span className="bg-left-bottom bg-gradient-to-r from-neutral-100 to-neutral-100 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                                Products
                            </span>
                        </Link>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 rotate-90">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                        </svg>
                    </li>
                    <li className="hover:scale-110 duration-500">
                        <Link className="group text-neutral-100 text-xl transition-all duration-300 ease-in-out font-semibold" href="/requests">
                            <span className="bg-left-bottom bg-gradient-to-r from-neutral-100 to-neutral-100 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                                Requests
                            </span>
                        </Link>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 rotate-90">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                        </svg>
                    </li>
                    <li className="hover:scale-110 duration-500">
                        <Link className="group text-neutral-100 text-xl transition-all duration-300 ease-in-out font-semibold" href="/about">
                            <span className="bg-left-bottom bg-gradient-to-r from-neutral-100 to-neutral-100 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                                About
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="flex">
                <Link href="/checkout" className="flex items-center relative">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" mr-1 w-7 h-7 hover:scale-125 duration-500 ease-in-out">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    {cartQuantity>0?
                    <div className="rounded-xl text-md w-3 h-3 absolute bottom-1.5 right-0 bg-gradient-to-r from-orange-400 to-red-600 text-center"></div>: null    
                }
                </Link>
                <div className="lg:hidden">
                    <button onClick={showHideNav} type="button" className="flex items-center text-neutral-100 p-3 hover:scale-125 duration-500 ease-in-out ml-1">
                        <svg className="block h-5 w-5 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                    
                </div>
            </div>
        </nav>
        {sideNav && <Mobile_Nav/>}
        {/* <div className="navbar-menu relative z-50 hidden">
            <div className="navbar-backdrop fixed inset-0 bg-zinc-600 opacity-25">
            <nav className="fixed top-0 left-0 bottom-0 flex flex0 col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">

            </nav>
            </div>
        </div> */}
        
        </>
    )}

function Mobile_Nav(){
    return(
        <>
            <div className="w-full h-60 bg-neutral-800 rounded-b-lg text-neutral-200 font-semibold text-xl font-sans divide-y-[1px] divide-gray-500">
       
                <div className=" w-full h-12 px-4 py-4 flex items-center text-center hover:bg-neutral-100">
                    <Link href="/" className="w-full">Home</Link>
                </div>
                <div className=" w-full h-12 px-4 py-4 flex items-center text-center hover:bg-neutral-100">
                    <Link href="/products" className="w-full">Products</Link>
                </div>
                <div className=" w-full h-12 px-4 py-4 flex items-center text-center hover:bg-neutral-100">
                    <Link href="/requests" className="w-full">Requests</Link>
                </div>
                <div className=" w-full h-12 px-4 py-4 flex items-center text-center hover:bg-neutral-100">
                    <Link href="/about" className="w-full">About</Link>
                </div>
                <div className=" w-full h-12 px-4 py-4 flex items-center text-center hover:bg-neutral-100">
                    <Link href="/checkout" className="w-full">Checkout</Link>
                </div>
                
            </div>
        </>
    )
}