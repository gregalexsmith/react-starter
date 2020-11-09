const CLIENT_ID = 'CLIENT_ID';

const enabled = process.env.NODE_ENV === 'production';

const verify = () => enabled && window.analytics && window.analytics.page;

const init = () => {
  if (enabled) {
    window.analytics.load(CLIENT_ID);
  } else {
    console.log('analytics not loaded');
  }
};

const page = (...args) => verify() && window.analytics.page(...args);

const track = (...args) => verify() && window.analytics.track(...args);

export default {
  init,
  page,
  track,
};
