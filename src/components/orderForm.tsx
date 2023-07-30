'use client'

import { useShoppingCart } from "@/context/ShoppingCartContext"
import { useState } from "react"
import PocketBase from 'pocketbase';

export default function OrderForm({list}:any){
    
    const {cartQuantity,  cartItems, removeFromCart} = useShoppingCart()
    const formData = new FormData()
    const [name, setName] = useState("")   
    const [email, setEmail] = useState("")  
    const [phone, setPhone] = useState("")  
    const [price, setPrice] = useState(0)
    const [notes, setNotes] = useState("") 
    const [files, setFiles] = useState([]) 

    const onChangeFiles = (e:any) => {
        for (let file of e.target.files) {
            formData.append('Files', file)
        }
       
    };
    const itemfind = (item:any) => {
        const cartPro = list.find((i:any) => i.id === item.id);
     return (cartPro)}
    const cartItemData = () => {
        const jsonData:any[] = []
        cartItems.map((item) => {
            jsonData.push({"SKU":itemfind(item).SKU, "Quantity":item.quantity})});
        return (jsonData)
    }


    const sendOrder = async() => {
        
        const cartItemInfo = cartItemData()
        const totalPrice = cartItems.reduce((total, item) => itemfind(item).Price*item.quantity + total,0)
        const pb = new PocketBase('http://127.0.0.1:8090');
        


        formData.append('Name', name)
        formData.append('Email', email)
        formData.append('Phone_Number', phone)
        formData.append('Notes', notes)
        formData.append('Price_Total', totalPrice.toString())
        formData.append("Items", JSON.stringify(cartItemInfo))
        



        try{
            const createdRecord = await pb.collection('Orders').create(formData);
        } catch(error){console.log('Error:', error)}


        // await fetch('http://127.0.0.1:8090/api/collections/Orders/records', {
        // method: 'POST',
        // headers: {
        //     'Content-Type': 'application/json',
        // },
        // body: JSON.stringify({
        //     name,
        //     email,
        //     phone,
        //     notes,
        //     files,
        //     cartItemInfo,
        //     totalPrice

        // }),
        // });


        // cartItems.map((item) => removeFromCart(item.id))
        // console.log('hi')
    }

    return(
        <>
        {cartQuantity > 0 ?
        <>
        <div className="w-full h-[80vh]">
            <form onSubmit={sendOrder} className="bg-neutral-600 shadow-md rounded p-8 flex flex-col">
                <div className="flex-col justify-center">
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                
                <textarea
                    placeholder="Additional Notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                />
                <input
                    type="file"
                    id='fileUpload'
                    multiple
                    placeholder="Add any necessary files here"
                    // className="hidden"
                    value={files}
                    onChange={(e) => onChangeFiles(e)}
                />
                {/* <label htmlFor='fileUpload'>    
                    <a className='w-24 h-12 bg-blue-500 rounded-xl text-neutral-100 text-center'> Upload Files </a>
                </label> */}
                </div>
                <button type="submit">submit</button>
            </form>
        </div>
            
        </>
        :
        null
        }
        
        </>
    )
}