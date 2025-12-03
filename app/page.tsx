import { stripe } from "@/lib/stripe";
import Image from "next/image";

export default async function Home() {
  const products = await stripe.products.list({
    expand:["data.default_price"],
    limit: 3,
  })
  console.log(products)
  return (
    <>
    <div>
      <section>
        <div>
          <div>
            <h2>Welcome to the Thrift Store</h2>
            <p>Discover the latest products at the best prices</p>
          </div>
        </div>
      </section>      
    </div>    
    </>
  );
}
