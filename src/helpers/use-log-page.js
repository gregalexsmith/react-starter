import { useEffect } from 'react';
import logger from './logger';

const useLogPage = (name, properties) =>
useEffect(() => {
  logger.page(name, properties);
}, [name, properties]);

export default useLogPage
