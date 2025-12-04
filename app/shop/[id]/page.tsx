import { ProductDetail } from "@/components/product-detail";
import { stripe } from "@/lib/stripe";
import type Stripe from "stripe";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // ✅ unwrap the Promise

  const product: Stripe.Product = await stripe.products.retrieve(id, {
    expand: ["default_price"],
  });

  const plainProduct = JSON.parse(JSON.stringify(product))

  return <ProductDetail product={plainProduct} />;
}
