import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { LocationType } from './Charts';

interface LocationDonutChartProps {
  data: LocationType[] | null;
  colors: string[];
}

const LocationDonutChart: React.FC<LocationDonutChartProps> = ({ data, colors}) => {
  const locationChartRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    //d3.js code for location donut chart
    if (data === null) {
      return;
    }

  const width = 150;
  const height = 150;
  const radius = Math.min(width, height) / 2;

  const svg = d3
  .select(locationChartRef.current)
  .append('svg')
  .attr('width', width)
  .attr('height', height)
  .append('g')
  .attr('transform', `translate(${width / 2}, ${height / 2})`);

  const colorScale = d3.scaleOrdinal<string>()
  .domain(data.map((d) => d.country))
  .range(colors);

  const pie = d3.pie<LocationType>().value((d) => d.percent);

  const arc = d3
    .arc<d3.PieArcDatum<LocationType>>()
    .innerRadius(radius * 0.6)
    .outerRadius(radius);

  const arcs = svg.selectAll('arc').data(pie(data)).enter().append('g');

  arcs
    .append('path')
    .attr('d', arc)
    .attr('fill', (d) => colorScale(d.data.country));
  }, [data, colors]);
  
    return (
        <svg ref={locationChartRef} width={150} height={150}></svg>
    )
}

export default LocationDonutChart;