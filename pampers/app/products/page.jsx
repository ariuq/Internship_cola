import Image from "next/image"
import productBanner from "../../public/assets/images/product_banner.webp";
import DiaperCalculator from './components/DiaperCalculator';
import FilterBoard from "./components/FilterBoard";
import ProductCard from "./components/ProductCard";


const page = () => {
  

  
  return (
    <section>
      <div className="product_banner mb-7">
        <Image src={productBanner} className="productBannerImage" style={{
          width: 'auto',
          height: '100%',
        }} />
        <h1 className="productBannerDescription">Up to 100% Leak-Free Nights</h1>
      </div >
      <div className="flex flex-row w-full">
        <div className="flex basis-1/3"><FilterBoard/></div>
      <div className="w-full flex flex-col">
        <section className="card-container">
           <ProductCard/>
        </section>
       
        <DiaperCalculator/> </div>
      </div>  
      
       </section>
  )
}

export default page