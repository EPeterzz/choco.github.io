import { useEffect } from 'react';

function useTimeEffect(setCurrentTime) {
  useEffect(() => {
    const updateCurrentTime = () => {
      setCurrentTime(new Date());
    };

    const intervalId = setInterval(updateCurrentTime, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [setCurrentTime]);
}

export default useTimeEffect;