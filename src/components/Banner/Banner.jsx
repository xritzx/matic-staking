import React from 'react';
import { Card } from 'antd';

import './Banner.less';

export const Banner = (props) => {
  return (
    <Card className="banner">
      <h1>
        {props.data ? props.data.title : 'Loading'}
        <span></span>
      </h1>
        <p>{props.data ? props.data.paragraph : 'Loading'}</p>
        <a
        href='#features'
        className='btn btn-custom btn-lg page-scroll'
      >
        Learn More
      </a>{' '}
    </Card>


    // <header id='header'>
    //   <div className='intro'>
    //     <div className='overlay'>
    //       <div className='container'>
    //         <div className='row'>
    //           <div className='col-md-8 col-md-offset-2 intro-text'>
    //             <h1>
    //               {props.data ? props.data.title : 'Loading'}
    //               <span></span>
    //             </h1>
    //             <p>{props.data ? props.data.paragraph : 'Loading'}</p>
    //             <a
    //               href='#features'
    //               className='btn btn-custom btn-lg page-scroll'
    //             >
    //               Learn More
    //             </a>{' '}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </header>
  )
}

export default Banner;
