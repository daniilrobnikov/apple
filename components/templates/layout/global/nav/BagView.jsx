import Link from 'next/link'
import { useEffect, useState } from 'react'

import useSWR from 'swr'

function arrayFetcher(...urlArr) {
  const f = (u) => fetch(u).then((r) => r.json())
  return Promise.all(urlArr.map(f))
}

export default function BagView({ bagItems }) {
  const [loading, setLoading] = useState(true)

  const urlArray = []
  for (let i = 0; i < bagItems.length; i++) {
    urlArray.push(`/api/accessories/${bagItems[i]}`)
  }

  const { data } = useSWR(urlArray, arrayFetcher, {
    revalidate: true,
    refreshInterval: 1000,
  })

  useEffect(() => {
    for (let i = 0; i < data?.length; i++) {
      if (data[i].success === false) {
        localStorage.setItem(
          'BAG_ITEMS',
          JSON.stringify(bagItems.filter((item) => item !== bagItems[i]))
        )
      }
    }
    setLoading(false)
  }, [data])

  if (loading) return

  return (
    <aside className='ac-gn-bagview' data-analytics-region='bag'>
      <div className='ac-gn-bagview-scrim'>
        <span className='ac-gn-bagview-caret ac-gn-bagview-caret-small'></span>
      </div>
      <div className='ac-gn-bagview-content' id='ac-gn-bagview-content'>
        <ul className='ac-gn-bagview-bag ac-gn-bagview-bag-multiple'>
          {data?.slice(0, 3).map((product, index) => (
            <li
              className='ac-gn-bagview-bagitem'
              key={product.data._id || index}
            >
              <a
                className='ac-gn-bagview-bagitem-link'
                href={`/shop/accessory/${product.data.slug}`}
              >
                <span className='ac-gn-bagview-bagitem-column1'>
                  <img
                    src={`${product.data.images.path}-${
                      product.data.colors
                        ? `${product.data.colors[0].slug}-`
                        : ''
                    }transparent.webp`}
                    width='110'
                    height='78'
                    alt={`${product.data.name}${
                      product.data.colors && ` - ${product.data.colors[0].name}`
                    }`}
                    className='ac-gn-bagview-bagitem-picture'
                  />
                </span>
                <span
                  className='ac-gn-bagview-bagitem-column2'
                  data-ac-autom='gn-bagview-itemname-'
                >
                  {product.data.name}
                  {product.data.colors && ` - ${product.data.colors[0].name}`}
                </span>
              </a>
            </li>
          ))}
        </ul>
        {data?.length > 3 && (
          <div className='ac-gn-bagview-linemessage'>
            <span className='ac-gn-bagview-linemessage-text'>
              2 more items in your Bag
            </span>
          </div>
        )}

        <a
          href='https://www.apple.com/shop/bag'
          data-evar1='[pageName] |  | bag overlay |  | Check Out'
          className='ac-gn-bagview-button button-block ac-gn-bagview-button-checkout'
          data-ac-autom='gn-bagview-button-checkout'
          role='button'
        >
          Check Out
        </a>

        <nav className='ac-gn-bagview-nav'>
          <ul className='ac-gn-bagview-nav-list '>
            <li className='ac-gn-bagview-nav-item ac-gn-bagview-nav-item-bag'>
              <Link href='/shop/bag'>
                <a
                  data-evar1='[pageName] |  | bag overlay |  | bag'
                  data-analytics-activitymap-link-id='bag'
                  data-analytics-title='bag'
                  className='ac-gn-bagview-nav-link ac-gn-bagview-nav-link-bag'
                  data-ac-autom='gn-bagview-link-bag'
                >
                  Bag{data && ` (${data.length})`}
                </a>
              </Link>
            </li>
            <li className='ac-gn-bagview-nav-item ac-gn-bagview-nav-item-savedbyyou'>
              <Link href='/shop/saveditems'>
                <a
                  data-evar1='[pageName] |  | bag overlay |  | savedbyyou'
                  data-analytics-activitymap-link-id='savedbyyou'
                  data-analytics-title='savedbyyou'
                  className='ac-gn-bagview-nav-link ac-gn-bagview-nav-link-savedbyyou'
                  data-ac-autom='gn-bagview-link-savedbyyou'
                >
                  Saved Items
                </a>
              </Link>
            </li>
            <li className='ac-gn-bagview-nav-item ac-gn-bagview-nav-item-orders'>
              <Link href='https://secure5.store.apple.com/shop/order/list'>
                <a
                  data-evar1='[pageName] |  | bag overlay |  | orders'
                  data-analytics-activitymap-link-id='orders'
                  data-analytics-title='orders'
                  className='ac-gn-bagview-nav-link ac-gn-bagview-nav-link-orders'
                  data-ac-autom='gn-bagview-link-orders'
                >
                  Orders
                </a>
              </Link>
            </li>
            <li className='ac-gn-bagview-nav-item ac-gn-bagview-nav-item-account'>
              <Link href='https://secure5.store.apple.com/shop/account/home'>
                <a
                  data-evar1='[pageName] |  | bag overlay |  | account'
                  data-analytics-activitymap-link-id='account'
                  data-analytics-title='account'
                  className='ac-gn-bagview-nav-link ac-gn-bagview-nav-link-account'
                  data-ac-autom='gn-bagview-link-account'
                >
                  Account
                </a>
              </Link>
            </li>
            <li className='ac-gn-bagview-nav-item ac-gn-bagview-nav-item-signIn'>
              <Link href='https://secure5.store.apple.com/shop/signIn'>
                <a
                  data-evar1='[pageName] |  | bag overlay |  | signIn'
                  data-analytics-activitymap-link-id='signIn'
                  data-analytics-title='signIn'
                  className='ac-gn-bagview-nav-link ac-gn-bagview-nav-link-signIn'
                  data-ac-autom='gn-bagview-link-signIn'
                >
                  Sign in
                </a>
              </Link>
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

        #ac-globalnav .ac-gn-bagview-bag > li:first-child {
          margin-top: 4px;
        }
        #ac-globalnav .ac-gn-bagview-bag > li:last-child {
          border-bottom-style: none;
        }

        /* ac-gn-bagview-linemessage */
        #ac-globalnav .ac-gn-bagview-linemessage {
          margin: -17px 0 21px 0;
          color: #6e6e73;
          font-size: 12px;
          line-height: 1.33337;
          font-weight: 400;
          letter-spacing: 0.018em;
          font-family: 'SF Pro Text', 'Myriad Set Pro', 'SF Pro Icons',
            'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
          text-align: center;
        }
        #ac-globalnav .ac-gn-bagview-linemessage:before {
          display: block;
          position: relative;
          top: 9px;
          margin-top: -1px;
          z-index: -10;
          border-bottom: 1px solid #d2d2d7;
          content: '';
        }

        #ac-globalnav .ac-gn-bagview-linemessage-text {
          padding: 0 6px 0 6px;
          background: #fff;
        }

        #ac-globalnav .ac-gn-bagview-button {
          cursor: pointer;
          display: block;
          text-align: center;
          white-space: nowrap;
          font-size: 17px;
          line-height: 1.17648;
          font-weight: 400;
          letter-spacing: -0.022em;
          font-family: 'SF Pro Text', 'Myriad Set Pro', 'SF Pro Icons',
            'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
          min-width: 28px;
          padding: 8px 16px;
          background-color: #0071e3;
          color: #fff;

          box-sizing: border-box;
          width: 100%;
          border-radius: 8px;
        }
        #ac-globalnav .ac-gn-bagview-button:hover {
          background: #0077ed;
          text-decoration: none;
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
