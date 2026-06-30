import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function Analytics() {
  const location = useLocation();

  useEffect(() => {
    window.gtag?.("event", "page_view", {
      page_title: document.title,
      page_location: window.location.href,
      page_path: location.pathname + location.hash,
    });
  }, [location]);

  return null;
}