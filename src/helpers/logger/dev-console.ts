// eslint-disable-next-line no-undef
const enabled = process.env.NODE_ENV === 'development';

export const log = (...args: any[]) =>
  enabled && console.log('logger', ...args);

export const error = (...args: any[]) =>
  enabled && console.error('logger', ...args);
