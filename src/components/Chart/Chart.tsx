import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props: { dataPoints: { label: string; value: number }[] }) => {
  const dataPointValues: number[] = props.dataPoints.map(
    (dataPoint: { label: string; value: number }) => dataPoint.value
  );
  const totalMaximum: number = Math.max(...dataPointValues);

  console.log("maximum");
  console.log(totalMaximum);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint: any) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
