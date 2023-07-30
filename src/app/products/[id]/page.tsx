
import ProductPage from '@/components/productPage'
import { useShoppingCart } from '@/context/ShoppingCartContext'
import { getOneProduct } from '@/data/productFetch'
import PocketBase from 'pocketbase'


const pb = new PocketBase('http://127.0.0.1:8090')


export default async function productPage({params}:any){
   
    // const [amount,setAmount] = useState(1)
    
    const product = await getOneProduct(params.id)
   

    return(
    <>
        <ProductPage product={product}/>
    </>
    )
}
