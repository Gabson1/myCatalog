export let isEnabled = true;

const log = (...args) => {
  if (isEnabled) console.log(...args);
};

const warn = (...args) => {
  if (isEnabled) console.warn(...args);
};

const debug = (...args) => {
  if (isEnabled) console.error(...args);
};

const error = (...args) => {
  if (isEnabled) console.error(...args);
};

export default {
  log,
  warn,
  debug,
  error,
  set setEnabled(isOn) {
    isEnabled = isOn;
  },
};
