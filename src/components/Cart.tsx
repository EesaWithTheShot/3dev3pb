'use client'
import { useShoppingCart } from "@/context/ShoppingCartContext"
import { getProducts } from "@/data/productFetch"
import Link from "next/link"
import { list } from "postcss"


const itemfind = (item:any, list:any) => {
    const cartPro = list.find((i:any) => i.id === item.id);
 return (cartPro)}

export default function Cart({list}:any){
    const {cartItems, cartQuantity} = useShoppingCart()
    return(
        <>
        {cartQuantity > 0 ?
        <>
            <div className="w-screen md:w-2/5 md:order-last ">{
                cartItems.map((item) => <CartItemCard key={item.id} dataItem={itemfind(item, list)} cartItem={item} />)
               }
            <div className=" m-4 mt-8 font-bold text-neutral-100 text-xl">
                <p className="">Total items in cart: {cartQuantity}</p>
                <h2 className="text-2xl">Total:  ${cartItems.reduce((total, item) => itemfind(item, list).Price*item.quantity + total,0)}</h2>
                
            </div>
            </div>
            
        </>
        :
        <EmptyCart />
        }
        
        </>
    )
}

function CartItemCard({dataItem, cartItem, image}:any){
    const {removeFromCart, increaseCartQuantity, decreaseCartQuantity} = useShoppingCart()


    return (
        <>
        <div className="w-full flex justify-between text-neutral-200 border-2 items-center">
            <img className="m-2 w-1/5 object-contain rounded-xl" src={`http://127.0.0.1:8090/api/files/Products/${dataItem.id}/${dataItem.Image_Primary}`} alt="you suck" />
            <div className="m-2 w-1/5 font-bold text-lg">{ dataItem.Name}</div>
            <p className="font-semibold text-lg text-neutral-300">{dataItem.Price*cartItem.quantity}</p>
            <div className='w-1/5  h-1/4 md:max-h-14 bg-neutral-900 text-neutral-200 flex justify-between items-center border-2 border-neutral-300 rounded-xl m-2'>
                <button  onClick={() => decreaseCartQuantity(cartItem.id)} className='w-1/4 h-[6vh] text-xl font-bold'>-</button>
                <h1 className='text-2xl'>{cartItem.quantity}</h1>   
                <button onClick={() => increaseCartQuantity(cartItem.id, 1)} className='w-1/4 h-[6vh] text-xl font-bold'>+</button>
            </div>
            {/* <button onClick={()=>removeFromCart(cartItem.id)} className="m-2 w-12 h-12 bg-transparent border-2 rounded-xl flex justify-center items-center hover:bg-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
            </button> */}
        </div>
        </>
    )
}

function EmptyCart(){
    return (
        <>
        <div className="text-neutral-100 w-screen h-[80vh] text-5xl flex flex-col justify-center items-center font-bold">
            <p>Your cart is empty</p>
            <p><Link href="/products" className="text-xl text-sky-600">Find a product for you</Link></p>
        </div>
        </>
    ) 
}