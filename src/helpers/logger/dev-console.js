const isEnabled = process.env.NODE_ENV === 'development';

const log = (...args) => isEnabled && console.log('logger', ...args);

const error = (...args) => isEnabled && console.error('logger', ...args);

export default {
  log,
  error,
};
