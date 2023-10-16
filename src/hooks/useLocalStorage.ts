import { useState, useEffect } from "react";

type ValueSetter<T> = React.Dispatch<React.SetStateAction<T>>;

const useLocalStorage =  <T>(key: string, defaultValue?: T): [T, ValueSetter<T>] => {
  const [value, setValue] = useState<T>(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(localStorage.getItem(key) || JSON.stringify(defaultValue));
    } catch (error) {
      currentValue = defaultValue;
    }

    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;
