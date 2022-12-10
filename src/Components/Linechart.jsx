import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography} from "antd";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
  );
const { Title } = Typography;

const Linechart = ({coinHistory, currentPrice, coinName}) => {
  console.log(coinHistory);
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = coinHistory?.data?.history?.length-1; i >= 0 ; i -= 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = coinHistory?.data?.history?.length -1; i >= 0 ; i -= 1) {
    coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp * 1000).toLocaleDateString());
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
        {
            label: "Price in USD",
            data: coinPrice,
            fill: false,
            backgroundColor: "#0071ac",
            borderColor: "#0071cd"
        },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  
    return (
    <>
        <Row className='chart-header'>
            <Title level={2} className='chart-title'>{coinName} Price Chart</Title>
            <Col className='price-container'>
                <Title level={5} className='price-change'>{coinHistory?.data?.change}%</Title>
                <Title level={5} className='price-current'>Current {coinName} Price: $ {currentPrice}</Title>
            </Col>
        </Row>
        <Line data={data} options={options}/>
    </>
  )
}

export default Linechart;