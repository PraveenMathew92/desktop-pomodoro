import App from '../App';
import { render, screen } from '@testing-library/react-native';
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