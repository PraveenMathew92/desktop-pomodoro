import { StatusBar } from 'expo-status-bar';
import  { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MILLLISECONDS_IN_ONE_SECOND = 1000

const incrementTimer = (time) => {
  if((time.seconds + 1) == 60) {
    return {minutes: time.minutes + 1, seconds: 0};
  }
  return {minutes: time.minutes, seconds: time.seconds + 1};
}

export default function App() {
  const [time, setTime] = useState({minutes: 0, seconds: 0});
  useEffect(() => {
      const interval = setInterval(() => setTime(incrementTimer(time)), MILLLISECONDS_IN_ONE_SECOND);
      return () => clearInterval(interval);
  }, [time])

  return (
    <View style={styles.container}>
      <Text>{time.minutes.toString().padStart(2, '0')}:{time.seconds.toString().padStart(2, '0')}</Text>
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
});
