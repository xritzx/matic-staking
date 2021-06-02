import { React, useEffect, useState } from 'react';
import { Layout, Button, InputNumber, Col, Row, Menu, Card, Avatar } from 'antd';
import './Home.less';
import {GlobalLoader,Navigation,Header,Features,Tiers} from '../../components/index';
import {CheckCircleTwoTone } from '@ant-design/icons';
import JsonData from '../../data/data.json';

const Home = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, []);


    return (
        <div>
            <Navigation />
            <Header data={landingPageData.Header} />
            <Features data={landingPageData.Features} />
            <Tiers data = {landingPageData.Tiers} />
        </div>
    )};
    
export default Home;