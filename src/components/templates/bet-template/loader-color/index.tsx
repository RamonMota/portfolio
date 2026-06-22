import { useEffect, useState } from "react";
import "./index.scss";

export const LoadingColor = (props: {
  color: string;
  startTime: boolean;
  timer: number;
}) => {
  const [strock, setStrock] = useState(0);
  const { color, startTime, timer } = props;

  useEffect(() => {
    if (startTime) {
      const interval = setInterval(() => {
        setStrock((currentStrock) => {
          if (currentStrock < 560) {
            return currentStrock + 1;
          }

          clearInterval(interval);
          return currentStrock;
        });
      }, timer);
      return () => clearInterval(interval);
    } else {
      setStrock(0);
    }
  }, [startTime, timer]);

  return (
    <div className="content-circle-change-color">
      {startTime && (
        <svg
          className="animated-line"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          strokeDasharray={`${strock} 900`}
        >
          <path
            d="M 100 100 m 0 -90 a 90 90 0 1 1 0 180 a 90 90 0 0 1 0 -180"
            strokeLinecap="round"
            stroke={color}
          ></path>
        </svg>
      )}
      <svg
        className="circle-color"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 55 55"
        fill="none"
      >
        <circle cx="27.5" cy="27.5" r="27.5" fill={color} />
      </svg>
    </div>
  );
};
