import pampersImage from "../../../public/assets/images/a.png"
import HoveringImage from "@components/HoveringImage";
import HoverShopIcon from "./HoverShopIcon";


export async function getProducts () {
    const res = await fetch('http://66.181.175.237:8881/api/product')
    if(!res.ok) {
        throw new Error ("fail")
    }
    return res.json()
}

async function ProductCard({filterName}) {
    const products = await getProducts();
    let filteredProducts;
    if(filterName == "newborn") {
        filteredProducts =products.filter((product) => product.info_two[0] == 1 || product.info_two[0]==2 || product.info_two[0]==0);
    } else if (filterName == "toddler") {
        filteredProducts =products.filter((product) => product.info_two[0] == 7);
    } else if (filterName == "baby") {
        filteredProducts =products.filter((product) => product.info_two[0] == 3 || product.info_two[0]==4 || product.info_two[0]==5 || product.info_two[0]==6);
    } else filteredProducts = products

    return (
        <>
        {filteredProducts.map((product) => (
                <div className="card">
                    <section className="top-section">
                        <div className="product-image">                    
                            <HoveringImage src={pampersImage}/>
                        </div>
                        <div className="flex justify-between">
                        <p>{product.brand}</p>
                        <p>{product.info_two.split("").reverse().join("")}</p>
                        </div>
                        
                    </section>
                    <section className="bottom-section">
                        <h2 className="font-semibold">{product.productname.substring(7).replace("care", "Care").replace("baby", "Baby").replace("pc", "ш").split(product.brand)}</h2>
                        <p>15654₮</p>
                        <div className="self-center">
                        <HoverShopIcon/>
                        </div>
                    </section>
                </div>
        ))}
        </>
    );
   
}

export default ProductCard;