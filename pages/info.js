import Image from "next/image"
import ZMLogo from "../assets/branding/ZM_logo.png"
import ZMBanner from "../assets/branding/ZM_banner.gif"

export default function Info({ posts }) {
    return (
        <div className="">
            <div className="m-auto p-10 w-full">
                <Image alt="Zuidermeer logo" className="  rounded-3xl" layout='responsive' objectFit="contain" src={ZMBanner} />
            </div>




            {/* <div className="m-auto w-10 h-10 bg-slate-50">

            </div> */}
        </div>

    )
}