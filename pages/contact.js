import Image from "next/image";
import ZMLogo from "../assets/branding/ZM_logo.png";

export default function Info({ posts }) {
  return (
    <div className="w-full h-full flex justify-center align-center">
      <div className="w-full text-center">
        <div className="text-xl">Anouk Klaasen</div>
        <Image src="/images/posts/anouk.png" alt="KCT Image" width={500} height={400} />
        <div className="">Telefoon nummer: 06 06663023 </div>
      </div>
      <div className="w-full text-center">
        <div className="text-xl">Herman Bergen </div>
        <Image src="/images/posts/herman.png" alt="KCT Image" width={500} height={400} />
        <div className="">Telefoon nummer: 06 85784758 </div>
      </div>
    </div>
  );
}