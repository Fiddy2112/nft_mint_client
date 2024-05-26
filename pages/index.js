import Image from "next/image";
import { Inter } from "next/font/google";
import FileUpload from "@/components/FileUpload";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div className="p-2 flex items-center justify-between">
        <a href="">
          <h1 className="text-3xl font-sans font-bold">NFT Minter</h1>
        </a>
      </div>
      <div className="mx-auto container mt-2">
        <FileUpload />
      </div>
    </div>
  );
}
