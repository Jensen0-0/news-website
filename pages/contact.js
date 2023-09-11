import Image from "next/image";
import ZMLogo from "../assets/branding/ZM_logo.png";

export default function Info({ posts }) {
  return (
    <div className="w-full h-full flex justify-center align-center">
      <div className="w-full text-center">
        <div className="text-xl">Homo 1</div>
        <Image src="/images/posts/kct.png" alt="KCT Image" width={500} height={400} />
        <div className="">Homo 1</div>
      </div>
      <div className="w-full text-center">
        <div className="text-xl">Homo 1</div>
        <Image src="/images/posts/kct.png" alt="KCT Image" width={500} height={400} />
        <div className="">Homo 1</div>
      </div>
    </div>
  );
}