import Router from "react-router";
Router.useParams = jest.fn();
import App from './App';

import { render, screen, waitFor } from '@testing-library/react';

test('renders app', () => {
  render(<App />)
});

