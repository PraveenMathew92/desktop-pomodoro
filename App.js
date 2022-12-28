import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Timer from './src/Timer';
import TimerStartStopButton from './src/TimerStartStopButton';


export default function App() {
  const [disabled, setDisabled] = useState(true);
  const time = {minutes: 0, seconds: 0}

  return (
    <View style={styles.container}>
      { !disabled && <Timer />}
      <View style={styles.button}>
        <TimerStartStopButton disabled={disabled} onPress={() => setDisabled(!disabled)}/>
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
