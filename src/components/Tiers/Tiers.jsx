import { Card,Col, Row } from 'antd';
import './Tiers.less';
const {Meta} = Card;



export const Tiers = (props) => {
  return (
    <div className='heading-tier'>
      <h1>TIERS</h1>
      <Row justify="center" align="center">
        { props.data ?
          props.data.map((d,i) => (

            // <Col>
            //     <Meta title = {`${d.title}`} description = {`${d.text}`} style = {{textAlign:'center'}}/>
            //   </tier>
            // </Col>
            <div className='cute-tier'>
                <div className='title-tier'>
                <h1> {d.title} </h1>
                </div>
                <div className='mid-tier'>
                <h3>Tokens</h3>
                <p>{d.tokens}</p>
                </div>
                <div className='footer-tier'>
                  <h5>Lottery Odds</h5>
                  <p>{d.odds}</p>
                  {/* <h5>WhiteList Requirements</h5>
                  <p>None</p> */}
                  <br></br>
                  <h5>Pool Weights</h5>
                  <p>{d.weight}</p>
                  <br></br>
                  <h5>Total Number</h5>
                  <p>{d.text}</p>
                </div>
              </div>
          )) 
        :'Loading...'
        }
      </Row>
    </div>
  )}


export default Tiers;
