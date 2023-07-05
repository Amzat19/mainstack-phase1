import { render, waitFor } from '@testing-library/react';
import Dashboard from '../components/Dashboard';
import Header from '../components/Header';
import Graph from '../components/Graph';
import Charts from '../components/Charts';

jest.mock('../assets/info.svg', () => {
    return {
      ReactComponent: () => <svg>Mocked Info SVG</svg>,
    };
  });

describe('Dashboard component', () => {
    let originalFetch: typeof global.fetch;

    beforeAll(() => {
      // Store the original fetch function
      originalFetch = global.fetch;
  
      // Mock the global fetch function
      global.fetch = jest.fn().mockResolvedValue({
        json: jest.fn().mockResolvedValue({
          graph_data: {
            views: {
              '2023-07-01': 50,
              '2023-07-02': 70,
              '2023-07-03': 90,
            },
          },
          top_locations: [],
          top_sources: [],
        }),
      });
    });
  
    afterAll(() => {
      // Restore the original fetch function
      global.fetch = originalFetch;
    });

  it('fetches and renders charts data', async () => {
    render(<Dashboard />);

    // Wait for the data to be fetched and rendered
    await waitFor(() => {
    // Check if the header, graph and both donut charts component renders PS: null is a type defined in charts component
      render(<Header />)
      render(<Graph chartsData={null} />)
      render(<Charts chartsData={null} />)
    });

  });
});