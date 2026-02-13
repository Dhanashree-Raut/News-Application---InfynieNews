import { useEffect, useRef } from "react";

export default function useScrollAnimation() {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("scroll-show");
        }
      },
      { threshold: 0.2 }
    );

    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return ref;
}
