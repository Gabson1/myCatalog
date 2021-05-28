import { useState, useEffect } from 'react';
import _debounce from 'lodash.debounce';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = _debounce(() => setWidth(window.innerWidth), 100);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
}

export default useWindowWidth;
