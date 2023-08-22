


// const Page = ({params: {id}}) => {
//     return (
//         
//     );
// }

// export default Page;

'use client'
import AddToCart from '@/components/AddToCart'
import { fetchData } from '@/utils/products'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import banner from "../../../public/assets/images/product/360banner.webp"
import Button from "@components/Button";
import big1 from "../../../public/assets/images/product/1.webp"
import ZoomingImage from "@components/ZoomingImage";
import big2 from "../../../public/assets/images/product/4.webp";
import smallBanner from "../../../public/assets/images/product/pampers.webp";
import { useLogin } from "@components/Login";

export default  function ProductDetailPage({ params: { id } }) {
    const [product, setProduct] = useState(null);
        const [isFixed, setFixed] = useState(true);
    const [isBannerVisible, setBannerVisible] = useState(true);
    const {isLogin, } = useLogin();
    useEffect (() => {
        const handleScroll = () => {
            const footer = document.querySelector(".dsc_container");
            const productName = document.querySelector(".product-more-name");
            const bannerImage = document.querySelector(".product-banner-image");

            if(footer && productName) {
                const footerOffset = footer.offsetTop;
                const scrollPosition = window.scrollY;
                const windowHeight = window.innerHeight;

                if (scrollPosition + window.innerHeight - 200 >= footerOffset) {
                    setFixed(false);
                } else setFixed(true);

                if(bannerImage) {
                    const bannerRect = bannerImage.getBoundingClientRect();
            const bannerBottom = bannerRect.bottom;
                    setBannerVisible(scrollPosition >= bannerBottom - windowHeight && scrollPosition <= bannerBottom);
                }
                
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        async function fetchProduct() {
            try {
              const products = await fetchData();
              console.log("Allll", products);
              const selectedProduct = products.find((x) => x.id == id);
              console.log("selecteddd", selectedProduct)
                
              if (selectedProduct) {
                setProduct(selectedProduct);
              } else {
                console.log('Product not found');
              }
            } catch (error) {
              console.error('Error fetching product:', error);
            }
          }
      
          fetchProduct();
    }, [id]);

    if (!product) {
      return <div>Бүтээгдэхүүн олдсонгүй</div>
    }
    return (

        <section>
          <div className="py-2">
          <Link href="/products">Буцах</Link>
        </div>
       <div className="product-more-container">
             <div className="product-banner-image">
                <Image src={banner} style={{
            width: "800px",
            height: "440px",
            objectFit: 'cover'
        }} alt="banner"/>
            </div>
        
        <div className={`product-more-name ${isFixed ? '' : 'opacity-0'}`}>
            {!isBannerVisible? (
                <div className="small-image-container">
                    <Image src={smallBanner} className={`${isBannerVisible ? 'animate-image': ''}`} style={{
                        width: "200px",
                        height: "auto",
                        objectFit: "contain",
                        transform: "translateY(0px)",
                        marginTop: "0px",
                        opacity: "1",
                        transition: "1s all ease"
                    }} alt="small banner"/>
                </div>
            ): (
                <div className="small-image-container">
                    <Image src={smallBanner} className={`${isBannerVisible ? 'animate-image': ''}`} style={{
                        width: "200px",
                        height: "auto",
                        objectFit: "contain",
                        transform: "translateY(0px)",
                        marginTop: "-180px",
                        opacity: "0",
                        transition: "1s all ease"
                    }} alt="small banner"/>
                </div>
            )}
            <small className="text-light-indigo">Живх</small>
            <p>{product.productname}</p>
      <AddToCart product={product} showQty={false} increasePerClick={true}>
      <Button href={`${isLogin ? `/products/${id}` : '/registration'}`} title="Худалдаж авах"/>
      </AddToCart>

        </div>
     </div>
     <div className="descriptions">
        <div className="desc">
        <h2>Escape the Tapes</h2>
        <p>Таны идэвхтэй хүүхдэд хамгийн тохиромжтой живх.</p>
        <ZoomingImage src={big1}/>
     </div>
     <div className="desc">
        <h2>Дээд зэрэглэлийн хамгаалалт</h2>
        <p>12 цаг хүртэл тав тухтай, хуурай</p>
        <ZoomingImage src={big2}/>
     </div>
     </div>
     </section>
    )
}
