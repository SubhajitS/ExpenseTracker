import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const maxValue = Math.max(...props.bars.map((bar) => bar.value));
  return (
    <div className="chart">
      {props.bars.map((bar) => (
        <ChartBar
          key={bar.label}
          value={bar.value}
          maxValue={maxValue}
          label={bar.label}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart;
