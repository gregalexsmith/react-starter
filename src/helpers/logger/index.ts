import { reject, isNil } from 'ramda';
import * as analytics from './analytics';
import * as devConsole from './dev-console';

const init = () => {
  analytics.init();
};

const page = (name: string, properties?: Record<string, unknown>) => {
  const args = reject(isNil, [name, properties]);
  analytics.page(...args);
  devConsole.log('page', ...args);
};

export const track = (name: string, properties: Record<string, unknown>) => {
  analytics.track(name, properties);
  devConsole.log('track', name, properties);
};

export const logger = {
  init,
  page
};
