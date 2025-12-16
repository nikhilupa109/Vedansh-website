import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = (animationType = 'fadeUp', options = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      const animations = {
        fadeUp: { y: 40, opacity: 0, duration: 0.8, ease: 'power2.out' },
        fadeIn: { opacity: 0, duration: 0.8, ease: 'power2.out' },
        scaleUp: { scale: 0.95, opacity: 0, duration: 0.6, ease: 'power2.out' }
      };

      const animationProps = animations[animationType] || animations.fadeUp;

      gsap.from(element, {
        ...animationProps,
        scrollTrigger: {
          trigger: element,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        delay: options.delay || 0
      });
    }, element);

    return () => ctx.revert();
  }, [animationType, options.delay]);

  return elementRef;
};

export const useStaggerAnimation = (containerRef, childSelector, options = {}) => {
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const children = containerRef.current.querySelectorAll(childSelector);

      if (children.length > 0) {
        gsap.from(children, {
          y: 40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          delay: options.delay || 0
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef, childSelector, options.delay]);
};
