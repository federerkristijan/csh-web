import React, { useEffect, useState } from "react";

interface LocationUpdateTimerProps {
  lastUpdated: Date | null;
}

const LocationUpdateTimer: React.FC<LocationUpdateTimerProps> = ({ lastUpdated }) => {
  const [timeElapsed, setTimeElapsed] = useState<string>("");

  useEffect(() => {
    const updateElapsedTime = () => {
      if (lastUpdated) {
        const now = new Date();
        const diff = now.getTime() - lastUpdated.getTime();
        const minutes = Math.floor(diff / 60000);
        setTimeElapsed(`${minutes} minute${minutes !== 1 ? "s" : ""} ago`);
      }
    };

    updateElapsedTime();

    const interval = setInterval(updateElapsedTime, 60000);

    return () => clearInterval(interval);
  }, [lastUpdated]);

  return <p>Last updated {timeElapsed}</p>;
};

export default LocationUpdateTimer;
