import { createContext } from 'react';

type BoxContextType = {
  gap?: number;
};

export const boxContext = createContext<BoxContextType>({
  gap: 0,
});
