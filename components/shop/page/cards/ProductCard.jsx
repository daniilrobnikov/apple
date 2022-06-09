import Link from 'next/link'

export default function ProductCard() {
  return (
    <div className='cards-scroller-item'>
      <div className='card card-40 card-centered-image'>
        <div className='card-content tile cover-link'>
          <div className='card-copy'>
            <h3 className='card-content-title'>MacBook Pro 14”</h3>
          </div>
          <div className='card-img-wrapper'>
            <img
              width='375'
              height='450'
              alt=''
              src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-pro-14-202110_FMT_WHH?wid=750&amp;hei=900&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1633726242000'
              srcSet='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-pro-14-202110_FMT_WHH?wid=375&amp;hei=450&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1633726242000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-card-40-macbook-pro-14-202110_FMT_WHH?wid=750&amp;hei=900&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1633726242000 2x'
              className='card-img'
            />
          </div>
          <button
            type='button'
            className='card-secondary-cta button button-secondary'
            data-index='3'
            data-part-number='MKGP3'
            data-autom='DigitalMat-3'
          >
            Take a closer look{' '}
            <span className='visuallyhidden'> - MacBook Pro 14”</span>
          </button>
          <ul
            className='card-content-swatchescontainer'
            aria-label='MacBook Pro 14” Available colors:'
            role='list'
          >
            <li className='card-content-colorimage'>
              <img
                width='16'
                height='16'
                alt='Space Gray'
                src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202110_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1632788569000'
                srcSet='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202110_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1632788569000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202110_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1632788569000 2x'
              />
            </li>
            <li className='card-content-colorimage'>
              <img
                width='16'
                height='16'
                alt='Silver'
                src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-silver-select-202110_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1632788569000'
                srcSet='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-silver-select-202110_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1632788569000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-silver-select-202110_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1632788569000 2x'
              />
            </li>
          </ul>
          <div className='card-content-info'>
            <div className='card-scrim'>
              <div className='card-scrim-price' data-autom='tile3_price'>
                <div className='prices-inline prices-inline-lead-with-full-price'>
                  <div className='price'>
                    <span className='prices-currentprice'>
                      From <span className='nowrap'>$1999</span>
                    </span>
                    <span className='prices-installmentsseparator'> </span>
                    <span className='monthly-price'>
                      <span className='prices-currentprice'>
                        {' '}
                        <span className='nowrap'>
                          {' '}
                          or $166.58<span aria-hidden='true'>/mo. </span>
                          <span className='visuallyhidden'> per month</span>
                        </span>{' '}
                        <span className='nowrap'>
                          <span className='acinstallment-term-length'>
                            {' '}
                            for 12 <span aria-hidden='true'>mo.</span>
                            <span className='visuallyhidden'>months</span>
                          </span>
                          <span className='visuallyhidden'>Footnote </span>*
                        </span>
                      </span>
                    </span>
                  </div>
                  <div className='prices-footer'>
                    <div className='financing-message'>
                      <span className='as-prices-installments as-price-installments'>
                        <a
                          href='/us/shop/go/finance'
                          target='_blank'
                          name='browse'
                          className='as-price-installments-items'
                          data-analytics-title='learn more about financing'
                        >
                          {' '}
                          <span className='more'>
                            null% Financing Available
                          </span>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <Link href='/shop/buy-mac/macbook-pro/14-inch'>
                <a
                  data-slot-name='Shelf-0'
                  data-display-name='Buy'
                  data-index='3'
                  data-trigger-stoppropagation='true'
                  data-part-number='MKGP3'
                  data-purchase-journey='MKGP3|mac: Shelf-0'
                  className='card-cta button'
                >
                  Buy <span className='visuallyhidden'> - MacBook Pro 14”</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .card-copy,
        .card-scrim {
          box-sizing: border-box;
          width: 100%;
        }

        .card-content-title {
          margin: 0 0 9px;
          padding-top: 24px;
        }

        .card-img-wrapper {
          position: relative;
          flex: 1;
          overflow: hidden;
        }

        .card-img {
          display: block;
          height: auto;
          margin: 0 auto;
          width: 100%;
        }
        .card-centered-image .card-img {
          height: 100%;
          width: auto;
        }

        .card-secondary-cta {
          opacity: 0;
          position: absolute;
          bottom: 133px;
          left: 50%;
          transform: translate(-50%);
          transition: 0.5s;
        }
        .card-content:hover .card-secondary-cta {
          opacity: 1;
          transform: translate(-50%, -50%);
        }

        .card-content-swatchescontainer {
          list-style-type: none;
          margin: 0 auto;
          padding-top: 24px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-content-colorimage {
          display: inline-flex;
          margin: 0 3px;
        }
        .card-content-colorimage img {
          height: 12px;
          width: 12px;
        }

        .card-content-info {
          display: flex;
          flex-direction: column;
          position: relative;
          height: 90px;
          margin-top: 0;
          padding: 10px 0 0;
          width: 100%;
        }

        .card-scrim {
          font-size: 14px;
          line-height: 1.28577;
          font-weight: 400;
          letter-spacing: -0.016em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
          border-bottom-left-radius: 18px;
          border-bottom-right-radius: 18px;
          bottom: 0;
          left: 0;
          display: flex;
          justify-content: space-between;
          margin: 0;
          padding: 30px;
          position: absolute;
        }
        .card-centered-image .card-scrim {
          padding-top: 0;
          position: static;
          margin-top: auto;
        }

        .card-scrim-price {
          margin-top: auto;
          width: auto;
          margin-right: 5px;
        }

        .prices-currentprice {
          font-weight: 600;
          font-family: SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
        }
        .card-scrim-price .prices-currentprice {
          font-size: 14px;
          line-height: 1.28577;
          font-weight: 400;
          letter-spacing: -0.016em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
          color: #1d1d1f;
          white-space: normal;
        }

        /* TODO classes */
        .nowrap {
          display: inline-block;
          text-decoration: inherit;
          white-space: nowrap;
        }

        .prices-inline .prices-installmentsseparator:after,
        .prices-inline .prices-installmentsseparator:before {
          content: ' ';
        }

        .card-scrim-price .as-price-acinstallmentterms-footnotestext,
        .card-scrim-price .as-price-previousprice,
        .card-scrim-price .prices-footer {
          display: none;
        }

        .financing-message {
          font-size: 14px;
          line-height: 1.42859;
          font-weight: 400;
          letter-spacing: -0.016em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
        }

        .as-price-installments {
          font-size: 12px;
          line-height: 1.33337;
          font-weight: 400;
          letter-spacing: -0.01em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
        }

        .card-cta {
          align-self: flex-end;
          min-width: auto;
          margin-bottom: 0;
        }
        .card-cta.button,
        .card-cta.button-reduced {
          min-width: auto;
        }

        /* desktop & tablet */
        @media only screen and (min-width: 735px) {
          .card-copy {
            padding: 30px 30px 16px;
          }

          .card-content-title {
            font-size: 28px;
            line-height: 1.14286;
            letter-spacing: 0.007em;
          }

          .prices-currentprice {
            font-size: 24px;
            line-height: 1.16667;
            letter-spacing: 0.009em;
          }
        }
        /* mobile */
        @media only screen and (max-width: 734px) {
          .card-copy {
            padding: 28px 28px 13px;
          }

          .card-content-title {
            font-size: 24px;
            line-height: 1.16667;
            letter-spacing: 0.009em;
          }

          .card-img-wrapper {
            max-height: 236px;
          }

          .card-content-swatchescontainer {
            padding-top: 20px;
          }

          .card-content-info {
            height: 84px;
            padding: 0;
          }

          .card-scrim {
            padding: 28px;
            margin-top: auto;
          }

          .card-scrim-price {
            margin-right: 8px;
          }

          .prices-currentprice {
            font-size: 21px;
            line-height: 1.19048;
            letter-spacing: 0.011em;
          }

          .card-cta {
            margin-bottom: 4px;

            font-size: 12px;
            line-height: 1.33337;
            letter-spacing: -0.01em;
            min-width: 23px;
            padding: 4px 11px;
          }
        }
      `}</style>
    </div>
  )
}
