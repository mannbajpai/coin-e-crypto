import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Typography, Layout, Space } from 'antd';

import { Navbar, Homepage, CryptoDetails, Cryptocurrencies, Exchanges, News } from './Components';
import './App.css';

const App = () => {
  return (
    <div className='app'>
        <div className='navbar'>
            <Navbar/>
        </div>
        <div className='main'>
            <Layout>
                <div className='routes'>
                <Routes>
                    <Route path = '/' element={<Homepage/>}>
                    </Route>
                    <Route path = '/cryptocurrencies' element={<Cryptocurrencies/>}>
                    </Route>
                    <Route path = '/crypto/:coinId' element={<CryptoDetails/>}>
                    </Route>
                    <Route path = '/exchanges' element={<Exchanges/>}>
                    </Route>
                    <Route path = '/news' element={<News/>}>
                    </Route>
                </Routes>
                </div>
            </Layout>
        
        <div className='footer'>
            <Typography.Title level={5} style={{ color:'white'}}>
                Coin-E-Crypto <br/>
                2022 All Rights Reserved
            </Typography.Title>
            <Space>
                <Link to='/'>Home</Link>
                <Link to='/exchanges'>Exchanges</Link>
                <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
                <Link to='/news'>News</Link>
            </Space>
        </div>
        </div>
    </div>
  )
}

export default App;