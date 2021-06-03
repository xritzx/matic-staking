import { Card, Row, Layout } from 'antd';
import './Team.less';
import { EditOutlined, EllipsisOutlined, FacebookOutlined, LinkedinOutlined, SettingOutlined, TwitterOutlined } from '@ant-design/icons';

const { Header } = Layout;
const { Meta } = Card;


export const Team = (props) => {
  return (
      <div className='team'>
        <p className='team-title'>MEET THE TEAM</p>
        <Row gutters={[16, 16]} justify='center'>
          {props.data
            ? props.data.map((d, i) => (
              <Card
                style={{ width: 300, margin: "30px", border: "none"}}
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
