// @/components/icons/UserLocationIcon.tsx
import L from "leaflet";
import ReactDOMServer from "react-dom/server";
import Smoker from "@/assets/Smoker.svg";

export const createUserLocationIcon = () => {
  const iconHtml = ReactDOMServer.renderToString(
    <div
      style={{
        background: "green",
        opacity: 0.6,
        borderRadius: "50%",
        width: "30px",
        height: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={Smoker} alt="User Location" style={{ width: "26px", height: "26px" }} />
    </div>
  );

  return L.divIcon({
    html: iconHtml,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    className: "", // This removes default extra padding and border
  });
};
