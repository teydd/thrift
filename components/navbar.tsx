import Link from "next/link"

export const Navbar = ()=>{
    return (
        <>
        <nav className="sticky-top top-0 z-50 bg-white shadow-xl">
            <div className="container mx-auto flex items-center justify-between px-4 py-4">
                <Link className="hover:text-cyan-600" href={"/"}>
                Thrift Store
                </Link>
                <div className="space-x-6 hidden md:flex">
                <Link className="hover:text-cyan-600" href={"/"}>Home</Link>
                <Link className="hover:text-cyan-600" href={"/shop"}>Shop</Link>
                <Link className="hover:text-cyan-600" href={"/checkout"}>Checkout</Link>
            </div>
            <div className="flex items-center space-x-4">
                
            </div>
            </div>
        </nav>
        </>
    )
}