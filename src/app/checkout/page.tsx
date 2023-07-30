

import Cart from "@/components/Cart";
import OrderForm from "@/components/orderForm";
import {getProducts} from "@/data/productFetch"

export default async function CheckoutPage(){
    
    const productList = await getProducts()

    return(
        <>
        <div className="w-screen md:flex md:justify-between">
            <Cart list={productList} />
            <OrderForm list={productList}/>
        </div>
        </>
    )
}