import React from 'react'
import { Line } from 'react-chartjs-2'
import 'chart.js/auto'

const LineChartComponent = ({ data }) => {

  const chartData = {
    labels: data.labels,
    datasets: data.datasets.map(dataset => ({
      label: dataset.label,
      data: dataset.values,
      fill: false,
      backgroundColor: dataset.backgroundColor,
      borderColor: dataset.borderColor
    })),
  }

  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }

  return <Line data={chartData} options={options} />
}

export default LineChartComponent