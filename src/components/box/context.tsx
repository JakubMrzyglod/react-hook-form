import { createContext } from 'react';

type BoxContextType = {
  gap?: number;
};

export const BoxContext = createContext<BoxContextType>({
  gap: 0,
});
