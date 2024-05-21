import React from "react";
import CannaLogo from '@/assets/Logo@3x.png'
import { Image } from "@nextui-org/react";
import Link from "next/link";

type Props = {};

const Logo = (props: Props) => {
  return (
    <div className="py-4">
      <Link href="/" className="cursor-pointer">
        <Image src={CannaLogo.src} alt="CannaLogo" width={160} height={124} />
      </Link>
    </div>
  );
};

export default Logo;
