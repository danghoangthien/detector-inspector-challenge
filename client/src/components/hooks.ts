import { useEffect, useState } from "react";
import { notification } from "antd";
import { Series } from './../types/index';
import { getTableDataFromURL } from './../utils/index';

export const useGenerateChartDataFromUrl = (url: string) => {
  const [chartData, setChartData] = useState<Series[]>([]);
  useEffect(() => {
    url !== '' && (async() => {
      try {
        const { data, labelIndex, secondaryIndex } = await getTableDataFromURL(url);
        const header = data.shift();
        if (labelIndex === null || secondaryIndex === null) {
          setChartData([]);
        } else {
          const chartData = data.map(item => {
            return (
              {
                label: header[secondaryIndex],
                data: [
                  {
                    name: item[labelIndex],
                    secondary: parseFloat(item[secondaryIndex].replace(/\,/g,'').match(/[\d\.]+/)),
                  }
                ]
              } as Series
            );
          });
          setChartData(chartData);
        }
        
      } catch (error) {
        notification.error({ message: `URL:${url} Parse error!` });
      }
    })();
  }, [url]);
  return { chartData };
}
