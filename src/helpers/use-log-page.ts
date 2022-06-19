import { useEffect } from 'react';
import { logger } from './logger';

export const useLogPage = (
  name: string,
  properties?: Record<string, unknown>
) =>
  useEffect(() => {
    logger.page(name, properties);
  }, [name, properties]);
