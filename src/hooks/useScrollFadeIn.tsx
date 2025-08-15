import { useState, useEffect, useRef, RefObject } from 'react';

export const useScrollFadeIn = <T extends HTMLElement>(): [RefObject<T>, boolean] => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (entry.target) {
            observer.unobserve(entry.target);
          }
        }
      });
    });

    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return [domRef, isVisible];
};