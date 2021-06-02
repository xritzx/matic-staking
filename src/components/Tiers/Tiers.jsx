import { Card,Col } from 'antd';
const {Meta} = Card;



export const Tiers = (props) => {
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


export default Tiers;
