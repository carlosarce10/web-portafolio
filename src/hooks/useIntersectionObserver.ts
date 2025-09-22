import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver<T extends Element>(options?: IntersectionObserverInit) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting), options);
    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);

  return { ref, isIntersecting };
}
