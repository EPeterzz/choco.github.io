import { useState } from 'react';

function useCurrentTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  return [currentTime, setCurrentTime];
}

export default useCurrentTime;