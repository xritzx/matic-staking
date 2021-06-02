import { Card,Col } from 'antd';
const {Meta} = Card;



export const Features = (props) => {
  return (
    <div>
      { props.data ?
        props.data.map((d,i) => (
          <Card hoverable style={{width:300, marginTop:16, marginLeft: 16}} type="inner">
            <Meta title = {`${d.title}`} description = {`${d.text}`} style = {{textAlign:'center'}}/>
          </Card>
        )) 
      :'Loading...'
      }
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
