import { useEffect, useState } from "react";
import "./index.scss";

export const LoadingColor = (props: {
  color: string;
  startTime: boolean;
  timer: number;
}) => {
  const [strock, setStrock] = useState(0);

  useEffect(() => {
    if (props.startTime) {
      const interval = setInterval(() => {
        if (strock < 560) {
          setStrock(strock + 1);
        } else {
          clearInterval(interval);
        }
      }, props.timer);
      return () => clearInterval(interval);
    } else {
      setStrock(0);
    }
  }, [strock, props.startTime]);

  return (
    <div className="content-circle-change-color">
      {props.startTime && (
        <svg
          className="animated-line"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          strokeDasharray={`${strock} 900`}
        >
          <path
            d="M 100 100 m 0 -90 a 90 90 0 1 1 0 180 a 90 90 0 0 1 0 -180"
            strokeLinecap="round"
            stroke={props.color}
          ></path>
        </svg>
      )}
      <svg
        className="circle-color"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 55 55"
        fill="none"
      >
        <circle cx="27.5" cy="27.5" r="27.5" fill={props.color} />
      </svg>
    </div>
  );
};
