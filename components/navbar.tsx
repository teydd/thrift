"use client"

import { useCartStore } from "@/store/cart-store"
import { HamburgerIcon, ShoppingCart, XIcon } from "lucide-react"
import Link from "next/link"
import { useEffect, useEffectEvent, useState } from "react"
import { Button } from "./ui/button"

export const Navbar = ()=>{
    const [mobileOpen, setMobileOpen] = useState<boolean>(false)
    const { items } = useCartStore()
    const cartCount = items.reduce((acc, item)=> acc + item.quantity, 0)

    useEffect(()=>{
        const handleResize = ()=>{
            if(window.innerWidth >= 768){
                setMobileOpen(false)
            }
        }
        window.addEventListener("resize" , handleResize)

        return ()=> window.removeEventListener("resize", handleResize)
    },[])
    return (
        <>
        <nav className="sticky-top top-0 z-50 bg-white shadow-xl">
            <div className="container mx-auto flex items-center justify-between px-4 py-4">
                <Link className="hover:text-cyan-600 text-3xl" href={"/"}>
                Thrift Store
                </Link>
                <div className="space-x-6 hidden md:flex">
                <Link className="hover:text-cyan-600" href={"/"}>Home</Link>
                <Link className="hover:text-cyan-600" href={"/shop"}>Shop</Link>
                <Link className="hover:text-cyan-600" href={"/checkout"}>Checkout</Link>
            </div>
            <div className="flex items-center space-x-4">
                <Link className="relative" href={"/checkout"}>
                <ShoppingCart className="h-6 w-6"/>
                {cartCount > 0 && <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-cyan-200"> {cartCount} </span>}
                </Link>
                <Button className="md:hidden" variant="ghost" onClick={()=> setMobileOpen((prev)=> !prev)}>
                    {mobileOpen ? (<XIcon/>) : <HamburgerIcon/>}
                </Button>
            </div>
            </div>
            {mobileOpen && (
                <nav className="md:hidden bg-white sadow-md">
                    <ul className="flex flex-col p-4 spacy-y-2">
                        <li>
                            <Link className="block hover:text-cyan-600" href={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link className="block hover:text-cyan-600" href={"/shop"}>Shop</Link>
                        </li>
                        <li>
                            <Link className="block hover:text-cyan-600" href={"/checkout"}>Checkout</Link>
                        </li>
                    </ul>
                </nav>
            )}
        </nav>
        </>
    )
}