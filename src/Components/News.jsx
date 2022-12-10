import React, { useState} from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader';

const { Text, Title} = Typography;
const { Option } = Select;



const demoImage = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.losspreventionmedia.com%2Fuploads%2F2019%2F08%2Fcryptocurrency-bitcoin-1280x720.jpg&f=1&nofb=1&ipt=c9bb03f35bc255838e11e0a8d3ff05ab7f2e93e036091b2498cc1c43a886e810&ipo=images'

const News = ( {simplified} ) => {
  
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });
  const {data} = useGetCryptosQuery(100);
  if (!cryptoNews?.value) return <Loader/>; 
  return (
    <Row gutter={[24,24]} className='news-card-container'>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className='select-news'
            placeholder='Select a Crypto'
            optionFilterProp='children'
            onChange={(value) => setNewsCategory(value)}
            filterOption = {(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
              <Option value='Cryptocurrency'>Cryptocurrency</Option>
              {data?.data?.coins.map((coin) => <Option value={coin.name}>{coin.name}</Option>)}
          </Select>
        </Col>
      )}
      
      {cryptoNews?.value.map( (news, i) => (
        <Col xs={24} sm={12} lg={8} key = {i}>
          <Card className='news-card' hoverable>
            <a href={news.url} target='_blank' rel='noreffer'>
              <div className='news-image-container'>
                <Title className='news-title' level={4}>{news.name}</Title>
                <img style={{ maxWidth: '180px', maxHeight:'100px'}} src={news?.image?.thumbnail?.contentUrl || demoImage}/>
              </div>
              <p>
                {news.description > 100 
                ? `${news.description.substring(0,100)}...`
                : news.description
                }
              </p>
              <div className='provider-container'>
                  <div>
                    <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt=''/>
                    <Text className='provider-name'>{news.provider[0]?.name}</Text>
                  </div>
                  <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
              </div>
            </a>
          </Card>

        </Col>
      ))}

    </Row>
  )
}

export default News