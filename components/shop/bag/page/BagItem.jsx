import Quantity from './Quantity'

import StyledLink from '@/layout/styled/StyledLink'
import EnterZipCode from './EnterZipCode'

import { useState } from 'react'
import Image from 'next/image'
export default function BagItem({ product }) {
  const [showZipCode, setShowZipCode] = useState(false)

  return (
    <>
      <li className='rs-bag-item rs-iteminfo-wrap' data-autom='bag-item-2'>
        <div className='rs-iteminfo row' tabIndex='-1'>
          <div
            className='rs-iteminfo-image column large-3 small-12'
            aria-hidden='true'
          >
            <Image
              src={`${product.images.path}${
                product.colors ? `-${product.colors[0].slug}` : ''
              }-transparent.webp`}
              layout='fill'
              objectFit='contain'
              alt={`${product.name}${
                product.colors ? ` - ${product.colors[0].slug}` : ''
              }`}
              className='cover-link'
              aria-hidden='true'
              data-autom='bag-item-image'
            />
          </div>
          <div className='rs-iteminfo-content column large-9 small-12'>
            <div className='rs-iteminfo-details'>
              <div className='rs-iteminfo-title-wrapper large-6 small-12'>
                <h2 className='rs-iteminfo-title'>
                  <a
                    href={`/shop/product/A/${product.slug}`}
                    data-evar1='Cart||MLWK3AM/A'
                    data-s-object-id='c9366630df563186a9a63ea362f798e1'
                    data-autom='bag-item-name'
                  >
                    {product.name}
                  </a>
                </h2>
              </div>
              <div className='rs-iteminfo-quantity'>
                <Quantity />
              </div>
              <div className='rs-iteminfo-pricedetails large-last'>
                <div className='rs-iteminfo-price'>
                  <p>{product.prices.fullPrice}</p>
                </div>
              </div>
              <div className='rs-iteminfo-pricelineitemwrapper'>
                {product.prices.monthlyPrice && (
                  <div className='rs-summary-content rs-summary-iteminfopricelineitem'>
                    <div className='rs-summary-labelandvaluecontainer'>
                      <div
                        className='rs-summary-label'
                        data-autom='bagrs-summary-iteminfopricelineitemlabel'
                      >
                        Pay 0% APR for {product.prices.termLength} months:{' '}
                      </div>
                      <div
                        className='rs-summary-value'
                        data-autom='bagrs-summary-iteminfopricelineitemvalue'
                      >
                        <span className='nowrap'>
                          {product.prices.monthlyPrice}
                          <span aria-hidden='true'>/mo.</span>
                          <span className='visuallyhidden'>per month</span>
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                <div className='rs-summary-content rs-summary-iteminfoactions'>
                  <div className='rs-summary-labelandvaluecontainer'>
                    <div
                      className='rs-summary-label'
                      data-autom='bagrs-summary-iteminfoactionslabel'
                    >
                      <div className='rs-iteminfo-actions-left'></div>
                    </div>
                    <div
                      className='rs-summary-value'
                      data-autom='bagrs-summary-iteminfoactionsvalue'
                    >
                      <div className='rs-iteminfo-actions-right'>
                        <button
                          type='button'
                          className='rs-iteminfo-remove as-buttonlink'
                          id='shoppingCart.items.item-fee8e4d9-9c61-4baa-aac3-8a549d1064e2.delete'
                          data-autom='bag-item-remove-button'
                        >
                          Remove
                          <span className='visuallyhidden'>{product.name}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='rs-bag-item-children'></div>
            <div className='rs-inline-recommendation rs-iteminfo-child'>
              <div className='row rs-iteminfo-child-content'>
                <div className='column large-12 rs-iteminfo-child-details'>
                  <div className='as-icondetails'>
                    <div className='rs-iteminfo-child-image'>
                      <img
                        alt=''
                        src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/APPLECARE-plus_ICON?wid=800&amp;hei=800&amp;fmt=jpeg&amp;qlt=90&amp;fit=constrain&amp;.v=1527725457537'
                        srcSet='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/APPLECARE-plus_ICON?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=95&amp;fit=constrain&amp;.v=1527725457537, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/APPLECARE-plus_ICON?wid=800&amp;hei=800&amp;fmt=jpeg&amp;qlt=90&amp;fit=constrain&amp;.v=1527725457537 2x'
                        aria-hidden='true'
                      />
                    </div>
                  </div>
                  <div className='as-icondetails-detail'>
                    <h3
                      id='AppleCare+'
                      aria-label={`Add AppleCare+ for ${product.type.name} - ${product.name} for $29.00`}
                      tabIndex='-1'
                      className='rs-iteminfo-child-title small-8 large-9'
                    >
                      Add AppleCare+ for {product.type.name} - {product.name}{' '}
                      for <span className='nowrap'>$29.00</span>
                    </h3>
                    <div className='rs-iteminfo-child-desc '>
                      <p className='rs-iteminfo-child-tagline'>
                        Get up to two years of tech support and accidental
                        damage protection.
                      </p>
                      <StyledLink
                        link={{
                          href: '#',
                        }}
                      />
                    </div>
                    <div className='column rs-iteminfo-child-actions large-3 small-4'>
                      <button
                        id='shoppingCart.items.item-fee8e4d9-9c61-4baa-aac3-8a549d1064e2.inlineRecommendations.s9075LL/A.add'
                        data-autom='bag-inlineattach-add'
                        type='button'
                        className='rs-iteminfo-child-actions-button as-buttonlink'
                        aria-label={`Add AppleCare+ for ${product.type.name} - ${product.name} for $29.00`}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {product.eyebrow === 'Free Engraving' && (
              <div className='rs-iteminfo-child'>
                <div className='row rs-iteminfo-child-content rs-iteminfo-child-engraving'>
                  <div className='column large-12 as-icondetails'>
                    <div className='as-icondetails-icon as-svgicon-container'>
                      <svg
                        viewBox='0 0 25 25'
                        className='as-svgicon as-svgicon-engraving as-svgicon-reduced as-svgicon-engravingreduced'
                        role='img'
                        aria-hidden='true'
                        width='25px'
                        height='25px'
                      >
                        <path fill='none' d='M0 0h25v25H0z'></path>
                        <path d='M12.5 22.05a9.55 9.55 0 119.55-9.55 9.561 9.561 0 01-9.55 9.55zm0-18a8.45 8.45 0 108.45 8.45 8.46 8.46 0 00-8.45-8.45z'></path>
                        <path d='M16.5 15h-8a.5.5 0 010-1h8a.5.5 0 010 1zM18 11H7a.5.5 0 010-1h11a.5.5 0 010 1z'></path>
                      </svg>
                    </div>
                    <div className='as-icondetails-detail rs-iteminfo-icondetails-detail'>
                      <div className='rs-iteminfo-child-wrapper'>
                        <p className='rs-iteminfo-child-title'>
                          <span className='rs-iteminfo-child-titletext'>
                            Add free engraving
                          </span>
                        </p>
                        <div className='rs-iteminfo-child-actions'>
                          <button
                            type='button'
                            className='as-buttonlink rs-iteminfo-child-actions-button'
                            aria-label='Add engraving for AirPods Pro'
                            data-value='add'
                            data-autom='bag-engraving-add'
                            data-prop37='D=pageName+"||engraving|Add|selected"'
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className='rs-iteminfo-child'>
              <div className='row rs-iteminfo-child-content'>
                <div className='column as-icondetails large-12'>
                  <div className='as-icondetails-icon as-svgicon-container'>
                    <svg
                      viewBox='0 0 25 25'
                      className='as-svgicon as-svgicon-gift as-svgicon-reduced as-svgicon-giftreduced'
                      role='img'
                      aria-hidden='true'
                      width='25px'
                      height='25px'
                    >
                      <path fill='none' d='M0 0h25v25H0z'></path>
                      <path d='M17.5 4h-10A3.5 3.5 0 004 7.5v10A3.5 3.5 0 007.5 21h10a3.5 3.5 0 003.5-3.5v-10A3.5 3.5 0 0017.5 4zm-10 1H12v4.414A5.537 5.537 0 0010.973 7.6 2.556 2.556 0 009.1 6.869a2.5 2.5 0 00-1.814.794 2.614 2.614 0 00.2 3.684A3.954 3.954 0 008.671 12H5V7.5A2.5 2.5 0 017.5 5zm4.271 6.846a11.361 11.361 0 01-3.6-1.231 1.613 1.613 0 01-.146-2.271 1.5 1.5 0 011.094-.476h.021a1.7 1.7 0 011.158.464 11.4 11.4 0 011.472 3.514zM5 17.5V13h6.64c-.653 1.149-2.117 3.2-4.4 3.568a.5.5 0 10.158.987A7.165 7.165 0 0012 14.318V20H7.5A2.5 2.5 0 015 17.5zM17.5 20H13v-5.7a7.053 7.053 0 004.6 3.259.542.542 0 00.074.005.5.5 0 00.072-.995c-2.194-.325-3.632-2.253-4.377-3.567H20v4.5A2.5 2.5 0 0117.5 20zm2.5-8h-3.735a4.1 4.1 0 001.251-.678 2.614 2.614 0 00.2-3.684 2.5 2.5 0 00-1.816-.793 2.634 2.634 0 00-1.872.732A5.537 5.537 0 0013 9.389V5h4.5A2.5 2.5 0 0120 7.5zm-6.77-.179a11.405 11.405 0 011.479-3.513 1.694 1.694 0 011.158-.464h.021a1.5 1.5 0 011.094.476 1.613 1.613 0 01-.146 2.271 11.366 11.366 0 01-3.606 1.23z'></path>
                    </svg>
                  </div>
                  <div className='as-icondetails-detail rs-iteminfo-child-details'>
                    <div>
                      <div className='rs-iteminfo-child-title small-12 large-9'>
                        <span className='rs-iteminfo-child-titletext'>
                          Add a gift message or gift wrap
                        </span>
                      </div>
                      <div className='column small-4 large-3 rs-iteminfo-child-actions'>
                        <button
                          type='button'
                          className='rs-iteminfo-child-actions-button as-buttonlink'
                          aria-label="Add a gift message or gift wrap for AirPods Pro'"
                          id='cart-items-item-fee8e4d9-9c61-4baa-aac3-8a549d1064e2-gifting-show-giftOptions'
                          data-autom='bag-gifting-add'
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='rs-item-fulfillment rs-iteminfo-child rs-has-delivery rs-has-pickup'>
              <div className='rs-item-fulfillment-callout'>
                <div className='rs-fulfillment-callout-title'>
                  <span className='rs-fulfillment-callout-title-text'>
                    Find out how soon you can get this item.
                  </span>{' '}
                  {!showZipCode && (
                    <button
                      type='button'
                      className='rs-edit-location-button as-buttonlink icon icon-after icon-chevrondown'
                      aria-label='Enter zip code '
                      data-autom='bag-zipcode-edit-cold'
                      onClick={() => setShowZipCode(true)}
                    >
                      Enter zip code
                    </button>
                  )}
                </div>
                <EnterZipCode
                  showZipCode={showZipCode}
                  setShowZipCode={setShowZipCode}
                />
              </div>
              <div className='rs-item-fulfillment-columns'>
                <div className='rs-item-shipping rs-item-delivery as-icondetails'>
                  <div className='as-icondetails-icon as-svgicon-container'>
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
                  </div>
                  <div
                    className='as-icondetails-detail'
                    data-autom='rs-item-delivery-details'
                  >
                    <div className='rs-item-shipping-label as-icondetails-label'></div>
                    <div className='rs-item-shipping-detail-line as-icondetails-value'>
                      In stock and ready to ship.
                    </div>
                  </div>
                </div>
                <div className='rs-item-pickup as-icondetails'>
                  <div className='as-icondetails-icon as-svgicon-container'>
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
                  </div>
                  <div
                    className='as-icondetails-detail'
                    data-autom='rs-item-delivery-details'
                  >
                    <span className='as-icondetails-value'>
                      Pick up at an Apple Store near you.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>

      <style global jsx>{`
        .rs-iteminfo {
          margin-bottom: 78px;
          border-bottom: 1px solid #d2d2d7;
        }
        .rs-bag-item:last-child .rs-iteminfo {
          margin-bottom: 0;
        }

        .rs-iteminfo-image {
          text-align: center;
          width: 100%;
          max-width: 245px;
          max-height: 245px;
          position: relative;
        }

        .rs-iteminfo-details {
          display: flex;
          flex-wrap: wrap;
        }

        .rs-iteminfo-title-wrapper {
          box-sizing: border-box;
        }

        .rs-iteminfo-title a {
          color: #1d1d1f;
          overflow-wrap: break-word;
          display: inline-block;
          text-decoration: none;
        }
        .rs-iteminfo-title a:hover {
          text-decoration: none;
          color: #0071e3;
        }

        .large-last {
          margin-left: auto;
        }

        .rs-iteminfo-price {
          padding-left: 0.58824rem;
          text-align: right;
        }

        .rs-iteminfo-pricelineitemwrapper {
          width: 99.3%;
        }

        /* rs-summary-content */
        .rs-summary-content {
          margin-bottom: 5px;
        }
        .rs-iteminfo-pricelineitemwrapper
          .rs-summary-iteminfopricelineitem:first-child {
          margin-top: 14px;
        }

        .rs-summary-labelandvaluecontainer {
          display: flex;
          justify-content: space-between;
        }

        /* rs-summary-label -value */
        .rs-summary-label,
        .rs-summary-value {
          font-size: 17px;
          line-height: 1.47059;
          font-weight: 400;
          letter-spacing: -0.022em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
          flex-grow: 1;
        }
        .rs-summary-label {
          z-index: 2;
        }
        .rs-summary-value {
          text-align: right;
        }

        .rs-iteminfo-pricelineitemwrapper
          .rs-summary-iteminfopricelineitem
          .rs-summary-label,
        .rs-iteminfo-pricelineitemwrapper
          .rs-summary-iteminfopricelineitem
          .rs-summary-value {
          font-size: 14px;
          line-height: 1.42859;
          font-weight: 400;
          letter-spacing: -0.016em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
        }

        .rs-iteminfo-pricelineitemwrapper
          .rs-summary-iteminfopricelineitem
          .rs-summary-value {
          display: flex;
          flex-direction: column-reverse;
          white-space: nowrap;
        }

        .rs-iteminfo-actions-right {
          text-align: right;
        }

        /* as-svgicon-container */
        .as-icondetails-icon.as-svgicon-container {
          transform: translateY(-50%);
          margin-top: 10px;
        }
        .rs-iteminfo-child-content .as-icondetails-icon {
          margin-top: 12px;
          color: #1d1d1f;
        }

        /* rs-iteminfo-child */
        .rs-iteminfo-child {
          margin-top: 21px;
          padding-top: 21px;
          border-top: 1px solid #d2d2d7;
        }
        .rs-iteminfo-child-image {
          position: absolute;
          margin-top: 2px;
          margin-left: 1px;
        }
        .rs-iteminfo-child-image img {
          width: 18px;
          height: auto;
          margin-top: 1px;
        }

        .as-icondetails-detail {
          display: inline-block;
          margin-left: 28px;
        }
        .rs-iteminfo-child .as-icondetails-detail {
          margin-left: 26px;
          display: block;
        }
        .rs-inline-recommendation .as-icondetails-detail {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
        }

        .rs-iteminfo-child-price,
        .rs-iteminfo-child-title {
          font-size: 17px;
          line-height: 1.47059;
          font-weight: 400;
          letter-spacing: -0.022em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
          font-weight: 600;
        }
        .rs-iteminfo-child-title {
          display: inline-block;
        }

        .rs-inline-recommendation .rs-iteminfo-child-desc {
          order: 1;
          margin-top: 0;
        }

        .rs-iteminfo-child-tagline {
          font-size: 14px;
          line-height: 1.42859;
          font-weight: 400;
          letter-spacing: -0.016em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
          margin-top: 3px;
          margin-bottom: -2px;
          order: 1;
          width: 100%;
        }

        .rs-iteminfo-child-actions {
          float: right;
          text-align: right;
          flex: 1;
        }

        .rs-iteminfo-child-actions .rs-iteminfo-child-actions-button,
        .rs-iteminfo-child-actions .rs-iteminfo-link {
          font-size: 17px;
          line-height: 1.47059;
          font-weight: 400;
          letter-spacing: -0.022em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
          text-align: right;
          margin-top: 0;
        }

        .rs-item-fulfillment-callout {
          margin-bottom: 10px;
        }

        /* rs-fulfillment-callout */
        .rs-fulfillment-callout-title {
          margin-bottom: 8px;
        }
        .rs-fulfillment-callout-title .rs-fulfillment-callout-title-text {
          font-weight: 600;
        }
        .rs-item-fulfillment-columns {
          margin-top: 1px;
          position: relative;
        }

        .rs-item-fulfillment .rs-item-delivery {
          margin-bottom: 10px;
        }
        .rs-item-fulfillment.rs-has-pickup .rs-item-delivery {
          max-width: 310px;
        }

        .rs-item-fulfillment .as-svgicon-container.as-icondetails-icon {
          margin-top: 11px;
        }

        .rs-item-fulfillment .as-icondetails-label {
          font-size: 14px;
          line-height: 1.42859;
          font-weight: 400;
          letter-spacing: -0.016em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
          font-weight: 600;
        }
        .rs-item-fulfillment .as-icondetails-value {
          font-size: 14px;
          line-height: 1.42859;
          font-weight: 400;
          letter-spacing: -0.016em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
        }

        @media only screen and (min-width: 734px) {
          .rs-iteminfo {
            padding-bottom: 74px;
          }

          .rs-iteminfo-title-wrapper {
            padding-right: 20px;
          }
          .rs-iteminfo-price,
          .rs-iteminfo-quantity-selector label,
          .rs-iteminfo-title {
            font-size: 24px;
            line-height: 1.16667;
            font-weight: 600;
            letter-spacing: 0.009em;
            font-family: SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue,
              Helvetica, Arial, sans-serif;
          }

          .rs-iteminfo-quantity {
            width: 14%;
          }
          .rs-iteminfo-pricedetails {
            width: 36%;
          }

          .rs-iteminfo-pricelineitemwrapper
            .rs-summary-iteminfopricelineitem:last-child {
            margin-bottom: 8px;
          }

          .rs-summary-label {
            padding-right: 20px;
          }
          .rs-summary-value {
            padding-left: 20px;
          }

          .rs-iteminfo-actions-left,
          .rs-iteminfo-actions-right {
            margin-top: 12px;
          }

          .rs-item-pickup {
            position: absolute;
            top: 0;
            left: 330px;
            right: 24px;
          }
        }
        @media only screen and (max-width: 734px) {
          .rs-iteminfo {
            padding-bottom: 55px;
          }
          .rs-iteminfo-image {
            margin: 0 0 41px;
          }

          /* title */
          .rs-iteminfo-title-wrapper {
            padding-right: 0;
          }
          .rs-iteminfo-price,
          .rs-iteminfo-quantity-selector label,
          .rs-iteminfo-title {
            font-size: 21px;
            line-height: 1.19048;
            font-weight: 600;
            letter-spacing: 0.011em;
            font-family: SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue,
              Helvetica, Arial, sans-serif;
          }

          .rs-iteminfo-quantity {
            width: 40%;
          }
          .rs-iteminfo-pricedetails {
            width: 60%;
          }

          .rs-iteminfo-price {
            margin-top: 8px;
          }

          .rs-iteminfo-pricelineitemwrapper .rs-summary-iteminfopricelineitem {
            margin-top: 14px;
          }
          .rs-iteminfo-pricelineitemwrapper .rs-summary-iteminfopricelineitem {
            margin-bottom: 22px;
          }

          .rs-summary-label,
          .rs-summary-value {
            margin-bottom: 7px;
          }
          .rs-summary-label {
            padding-right: 10px;
          }
          .rs-summary-value {
            padding-left: 10px;
          }
          .rs-summary-labelandvaluecontainer .rs-summary-label,
          .rs-summary-labelandvaluecontainer .rs-summary-value {
            margin-bottom: 0;
          }

          .rs-iteminfo-actions {
            margin-top: 7px;
          }

          .rs-iteminfo-actions-left {
            flex-grow: 1;
          }

          .rs-item-pickup {
            margin-top: 20px;
            position: static;
          }
        }
      `}</style>
    </>
  )
}
