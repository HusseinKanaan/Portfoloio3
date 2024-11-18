import { useEffect } from "react";

const ScrollControl = ({ targetId }) => {
  useEffect(() => {
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [targetId]);

  return null; // Diese Komponente rendert nichts, sie sorgt nur für das Scrollen
};

export default ScrollControl;
