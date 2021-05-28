import {
  useEffect,
} from 'react';

/* eslint-disable react-hooks/exhaustive-deps */

const useMountEffect = (fn) => useEffect(fn, []);

/* eslint-enable react-hooks/exhaustive-deps */

export default useMountEffect;
