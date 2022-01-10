import { Chart, registerables } from 'chart.js';
import React, { Component, createRef } from 'react';

export default class LineChart extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = createRef();

    this.data = {
      labels: this.props.labels,
      datasets: [
        {
          label: 'Probando',
          data: this.props.score,
        },
      ],
    };

    this.chartConfig = {
      type: 'line',
      data: this.data,
      options: {},
    };

    this.state = {};
  }

  componentDidMount() {
    Chart.register(...registerables);
    const lineChart = new Chart(this.canvasRef.current, this.chartConfig);
  }

  render() {
    return (
      <div>
        <canvas ref={this.canvasRef} />
      </div>
    );
  }
}

LineChart.defaultProps = {
  score: [2, 4, 6, 8, 0, 1, 3, 5, 7, 9],
  labels: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
};
