import { Button } from 'react-native';

export default function TimerStartStopButton (props) {
    const { disabled, onPress } = props;
    const buttonColor = disabled? 'gray': 'white';
    const buttonTitle = disabled? 'START': 'STOP';
    return (
        <Button title={buttonTitle} color={buttonColor} onPress={onPress}/>
    );
}