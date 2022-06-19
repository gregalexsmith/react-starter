/* eslint-disable @typescript-eslint/ban-types */
declare global {
  interface Window {
    analytics?: {
      load: Function;
      page: Function;
      track: Function;
    };
  }
}

export default global;
