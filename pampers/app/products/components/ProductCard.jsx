'use client';
import pampersImage from "../../../public/assets/images/a.png"
import HoveringImage from "@components/HoveringImage";
import HoverShopIcon from "./HoverShopIcon";
import Link from "next/link";
import { addToCart, getProductCartCount, getTotalCartItems } from "@components/cartHelper";
import { useState } from "react";



function ProductCard({products, filtername}) {
    let filteredProducts;
    if(filtername == "newborn") {
        filteredProducts =products.filter((product) => product.info_two[0] == 1 || product.info_two[0]==2 || product.info_two[0]==0);
    } else if (filtername == "toddler") {
        filteredProducts =products.filter((product) => product.info_two[0] == 7);
    } else if (filtername == "baby") {
        filteredProducts =products.filter((product) => product.info_two[0] == 3 || product.info_two[0]==4 || product.info_two[0]==5 || product.info_two[0]==6);
    } else filteredProducts = products
    const [cartProducts, setCartProducts] = useState([]);
    const handleAddToCart = (product) => {
        const updatedCartProducts = addToCart(cartProducts, product);
        setCartProducts(updatedCartProducts);
      };
    return (
        <>
        { filteredProducts && filteredProducts.map((product) => (
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
                        <HoverShopIcon handleAddToCart={handleAddToCart} product={product}/>
                        <p>Added to cart: {getProductCartCount(cartProducts, product)}</p>
                        </div>
                    </section>
                </section>
        ))}
        <p>Total items in cart: {getTotalCartItems(cartProducts)}</p>
        </>
    );
   
}

export default ProductCard;