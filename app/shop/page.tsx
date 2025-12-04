
import { ProductList } from '@/components/product-list'
import { stripe } from '@/lib/stripe'
import React from 'react'

export default async function Shop() {
  const products = await stripe.products.list({
      expand:["data.default_price"],
    })
  return (
    <>
    <div className='pb-8'>
      <h1 className='text-4xl text-center font-bold hover:text-cyan-400 tracking-tight mb-8'>
      Welcome to the Shop
    </h1>
    <ProductList products = {products.data} />
    </div>
    </>
  )
}
