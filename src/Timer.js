import { Text } from 'react-native';
import { useState } from 'react';

const MILLLISECONDS_IN_ONE_SECOND = 1000
const NUMBER_OF_SECONDS_IN_ONE_MINUTE = 60

const incrementTimer = (time) => {
  const nextSecond = time.seconds + 1;
  if(nextSecond >= NUMBER_OF_SECONDS_IN_ONE_MINUTE) {
    const minutes = Math.floor(nextSecond/NUMBER_OF_SECONDS_IN_ONE_MINUTE) + time.minutes;
    const seconds = (nextSecond)%NUMBER_OF_SECONDS_IN_ONE_MINUTE;
    return {minutes, seconds};
  }

  return {minutes: time.minutes, seconds: nextSecond};
}

function Timer () {
    const [time, setTime] = useState({minutes: 0, seconds: 0});
    setTimeout(() => setTime(incrementTimer(time)), MILLLISECONDS_IN_ONE_SECOND)

    return (
        <Text testID="timer">{time.minutes.toString().padStart(2, '0')}:{time.seconds.toString().padStart(2, '0')}</Text>
    );
}

export default Timer;