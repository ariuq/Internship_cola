import ProductCard from "./ProductCard";
export const test = (pp) => {
    let productArray = pp;
    return (
        <>
        {productArray.map((pr)=> (
            <ProductCard filterName={pr}/>
        ))}
        </>
    )
    }