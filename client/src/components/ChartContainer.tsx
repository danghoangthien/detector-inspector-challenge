import React from 'react';
import { AxisOptions, Chart } from "react-charts";

import { SimpleChart } from './../types/index';
import { useGenerateChartDataFromUrl } from './hooks';

type ChartContainerProps = {
  url: string;
};

const ChartContainer = ({ url } : ChartContainerProps) => {
  const { chartData } = useGenerateChartDataFromUrl(url)
  const primaryAxis = React.useMemo(
    (): AxisOptions<SimpleChart> => ({
      getValue: datum => datum.name,
    }),
    []
  );

  const secondaryAxes = React.useMemo(
    (): AxisOptions<SimpleChart>[] => [
      {
        getValue: datum => datum.secondary,
        elementType: 'bar',
      },
    ],
    []
  );
  return (
    <>
      {
        chartData.length ? (
          <>
            <div style={{ height: '850px', width: '1060px' }}>
              <Chart
                options={{
                  data: chartData,
                  primaryAxis,
                  secondaryAxes,
                }}
              />
            </div>
          </>
        ) : url ? <h3> No chart data available in ${url}</h3> : <> Input URL for extracting chart data </>
      }
    </>
  )
}

export default ChartContainer;