import React from 'react'

export default function BagView() {
  return (
    <aside className='ac-gn-bagview' data-analytics-region='bag'>
      <div className='ac-gn-bagview-scrim'>
        <span className='ac-gn-bagview-caret ac-gn-bagview-caret-small'></span>
      </div>
      <div className='ac-gn-bagview-content' id='ac-gn-bagview-content'>
        <ul className='ac-gn-bagview-bag ac-gn-bagview-bag-multiple'>
          <li className='ac-gn-bagview-bagitem ac-gn-bagview-bagitem-first'>
            <a
              className='ac-gn-bagview-bagitem-link'
              href='https://www.apple.com/shop/product/Z15H/14-inch-space-gray-10-core-cpu-16-core-gpu-1tb'
            >
              <span className='ac-gn-bagview-bagitem-column1'>
                <img
                  src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202110?wid=220&amp;hei=156&amp;fmt=jpeg&amp;qlt=90&amp;.v=1632788573000'
                  width='110'
                  height='78'
                  alt=''
                  className='ac-gn-bagview-bagitem-picture'
                />
              </span>
              <span
                className='ac-gn-bagview-bagitem-column2'
                data-ac-autom='gn-bagview-itemname-'
              >
                14-inch MacBook Pro - Space Gray
              </span>
            </a>
          </li>
          <li className='ac-gn-bagview-bagitem'>
            <a
              className='ac-gn-bagview-bagitem-link'
              href='https://www.apple.com/shop/product/Z14X/16-inch-space-gray-10-core-cpu-32-core-gpu-1tb'
            >
              <span className='ac-gn-bagview-bagitem-column1'>
                <img
                  src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202110?wid=220&amp;hei=156&amp;fmt=jpeg&amp;qlt=90&amp;.v=1632788574000'
                  width='110'
                  height='78'
                  alt=''
                  className='ac-gn-bagview-bagitem-picture'
                />
              </span>
              <span
                className='ac-gn-bagview-bagitem-column2'
                data-ac-autom='gn-bagview-itemname-'
              >
                16-inch MacBook Pro - Space Gray
              </span>
            </a>
          </li>
          <li className='ac-gn-bagview-bagitem ac-gn-bagview-bagitem-last'>
            <a
              className='ac-gn-bagview-bagitem-link'
              href='https://www.apple.com/shop/product/MGYN3AM/A/green'
            >
              <span className='ac-gn-bagview-bagitem-column1'>
                <img
                  src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-green-202011_FMT_WHH?wid=220&amp;hei=156&amp;fmt=jpeg&amp;qlt=90&amp;.v=1604615274000'
                  width='110'
                  height='78'
                  alt=''
                  className='ac-gn-bagview-bagitem-picture'
                />
              </span>
              <span
                className='ac-gn-bagview-bagitem-column2'
                data-ac-autom='gn-bagview-itemname-'
              >
                AirPods Max - Green
              </span>
            </a>
          </li>
        </ul>

        <a
          href='https://www.apple.com/shop/bag'
          data-evar1='[pageName] |  | bag overlay |  | Check Out'
          className='ac-gn-bagview-button ac-gn-bagview-button-block ac-gn-bagview-button-checkout'
          data-ac-autom='gn-bagview-button-checkout'
          role='button'
        >
          Check Out
        </a>

        <nav className='ac-gn-bagview-nav'>
          <ul className='ac-gn-bagview-nav-list '>
            <li className='ac-gn-bagview-nav-item ac-gn-bagview-nav-item-bag'>
              <a
                href='https://www.apple.com/shop/bag'
                data-evar1='[pageName] |  | bag overlay |  | bag'
                data-analytics-activitymap-link-id='bag'
                data-analytics-title='bag'
                className='ac-gn-bagview-nav-link ac-gn-bagview-nav-link-bag'
                data-ac-autom='gn-bagview-link-bag'
              >
                Bag (3)
              </a>
            </li>
            <li className='ac-gn-bagview-nav-item ac-gn-bagview-nav-item-savedbyyou'>
              <a
                href='https://www.apple.com/shop/saveditems'
                data-evar1='[pageName] |  | bag overlay |  | savedbyyou'
                data-analytics-activitymap-link-id='savedbyyou'
                data-analytics-title='savedbyyou'
                className='ac-gn-bagview-nav-link ac-gn-bagview-nav-link-savedbyyou'
                data-ac-autom='gn-bagview-link-savedbyyou'
              >
                Saved Items
              </a>
            </li>
            <li className='ac-gn-bagview-nav-item ac-gn-bagview-nav-item-orders'>
              <a
                href='https://secure5.store.apple.com/shop/order/list'
                data-evar1='[pageName] |  | bag overlay |  | orders'
                data-analytics-activitymap-link-id='orders'
                data-analytics-title='orders'
                className='ac-gn-bagview-nav-link ac-gn-bagview-nav-link-orders'
                data-ac-autom='gn-bagview-link-orders'
              >
                Orders
              </a>
            </li>
            <li className='ac-gn-bagview-nav-item ac-gn-bagview-nav-item-account'>
              <a
                href='https://secure5.store.apple.com/shop/account/home'
                data-evar1='[pageName] |  | bag overlay |  | account'
                data-analytics-activitymap-link-id='account'
                data-analytics-title='account'
                className='ac-gn-bagview-nav-link ac-gn-bagview-nav-link-account'
                data-ac-autom='gn-bagview-link-account'
              >
                Account
              </a>
            </li>
            <li className='ac-gn-bagview-nav-item ac-gn-bagview-nav-item-signIn'>
              <a
                href='https://secure5.store.apple.com/shop/signIn?ssi=1AAABgT89ccsgUl6E7am1p-P8IsFtInxzOELEELFTqVF6R6RMXtB7L7EAAAA2aHR0cHM6Ly93d3cuYXBwbGUuY29tL21hYy98aHR0cHM6Ly93d3cuYXBwbGUuY29tL21hYy98AAIBTeDD9Z_H3CUqdc4O-9UUy0-hctnGDuq0sWDukbYg_uU'
                data-evar1='[pageName] |  | bag overlay |  | signIn'
                data-analytics-activitymap-link-id='signIn'
                data-analytics-title='signIn'
                className='ac-gn-bagview-nav-link ac-gn-bagview-nav-link-signIn'
                data-ac-autom='gn-bagview-link-signIn'
              >
                Sign in
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <style global jsx>{`
        #ac-globalnav .ac-gn-bagview {
          font-size: 14px;
          line-height: 1.28577;
          font-weight: 400;
          letter-spacing: -0.014em;
          font-family: 'SF Pro Text', 'Myriad Set Pro', 'SF Pro Icons',
            'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
          background-color: #fff;
          border: 1px solid #d2d2d7;

          display: none;
          position: absolute;
          top: 48px;
          z-index: 1;
        }
        #ac-globalnav.with-bagview .ac-gn-bagview {
          display: block;
        }

        #ac-globalnav .ac-gn-bagview-caret {
          display: none;
          position: absolute;
          width: 100%;
          height: 8px;
          left: 0;
          bottom: -5px;
          overflow: hidden;
          z-index: 1;
        }
        #ac-globalnav.with-bagview .ac-gn-bagview-caret {
          display: block;
        }
        #ac-globalnav .ac-gn-bagview-caret:after {
          left: 50%;
          border: 1px solid;
          content: '';
          display: block;
          position: absolute;
          top: 0;
          width: 12px;
          height: 12px;
          transform: rotate(45deg) skew(4deg, 4deg);
          transform-origin: 0% 0;
          z-index: 1;
        }
        #ac-globalnav .ac-gn-bagview-caret:after {
          background-color: #fff;
          border-color: #d2d2d7;
          border-radius: 2px 0 0 0;
        }

        #ac-globalnav .ac-gn-bagview-content {
          margin: 0 auto;
          min-height: 90px;
          padding: 0 20px;
          position: relative;
          z-index: 2;
        }

        #ac-globalnav .ac-gn-bagview-bag {
          margin-bottom: 8px;
        }

        #ac-globalnav .ac-gn-bagview-bagitem {
          border-bottom: 1px solid #d2d2d7;
          padding: 16px 0;
        }
        #ac-globalnav .ac-gn-bagview-bagitem-first {
          margin-top: 4px;
        }

        #ac-globalnav .ac-gn-bagview-bagitem-link {
          margin: 0;
          padding: 0;
          display: table;
          min-height: 60px;
          width: 100%;
          color: #1d1d1f;
          text-decoration: none;
        }

        #ac-globalnav .ac-gn-bagview-bagitem-column1,
        #ac-globalnav .ac-gn-bagview-bagitem-column2 {
          display: table-cell;
          vertical-align: middle;
        }
        #ac-globalnav .ac-gn-bagview-bagitem-column1 {
          padding: 0 12px 0 0;
          width: 25%;
        }

        #ac-globalnav img,
        #ac-gn-segmentbar img {
          border: 0;
          vertical-align: middle;
        }
        #ac-globalnav .ac-gn-bagview-bagitem-picture {
          max-width: 60px;
          height: auto;
        }

        #ac-globalnav .ac-gn-bagview-bagitem-column2 {
          margin: 16px 0;
          width: 75%;
        }

        #ac-globalnav .ac-gn-bagview-bagitem-last {
          border-bottom-style: none;
        }

        #ac-globalnav .ac-gn-bagview-button {
          cursor: pointer;
          display: inline-block;
          text-align: center;
          white-space: nowrap;
          font-size: 17px;
          line-height: 1.17648;
          font-weight: 400;
          letter-spacing: -0.022em;
          font-family: 'SF Pro Text', 'Myriad Set Pro', 'SF Pro Icons',
            'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
          min-width: 28px;
          padding-left: 16px;
          padding-right: 16px;
          padding-top: 8px;
          padding-bottom: 8px;
          border-radius: 980px;
          background-color: #0071e3;
          color: #fff;
        }
        #ac-globalnav .ac-gn-bagview-button-block {
          box-sizing: border-box;
          display: block;
          width: 100%;
          border-radius: 8px;
        }

        #ac-globalnav .ac-gn-bagview-nav {
          margin-bottom: 9px;
        }

        #ac-globalnav .ac-gn-bagview-nav-list {
          margin: 12px 0 0;
          padding: 0;
        }

        #ac-globalnav .ac-gn-bagview-nav-item {
          margin: 0;
          padding: 0;
          border-top: 1px solid #d2d2d7;
        }
        #ac-globalnav .ac-gn-bagview-nav-item:first-child {
          border-top-style: none;
        }

        /* ac-gn-bagview-nav-link */
        #ac-globalnav .ac-gn-bagview-nav-link {
          color: #06c;
          display: block;
          line-height: 44px;
          padding: 0 28px;
          text-decoration: none;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          letter-spacing: -0.016em;
        }
        #ac-globalnav .ac-gn-bagview-nav-link-bag {
          background-image: url(../assets/ac-store/bag.png);
          background-image: none, url(../assets/ac-store/bag.svg);
          background-position: -2px 11px;
          background-repeat: no-repeat;
          background-size: 21px 21px;
        }

        @media only screen and (min-width: 834px) {
          #ac-globalnav .ac-gn-bagview {
            border-radius: 18px;
            width: 286px;
            margin-right: -115px;
            right: 3px;
          }
          #ac-globalnav.with-bagview .ac-gn-bagview-caret-small {
            display: none;
          }
          #ac-globalnav.with-bag-count .ac-gn-bagview-caret {
            left: -3px;
          }
        }

        @media only screen and (max-width: 1266px) {
          #ac-globalnav .ac-gn-bagview {
            margin-right: calc(512px - 50vw);
            right: calc(max(4px, calc(env(safe-area-inset-right) - 16px)));
          }
        }
        @media only screen and (max-width: 1024px) {
          #ac-globalnav .ac-gn-bagview {
            margin-right: 0;
          }
        }
        @media only screen and (max-width: 833px) {
          #ac-globalnav .ac-gn-bagview {
            border-radius: 0;
            border-width: 0 0 1px 0;
            width: 100%;
            left: 0;
            right: 0;
          }

          #ac-globalnav .ac-gn-bagview-caret {
            bottom: calc(100% - 0.5px);
          }
          #ac-globalnav.with-bag-count .ac-gn-bagview-caret {
            left: -4px;
          }
          #ac-globalnav.with-bagview .ac-gn-bagview-caret-large {
            display: none;
          }

          /* ac-gn-bagview-caret:after */
          #ac-globalnav .ac-gn-bagview-caret:after {
            left: auto;
            right: max(10px, calc(env(safe-area-inset-right) + 10px));
          }
          #ac-globalnav .ac-gn-bagview-caret:after {
            border-color: #fff;
          }

          #ac-globalnav .ac-gn-bagview-content {
            max-width: 584px;
            padding: 0 48px;
          }
        }
      `}</style>
    </aside>
  )
}
