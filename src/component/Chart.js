import "./ChartBar";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const totalMaximum = Math.max(
    ...props.dataPoints.map((point) => point.value)
  );
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          ></ChartBar>
        );
      })}
    </div>
  );
};
export default Chart;
