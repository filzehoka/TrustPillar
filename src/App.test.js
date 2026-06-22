// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TrustPillar title', () => {
    render(<App />);
    const titleElement = screen.getByText(/TrustPillar/i);
    expect(titleElement).toBeInTheDocument();
});
