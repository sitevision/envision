import { useState } from 'react';

export default function useSessionStorage(key, initialValue) {
   const [storedValue, setStoredValue] = useState(() => {
      const item =
         typeof window !== 'undefined'
            ? window.sessionStorage.getItem(key)
            : undefined;

      return item ? item : initialValue;
   });

   const setValue = (value) => {
      const valueToStore =
         value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      typeof window !== 'undefined' &&
         window.sessionStorage.setItem(key, valueToStore);
   };

   return [storedValue, setValue];
}
