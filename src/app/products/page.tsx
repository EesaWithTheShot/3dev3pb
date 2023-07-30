
import { getProducts } from '@/data/productFetch';
import Link from 'next/link';
import PocketBase from 'pocketbase'

// export const dynamic = 'auto',
//   dynamicParams = true,
//   revalidate = 0,
//   fetchCache = 'auto',
//   runtime = 'nodejs',
//   preferredRegion = 'auto'

// async function getProducts(){
//     const pb = new PocketBase('http://127.0.0.1:8090');
//     const productList = await pb.collection('Products').getFullList({
//         sort: '-created',
//     });
//     return productList as any[]
// }

export default async function productsPage(){
    const products = await getProducts()
    // console.log(products)

    return(
        <>
           
           <div className="p-5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center">
    
                {products.map(item => {
                    return <ProductCard key={item.Sku} product={item}/>
                })}
                
            </div>
        </>
    )
}
function ProductCard({product}: any){
    return(
        <Link href={`/products/${product.id}`} className='flex justify-center w-full h-full md:max-h-[400px] group'>
            <div className='flex flex-col items-center  g-3 rounded-lg'>
                <img src={`http://127.0.0.1:8090/api/files/Products/${product.id}/${product.Image_Primary}`} 
                alt="Product Image" 
                className='rounded-2xl px-4 py-4 object-contain w-full h-4/5 bg-neutral-800 group-hover:shadow-lg group-hover:shadow-cyan-700 duration-300 ease-linear' />

                <div className='px-3 py-3'>
                    <div className='flex-col text-center font-bold text-xl sm:text-xl md:text-3xl mb-2 text-neutral-300 '>
                        <span className="bg-left-bottom bg-gradient-to-r from-neutral-100 to-neutral-100 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                            {product.Name}
                        </span>
                        <h1 className='text-transparent bg-clip-text text-xl sm:text-lg md:text-2xl bg-gradient-to-r from-cyan-300 to-blue-700'>${product.Price}</h1>  
                    </div>
                        {/* <p className="text-neutral-300 text-base">
                        {product.Description}
                        </p> */}
                </div>
            </div>
        </Link>
    )
}