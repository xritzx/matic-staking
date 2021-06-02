import { connect } from 'react-redux';
import React from 'react';



export const Header = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            Crypto Mania
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='' >
                Smart Staking
              </a>
            </li>
            <li>
              <a href=''>
                Farming
              </a>
            </li>
            <li>
              <a href=''>
                Raffle
              </a>
            </li>
            <li>
              <a href=''>
                IDOs
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
