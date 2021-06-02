import React, { useState, useLayoutEffect } from 'react';
import { Layout, Menu, Row, Col, Button, Drawer} from 'antd';
import { PicRightOutlined } from '@ant-design/icons';

import "./Navigation.less";
import MenuItems from './MenuItems';

export const Navigation = () => {
  const [ drawerMode, setMode ] = useState(false);
  const [ mobile, setMobile] = useState(window.innerWidth <= 760);
  useLayoutEffect(() => {
    function updateSize() {
      setMobile(window.innerWidth <= 760);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <Layout.Header className='header'>
      <Row justify="space-around">
          <Col>
            <p className="brand">Crypto Mania</p>
          </Col>
          <Col>

          {
            mobile?(
              <Button onClick={()=>setMode(!drawerMode)} shape="circle" icon={ <PicRightOutlined />} />
            ):(
              <MenuItems mode="horizontal" className="menu"/>
            )
          }
            <Drawer
              title="Menu"
              placement="right"
              closable={true}
              onClose={()=>setMode(false)}
              visible={drawerMode}
            >
              <MenuItems mode="vertical"/>
            </Drawer>
          </Col>
      </Row>
    </Layout.Header>
  )
}

export default Navigation;