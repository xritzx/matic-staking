import { Card } from 'antd';

const { Meta } = Card;


export const Team = (props) => {
  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Meet the Team</h2>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p> */}
        </div>
        <div id='row'>
          {props.data
            ? props.data.map((d, i) => (
                // <div key={`${d.name}-${i}`} className='col-md-3 col-sm-6 team'>
                //   <div className='thumbnail'>
                //     {' '}
                //     <img src={d.img} alt='...' className='team-img' />
                //     <div className='caption'>
                //       <h4>{d.name}</h4>
                //       <p>{d.job}</p>
                //     </div>
                //   </div>
                // </div>
                <Card hoverable 
                  
                  cover = {<img src={d.img} alt='...' className='team-img' />}
                  >
                    <Meta title = {d.name} description = {d.job} />
                  </Card>
              ))
            : 'loading'}

            <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>,
        </div>
      </div>
    </div>
  )
};
export default Team;
