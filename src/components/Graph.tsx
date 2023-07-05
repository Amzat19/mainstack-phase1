import { ReactComponent as Info } from "../assets/info.svg";
import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import styles from '../styles/graph.module.scss';
import { ChartsData } from "./Dashboard";

interface DataPoint {
  date: Date;
  value: number;
}

interface GraphProps {
  chartsData: ChartsData | null
}

const Graph: React.FC<GraphProps> = ({ chartsData }) => {
  const graphRef = useRef<SVGSVGElement>(null);
  const [lineGraphData, setLineGraphData] = useState<DataPoint[] | null>(null);

  useEffect(() => {
    //converts graph data into array for reusability
    if (chartsData) {
      const convertedData: DataPoint[] = Object.entries(chartsData.graph_data.views).map(([date, value]) => ({
        date: date ? new Date(date) : new Date(),
        value,
      }));
      setLineGraphData(convertedData);
    }
  }, [chartsData]);

  useEffect(() => {
    //d3.js code for graph
    if (lineGraphData) {
      const svg = d3.select(graphRef.current);
  
      const width = 800;
      const height = 250;
      const margin = { top: 5, right: 20, bottom: 0, left: 50 };
      const innerWidth = width - margin.left - margin.right;
      const innerHeight = height;
  
      const xScale = d3.scaleTime().range([margin.left, innerWidth + margin.left]);
      const yScale = d3.scaleLinear().range([innerHeight, 0]);
  
      xScale.domain([d3.min(lineGraphData, d => d.date) as Date, d3.max(lineGraphData, d => d.date) as Date]);
      yScale.domain([0, 120]);
  
      const line = d3.line<DataPoint>()
        .x(d => xScale(d.date))
        .y(d => yScale(d.value));
  
      const area = d3.area<DataPoint>()
        .x(d => xScale(d.date))
        .y0(innerHeight)
        .y1(d => yScale(d.value));
  
      svg.append('path')
        .datum(lineGraphData)
        .attr('class', styles.area)
        .attr('d', area)
        .style('fill', `url(#${styles.areaGradient})`);
  
      svg.append('defs').append('linearGradient')
        .attr('id', styles.areaGradient)
        .attr('gradientUnits', 'userSpaceOnUse')
        .attr('x1', 0).attr('y1', yScale(0))
        .attr('x2', 0).attr('y2', yScale(100))
        .selectAll('stop')
        .data([
          { offset: '0%', color: 'white' },
          { offset: '100%', color: '#FF5403' }
        ])
        .enter()
        .append('stop')
        .attr('offset', d => d.offset)
        .attr('stop-color', d => d.color);
  
      svg.append('path')
        .datum(lineGraphData)
        .attr('class', styles.line)
        .attr('d', line);
  
      svg.append('g')
        .attr('class', styles.xAxis)
        .attr('transform', `translate(${margin.left}, ${height + 5})`)
        .call(d3.axisBottom(xScale));
          
  
      svg.append('g')
        .attr('class', styles.yAxis)
        .attr('transform', `translate(${margin.left}, ${5})`)
        .call(d3.axisLeft(yScale).ticks(6));
  
      svg.append('g')
        .attr('class', styles.yGrid)
        .attr('transform', `translate(${margin.left}, ${2})`)
        .call(d3.axisLeft(yScale)
        .tickSize(-innerWidth)
        .tickFormat(() => '')
        .tickValues(yScale.ticks(6).filter((d: number) => d >= yScale.domain()[0] && d <= yScale.domain()[1]))
        )
        .call(g => g.select('.domain').remove()) 
        .call(g => g.selectAll('.tick line').attr('class', styles.gridLine));     
    }
  }, [lineGraphData]);
  return (
    <section className={styles.graphSection}>
      <ul className={styles.timeRange}>
        <li role="listitem">1 Day</li>
        <li role="listitem">3 Days</li>
        <li role="listitem">7 Days</li>
        <li role="listitem">30 Days</li>
        <li className={styles.active} role="listitem">All Time</li>
        <li role="listitem">Custom Date</li>
      </ul>
      <article>
        <div>
          <span>
            <p className={styles.pageViews}>Page Views</p>
            <p className={styles.allTime}>All time</p>
          </span>
          <Info />
        </div>
        <h2>500</h2>
        <svg ref={graphRef} width={800} height={300}></svg>
      </article>
    </section>
  )
}

export default Graph;