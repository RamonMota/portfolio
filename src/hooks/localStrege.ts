export default function useLocalStorage<T>(key: string, initialValue: T) {
  
    const storedValue = () => {
      if (typeof window === "undefined") {
        return initialValue;
      }
  
        const item = window.localStorage.getItem(key);
      try {
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        return item ? item : initialValue;
      }
    };
    
    const setValue = (value: T | ((val: T) => T)) => {
      try {
        
        const valueToStore = value instanceof Function ? value(storedValue()) : value;
  
        if (typeof window !== "undefined") {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
      } catch (error) {
        /* eslint-disable no-console */
        console.log(error);
      }
    };
    return [storedValue(), setValue] as const;
  }
  
  