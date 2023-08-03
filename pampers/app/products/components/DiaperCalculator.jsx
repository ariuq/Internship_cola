'use client';
import Image from "next/image";
import diaperSize from "../../../public/assets/icons/diaper_size.svg";
import { useState } from "react";
import Calculate from "./Calculate";

const DiaperCalculator = () => {
  const [value, setValue] = useState("");
  const lbs = 0.454;
    const generateOptions = (start, end) => {
        const options = [];
        for (let i = start*lbs; i <=end*lbs; i+=0.45) {
          options.push(
            <option key={i} value={i}>
              {Math.round(i*10)/10} кг
            </option>
          );
        }
        return options;
      };
  return (
    <section className="dsc_container">
        <h2 className="font-comfortaa uppercase font-semibold text-teal-dark text-sm py-2 border-b-[1px]" >related diapering tool</h2>
        
        <div className="dsc-wrapper">
        <div className="diaper_size_icon">
                <Image src="/assets/icons/button_left.svg" width={41} height={40}/>
                <Image src={diaperSize} width={75} height={75}/>
                <Image src="/assets/icons/button_right.svg" width={41} height={40}/>
            </div>
                <h3>Живхний хэмжээ тооцоолуур</h3>
                <p >Хүүхдийнхээ живхний хэмжээ болон өдөрт ойролцоогоор<br></br>хэдэн живх хэрэгтэйг мэдээрэй:</p>
                <div className="selectParent">
                <select name="dsc" id="weights" value={value} onChange={(e) => { setValue(e.target.value);}}>
                    <option value="" disabled selected className="text-gray-400">Хүүхдийнхээ жинг сонгоорой</option>
                    <option value={2.5}> 2.7 кг-аас доош</option>
                    {generateOptions(6,41)}
                    <option value={18.6}> 18.5 кг-аас дээш</option>
                </select>
                <Image className="arrow" src="/assets/icons/up_arrow.svg" width={18} height={18}/>
                </div>
        </div>  
        <Calculate weight={value}/>
    </section>
  )
}

export default DiaperCalculator;