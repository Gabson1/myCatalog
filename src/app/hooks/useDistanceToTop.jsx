import {
  useEffect, useRef, useState,
} from 'react';

import _debounce from 'lodash.debounce';

const useDistanceToTop = (ref) => {
  const frame = useRef(0);
  const [state, setState] = useState(0);

  useEffect(() => {
    const handler = () => {
      cancelAnimationFrame(frame.current);

      frame.current = requestAnimationFrame(() => {
        if (ref.current) {
          const distanceToTop = ref.current.offsetTop - window.scrollY;
          setState(distanceToTop);
        }
      });
    };

    window.addEventListener('scroll', _debounce(() => handler(), 30), {
      capture: false,
      passive: true,
    });

    return () => {
      if (frame.current) {
        cancelAnimationFrame(frame.current);
      }

      if (ref.current) { // eslint-disable-line react-hooks/exhaustive-deps
        window.removeEventListener('scroll', handler);
      }
    };
  }, [ref]);

  return state;
};

export default useDistanceToTop;
