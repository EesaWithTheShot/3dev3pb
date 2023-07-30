'use client'
import { useShoppingCart } from '@/context/ShoppingCartContext'
import PocketBase from 'pocketbase'
import { useState } from 'react'


export default function ProductPage({product}:any){
    const pb = new PocketBase('http://127.0.0.1:8090')
    const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart()
    const inCart = getItemQuantity(product.id)
    const [addAmt, setAddAmt] = useState(1)

    const incAmt=()=>{
        setAddAmt(addAmt+1)
    }
    const decAmt = () => {
        addAmt>1?setAddAmt(addAmt-1):null
    }
    
    return(
        <>
        <div className='columns-1 md:columns-2 md:h-screen w-full items-baseline'>
        <div className='w-full md:w-full flex items-center flex-col h-80 md:h-[80vh] md:overflow-y-scroll  mt-5 snap-proximity'>
            
            
            <img src={`http://127.0.0.1:8090/api/files/Products/${product.id}/${product.Image_Primary}`} 
                    alt="Product Image" 
                    className='object-contain w-3/4 md:h-[80vh] rounded-xl m-2 snap-center' />
            
            {product.Image_Alts?.map((i: any, index:any) => {
                return <img src={pb.files.getUrl(product, i)} 
                alt={`image ${index+1}`} 
                className='object-contain w-3/4 md:h-[80vh] rounded-xl m-2 snap-center'
                key={index} />
            })}
        </div>  
        <div className='flex flex-col items-center place-content-center m-4 md:w-2/3 md:h-screen '>
                
            <h1 className='text-center font-bold text-3xl mb-2 text-neutral-300'>
                {product.Name}
            </h1>   
            <h1 className='text-transparent text-2xl text-center font-bold bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-700'>
                ${product.Price}
            </h1>
            <p className='text-neutral-200 font-semibold text-lg md:order-last mx-5'>
            Description:<br></br>
            {product.Description}
            </p>
            <div className='w-2/5  h-1/4 md:max-h-14 bg-neutral-900 text-neutral-200 flex justify-between items-center border-2 border-neutral-300 rounded-xl m-4'>
                <button  onClick={decAmt} className='w-1/4 h-[6vh] text-xl font-bold'>-</button>
                <h1 className='text-2xl'>{addAmt}</h1>
                <button onClick={incAmt} className='w-1/4 h-[6vh] text-xl font-bold'>+</button>
            </div>
            <button onClick={() => increaseCartQuantity(product.id, addAmt)} className='w-2/5 h-1/4 md:max-h-32 max-w-sm bg-gradient-to-r from-sky-400 to-sky-600 m-2 p-4 text-2xl text-neutral-100 rounded-lg font-bold'>Add to Cart</button>
            {inCart >= 1?
                <p className='text-gray-400 text-sm'>{inCart} in cart*</p>
            : null
            }
        </div>
    
        </div>
        </>
    )
}