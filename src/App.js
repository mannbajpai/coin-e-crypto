import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Typography, Layout, Space } from "antd";
import icon from "./images/Coin-e-Crypto.png";
import {
  Navbar,
  Homepage,
  CryptoDetails,
  Cryptocurrencies,
  Exchanges,
  News,
} from "./Components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage />}></Route>
              <Route
                path="/cryptocurrencies"
                element={<Cryptocurrencies />}
              ></Route>
              <Route path="/crypto/:coinId" element={<CryptoDetails />}></Route>
              <Route path="/exchanges" element={<Exchanges />}></Route>
              <Route path="/news" element={<News />}></Route>
            </Routes>
          </div>
        </Layout>

        <div className="footer">
          <div className="footer-details">
            <img src={icon} alt="logo" className="footer-logo" />
            <div>
              <Typography.Title level={4} style={{ color: "#E8E8E8" }}>
                Coin-E-Crypto <br />
                © 2022
              </Typography.Title>
            </div>
          </div>

          <Space >
            <Link className="footer-link" to="/">Home</Link>
            <Link className="footer-link" to="/exchanges">Exchanges</Link>
            <Link className="footer-link" to="/cryptocurrencies">Cryptocurrencies</Link>
            <Link className="footer-link" to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
