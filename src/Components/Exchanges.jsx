import React from "react";
import millify from "millify";
import { Collapse, Row, Col, Typography } from "antd";
import HTMLReactParser from "html-react-parser";

import { useGetCryptoExchangeQuery } from "../services/cryptoExchangeApi";
import Loader from "./Loader";

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = (exchanges) => {
  const { data, isFetching } = useGetCryptoExchangeQuery();

  if (isFetching) return <Loader />;
  exchanges = [];
  for (let rank = 1; rank < 11; rank++) {
    for (let i = 0; i < Object.keys(data || {}).length; i++) {
      let exchange = data[i];
      if (exchange.adjusted_rank !== null) {
        if (exchange.adjusted_rank === rank) {
          exchanges.push(exchange);
        }
      }
    }
  }

  return (
    <div className="exchanges">
      <Row>
        <Col className="exchange-para" span={6}>
          Exchanges
        </Col>
        <Col className="exchange-para" span={6}>
          Markets
        </Col>
        <Col className="exchange-para" span={6}>
          24h Trade Volume
        </Col>
        <Col className="exchange-para" span={6}>
          1M Trade Volume
        </Col>
      </Row>
      {exchanges.map((exchange) => (
        <Col span={24}>
          <Collapse>
            <Panel
              key={exchange.id}
              showArrow={false}
              header={
                <Row key={exchange.id}>
                  <Col  span={6}>
                    <Text className="exchange-data">
                      <strong>{exchange.name}</strong>
                    </Text>
                  </Col>
                  <Col className="exchange-data" span={6}>
                    {millify(exchange.markets)}
                  </Col>
                  <Col className="exchange-money-data" span={6}>
                    ${millify(exchange.quotes.USD.reported_volume_24h)}
                  </Col>

                  <Col className="exchange-money-data" span={6}>
                    ${millify(exchange.quotes.USD.reported_volume_30d)}
                  </Col>
                </Row>
              }
            >
              {HTMLReactParser(exchange.description || "")}
            </Panel>
          </Collapse>
        </Col>
      ))}
    </div>
  );
};

export default Exchanges;
