import { React, useEffect, useState } from 'react';
import { Layout, Button, InputNumber, Col, Row, Menu, Card, Avatar } from 'antd';
import './Home.less';
import {GlobalLoader} from '../../components/index';
import {CheckCircleTwoTone } from '@ant-design/icons';
import { Navigation } from '../../components/navigation';
import JsonData from '../../data/data.json';

const Home = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, []);


    return (
        <div>
            <Navigation />
        </div>
    )};
export default Home;