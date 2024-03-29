import { NextUIProvider } from "@nextui-org/react";
import { ReactNode } from "react";
import dynamic from 'next/dynamic';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}
