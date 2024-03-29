'use client';

import { Button, ButtonGroup } from "@nextui-org/button";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CookieBannerProps } from "@/types/global";
import Cookies from "cookies-next";
import { cookies } from "next/headers";

export default function CookieBanner({
  title,
  description,
  acceptButton,
  rejectButton,
}: CookieBannerProps) {
  const [open, setOpen] = useState("prep");
  const [acceptedCookies, setAcceptedCookies] = useState<boolean>(
    Cookies.getCookie("cookies_accepted") === "true"
  );
  const router = useRouter();
  const locale = router.locale ? router.locale : "de";

  const handleAcceptCookies = () => {
    Cookies.setCookie("cookies_accepted", "true", {});
    setAcceptedCookies(true);
  };

  const handleRejectCookies = () => {
    Cookies.deleteCookie("cookies_accepted");
    setAcceptedCookies(false);
  };

  if (acceptedCookies) {
    return null; // If cookies are accepted, don't render the banner
  }
  return (
    <>
      <div className="cookie-banner">
        <div className="cookie-content">
          {/* Place for an ad */}
          <div className="ad-placeholder">Advertisement</div>

          {/* Text box */}
          <p>
            We use cookies to personalize content and ads, to provide social
            media features and to analyze our traffic. You consent to our
            cookies if you continue to use our website.
          </p>

          {/* Buttons */}
          <div className="cookie-buttons">
            <button onClick={handleAcceptCookies}>Yes</button>
            <button onClick={handleRejectCookies}>No</button>
          </div>
        </div>
      </div>
    </>
  );
}
