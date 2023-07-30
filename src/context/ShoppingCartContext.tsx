'use client'
import { ReactNode, createContext, useContext, useState } from "react";

type ShoppingCartProviderProps = {
    children: ReactNode
}


type CartItem = {
    id: string
    quantity: number
}
type ShoppingCartContext = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: string) => number
    increaseCartQuantity: (id: string, amt:number) => void
    decreaseCartQuantity: (id: string) => void
    removeFromCart: (id: string) => void
    cartQuantity: number
    cartItems: CartItem[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}



export function ShoppingCartProvider( { children}:ShoppingCartProviderProps ){
    const [cartItems, setCartItems] = useState<CartItem[]>([])
    const [isOpen, setIsOpen] = useState(false)

    const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)
    
    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(true)
    function getItemQuantity(id: string){
        return cartItems.find(items => items.id === id)?.quantity || 0
    }
    function increaseCartQuantity(id: string, amt:number){
        setCartItems(currItems => {
            if (currItems.find(item=> item.id === id) == null){
                return [...currItems, {id, quantity:amt}]
            } else {
                return currItems.map(item => {
                    if(item.id === id){
                        return {...item, quantity: item.quantity + amt}

                    } else {return item}
                })
            }
        })
    }
    function decreaseCartQuantity(id: string){
        setCartItems(currItems => {
            if (currItems.find(item=> item.id === id)?.quantity === 1){
                return currItems.filter(item => item.id !== id)
            } else {
                return currItems.map(item => {
                    if(item.id === id){
                        return {...item, quantity: item.quantity - 1}

                    } else {return item}
                })
            }
        })
    }
    function removeFromCart(id:string){
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }


    return( 
    <ShoppingCartContext.Provider value={{ getItemQuantity, increaseCartQuantity,decreaseCartQuantity, removeFromCart, cartItems, cartQuantity, openCart, closeCart}}>
        {children}
    </ShoppingCartContext.Provider>
    )
}
