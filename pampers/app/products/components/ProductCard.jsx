import ProductItem from "./ProductItem";



function ProductCard({products, filtername}) {
    let filteredProducts;
    if(filtername == "newborn") {
        filteredProducts =products.filter((product) => product.info_two[0] == 1 || product.info_two[0]==2 || product.info_two[0]==0);
    } else if (filtername == "toddler") {
        filteredProducts =products.filter((product) => product.info_two[0] == 7);
    } else if (filtername == "baby") {
        filteredProducts =products.filter((product) => product.info_two[0] == 3 || product.info_two[0]==4 || product.info_two[0]==5 || product.info_two[0]==6);
    } else filteredProducts = products
    return (
        <>
        { filteredProducts && filteredProducts.map((product) => (
                <ProductItem key={product.id} product={product}/>
        ))}
        
        </>
    );
   
}

export default ProductCard;