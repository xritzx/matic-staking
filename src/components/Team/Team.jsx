import { Card, Row } from 'antd';
import './Team.less';
import { FacebookOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';

const { Meta } = Card;


export const Team = (props) => {
  return (
      <div className='team'>
        <p className='team-title'>MEET THE TEAM</p>
        <Row gutters={[16, 16]} justify='center'>
          {props.data
            ? props.data.map((d, i) => (
              <Card
                style={{ width: 300, margin: "30px", border: "none" }}
                cover={<img alt="example" style={{"border-radius":"50%"}}  src={d.img}/>}
                actions={[
                  <FacebookOutlined key="fb" />,
                  <LinkedinOutlined key="in" />,
                  <TwitterOutlined key="tw" />,
                ]}
              >
                <Meta
                  title={d.name}
                  description={d.job}
                />
              </Card>

              ))
            : 'loading'}
        </Row>
      </div>
  )
};
export default Team;
