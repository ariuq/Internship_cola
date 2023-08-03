'use client';
import Image from "next/image";
import diaper from "../../../public/assets/icons/diaper.svg";
import sun from "../../../public/assets/icons/sun_icon.svg";
import calendar from '../../../public/assets/icons/calendar_icon.svg';
import arrow from '../../../public/assets/icons/up_arrow.svg';
import { useState } from "react";

const Calculate = ({weight}) => {
const size1 = (weight < 4.5) ? "N": (weight < 6.3) ?  "1" : (weight < 8.1) ?  "2" : (weight < 12.6) ? "3" : (weight < 17.1) ? "4" : "5";
const size2 = (weight < 3.6) ? "" : (weight < 4.5) ? "1" : (weight < 5.4) ? "": (weight < 6.3) ?  "2" : (weight < 7.2) ? "": (weight < 8.1) ?  "3" : (weight < 9.9) ? "" : (weight < 12.6) ? "4" : (weight < 15.8) ? "5" : (weight < 18.5) ? "6" : "7";
const diapersPerDay = (weight < 3.6) ? "7-10" : (weight < 5.4) ? "6-9" : (weight < 7.2) ? "6-8" : (weight < 12.6) ? "5-7" : "4-6";
const totalDiapers = (weight < 3.6) ? "340-480" : (weight < 5.4) ? "300-460" : (weight < 7.2) ? "500-670" : (weight < 9.9) ? "870-1220" : (weight < 12.6) ? "1020-1430" : (weight < 15.8) ? "600-900" : (weight < 18.5) ? "670-1040" : "490-740";
const months = (weight < 3.6) ? "1.6" : (weight < 5.4) ? "1.7" : (weight < 7.2) ? "2.8" : (weight < 9.9) ? "5.8" : (weight < 12.6) ? "6.8" : (weight < 15.8) ? "5" : (weight < 18.5) ? "5.8" : "4.1";
const [showmore, setShowmore] = useState(true);
const changeShow = () => {
    setShowmore(!showmore);
}
  return (
    <>
    {weight === "" ? null: showmore===false ?(
        <div className="flex flex-col items-center">
            <div className="flex justify-center items-center">
           <p className="text-center text-sm font-semibold text-indigo font-comfortaa">Таны хүүхдийн живхний хэмжээ:</p>
            <div className="box-result flex items-center">
                <span className="box-value box-value-rounded" >
                    {size1}
                </span>
                {size2==="" ? null: (
                    <>
                    <p>-</p>
                    <span className="box-value box-value-rounded ">
                       {size2} 
                    </span>
                    </>
                ) }
            </div>
            </div>
            <button onClick={changeShow} className="flex flex-col items-center mt-4 text-sm font-semibold text-teal"> <small className="show font-comfortaa">Show more</small><Image className="mt-2" src={arrow} width={13} height={12}/></button>
        </div>
    ) : (
        <div className="calculate">
        <div className="flex">
        <div className="diaperBox">
            <div className="diaperBox-icon">            
                <Image src={diaper} width={27} height={28}/>
            </div>
            <p>Таны хүүхдийн живхний хэмжээ:</p>
            <div className="box-result flex items-center ">
                <span className="box-value box-value-rounded pt-1" >
                    {size1}
                </span>
                {size2==="" ? null: (
                    <>
                    <p>-</p>
                    <span className="box-value box-value-rounded pt-1">
                       {size2} 
                    </span>
                    </>
                ) }
            </div>
        </div>
        <div className="diaperBox border-x">
            <div className="diaperBox-icon">
            <Image src={sun} width={27} height={28}/>
            </div>
            <p>Өдөрт дунджаар:</p>
            <div className="box-result">
                <span className="box-value">
                    {diapersPerDay + " " }
                </span>
                <small className="box-description">
                    живх
                </small>
            </div>
        </div>
        <div className="diaperBox">
            <div className="diaperBox-icon">
            <Image src={calendar} width={27} height={28}/>
            </div>
            <p>Дунджаар танд хэрэгтэй нийт живхний тоо:</p>
            <div className="box-result">
                <span className="box-value">
                    {totalDiapers+" " }
                </span>
                <small className="box-description">
                     живх
                </small> <br></br>
                <small className="box-description">
                    (ойролцоогоор {months} сар)
                </small>
            </div>
        </div>
    </div>
    <button onClick={changeShow} className="flex flex-col items-center mt-4 text-sm font-semibold text-teal"> <Image src={arrow} width={13} height={12} className="rotate-180"/><small className="show">Show less</small></button>
    </div>
    ) }
    </>
  )
}

export default Calculate