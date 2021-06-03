import { Card, Col, Row } from 'antd';
import './Features.less';
const {Meta} = Card;



export const Features = (props) => {
  return (
    <div className='heading-card'>
      <h1>FEATURES</h1>
    <Row justify="center">
      { props.data ?
        props.data.map((d,i) => (

          // <Col>
          //     <Meta title = {`${d.title}`} description = {`${d.text}`} style = {{textAlign:'center'}}/>
          //   </Card>
          // </Col>
          
          <div className='cute-card'>
              <div className='title-card'>
              <p> {d.title} </p>
              </div>
              <div className='mid-card'>
              {/* <h3>1230</h3> */}
              <p>{d.text}</p>
              </div>
              {/* <div className='footer-card'>
                <h5>Lottery Odds</h5>
                <p>25%</p>
                <h5>WhiteList Requirements</h5>
                <p>None</p>
                <h5>Pool Weights</h5>
                <p>2x</p>
              </div> */}
            </div>
        )) 
      :'Loading...'
      }
    </Row>
    </div>
  )}

    // <Card title="Card Title">
    //   <Card.Grid style={gridStyle}>
    //     {props.data
    //         ? props.data.map((d, i) => (
    //             <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
    //               {' '}
    //               <i className={d.icon}></i>
    //               <h3>{d.title}</h3>
    //               <p>{d.text}</p>
    //             </div>
    //           ))
    //         : 'Loading...'}
    //   </Card.Grid>
      /* <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid>
      <Card.Grid style={gridStyle}>Content</Card.Grid> */
    // </Card>
    // <div id='features' className='text-center'>
    //   <div className='container'>
    //     <div className='col-md-10 col-md-offset-1 section-title'>
    //       <h2>Features</h2>
    //     </div>
    //     <div className='row'>
    //       {props.data
    //         ? props.data.map((d, i) => (
    //             <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
    //               {' '}
    //               <i className={d.icon}></i>
    //               <h3>{d.title}</h3>
    //               <p>{d.text}</p>
    //             </div>
    //           ))
    //         : 'Loading...'}
    //     </div>
    //   </div>
    // </div>
  // )
// }

export default Features;
