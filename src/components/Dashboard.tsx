import Charts from "./Charts";
import Graph from "./Graph";
import Header from "./Header";
import styles from '../styles/dashboard.module.scss';
import React, { useEffect, useState } from "react";

interface LocationType {
    country: string;
    count: number;
    percent: number;
}

interface SourceType {
    source: string;
    count: number;
    percent: number;
}  

export interface ChartsData  {
    graph_data: {
        views: Record<string, number>; // Key-value pairs where the keys are strings and values are numbers
    }
    top_locations: LocationType[];
    top_sources: SourceType[];
}

const Dashboard: React.FC = () => {
    const [chartsData, setChartsData] = useState<ChartsData | null>(null);

    useEffect(() => {
        const fetchChartsData = async () => {
            try {
              const response = await fetch('https://fe-task-api.mainstack.io/');
              const jsonData = await response.json();
              setChartsData(jsonData);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };

          fetchChartsData()
    }, []);

    return (
        <div className={styles.dashboard}>
            <Header />
            <Graph chartsData={chartsData}/>
            <Charts chartsData={chartsData}/>
        </div>
    )
}

export default Dashboard;