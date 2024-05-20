import React from "react";
import CannaLogo from '@/assets/Logo@3x.png'
import { Image } from "@nextui-org/react";

type Props = {};

const Logo = (props: Props) => {
  return (
    <div className="py-4">
        <Image src={CannaLogo.src} alt="CannaLogo" width={160} height={124} />
    </div>
  );
};

export default Logo;
