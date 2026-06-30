/// <reference types="react-scripts" />

interface Window {
  gtag?: (
    command: "event",
    eventName: string,
    params?: Record<string, unknown>
  ) => void;
}
