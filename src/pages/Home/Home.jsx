import { React, useEffect, useState } from 'react';
import { Layout } from 'antd';
import './Home.less';
import { Team, Navigation, Banner, Features, Tiers } from '../../components/index';
// import {  } from '@ant-design/icons';
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
        <Layout className="home-layout">
          <Navigation />
          <Content>
            <Particles options={particleOptions} height="500px" style={{"position": "absolute"}}/>
            <Banner data={landingPageData.Header} />
            <Features data={landingPageData.Features} />
            <Tiers data = {landingPageData.Tiers} />
            <Team data={landingPageData.Team} />
          </Content>
          <Footer>

          </Footer>
        </Layout>
    )};
    
export default Home;