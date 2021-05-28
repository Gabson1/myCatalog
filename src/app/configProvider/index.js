import logger from 'shared/logger';
import fetchFn from 'shared/utils/fetch';

let configuration = null;

export const getConfig = () => {
  if (!configuration) {
    if (process.env.NODE_ENV !== 'production') {
      return configuration;
    }

    throw new Error('Config not loaded yet! Did you call loadConfig on App start!');
  }

  return configuration;
};

export const loadConfig = async (forceLoad = false) => {
  if (configuration && !forceLoad) {
    return configuration;
  }

  try {
    const response = await fetchFn('/configuration');

    if (response.status < 200 || response.status >= 300) {
      throw new Error('Could not get configuration!');
    }

    configuration = await response.json();

    return configuration;
  } catch (err) {
    logger.error({ err }, 'Something went wrong during loadConfig!');
    throw err;
  }
};
