export default function Banner({ monthlyInstallment }) {
  return (
    <>
      <div className='large-8 small-12 rs-header-noborder'>
        <h1
          className='rs-bag-header typography-headline-reduced'
          data-autom='bag-header'
          tabIndex='-1'
        >
          Review your bag.
        </h1>
        <span className='visuallyhidden' aria-live='polite'></span>
        <div className='rs-bag-headermessage'>
          <span className='pd-util-weight-semibold'>
            Free delivery and free returns.
          </span>
        </div>
      </div>
      <div className='rs-installment-banner'>
        <div className='as-icondetails' data-autom='rs-installment-banner'>
          <div className='as-icondetails-icon'>
            <img
              alt='Apple Card - Logo'
              src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/applecard-logo-201910_FMT_WHH?wid=156&amp;hei=156&amp;fmt=jpeg&amp;qlt=90&amp;.v=1572631318842'
              aria-hidden='true'
            />
          </div>
          <div className='rs-installment-banner-content as-icondetails-detail'>
            <div className='rs-installment-banner-description'>
              <span>
                Pay ${monthlyInstallment}
                <span aria-hidden='true'>/mo.</span>
                <span className='visuallyhidden'>per month</span> at 0% APR
                <span className='visuallyhidden'>footnote</span> for eligible
                items in your order when you choose Apple Card Monthly
                Installments at checkout.{' '}
              </span>
              <button type='button' className='as-buttonlink'>
                {/** @todo as-buttonlink */}
                <span aria-hidden='true'>Learn more</span>
                <span className='visuallyhidden'>
                  Learn more about Apple Card Monthly Installments
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style global jsx>{`
        /* rs-installment-banner */
        .rs-installment-banner {
          background-color: #f5f5f7;
          padding: 0.70588rem 6.25%;
          text-align: center;
          font-size: 14px;
          line-height: 1.42859;
          font-weight: 400;
          letter-spacing: -0.016em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
        }
        .rs-bag-content .rs-installment-banner {
          border-radius: 0.70588rem;
          padding: 1.17647rem 1rem;
          margin-top: 3.29412rem;
        }

        /* as-icondetails */
        .as-icondetails {
          font-size: 14px;
          line-height: 1.42859;
          font-weight: 400;
          letter-spacing: -0.016em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
        }
        .rs-installment-banner .as-icondetails {
          display: inline-block;
        }

        .as-icondetails-icon {
          position: absolute;
        }

        .rs-installment-banner .as-icondetails img {
          width: 20px;
          height: auto;
        }

        .as-icondetails-detail {
          display: inline-block;
          margin-left: 28px;
        }
        .rs-installment-banner .rs-installment-banner-content {
          text-align: left;
        }

        @media only screen and (min-width: 734px) {
          .rs-bag-header {
            padding-bottom: 2px;
          }
          .rs-bag-headermessage {
            padding-top: 13px;
          }

          .rs-installment-banner .as-icondetails {
            padding-left: 100px;
            padding-right: 100px;
          }
        }

        @media only screen and (max-width: 734px) {
          .rs-bag-header {
            padding-bottom: 4px;
          }
          .rs-bag-headermessage {
            padding-top: 8px;
          }

          .rs-installment-banner {
            text-align: left;
          }

          .rs-installment-banner .as-icondetails {
            padding-left: 0;
            padding-right: 0;
          }
        }
      `}</style>
    </>
  )
}
