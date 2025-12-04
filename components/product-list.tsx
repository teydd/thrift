"use client"

import Stripe from 'stripe'
import { ProductCard } from './product-card'
import { useState } from 'react'

interface Props  {
    products : Stripe.Product[]

}

export const ProductList = ({products}: Props) => {
    const [searchTerm, setSearchTerm] = useState<string>("")

    const filteredProduct = products.filter((product)=>{
        const term = searchTerm.toLowerCase()
        const nameMatch = product.name.toLowerCase().includes(term)
        const descriptionMatch = product.description ?product.description.toLowerCase().includes(term) : false

        return nameMatch || descriptionMatch
    })

    return(
        <div>
            <div className='mb-6 flex justify-center '>
                <input value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)} className='w-full border border-cyan-400 rounded  py-2 px-4 max-w-md ' type="text" placeholder='Search Product...'/>
            </div>
            <ul className='grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-3 '>
                {filteredProduct.map((product, key )=>{
                    return <li key={key}>
                        <ProductCard product={product}/>
                    </li>
                })}
            </ul>
        </div>
    )
}
