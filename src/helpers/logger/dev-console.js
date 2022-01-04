const enabled = process.env.NODE_ENV === 'development';

export const log = (...args) => enabled && console.log('logger', ...args);

export const error = (...args) => enabled && console.error('logger', ...args);
