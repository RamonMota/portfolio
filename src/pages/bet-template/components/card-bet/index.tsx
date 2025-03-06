import Realmadrid from "../../img/realmadrid.webp";
import Barcelona from "../../img/barcelona.webp";
import Palmeiras from "../../img/palmeiras.webp";
import Santos from "../../img/santos.webp";
import "./index.scss";
import { useEffect, useState } from "react";

export const CardBet = () => {
  const [secondOddChange, setSecondOddChange] = useState(0);
  const [secondOdd, setSecondOdd] = useState(2.15);
  const [thirdOddChange, setThirdOddChange] = useState(0);
  const [thirdOdd, setThirdOdd] = useState(2.26);
  

  useEffect(() => {
    if (secondOddChange > 0) {
      setTimeout(() => {
        setSecondOddChange(0);
      }, 1000);
    }
    const interval = setInterval(() => {
      const handleNumber = Math.floor(Math.random() * 3) + 1;
      setSecondOddChange(handleNumber);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (secondOddChange === 1) {
      setSecondOdd(secondOdd + 0.13);
    } else if (secondOddChange === 2) {
      setSecondOdd(secondOdd - 0.11);
    }
  }, [secondOddChange]);

  useEffect(() => {
    if (thirdOddChange === 1) {
      setThirdOdd(thirdOdd + 0.13);
    } else if (thirdOddChange === 2) {
      setThirdOdd(thirdOdd - 0.15);
    }
  }, [thirdOddChange]);

  useEffect(() => {
    if (thirdOddChange > 0) {
      setTimeout(() => {
        setThirdOddChange(0);
      }, 500);
    }
    const interval = setInterval(() => {
      const handleNumber = Math.floor(Math.random() * 3) + 1;
      setThirdOddChange(handleNumber);
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
            <img src={Realmadrid} alt="Levante" />
            <p>Real Madrid</p>
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
              <p className="odd-value">1.25</p>
              <p className="odd-name">1</p>
            </div>
            <div
              className={`content-odd
            ${secondOddChange === 1 ? "border-up" : ""}
            ${secondOddChange === 2 ? "border-down" : ""}`}
            >
              <svg
                className={`up ${secondOddChange === 1 ? "blink182" : ""}`}
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
              <p
                className="odd-value"
                style={
                  secondOddChange === 2
                    ? { color: "#EB5757" }
                    : secondOddChange === 1
                    ? { color: "#47CF65" }
                    : { color: "#f2ad2f" }
                }
              >
                {secondOdd.toString().substring(0, 4)}
              </p>
              <p className="odd-name">X</p>
              <svg
                className={`down ${secondOddChange === 2 ? "blink182" : ""}`}
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
            ${thirdOddChange === 1 ? "border-up" : ""}
            ${thirdOddChange === 2 ? "border-down" : ""}`}
            >
              <svg
                className={`up ${thirdOddChange === 1 ? "blink182" : ""}`}
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
              <p
                className="odd-value"
                style={
                  thirdOddChange === 2
                    ? { color: "#EB5757" }
                    : thirdOddChange === 1
                    ? { color: "#47CF65" }
                    : { color: "#f2ad2f" }
                }
              >
                {thirdOdd.toString().substring(0, 4)}
              </p>
              <p className="odd-name">2</p>
              <svg
                className={`down ${thirdOddChange === 2 ? "blink182" : ""}`}
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
export const CardBetClone = () => {
  const [secondOddChange, setSecondOddChange] = useState(0);
  const [secondOdd, setSecondOdd] = useState(3.55);
  const [thirdOddChange, setThirdOddChange] = useState(0);
  const [thirdOdd, setThirdOdd] = useState(3.46);

  useEffect(() => {
    if (secondOddChange > 0) {
      setTimeout(() => {
        setSecondOddChange(0);
      }, 1600);
    }
    const interval = setInterval(() => {
      const handleNumber = Math.floor(Math.random() * 3) + 1;
      setSecondOddChange(handleNumber);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (secondOddChange === 1) {
      setSecondOdd(secondOdd + 0.13);
    } else if (secondOddChange === 2) {
      setSecondOdd(secondOdd - 0.11);
    }
  }, [secondOddChange]);

  useEffect(() => {
    if (thirdOddChange === 1) {
      setThirdOdd(thirdOdd + 0.13);
    } else if (thirdOddChange === 2) {
      setThirdOdd(thirdOdd - 0.15);
    }
  }, [thirdOddChange]);

  useEffect(() => {
    if (thirdOddChange > 0) {
      setTimeout(() => {
        setThirdOddChange(0);
      }, 500);
    }
    const interval = setInterval(() => {
      const handleNumber = Math.floor(Math.random() * 3) + 1;
      setThirdOddChange(handleNumber);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card-bet clone">
      <div className="d-flex gap-sm justify-content-between">
        <div className="d-flex flex-column gap-xxs">
          <div className="card-top">
            <p>51:16</p>
            <p>2ª parte</p>
          </div>
          <div className="content-competitor">
            <img src={Santos} alt="logo Barcelona" />
            <p>Santos</p>
          </div>
          <div className="content-competitor">
            <img src={Palmeiras} alt="Levante" />
            <p>Palmeiras</p>
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
            <div
              className={`content-odd
            ${secondOddChange === 1 ? "border-up" : ""}
            ${secondOddChange === 2 ? "border-down" : ""}`}
            >
              <svg
                className={`up ${secondOddChange === 1 ? "blink182" : ""}`}
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
              <p
                className="odd-value"
                style={
                  secondOddChange === 2
                    ? { color: "#EB5757" }
                    : secondOddChange === 1
                    ? { color: "#47CF65" }
                    : { color: "#f2ad2f" }
                }
              >
                {secondOdd.toString().substring(0, 4)}
              </p>
              <p className="odd-name">1</p>
              <svg
                className={`down ${secondOddChange === 2 ? "blink182" : ""}`}
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
            <div className="content-odd selected">
              <p className="odd-value">2.27</p>
              <p className="odd-name">X</p>
            </div>
            <div
              className={`content-odd
            ${thirdOddChange === 1 ? "border-up" : ""}
            ${thirdOddChange === 2 ? "border-down" : ""}`}
            >
              <svg
                className={`up ${thirdOddChange === 1 ? "blink182" : ""}`}
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
              <p
                className="odd-value"
                style={
                  thirdOddChange === 2
                    ? { color: "#EB5757" }
                    : thirdOddChange === 1
                    ? { color: "#47CF65" }
                    : { color: "#f2ad2f" }
                }
              >
                {thirdOdd.toString().substring(0, 4)}
              </p>
              <p className="odd-name">2</p>
              <svg
                className={`down ${thirdOddChange === 2 ? "blink182" : ""}`}
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
