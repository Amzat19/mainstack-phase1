import { render, screen } from '@testing-library/react';
import Graph from '../components/Graph';
import '@testing-library/jest-dom';

jest.mock('../assets/info.svg', () => {
    return {
      ReactComponent: () => <svg>Mocked Info SVG</svg>,
    };
  });


describe('Graph component', () => {
  test('renders the graph component', () => {
    // Check if the Line Graph component renders PS: null is a type defined in charts component
    render(<Graph chartsData={null} />);
  });

  test('displays the time range options', () => {
    render(<Graph chartsData={null} />);
    const timeRangeOptions = screen.getAllByRole('listitem');
    expect(timeRangeOptions).toHaveLength(6);
  });

  test('displays the page views and all-time information', () => {
    render(<Graph chartsData={null} />);
    const pageViewsText = screen.getByText('Page Views');
    const pageViewsCount = screen.getByText('500')
    const allTimeText = screen.getByText('All time');
    expect(pageViewsText).toBeInTheDocument();
    expect(allTimeText).toBeInTheDocument();
    expect(pageViewsCount).toBeInTheDocument();

  });
});