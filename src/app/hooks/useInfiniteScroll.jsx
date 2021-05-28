import { useState, useEffect } from 'react';

import isRefVisible from 'shared/utils/isRefVisible';

const useInfiniteScroll = (ref, callback, stopToLoad) => {
  const [isFetching, setIsFetching] = useState(false);

  function handleScroll() {
    if (!isRefVisible(ref)) {
      return;
    }

    setIsFetching(true);
  }

  if (!stopToLoad) {
    window.onscroll = () => {
      handleScroll();
    };
  }

  useEffect(() => {
    if (!isFetching) {
      return;
    }

    callback();
  }, [callback, isFetching]);

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;
