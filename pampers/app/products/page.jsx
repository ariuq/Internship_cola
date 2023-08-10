
import Image from "next/image"
import productBanner from "../../public/assets/images/product_banner.webp";
import FilterBoard from "./components/FilterBoard";


const page = async ({}) => {
  const products = await getProducts();
  
  return (
    <section>
      <div className="product_banner mb-7">
        <Image src={productBanner} className="productBannerImage" style={{
          width: 'auto',
          height: '100%',
        }}  alt="product banner"/>
        <h1 className="productBannerDescription">Up to 100% Leak-Free Nights</h1>
      </div >
      <FilterBoard products={products}/>
       </section>
  )
}
export default page;
export async function getProducts () {
  const res = await fetch('http://66.181.175.237:8881/api/product')
  if(!res.ok) {
      throw new Error ("fail")
  }
  return res.json()
}
