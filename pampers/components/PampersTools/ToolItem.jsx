import Link from "next/link";
import { toolLinks } from "../../utils/ToolLinks";
import Image from "next/image";

const ToolItem = () => {
  return (
    <>
    {toolLinks.map((toolLink) => (
        <Link href={toolLink.href} className="tools">
        <div className="toolBanner">
            <Image src={toolLink.image} alt="tools" className="object-cover h-[120px]" width={180} height={120}/>
            <div className="toolIcon">
            <Image src={toolLink.icon} alt="icons" width={40} height={40}/>
        </div>
            </div>
        <p className="toolName">{toolLink.name}</p>
        </Link>
    
    ))}
    </>
  )
}

export default ToolItem