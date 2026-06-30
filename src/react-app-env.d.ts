/// <reference types="react-scripts" />

declare module "*.css";
declare module "*.scss";

interface Window {
  gtag?: (
    command: "event",
    eventName: string,
    params?: Record<string, unknown>
  ) => void;
}
