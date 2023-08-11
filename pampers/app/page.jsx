import Image from "next/image"
import appImage from "../public/assets/images/banner_image_lg.webp"
import Button from "@components/Button"
import Link from "next/link"
import { Tools } from "@components/PampersTools/Tools"


 
 const Home = () => {
   return (
     <section className="body_section">
      <div className="home_banner">
        <Link href="https://instapage.pampers.com/en-us/app-download-qr-code" className="banner_image">
      <Image 
        alt="App image"
        src={appImage}
        style={{
          width: '100vw',
          height: 'auto',
        }}/>
        </Link>
        <div className="banner_description">
          <h2>Save on diapers</h2>
          <p>with Pampers Club</p>
          <div className="banner_button">
            <Image src="/assets/icons/button_left.svg" width={41} height={40}/>
            <Button href="https://instapage.pampers.com/en-us/app-download-qr-code" title="Download App Now"/>
            <Image src="/assets/icons/button_right.svg" width={41} height={40}/>
          </div>
        </div>
      </div>  
      <Tools/> 
     </section>
   )
 }
 
 export default Home
