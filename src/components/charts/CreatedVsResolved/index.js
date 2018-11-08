import React, { Component } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";
import "./style.css";

class CreatedVsResolved extends Component {
  state = {
    createdMax: 0
  };

  static defaultProps = {
    data: [
      { xLabel: "Day 1", y1: 3, y2: 1 },
      { xLabel: "Day 2", y1: 15, y2: 4 },
      { xLabel: "Day 3", y1: 20, y2: 20 },
      { xLabel: "Day 4", y1: 30, y2: 27 },
      { xLabel: "Day 5", y1: 50, y2: 38 },
      { xLabel: "Day 6", y1: 90, y2: 50 },
      { xLabel: "Day 7", y1: 120, y2: 80 }
    ],
    intervalY: 20
  };

  componentWillMount() {
    const { data } = this.props;
    this.setState({
      createdMax: Math.max(...data.map(d => d.p1))
    });
  }

  getProcessedData() {
    const { data } = this.props;
    return data.map(d => ({ ...d, y1: d.y1 - d.y2 }));
  }

  getMaxY() {
    const { data } = this.props;
    const allYs = data.map(d => d.y1).concat(data.map(d => d.y2));
    return Math.max(...allYs);
  }

  render() {
    const { intervalY } = this.props;
    return (
      <ResponsiveContainer
        className="createdVsResolved"
        width={500}
        height={250}
      >
        <AreaChart
          data={this.getProcessedData()}
          margin={{ top: 10, left: 10, right: 30, bottom: 5 }}
        >
          <XAxis
            dataKey="xLabel"
            axisLine={false}
            tickLine={false}
            interval="preserveStartEnd"
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            ticks={Array.from(Array(this.getMaxY() + 1).keys())}
            interval={intervalY - 1}
          />
          <CartesianGrid vertical={false} />
          <Area
            type="linear"
            dataKey="y2"
            stroke="#ff3030"
            fill="white"
            strokeWidth={1.5}
            stackId="1"
            dot={{ r: 4, strokeWidth: 2, fill: "#ffb7b7", fillOpacity: 1 }}
          />
          <Area
            type="linear"
            dataKey="y1"
            stroke="#00e3a3"
            fill="#ffb7b7"
            strokeWidth={1.5}
            stackId="1"
            dot={{ r: 4, strokeWidth: 2, fill: "#b6ffeb", fillOpacity: 1 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}

export default CreatedVsResolved;
