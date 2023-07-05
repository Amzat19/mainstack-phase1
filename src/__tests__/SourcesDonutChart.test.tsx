import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import SourcesDonutChart from '../components/SourcesDonutChart';

describe('Sources donut chart component', () => {
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00'];

  it('check if the sources donut chart if data is null', () => {
     render(
      <SourcesDonutChart data={null} colors={colors} />
    );
  });
});