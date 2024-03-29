import App from '../App';
import { fireEvent, render, screen } from '@testing-library/react-native';
import "@testing-library/jest-native/extend-expect";


test('should render the start button', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: "START" });
    expect(button).toBeVisible();
});

test('should not render the timer by default', () => {
    render(<App />);
    const timer = screen.queryByTestId('timer');
    expect(timer).toBeNull();
});

test('should render the timer after start button click', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: "START" });

    fireEvent.press(button);
    const timer = screen.queryByTestId('timer');
    expect(timer).toBeVisible();
});

test('should show stop button after timer start', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: "START" });
    
    fireEvent.press(button);

    expect(screen.queryByRole('button', { name: "START" })).toBeNull();
    expect(screen.queryByRole('button', { name: "STOP" })).toBeVisible();
});