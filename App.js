import { StatusBar } from 'expo-status-bar';
import  { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

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

export default function App() {
  const [time, setTime] = useState({minutes: 0, seconds: 55});
  setTimeout(() => setTime(incrementTimer(time)), MILLLISECONDS_IN_ONE_SECOND)

  return (
    <View style={styles.container}>
      <Text>{time.minutes.toString().padStart(2, '0')}:{time.seconds.toString().padStart(2, '0')}</Text>
      <View style={styles.button}>
        <Button title='START' color='gray' />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 25
  }
});
