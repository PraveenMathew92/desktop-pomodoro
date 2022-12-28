import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Timer from './src/Timer';


export default function App() {
  const [disabled, setDisabled] = useState(true);
  const time = {minutes: 0, seconds: 0}

  return (
    <View style={styles.container}>
      { !disabled && <Timer />}
      <View style={styles.button}>
        <Button title='START' color='gray' onPress={() => setDisabled(false)}/>
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
