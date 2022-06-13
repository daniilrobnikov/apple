import React from 'react'

export default function ChapterNav() {
  return (
    <>
      <nav
        id='chapternav'
        className='chapternav with-paddles'
        data-analytics-region='family browser'
        data-analytics-activitymap-region-id='chapternav'
        aria-label='Mac Family of products'
      >
        <div className='chapternav-wrapper'>
          <ul className='chapternav-items'>
            <li className='chapternav-item chapternav-item-macbook-air'>
              <a className='chapternav-link' href='/macbook-air/'>
                <figure className='chapternav-icon'></figure>
                <span className='chapternav-label' role='text'>
                  MacBook Air
                </span>
                <span className='chapternav-new'>New</span>
              </a>
            </li>
            <li className='chapternav-item chapternav-item-macbook-pro'>
              <a className='chapternav-link' href='/macbook-pro/'>
                <figure className='chapternav-icon'></figure>
                <span className='chapternav-label' role='text'>
                  MacBook Pro
                </span>
                <span className='chapternav-new'>New</span>
              </a>
            </li>
            <li className='chapternav-item chapternav-item-imac-24'>
              <a className='chapternav-link' href='/imac-24/'>
                <figure className='chapternav-icon'></figure>
                <span className='chapternav-label' role='text'>
                  iMac 24”
                </span>
              </a>
            </li>
            <li className='chapternav-item chapternav-item-mac-mini'>
              <a className='chapternav-link' href='/mac-mini/'>
                <figure className='chapternav-icon'></figure>
                <span className='chapternav-label' role='text'>
                  Mac mini
                </span>
              </a>
            </li>
            <li className='chapternav-item chapternav-item-mac-studio'>
              <a className='chapternav-link' href='/mac-studio/'>
                <figure className='chapternav-icon'></figure>
                <span className='chapternav-label' role='text'>
                  Mac Studio
                </span>
              </a>
            </li>
            <li className='chapternav-item chapternav-item-mac-pro'>
              <a className='chapternav-link' href='/mac-pro/'>
                <figure className='chapternav-icon'></figure>
                <span className='chapternav-label' role='text'>
                  Mac Pro
                </span>
              </a>
            </li>
            <li className='chapternav-item chapternav-item-compare'>
              <a className='chapternav-link' href='/mac/compare/'>
                <figure className='chapternav-icon'></figure>
                <span className='chapternav-label' role='text'>
                  Compare<span className='visuallyhidden'>Mac models</span>
                </span>
              </a>
            </li>
            <li className='chapternav-item chapternav-item-displays'>
              <a className='chapternav-link' href='/displays/'>
                <figure className='chapternav-icon'></figure>
                <span className='chapternav-label' role='text'>
                  Displays
                </span>
              </a>
            </li>
            <li className='chapternav-item chapternav-item-accessories'>
              <a
                className='chapternav-link'
                href='/us/shop/goto/mac/accessories'
              >
                <figure className='chapternav-icon'></figure>
                <span className='chapternav-label' role='text'>
                  Accessories<span className='visuallyhidden'>for Mac</span>
                </span>
              </a>
            </li>
            <li className='chapternav-item chapternav-item-macos'>
              <a className='chapternav-link' href='/macos/monterey/'>
                <figure className='chapternav-icon'></figure>
                <span className='chapternav-label' role='text'>
                  Monterey
                </span>
              </a>
            </li>
            <li className='chapternav-item chapternav-item-shop'>
              <a className='chapternav-link' href='/us/shop/goto/buy_mac'>
                <figure className='chapternav-icon'></figure>
                <span className='chapternav-label' role='text'>
                  Shop Mac
                </span>
              </a>
            </li>{' '}
          </ul>
          <div className='chapternav-paddles'>
            <button
              className='chapternav-paddle chapternav-paddle-left'
              aria-hidden='true'
              disabled=''
            ></button>
            <button
              className='chapternav-paddle chapternav-paddle-right'
              aria-hidden='true'
              disabled=''
            ></button>
          </div>
        </div>
      </nav>
    </>
  )
}
