import { useEffect, useRef, useState } from 'react';

/**
 * Counter animation hook that returns a ref for the counter element
 * Usage: const counter1 = useCounterAnimation(279000, { duration: 2.5, suffix: '+' });
 * Then: <div ref={counter1}>0</div>
 */
export const useCounterAnimation = (targetValue, options = {}) => {
  const elementRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || hasAnimated) return;

    const {
      duration = 2000,
      suffix = '',
      threshold = 0.3
    } = options;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            let startTime = null;
            const startValue = 0;

            const animate = (currentTime) => {
              if (!startTime) startTime = currentTime;
              const progress = Math.min((currentTime - startTime) / duration, 1);

              // Easing function (ease-out)
              const easeOut = 1 - Math.pow(1 - progress, 3);
              const currentCount = Math.floor(easeOut * (targetValue - startValue) + startValue);

              element.textContent = currentCount + suffix;

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                element.textContent = targetValue + suffix;
              }
            };

            requestAnimationFrame(animate);
            observer.disconnect();
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [targetValue, options, hasAnimated]);

  return elementRef;
};
