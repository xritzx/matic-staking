import { React, useEffect, useState } from 'react';
import { Layout, Button, InputNumber, Col, Row, Menu, Card, Avatar } from 'antd';
import './Home.less';
import {GlobalLoader,Navigation,Banner,Features,Tiers} from '../../components/index';
import {CheckCircleTwoTone } from '@ant-design/icons';
import JsonData from '../../data/data.json';
import Particles from 'react-tsparticles';
import particleOptions from './particles.json';

const { Content, Footer } = Layout;


const Home = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, []);


    return (
        <Layout>
          <Navigation />
          <Content>
            <Particles options={particleOptions} height="70%" style={{"position": "absolute"}}/>
            <Banner data={landingPageData.Header} />
            <Features data={landingPageData.Features} />
            <Tiers data = {landingPageData.Tiers} />

          </Content>
          <Footer>

          </Footer>
        </Layout>
    )};
    
export default Home;