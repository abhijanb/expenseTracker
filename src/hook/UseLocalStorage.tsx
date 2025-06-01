import { useEffect, useState } from "react";

function UseLocalStorage<T>(key: string, initValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const data = localStorage.getItem(key);
      return data ? (JSON.parse(data) as T) : initValue;
    } catch (e) {
      console.error(e);
      return initValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(e);
    }
  }, [key, value]);

  return [value, setValue] as const;
}

export default UseLocalStorage;
