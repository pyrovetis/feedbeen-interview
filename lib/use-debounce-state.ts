import { useEffect, useRef, useState } from "react";

export function useDebounceState<T>(
  initialValue: T,
  delay: number
): [T, (value: T) => void] {
  const [value, setValue] = useState(initialValue);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const clearTimeoutRef = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };
  useEffect(() => {
    clearTimeoutRef();
  }, []);

  const setDebouncedValue = (newValue: T) => {
    clearTimeoutRef();
    timeoutRef.current = setTimeout(() => {
      setValue(newValue);
    }, delay);
  };

  return [value, setDebouncedValue];
}
