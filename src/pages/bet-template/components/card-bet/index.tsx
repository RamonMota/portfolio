import Levante from "../../img/levante.png";
import Barcelona from "../../img/barcelona.png";
import "./index.scss";
import { useEffect, useState } from "react";

export const CardBet = () => {
  const [oddChange, setOddChange] = useState(0);
  const [oddChange2, setOddChange2] = useState(0);

  useEffect(() => {
    if (oddChange > 0) {
      setTimeout(() => {
        setOddChange(0);
      }, 1000);
    }
    const interval = setInterval(() => {
      const handleNumber = Math.floor(Math.random() * 3) + 1;
      setOddChange(handleNumber);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (oddChange2 > 0) {
      setTimeout(() => {
        setOddChange2(0);
      }, 500);
    }
    const interval = setInterval(() => {
      const handleNumber = Math.floor(Math.random() * 3) + 1;
      setOddChange2(handleNumber);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card-bet">
      <div className="d-flex gap-sm justify-content-between">
        <div className="d-flex flex-column gap-xxs">
          <div className="card-top">
            <p>51:16</p>
            <p>2ª parte</p>
          </div>
          <div className="content-competitor">
            <img src={Barcelona} alt="logo Barcelona" />
            <p>FC Barcelona</p>
          </div>
          <div className="content-competitor">
            <img src={Levante} alt="Levante" />
            <p>Levante UD</p>
          </div>
        </div>
        <div className="content-list-odd">
          <div className="d-flex align-items-center justify-content-end gap-xs">
            <p className="tag">+350</p>
            <div className="dot-absolute">
              <div className="dot-fixed" />
              <div className="dot-live" />
            </div>
          </div>
          <div className="d-flex gap-xs">
            <div className="content-odd selected">
              <p className="odd-value">2.35</p>
              <p className="odd-name">1</p>
            </div>
            <div
              className={`content-odd
            ${oddChange === 1 ? "border-up" : ""}
            ${oddChange === 2 ? "border-down" : ""}`}
            >
              <svg
                className={`up ${oddChange === 1 ? "blink182" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
              >
                <path
                  d="M11.6094 12.7597L0.240621 1.39054C-0.273125 0.877438 0.0903239 0 0.816082 0L10.4534 0C11.8601 0 13 1.14052 13 2.54716L13 12.1838C13 12.9095 12.1226 13.273 11.6094 12.7597Z"
                  fill="#47CF65"
                />
              </svg>
              <p className="odd-value">2.35</p>
              <p className="odd-name">X</p>
              <svg
                className={`down ${oddChange === 2 ? "blink182" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
              >
                <path
                  d="M0.240267 11.6094L11.6095 0.240621C12.1226 -0.273126 13 0.0903239 13 0.816082L13 10.4534C13 11.8601 11.8595 13 10.4528 13L0.816228 13C0.0904788 13 -0.272966 12.1226 0.240267 11.6094Z"
                  fill="#EB5757"
                />
              </svg>
            </div>
            <div
              className={`content-odd
            ${oddChange2 === 1 ? "border-up" : ""}
            ${oddChange2 === 2 ? "border-down" : ""}`}
            >
              <svg
                className={`up ${oddChange2 === 1 ? "blink182" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
              >
                <path
                  d="M11.6094 12.7597L0.240621 1.39054C-0.273125 0.877438 0.0903239 0 0.816082 0L10.4534 0C11.8601 0 13 1.14052 13 2.54716L13 12.1838C13 12.9095 12.1226 13.273 11.6094 12.7597Z"
                  fill="#47CF65"
                />
              </svg>
              <p className="odd-value">2.35</p>
              <p className="odd-name">2</p>
              <svg
                className={`down ${oddChange2 === 2 ? "blink182" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
              >
                <path
                  d="M0.240267 11.6094L11.6095 0.240621C12.1226 -0.273126 13 0.0903239 13 0.816082L13 10.4534C13 11.8601 11.8595 13 10.4528 13L0.816228 13C0.0904788 13 -0.272966 12.1226 0.240267 11.6094Z"
                  fill="#EB5757"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
