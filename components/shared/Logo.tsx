import React from "react";
import CannaLogo from '@/assets/Logo@3x.png'
import { Image } from "@nextui-org/react";
import Link from "next/link";

type Props = {};

const Logo = (props: Props) => {
  return (
    <div className="py-4">
      <Link href="/" className="logo cursor-pointer">
        <Image src={CannaLogo.src} alt="CannaLogo" width={160} height={124} className="rounded-none"/>
      </Link>
    </div>
  );
};

export default Logo;
