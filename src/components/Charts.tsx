import { ChartsData } from "./Dashboard";
import { ReactComponent as Nigeria } from "../assets/nigeria.svg";
import { ReactComponent as Germany } from "../assets/germany.svg";
import { ReactComponent as  Ghana} from "../assets/ghana.svg";
import { ReactComponent as Finland } from "../assets/finland.svg";
import { ReactComponent as UK } from "../assets/uk.svg";
import { ReactComponent as FaceBook } from "../assets/facebook.svg";
import { ReactComponent as Instagram } from "../assets/Instagram.svg";
import { ReactComponent as LinkedIn } from "../assets/linkedin.svg";
import { ReactComponent as Google } from "../assets/google.svg";
import styles from '../styles/chart.module.scss';
import React, { useEffect, useState } from "react";
import LocationDonutChart from "./LocationDonutChart";
import SourcesDonutChart from "./SourcesDonutChart";

interface ChartsProps {
  chartsData: ChartsData | null
}

export interface LocationType {
  country: string;
  count: number;
  percent: number;
}

export interface SourceType {
  source: string;
  count: number;
  percent: number;
}

const Charts: React.FC<ChartsProps>  = ({ chartsData}) => {
  const [locationDonutChartData, setLocationDonutChartData] = useState<LocationType[] | null>(null);
  const [sourcesDonutChartData, setSourcesDonutChartData] = useState<SourceType[] | null>(null);
  const colors: string[] = ['#599EEA', '#844FF6', '#0FB77A', '#FAB70A', '#F09468'];

  useEffect(() => {
    if(chartsData) {
      setLocationDonutChartData(chartsData?.top_locations);
      setSourcesDonutChartData(chartsData?.top_sources)
    }
  }, [chartsData]);

  const getFlagComponent = (country: string) => {
    switch (country) {
      case 'Nigeria':
        return <Nigeria />;
      case 'Germany':
        return <Germany width={21} height={16} />;
      case 'Ghana':
        return <Ghana width={21} height={16}/>;
      case 'Finland':
        return <Finland width={21} height={16}/>;
      case 'United Kingdom':
        return <UK width={21} height={16}/>;
      default:
        return null;
    }
  };

  const getSourceComponent = (source: string) => {
    switch (source) {
      case 'google':
        return <Google width={21} height={16} />;
      case 'facebook':
        return <FaceBook />;
      case 'instagram':
        return <Instagram/>;
      case 'linkedin':
        return <LinkedIn/>;
      default:
        return null;
    }
  };

  return (
    <section className={styles.chartSection}>
      <article>
        <div>
          <p className={styles.heading}>Top Location</p>
          <p className={styles.reports}>View full reports</p>
        </div>
        <div>
          <ul>
            {locationDonutChartData?.map((item, index) => (
              <li key={index} role="listitem" data-testid="locationData">
                {getFlagComponent(item.country)}
                <p data-testid="country-name">{item.country} <span>{item.percent}%</span></p>
                {index < colors.length && (
                  <span style={{ backgroundColor: colors[index] }} data-testid="country-percentage"></span>
                )}
              </li>
            ))}
          </ul>
          <LocationDonutChart data={locationDonutChartData} colors={colors} />
        </div>
      </article>
      <article>
        <div>
          <p className={styles.heading}>Top Referral source</p>
          <p className={styles.reports}>View full reports</p>
        </div>
        <div>
          <ul>
            {sourcesDonutChartData?.map((item, index) => (
              <li key={index} role="listitem" data-testid="sourceData">
                {getSourceComponent(item.source)}
                <p data-testid="source-name">{item.source.charAt(0).toUpperCase() + item.source.slice(1)} <span>{item.percent}%</span></p>
                <span style={{ backgroundColor: colors[index] }} data-testid="source-percentage"></span>
              </li>
            ))}
          </ul>
          <SourcesDonutChart data={sourcesDonutChartData} colors={colors} />
        </div>
      </article>
    </section>
  )
}

export default Charts;