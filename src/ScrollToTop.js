import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // If there's a hash, scroll to the element with that id
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Scroll to top when navigating to a new page
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]); // Trigger on path or hash change

  return null;
}
