import './window.d.ts';

const CLIENT_ID = 'CLIENT_ID';

// declare const window = Window;

// eslint-disable-next-line no-undef
const enabled = process.env.NODE_ENV === 'production';
const present = !!window.analytics;
const verify = () => enabled && present && window.analytics?.page;

export const init = () => {
  if (enabled && present) {
    window.analytics?.load(CLIENT_ID);
  } else {
    console.log('analytics not loaded');
  }
};

export const page = (...args: any[]) =>
  verify() && window.analytics?.page(...args);

export const track = (...args: any[]) =>
  verify() && window.analytics?.track(...args);
