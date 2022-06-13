import { useState, useEffect } from 'react'
import Fullfillment from '../../accessories/[category]/[product]/page/Fullfillment'
import Prices from '../../accessories/[category]/[product]/page/Prices'
import SaveItem from '../../accessories/[category]/[product]/page/SaveItem'

export default function Summary() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    function handleScroll() {
      if (
        document.querySelector('main').getBoundingClientRect().top < 0 ||
        window.innerWidth > 734
      ) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  useEffect(() => {
    document
      .querySelector('.rf-fulfillment-quote')
      .classList.toggle('fulfillment-opened')
  }, [isOpen])

  return (
    <>
      <div
        className='rf-cto-summary'
        style={{ maxHeight: isVisible ? '266px' : '0px' }}
      >
        <div className='section-content row rf-cto-summarywrapper'>
          <Fullfillment parentFlex='large-6 medium-5 small-12'>
            <input
              type='checkbox'
              id='fulfillment-state'
              checked={isOpen}
              readOnly
            />
            <button
              type='button'
              onClick={() => setIsOpen(!isOpen)}
              className='fulfillment-button as-buttonlink'
            >
              {isOpen ? 'Hide Options' : 'Show Options'}
              <span aria-hidden='true' className=' fulfillment-chevron' />
            </button>
          </Fullfillment>
          <div className='rf-cto-summary-purchaseinfo column justify-content-end large-6 medium-7 small-12'>
            <Prices />
            <div>
              <form
                method='get'
                action='/shop/buy-mac/imac/blue-24-inch-8-core-cpu-8-core-gpu-8gb-memory-512gb'
                className='rf-cto-summary-form'
              >
                <button
                  type='submit'
                  name='add-to-cart'
                  value='add-to-cart'
                  className='button button-block'
                  data-autom='addToCart'
                >
                  Add to Bag
                </button>
                <input type='hidden' name='product' value='MGPL3LL/A' />
                <input type='hidden' name='step' value='config' />
              </form>
            </div>
            <SaveItem />
          </div>
        </div>
      </div>

      <style global jsx>{`
        .rf-cto-summary {
          position: fixed;
          width: 100%;
          left: 0;
          right: 0;
          background: #f5f5f7;
          z-index: 3;
        }

        .rf-cto-summarywrapper {
          justify-content: space-between;
        }

        .rf-cto-summary-purchaseinfo,
        .rf-fulfillment-quote {
          padding: 24px 0 20px;
          margin-top: auto;
          margin-bottom: auto;
        }

        .rf-fulfillment-quote > div {
          display: flex;
          align-items: flex-start;
        }

        #fulfillment-state {
          display: none;
        }

        .rf-cto-summary .as-icondetails-icon {
          margin: 2px 12px 0 0;
        }
        .rf-cto-summary .as-icondetails-icon svg {
          display: block;
          margin-left: -4px;
        }

        /* rf-cto-summary-purchaseinfo */
        .rf-cto-summary-purchaseinfo {
          display: flex;
        }

        .rf-cto-summary .rc-prices .rc-monthly-price,
        .rf-cto-summary .rc-prices .rc-price,
        .rf-cto-summary .rc-prices .rc-prices-currentprice,
        .rf-cto-summary .rc-prices .rc-prices-installmentsseparator {
          display: inline;
        }
        .rf-cto-summary
          .rc-prices
          .rc-prices-installmentsseparator
          + .rc-monthly-price,
        .rf-cto-summary
          .rc-prices
          .rc-prices-installmentsseparator
          + .rc-price {
          display: block;
        }

        .rf-cto-summary-purchaseinfo .rc-prices-installmentsseparator:after,
        .rf-cto-summary-purchaseinfo .rc-prices-installmentsseparator:before {
          content: ' ';
        }

        .rc-financing-message {
          font-size: 14px;
          line-height: 1.42859;
          font-weight: 400;
          letter-spacing: -0.016em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
        }

        .rf-cto-summary .rf-cto-summary-form {
          padding-left: 15px;
        }

        /* rf-saveditem-content */
        .rf-cto-summary .rf-saveditem-container {
          padding-top: 0;
        }
        .rf-cto-summary .rf-saveditem-content {
          display: none;
        }

        @media only screen and (min-width: 735px) {
          .rf-cto-summary {
            bottom: 0;
            border-top: 1px solid #d2d2d7;
          }

          .rf-pdp-fulfillment-wrapper > .fulfillment-button {
            display: none;
          }

          .rf-cto-summary-purchaseinfo {
            text-align: right;
            justify-content: flex-end;
          }

          .rc-financing-message .as-buttonlink {
            text-align: right;
          }
        }
        @media only screen and (min-width: 735px) and (max-width: 1068px) {
          .rf-cto-summarywrapper {
            width: 87.5%;
          }
        }
        @media only screen and (max-width: 734px) {
          .rf-cto-summary {
            top: 0;
            border-bottom: 1px solid #d2d2d7;
            overflow: hidden;
            transition: max-height 0.4s ease-in-out;
          }
          .rf-cto-summarywrapper {
            flex-direction: column-reverse;
          }

          .rf-cto-summary-purchaseinfo {
            text-align: left;
            justify-content: flex-start;
          }

          .rf-cto-summary .rc-prices,
          .rf-cto-summary .rc-prices-currentprice {
            flex: auto;
            font-size: 14px;
            line-height: 1.42859;
            font-weight: 400;
            letter-spacing: -0.016em;
            font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
              Helvetica, Arial, sans-serif;
            font-weight: 600;
          }

          /* rf-pdp-fulfillment-wrapper */
          .rf-pdp-fulfillment-wrapper {
            display: flex;
            flex-direction: column-reverse;
          }

          .rf-pdp-fulfillment-wrapper > .fulfillment-button {
            padding-bottom: 16px;
          }
          .rf-fulfillment-quote {
            border-top: 1px solid #d2d2d7;
            /* display: none; */
            height: 0px;
            overflow: hidden;
            visibility: hidden;
            padding: 0;
            transform: translateY(-20px);
            transition-property: height, transform, padding, visibility;
            transition-timing-function: ease-in-out;
            transition-duration: 0.4s;
          }

          .rf-fulfillment-quote.fulfillment-opened {
            visibility: visible;
            height: 80px;
            transform: translateY(0);
            padding: 24px 0 20px;
          }

          /* CHEVRON */
          .fulfillment-button {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 105px;
          }
          .fulfillment-button .fulfillment-chevron {
            display: block;
            float: right;
            font-size: 10px;
            position: relative;
            width: 1em;
            height: 100%;
            z-index: 1;
            transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1),
              transform-origin 0.4s cubic-bezier(0.86, 0, 0.07, 1);
            transform: translateY(0);
            opacity: 1;
          }
          .fulfillment-button .fulfillment-chevron:hover {
            opacity: 1;
          }
          #fulfillment-state:is(:checked, :target)
            ~ .fulfillment-button
            .fulfillment-chevron {
            transform: translateY(-5px);
          }

          .fulfillment-button .fulfillment-chevron::before,
          .fulfillment-button .fulfillment-chevron::after {
            content: '';
            display: block;
            position: absolute;
            top: 0.25em;
            width: 0.66em;
            height: 0;
            z-index: 1;
            transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1),
              transform-origin 0.4s cubic-bezier(0.86, 0, 0.07, 1);
            background: currentColor;
            border: currentColor 0.08em solid;
          }
          .fulfillment-button .fulfillment-chevron::before {
            right: 50%;
            border-radius: 1em;
            transform-origin: 100% 100%;
            transform: rotate(40deg) scaleY(1.1);
          }
          .fulfillment-button .fulfillment-chevron::after {
            left: 50%;
            border-radius: 1em;
            transform-origin: 0% 100%;
            transform: rotate(-40deg) scaleY(1.1);
          }
          /* :checked */
          #fulfillment-state:is(:checked, :target)
            ~ .fulfillment-button
            .fulfillment-chevron::before {
            transform-origin: 100% 0%;
            transform: rotate(-40deg) scaleY(1.1);
          }
          #fulfillment-state:is(:checked, :target)
            ~ .fulfillment-button
            .fulfillment-chevron::after {
            transform-origin: 0% 0%;
            transform: rotate(40deg) scaleY(1.1);
          }

          /* CHEVRON */
        }
      `}</style>
    </>
  )
}
