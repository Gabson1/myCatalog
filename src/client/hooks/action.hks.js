import { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';

export const useAction = (actionFn) => {
  const dispatch = useDispatch();
  const memedAct = useMemo(
  () => actionFn,
  [actionFn]
  );
  return useCallback(
    function callback() {
      dispatch(memedAct.apply(null, arguments))
    },
    [dispatch, memedAct]
  );
};