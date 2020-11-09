import { useEffect } from 'react';
import logger from './logger';

export default (name, properties) =>
  useEffect(() => {
    logger.page(name, properties);
  }, [name, properties]);
