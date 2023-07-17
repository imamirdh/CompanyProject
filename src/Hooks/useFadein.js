import React, { useEffect, useRef, useState } from "react";
function useFadein() {
  const [isInterSection, setIsInterSection] = useState(false);
  const refshow = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entery]) => {
      setIsInterSection(entery.isIntersecting);
    });
    console.log(isInterSection);
    observer.observe(refshow.current);
    return () => observer.disconnect();
  }, []);
  return [isInterSection, refshow];
}

export default useFadein;
