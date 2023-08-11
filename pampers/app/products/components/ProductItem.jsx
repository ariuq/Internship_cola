import pampersImage from "../../../public/assets/images/a.png"
import HoveringImage from "@components/HoveringImage";
import HoverShopIcon from "./HoverShopIcon";
import Link from "next/link";
import AddToCart from "@components/AddToCart";

const ProductItem = ({product}) => {
  return (
    <section key={product.id} className="card">
                    <Link className="top-section"  href= {`/products/${product.productname.split(" ").join("-")}`}>
                        <div className="product-image">                    
                            <HoveringImage src={pampersImage}/>
                        </div>
                        <div className="flex justify-between">
                        <p>{product.brand}</p>
                        <p>{product.info_two.split("").reverse().join("")}</p>
                        </div>
                        
                    </Link>
                    <section className="bottom-section">
                        <h2 className="font-semibold">{product.productname.substring(7).replace("care", "Care").replace("baby", "Baby").replace("pc", "ш").split(product.brand)}</h2>
                        <p>15654₮</p>
                        <div className="self-center">
                            <AddToCart showQty={false} increasePerClick={true} product={product}>
                                <HoverShopIcon />
                            </AddToCart>
                        
                        </div>
                    </section>
                </section>
  )
}

export default ProductItem