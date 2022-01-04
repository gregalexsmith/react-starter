const CLIENT_ID = 'CLIENT_ID';

const enabled = process.env.NODE_ENV === 'production';
const present = !!window.analytics;

const verify = () => enabled && present && window.analytics.page;

export const init = () => {
  if (enabled && present) {
    window.analytics.load(CLIENT_ID);
  } else {
    console.log('analytics not loaded');
  }
};

export const page = (...args) => verify() && window.analytics.page(...args);

export const track = (...args) => verify() && window.analytics.track(...args);
