import { useState } from 'react';
import { getConfig } from '../configProvider';

function useConfig() {
  const [config] = useState(getConfig());

  return config;
}

export default useConfig;
