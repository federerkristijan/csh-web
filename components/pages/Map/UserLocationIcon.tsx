// @/components/icons/UserLocationIcon.tsx
import L from "leaflet";
import ReactDOMServer from "react-dom/server";
import Smoker from "@/public/assets/Smoker.svg";
import Image from "next/image";

export const createUserLocationIcon = () => {
  const iconHtml = ReactDOMServer.renderToString(
    <div
      style={{
        background: "green",
        opacity: 0.7,
        borderRadius: "50%",
        width: "30px",
        height: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image src={Smoker} alt="User Location" style={{ width: "24px", height: "24px" }} />
    </div>
  );

  return L.divIcon({
    html: iconHtml,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    className: "", // This removes default extra padding and border
  });
};
