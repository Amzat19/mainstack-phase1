import { render } from '@testing-library/react';
import Charts from '../components/Charts';
import '@testing-library/jest-dom';
import LocationDonutChart from '../components/LocationDonutChart';
import SourcesDonutChart from '../components/SourcesDonutChart';

jest.mock('../assets/nigeria.svg', () => {
  return {
    ReactComponent: () => <svg>Mocked Nigeria SVG</svg>,
  };
});

jest.mock('../assets/germany.svg', () => {
  return {
    ReactComponent: () => <svg>Mocked Germany SVG</svg>,
  };
});

jest.mock('../assets/ghana.svg', () => {
  return {
    ReactComponent: () => <svg>Mocked Ghana SVG</svg>,
  };
});

jest.mock('../assets/finland.svg', () => {
  return {
    ReactComponent: () => <svg>Mocked Finland SVG</svg>,
  };
});

jest.mock('../assets/uk.svg', () => {
  return {
    ReactComponent: () => <svg>Mocked Uk SVG</svg>,
  };
});

jest.mock('../assets/facebook.svg', () => {
  return {
    ReactComponent: () => <svg>Mocked Facebook SVG</svg>,
  };
});

jest.mock('../assets/instagram.svg', () => {
  return {
    ReactComponent: () => <svg>Mocked Instagram SVG</svg>,
  };
});

jest.mock('../assets/linkedin.svg', () => {
  return {
    ReactComponent: () => <svg>Mocked LinkedIn SVG</svg>,
  };
});

jest.mock('../assets/google.svg', () => {
  return {
    ReactComponent: () => <svg>Mocked Google SVG</svg>,
  };
});

describe('Charts component', () => {
  const colors: string[] = ['#599EEA', '#844FF6', '#0FB77A', '#FAB70A', '#F09468'];

  beforeEach(() => {
    // Check if the Charts component renders PS: null is a type defined in charts component
    render(<Charts chartsData={null} />);
  });

  it('renders the location donut chart', () => {
    // Check if the Location donut chart component renders PS: null is a type defined in charts component
    render(<LocationDonutChart data={null} colors={colors} />)
  });

  it('renders top source donut chart properly', () => {
    // Check if the sources component renders PS: null is a type defined in charts component
    render(<SourcesDonutChart data={null} colors={colors} />)
  });
});