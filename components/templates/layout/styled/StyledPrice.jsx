function ExtendedPrice() {
  return (
    <div className='rf-digitalmat-price' data-autom='DigitalMat-price-0'>
      <div className='rc-prices-inline rc-prices-inline-lead-with-full-price'>
        <div className='rc-price'>
          <span className='rc-prices-currentprice'>
            From <span className='nowrap'>$999</span>
          </span>
          <span className='rc-prices-installmentsseparator'> </span>
          <span className='rc-monthly-price'>
            <span className='rc-prices-currentprice'>
              {' '}
              <span className='nowrap'>
                {' '}
                or $83.25
                <span aria-hidden='true'>/mo. </span>
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
        {/* TODO: if financing */}
        <div className='rc-prices-footer'>
          <div className='rc-financing-message'>
            <span className='as-prices-installments as-price-installments'>
              {/* TODO: StyledLink */}
              <a
                href='/us/shop/go/finance'
                target='_blank'
                name='browse'
                className='as-price-installments-items'
                data-analytics-title='learn more about financing'
              >
                {' '}
                <span className='more'>null% Financing Available</span>
              </a>
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .rf-digitalmat-price {
          width: 275px;
          padding-right: 10px;
        }

        .rc-prices-currentprice {
          font-size: 24px;
          line-height: 1.16667;
          font-weight: 600;
          letter-spacing: 0.009em;
          font-family: SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
        }
        .rf-digitalmat-price .rc-prices-currentprice {
          font-size: 14px;
          line-height: 1.28577;
          font-weight: 400;
          letter-spacing: -0.016em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
          white-space: normal;
        }

        .nowrap {
          display: inline-block;
          text-decoration: inherit;
          white-space: nowrap;
        }

        .rc-prices-inline .rc-prices-installmentsseparator:after,
        .rc-prices-inline .rc-prices-installmentsseparator:before {
          content: ' ';
        }

        .rf-digitalmat-price .as-price-acinstallmentterms-footnotestext,
        .rf-digitalmat-price .as-price-previousprice,
        .rf-digitalmat-price .rc-prices-footer,
        .rf-digitalmat-price .rc-prices-fullprice br {
          display: none;
        }

        /* TODO: find if necessary */
        /* .rc-financing-message {
            font-size: 14px;
            line-height: 1.42859;
            font-weight: 400;
            letter-spacing: -0.016em;
            font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
              Helvetica, Arial, sans-serif;
          } */
        .as-price-installments {
          font-size: 12px;
          line-height: 1.33337;
          font-weight: 400;
          letter-spacing: -0.01em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
        }

        .as-price-installments > a {
          display: block;
        }
      `}</style>
    </div>
  )
}

function Price() {
  return <div>Price</div>
}

export { ExtendedPrice, Price }
