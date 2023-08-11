'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import banner from "../../../public/assets/images/product/360banner.webp"
import Button from "@components/Button";
import big1 from "../../../public/assets/images/product/1.webp"
import ZoomingImage from "@components/ZoomingImage";
import big2 from "../../../public/assets/images/product/4.webp";
import smallBanner from "../../../public/assets/images/product/pampers.webp";
import { useLogin } from "@components/Login";

const Page = ({params: {id}}) => {
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
    return (
        <section>
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
            <p>{id.split("-").join(" ")}</p>

<Button href={`${isLogin ? `/products/${id}` : '/registration'}`} title="Худалдаж авах"/>
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
    );
}

export default Page;
