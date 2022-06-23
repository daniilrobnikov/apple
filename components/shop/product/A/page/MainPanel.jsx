import StyledLink from '@/components/templates/layout/styled/StyledLink'

import Prices from './Prices'
import Engraving from './Engraving'
import Fullfillment from './Fullfillment'
import SaveItem from './SaveItem'

export default function MainPanel({ product }) {
  function addToBag() {
    var bagItems = localStorage.getItem('BAG_ITEMS')
      ? JSON.parse(localStorage.getItem('BAG_ITEMS'))
      : []
    bagItems.push(product.slug)
    localStorage.setItem('BAG_ITEMS', JSON.stringify([...new Set(bagItems)]))
  }
  return (
    <>
      <div className='column large-4 small-12'>
        <span className='violator-frameless rf-pdp-violator'>
          {product.eyebrow}
        </span>
        <h1 className='rf-pdp-title' data-autom='productTitle'>
          {product.name}
        </h1>
        <Prices prices={product.price} />
        <div className='rf-third-party-below-price' data-below-price=''></div>
        {product.eyebrow === 'Free Engraving' && <Engraving />}
        <div className='rf-pdp-acmidisclaimer'>
          To purchase with monthly pricing, add this item to your bag and choose
          to check out with Apple Card Monthly Installments.<sup>◊</sup>
        </div>
        <Fullfillment parentFlex='large-12' />
        <div className='rf-pdp-buyflow-form-wrapper'>
          <div className='rf-pdp-buyflow-form-buttons'>
            <div className='rf-pdp-applepay-form'>
              <form
                // method='post'
                // action='/shop/pdpAddToBag/MLWK3AM/A'
                data-feature-name='PDP'
                data-display-name='AOS: Product Details'
                data-part-number='MLWK3AM/A'
              >
                <input type='hidden' name='product' value='MLWK3AM/A' />
                <input
                  type='hidden'
                  name='fnode'
                  value='90b3414dbc9b4566374cc96ce3c8940f1deeaf7bc769aadd98d8c9dca8afdafd1106cd14413e6cf36626a7f5e0e20e906fd6d72ac37a2ff970c6b279ab30ec5adef6f30f601565c871abbb4544b93194ab8c023f19e5c47d5946f47d7f806775'
                />
                <button
                  type='submit'
                  id='pdp-options-applePay'
                  className='button button-block rf-pdp-applepay-button'
                  name='add-to-cart'
                  value='add-to-cart'
                  data-autom='add-to-cart'
                >
                  Check Out with Apple Pay
                </button>
              </form>
            </div>
            <div className='rf-pdp-buyflow-form'>
              <form
                method='post'
                action='/shop/pdpAddToBag/MLWK3AM/A'
                data-feature-name='PDP'
                data-display-name='AOS: Product Details'
                data-part-number='MLWK3AM/A'
              >
                <input type='hidden' name='product' value='MLWK3AM/A' />
                <input
                  type='hidden'
                  name='fnode'
                  value='90b3414dbc9b4566374cc96ce3c8940f1deeaf7bc769aadd98d8c9dca8afdafd1106cd14413e6cf36626a7f5e0e20e906fd6d72ac37a2ff970c6b279ab30ec5adef6f30f601565c871abbb4544b93194ab8c023f19e5c47d5946f47d7f806775'
                />
                <div className='rf-pdp-addtocart'>
                  <button
                    // type='submit'
                    className='button button-block'
                    id='add-to-cart'
                    name='add-to-cart'
                    // value='add-to-cart'
                    data-autom='add-to-cart'
                    onClick={() => addToBag(product)}
                  >
                    Add to Bag
                  </button>
                </div>
              </form>
            </div>
          </div>
          <SaveItem />
        </div>
        <div className='rf-pdp-chat' data-autom='chatLink'>
          <div className='as-chat-buyflow'>
            <div className='as-svgicon-container'>
              <svg
                viewBox='0 0 23 25'
                className='as-svgicon as-svgicon-chat as-svgicon-reduced as-svgicon-chatreduced'
                role='img'
                aria-hidden='true'
                width='25px'
                height='25px'
              >
                <path fill='none' d='M0 0h23v25H0z'></path>
                <path d='M22.71 15.441c0-2.849-2.846-5.154-6.417-5.154h-.076a8.059 8.059 0 00-1.035.078c-2.72.377-4.823 2.112-5.228 4.3a4.218 4.218 0 00-.078.768c0 .089.011.175.016.262.169 2.84 3.035 4.885 6.538 4.885.179 0 .36-.005.541-.016A8.149 8.149 0 0020.278 22c.517 0 .667-.413.374-.78a10.986 10.986 0 01-.96-1.4 4.937 4.937 0 003.018-4.379zm-3.446 3.471l-.942.446.484.923c.046.088.1.178.151.268a11.49 11.49 0 01-1.431-.809l-.279-.185-.334.02c-.162.01-.323.014-.482.014-3.094 0-5.52-1.8-5.551-4.1v-.044a3.237 3.237 0 01.183-1.053 4.923 4.923 0 013.729-2.935 6.889 6.889 0 011.169-.153c.112-.005.222-.013.336-.013 2.987 0 5.417 1.864 5.417 4.154a3.957 3.957 0 01-2.45 3.467z'></path>
                <path d='M8.915 14.819a9.88 9.88 0 01-.794.033q-.305 0-.616-.018l-.334-.02-.279.186a13.767 13.767 0 01-2.578 1.356 9.545 9.545 0 00.626-1l.484-.922-.941-.446A5.18 5.18 0 011.29 9.43c0-2.994 3.141-5.43 7-5.43 3.826 0 6.941 2.393 7 5.351a8.9 8.9 0 011-.063C16.19 5.8 12.684 3 8.292 3c-4.453 0-8 2.875-8 6.43a6.159 6.159 0 003.764 5.457 13.707 13.707 0 01-1.2 1.752c-.366.458-.179.973.466.973a10.16 10.16 0 004.123-1.781q.34.02.675.02c.263 0 .522-.011.779-.029-.009-.127-.023-.253-.023-.381a5.154 5.154 0 01.039-.622z'></path>
              </svg>
            </div>
            <div className='as-chat-buyflow-container'>
              <div className='as-chat-title'> Need some help? </div>{' '}
              <div className='as-chat-content'>
                <StyledLink
                  link={{
                    href: 'https://contactretail.apple.com/Help',
                    text: 'Contact us',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style global jsx>{`
        .rf-pdp-violator {
          padding-bottom: 4px;
        }

        /* rc-prices */
        .rc-prices,
        .rc-prices-inline {
          padding-bottom: 10px;
        }

        .rc-prices,
        .rc-prices-inline,
        .rf-pdp-acmiprice {
          margin-top: 14px;
        }

        .rc-prices-installmentsseparator,
        .rf-pdp-acmipriceseparator {
          padding: 4px 0 5px;
        }
        .rc-prices-inline .as-price-currentprice,
        .rc-prices-inline .as-price-previousprice,
        .rc-prices-inline .rc-prices-currentprice,
        .rc-prices-inline .rc-prices-installmentsseparator,
        .rc-prices-inline .rc-prices-promosavings,
        .rc-prices-inline .rf-ac-messages,
        .rc-prices .as-price-currentprice,
        .rc-prices .as-price-previousprice,
        .rc-prices .rc-prices-currentprice,
        .rc-prices .rc-prices-installmentsseparator,
        .rc-prices .rc-prices-promosavings,
        .rc-prices .rf-ac-messages {
          font-size: 17px;
          line-height: 1.47059;
          font-weight: 400;
          letter-spacing: -0.022em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
        }

        /* fulfillment */
        .rf-fulfillment-quote {
          padding-top: 20px;
        }
        .rf-fulfillment-quote > div {
          padding-top: 16px;
          flex-basis: 100%;
          max-width: 100%;
          flex-grow: 1;
        }

        .rf-pdp-buyflow-form-wrapper {
          margin: 35px 0;
        }

        .rf-pdp-applepay-form .rf-pdp-applepay-button {
          display: none;
          border-color: #000;
          background: #000;
        }

        .rf-pdp-chat {
          font-size: 12px;
          line-height: 1.33337;
          font-weight: 400;
          letter-spacing: -0.01em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
          padding-top: 22px;
          border-top: 1px solid #d2d2d7;
        }

        .rf-pdp-chat .as-chat-buyflow {
          display: flex;
        }

        .rf-pdp-chat .as-svgicon-container {
          padding-right: 12px;
        }

        .rf-pdp-chat .as-svgicon-container svg {
          width: 25px;
          height: 25px;
          margin-left: -2px;
        }

        .as-chat-title {
          padding-top: 6px;
          display: inline-block;
        }
        .rf-pdp-chat .as-chat-title {
          padding-top: 0;
          font-weight: 600;
        }

        .as-chat-content {
          display: inline-block;
        }
      `}</style>
    </>
  )
}
