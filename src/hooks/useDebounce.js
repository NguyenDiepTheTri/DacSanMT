import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(handler);
    // value mà thay đổi thì sẽ re-render lại
  }, [value]);

  return debouncedValue;
}

export default useDebounce;
