export default function Prices() {
  return (
    <>
      <div className='rf-pdp-prices'>
        <div className='rc-prices rc-prices-lead-with-full-price'>
          <div className='rc-price'>
            <div className='rc-prices-currentprice'>
              <span className='rc-prices-fullprice' data-autom='full-price'>
                $249.00
              </span>
            </div>
          </div>
          <div className='rc-prices-acinstallments rc-prices-installmentsseparator'>
            or
          </div>
          <div className='rc-monthly-price' data-autom='monthly-price'>
            <div className='rc-prices-currentprice'>
              <span>
                <span>
                  $41.50<span aria-hidden='true'>/mo.</span>
                  <span className='visuallyhidden'>per month</span>
                  <span className='acinstallment-term-length'>
                    {' '}
                    for 6&nbsp;<span aria-hidden='true'>mo.</span>
                    <span className='visuallyhidden'>months</span>
                  </span>
                </span>
                <span>
                  <span className='visuallyhidden'>Footnote </span>*
                </span>
              </span>
            </div>
          </div>
          <div className='rc-financing-message'>
            <div id='buyflow-message-container' className='rf-ac-messages'>
              <div>
                <div>
                  <button
                    data-buyflow-messages-overlay='button'
                    className='as-buttonlink'
                    data-buyflow-messages-metrics-info='learn more - acmi'
                  >
                    Learn how to pay monthly at 0% APR when you choose
                    Apple&nbsp;Card Monthly Installments
                  </button>
                </div>
                <div></div>
              </div>
            </div>
          </div>
          <div className='rc-prices-footer'></div>
        </div>
      </div>

      <style jsx>{`
        .rc-financing-message {
          font-size: 14px;
          line-height: 1.42859;
          font-weight: 400;
          letter-spacing: -0.016em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
        }

        @media only screen and (min-width: 735px) {
          .rc-prices,
          .rc-prices-currentprice {
            font-size: 24px;
            line-height: 1.16667;
            font-weight: 600;
            letter-spacing: 0.009em;
            font-family: SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue,
              Helvetica, Arial, sans-serif;
          }
        }
        @media only screen and (max-width: 734px) {
          .rc-prices,
          .rc-prices-currentprice {
            font-size: 21px;
            line-height: 1.19048;
            letter-spacing: 0.011em;
            font-weight: 600;
            font-family: SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue,
              Helvetica, Arial, sans-serif;
          }
        }
      `}</style>
    </>
  )
}
