import PocketBase from 'pocketbase'

const pb = new PocketBase('http://127.0.0.1:8090')

export async function getOneProduct(productId: string){
   
    // const record = await pb.collection('Products').getOne(productId)
    // return record
    const res = await fetch(
        `http://127.0.0.1:8090/api/collections/products/records/${productId}`,
        {
          next: { revalidate: 10 },
        }
      );
      const data = await res.json();
      return data;

}

// export const dynamic = 'auto',
//   dynamicParams = true,
//   revalidate = 0,
//   fetchCache = 'auto',
//   runtime = 'nodejs',
//   preferredRegion = 'auto'


export async function getProducts(){
    // const pb = new PocketBase('http://127.0.0.1:8090');
    // const productList = await pb.collection('Products').getFullList({
    //     sort: '-created',
    // });
    // return productList as any[]
    const res = await fetch('http://127.0.0.1:8090/api/collections/products/records?page=1&perPage=30', { cache: 'no-store' });
    const data = await res.json();
    return data?.items as any[];
}