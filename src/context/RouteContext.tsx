import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router';

interface RouteContextType {
  actualRoute: string;
  setRoute: (route: string) => void;
  interval: number;
}

const RouteContext = createContext<RouteContextType | undefined>(undefined);

interface RouteProviderProps {
  children: ReactNode;
}

export const RouteProvider: React.FC<RouteProviderProps> = ({ children }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [actualRoute, setRoute] = useState<string>(currentPath);
  const interval = 800

  useEffect(() => {
    setRoute(currentPath);
  }, [currentPath]);

  return (
    <RouteContext.Provider value={{ actualRoute, setRoute, interval }}>
      {children}
    </RouteContext.Provider>
  );
};

export const useRoute = () => {
  const context = useContext(RouteContext);
  if (!context) {
    throw new Error('useRoute must be used within a RouteProvider');
  }
  return context;
};
