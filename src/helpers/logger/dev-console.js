const enabled = process.env.NODE_ENV === 'development';

const log = (...args) => enabled && console.log('logger', ...args);

const error = (...args) => enabled && console.error('logger', ...args);

export default {
  log,
  error,
};
