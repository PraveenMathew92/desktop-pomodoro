import App from '../App';
import { render } from '@testing-library/react-native';
import "@testing-library/jest-native/extend-expect";


test('should render the start button', () => {
    const { getByRole } = render(<App />);
    const button = getByRole('button', { name: "START" });
    expect(button).toBeVisible();
});