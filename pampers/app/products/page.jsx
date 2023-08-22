import Image from "next/image"
import productBanner from "../../public/assets/images/product_banner.webp";
import FilterBoard from "./components/FilterBoard";
import { fetchData} from "@utils/products";


const page = async () => {
    const products = await fetchData();

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
    );
  
};

export default page;


