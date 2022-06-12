import React from 'react'

export default function Fullfillment({ parentFlex, children }) {
  return (
    <>
      <div className={`row rf-pdp-fulfillment-wrapper ${parentFlex}`}>
        {children}
        <div className='rf-fulfillment-quote row'>
          <div
            className='rf-dude-quote column large-7 rf-dude-quote-default as-icondetails as-icondetails-topicon'
            data-autom='dudeInfo' // large-12 Acc
          >
            <span className='as-icondetails-icon as-svgicon-container rf-dude-quote-icon'>
              <svg
                viewBox='0 0 25 25'
                className='as-svgicon as-svgicon-shipping as-svgicon-reduced as-svgicon-shippingreduced'
                role='img'
                aria-hidden='true'
                width='25px'
                height='25px'
              >
                <path fill='none' d='M0 0h25v25H0z'></path>
                <path d='M19.69 7.154l-6-3.245a2.5 2.5 0 00-2.38 0l-6 3.245A2.5 2.5 0 004 9.354v6.269a2.5 2.5 0 001.311 2.2l6 3.245a2.5 2.5 0 002.379 0l6-3.245a2.5 2.5 0 001.31-2.2V9.354a2.5 2.5 0 00-1.31-2.2zm-7.9-2.365a1.492 1.492 0 011.427 0l6 3.244a1.454 1.454 0 01.151.11l-2.931 1.665-6.743-3.886zM8.661 6.48l6.768 3.9-2.929 1.666-6.864-3.9a1.456 1.456 0 01.151-.11zM5.787 16.941A1.5 1.5 0 015 15.622V9.354a1.5 1.5 0 01.053-.39L12 12.912v7.358a1.463 1.463 0 01-.213-.083zM20 15.622a1.5 1.5 0 01-.786 1.319l-6 3.245a1.5 1.5 0 01-.214.084v-7.358l6.947-3.949a1.508 1.508 0 01.053.391z'></path>
              </svg>
            </span>
            <div className='rf-dude-quote-info'>
              <span className='rf-dude-quote-label'>Delivery:</span>
              <ul className='rf-dude-quote-delivery-message-list'>
                <li className='rf-dude-quote-delivery-message'>
                  <span>In Stock</span>
                </li>
                <li className='rf-dude-quote-delivery-promo'>
                  <span>Free Shipping</span>
                </li>
              </ul>
              <button
                type='button'
                className='rf-dude-quote-overlay-trigger as-buttonlink'
                data-autom='deliveryDateChecker_MLWK3AM/A'
              >
                <span>Get delivery dates</span>
              </button>
            </div>
          </div>
          <div className='as-icondetails as-icondetails-topicon rf-pickupinfo rf-pickupinfo-noquote large-5'>
            <span className='as-icondetails-icon as-svgicon-container rf-pickup-quote-icon'>
              <svg
                viewBox='0 0 25 25'
                className='as-svgicon as-svgicon-applestorepickup as-svgicon-reduced as-svgicon-applestorepickupreduced'
                role='img'
                aria-hidden='true'
                width='25px'
                height='25px'
              >
                <path fill='none' d='M0 0h25v25H0z'></path>
                <path d='M18.5 5h-1.775a4.231 4.231 0 00-8.45 0H6.5A2.5 2.5 0 004 7.5v11A2.5 2.5 0 006.5 21h12a2.5 2.5 0 002.5-2.5v-11A2.5 2.5 0 0018.5 5zm-6-3a3.245 3.245 0 013.225 3h-6.45A3.245 3.245 0 0112.5 2zM20 18.5a1.5 1.5 0 01-1.5 1.5h-12A1.5 1.5 0 015 18.5v-11A1.5 1.5 0 016.5 6h12A1.5 1.5 0 0120 7.5z'></path>
                <path d='M14.4 12.448a1.592 1.592 0 01.738-1.328 1.607 1.607 0 00-1.37-.687c-.52 0-.941.317-1.22.317s-.663-.3-1.129-.3a1.861 1.861 0 00-1.739 2.068 4.32 4.32 0 00.723 2.3c.346.491.648.883 1.084.883s.617-.287 1.144-.287c.55 0 .663.279 1.137.279s.791-.43 1.084-.853a3.24 3.24 0 00.474-.989 1.516 1.516 0 01-.926-1.403zM12.583 10.357a1.346 1.346 0 00.941-.5 1.594 1.594 0 00.361-.974.731.731 0 00-.008-.136 1.5 1.5 0 00-1.016.528 1.547 1.547 0 00-.384.943c0 .053.008.106.008.128.03.004.06.011.098.011z'></path>
              </svg>
            </span>
            <div className='rf-pickup-quote-info' data-autom='pickUpDetails'>
              <span className='rf-pickup-quote-label'>Pickup:</span>
              <span className='rf-pickup-quote-value'></span>
              <button
                type='button'
                className='rf-pickup-quote-overlay-trigger as-buttonlink'
                data-autom='buacEligibilityChecker_MLWK3AM/A'
              >
                <span>Check availability</span>
                <span className='visuallyhidden'>AirPods Pro</span>
              </button>
            </div>
          </div>
          {/* // Acc */}
        </div>
      </div>

      <style jsx>{`
        .rf-pdp-fulfillment-wrapper {
          font-size: 14px;
          line-height: 1.42859;
          font-weight: 400;
          letter-spacing: -0.016em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
        }

        .rf-dude-quote,
        .rf-pickupinfo {
          display: flex;
          align-items: flex-start;
        }

        /* as-icondetails-icon */
        .as-icondetails-icon {
          color: #1d1d1f;
          position: absolute;
        }
        .as-icondetails-icon.as-svgicon-container {
          transform: translateY(-50%);
          margin-top: 10px;
        }
        .as-icondetails-topicon .as-icondetails-icon {
          display: block;
          position: static;
          margin-bottom: 3px;
        }
        .rf-dude-quote .rf-dude-quote-icon.as-icondetails-icon,
        .rf-pickupinfo .rf-pickup-quote-icon.as-icondetails-icon {
          margin-top: 2px;
          margin-right: 12px;
        }
        .as-icondetails-topicon .as-icondetails-icon.as-svgicon-container {
          transform: none;
        }

        .as-svgicon-container .as-svgicon-reduced {
          margin: -4px;
        }
        .rf-dude-quote .rf-dude-quote-icon.as-icondetails-icon svg {
          display: block;
          margin-left: -4px;
        }

        .rf-dude-quote-info,
        .rf-pickup-quote-info {
          font-size: 14px;
          line-height: 1.42859;
          font-weight: 400;
          letter-spacing: -0.016em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
        }

        .rf-dude-quote-default .rf-dude-quote-label,
        .rf-pickup-quote-label {
          font-weight: 600;
        }
        .rf-dude-quote-delivery-message-list {
          margin: 0;
        }

        .rf-pickup-quote-value {
          display: block;
        }
      `}</style>
    </>
  )
}
