import { reject, isNil } from 'ramda';
import * as analytics from './analytics';
import * as devConsole from './dev-console';

const init = () => {
  analytics.init();
};

const page = (name, properties) => {
  const args = reject(isNil, [name, properties]);
  analytics.page(...args);
  devConsole.log('page', ...args);
};

export const track = (name, properties) => {
  analytics.track(name, properties);
  devConsole.log('track', name, properties);
};

const logger = {
  init,
  page
};

export default logger;
