import React from 'react';
import useCurrentTime from '../State';
import useTimeEffect from '../Effect';

function CurrentTime() {
  const [currentTime, setCurrentTime] = useCurrentTime();
  useTimeEffect(setCurrentTime);

  return (
    <div>
      <h1>Current Time and Date</h1>
      <h2>재미있는 프론트엔드</h2>
      <p>{currentTime.toLocaleTimeString()}</p>
      <p>{currentTime.toLocaleDateString()}</p>
    </div>
  );
}

export default CurrentTime;