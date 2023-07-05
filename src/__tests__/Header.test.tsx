import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import '@testing-library/jest-dom';

test('renders Header component', () => {
  render(<Header />);

  // Assert that the Header component is rendered
  const headerElement = screen.getByRole('banner');
  expect(headerElement).toBeInTheDocument();

  // Assert that the text content is correct
  const dashboardHeaderText = screen.getByText('Dashboard');
  expect(dashboardHeaderText).toBeInTheDocument();

  const greetingText = screen.getByText(/Good morning, Blessing/i);
  expect(greetingText).toBeInTheDocument();

  const summaryText = screen.getByText(/Check out your dashboard summary./i);
  expect(summaryText).toBeInTheDocument();

  const viewAnalyticsLink = screen.getByText(/View analytics/i);
  expect(viewAnalyticsLink).toBeInTheDocument();
});