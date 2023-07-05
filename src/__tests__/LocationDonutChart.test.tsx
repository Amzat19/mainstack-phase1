import { render } from '@testing-library/react';
import LocationDonutChart from '../components/LocationDonutChart';
import '@testing-library/jest-dom';

describe('LocationDonutChart component', () => {
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00'];

  it('check if the location donut chart renders correctly ', () => {
     render(
    // Check if the location donut chart component renders PS: null is a type defined in charts component
      <LocationDonutChart data={null} colors={colors} />
    );
  });
});