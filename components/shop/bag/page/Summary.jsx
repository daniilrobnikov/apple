import EnterZipCode from './EnterZipCode'
import { useState } from 'react'
export default function Summary({ total }) {
  const [showZipCode, setShowZipCode] = useState(false)

  return (
    <>
      <div className='rs-summary '>
        <div className='large-9 large-offset-3 small-12 small-offset-0'>
          <div className='rs-summary-content rs-summary-subtotal'>
            <div className='rs-summary-labelandvaluecontainer'>
              <div
                className='rs-summary-label'
                data-autom='bagrs-summary-subtotallabel'
              >
                Subtotal
              </div>
              <div
                className='rs-summary-value'
                data-autom='bagrs-summary-subtotalvalue'
              >
                ${total}
              </div>
            </div>
          </div>
          <div className='rs-summary-content rs-summary-shipping'>
            <div className='rs-summary-labelandvaluecontainer'>
              <div
                className='rs-summary-label'
                data-autom='bagrs-summary-shippinglabel'
              >
                Shipping
              </div>
              <div
                className='rs-summary-value'
                data-autom='bagrs-summary-shippingvalue'
              >
                FREE
              </div>
            </div>
          </div>
          <div className='rs-summary-content rs-summary-tax'>
            <div className='rs-summary-labelandvaluecontainer'>
              <div
                className='rs-summary-label'
                data-autom='bagrs-summary-taxlabel'
              >
                <div className='rs-summary-tax'>
                  <span className='rs-summary-tax-label'>
                    Estimated tax for:{' '}
                  </span>
                  <div className='form-tooltip rs-summary-tooltip form-tooltip-before'>
                    <button
                      type='button'
                      className='form-tooltip-button'
                      aria-describedby='f103f570-f575-11ec-a8f3-457fe97e422a'
                    >
                      <span className='form-icons form-icons-info19'></span>
                      <span className='visuallyhidden'>
                        What does &quot;estimated tax&quot; mean
                      </span>
                    </button>
                    <div
                      id='f103f570-f575-11ec-a8f3-457fe97e422a'
                      className='form-tooltip-info form-tooltip-pointer-middle'
                      role='tooltip'
                      aria-hidden='true'
                    >
                      <div className='form-tooltip-title'></div>
                      <div className='form-tooltip-content'>
                        The sales tax listed on the checkout page is only an
                        estimate. Your invoice will contain the final sales tax,
                        including state and local taxes, as well as any
                        applicable rebates or fees. In California and Rhode
                        Island, sales tax is collected on the unbundled price of
                        iPhone.
                      </div>
                    </div>
                  </div>
                  {!showZipCode && (
                    <button
                      id='rs-summary-enterzipcode'
                      aria-controls='shoppingCart.summary.taxCalculator.address'
                      className='as-buttonlink icon icon-after icon-chevrondown'
                      aria-label='Enter zip code to get estimated tax'
                      type='button'
                      onClick={() => setShowZipCode(true)}
                    >
                      Enter zip code
                    </button>
                  )}
                </div>
              </div>
              <div
                className='rs-summary-value'
                data-autom='bagrs-summary-taxvalue'
              >
                $ –
              </div>
            </div>
          </div>
          <EnterZipCode
            showZipCode={showZipCode}
            setShowZipCode={setShowZipCode}
          />
          <div className='rs-summary-labelandvaluecontainer rs-summary-total'>
            <div className='rs-summary-label' data-autom='bagtotallabel'>
              Total
            </div>
            <div className='rs-summary-value' data-autom='bagtotalvalue'>
              $11,645.00
            </div>
          </div>
          <div className='rs-summary-financingmessage-wrapper'>
            <div className='rs-summary-value'>
              <div id='buyflow-message-container' className='rf-ac-messages'>
                <div>
                  <div>
                    <button
                      className='as-buttonlink'
                      type='button'
                      data-autom='rs-financinglink'
                    >
                      <span>
                        Get Daily Cash with Apple Card{' '}
                        <span className='visuallyhidden'>
                          (Opens in a new window)
                        </span>
                      </span>
                    </button>
                  </div>
                  <div></div>
                </div>
                <div className='rf-acmessages-defaultmessage'>
                  <div className='large-12 rs-summary-financingmessage'>
                    <div className='large-8 small-12'>
                      <div className='credit-financing'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style global jsx>{`
        .rs-summary-tax {
          position: relative;
        }

        /* form-tooltip */
        .form-tooltip {
          position: relative;
          height: 1.11765rem;
          display: inline-block;
          top: 4px;
          color: #1d1d1f;
        }
        .form-tooltip-before {
          margin-right: 0.47059rem;
        }

        .form-tooltip-button {
          display: block;
        }
        .form-icons {
          display: block;
        }
        .form-icons-info19 {
          background-image: url(data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2019%2019%22%20fill%3D%22rgb%28134%2C134%2C139%29%22%20style%3D%22%22%3E%20%3Ctitle%3Equestionmark.circle.fill_reduced%401x%3C%2Ftitle%3E%20%3Cg%20transform%3D%22translate%28-0.5%2C%20-3%29%22%3E%20%3Cpath%20d%3D%22M10%2C3a9.5%2C9.5%2C0%2C1%2C0%2C9.5%2C9.5A9.5%2C9.5%2C0%2C0%2C0%2C10%2C3ZM9.746%2C17.295a.879.879%2C0%2C1%2C1%2C.908-.879A.9.9%2C0%2C0%2C1%2C9.746%2C17.295Zm1.631-4.951c-.723.479-1.016.84-1.016%2C1.416v.2a.549.549%2C0%2C0%2C1-.6.557.546.546%2C0%2C0%2C1-.605-.605v-.215a2.2%2C2.2%2C0%2C0%2C1%2C1.191-1.924c.9-.625%2C1.279-.986%2C1.279-1.66%2C0-.791-.654-1.357-1.66-1.357A1.677%2C1.677%2C0%2C0%2C0%2C8.33%2C9.932c-.205.3-.293.527-.723.527a.515.515%2C0%2C0%2C1-.527-.537%2C2.261%2C2.261%2C0%2C0%2C1%2C.059-.439A2.735%2C2.735%2C0%2C0%2C1%2C10.02%2C7.705c1.6%2C0%2C2.9.879%2C2.9%2C2.344C12.92%2C11.1%2C12.354%2C11.68%2C11.377%2C12.344Z%22%2F%3E%20%3C%2Fg%3E%20%3C%2Fsvg%3E);
          background-size: 19px;
          background-repeat: no-repeat;
          width: 19px;
          height: 19px;
        }

        /* form-tooltip-info */
        .form-tooltip-info {
          font-size: 14px;
          line-height: 1.28577;
          font-weight: 400;
          letter-spacing: -0.016em;
          font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica,
            Arial, sans-serif;
          width: 14.11765rem;
          height: auto;
          border-radius: 12px;
          border-width: 0;
          border-style: solid;
          box-sizing: border-box;
          padding: 0.70588rem 1rem 0.76471rem;
          position: absolute;
          z-index: 1;
          display: none;
          margin: 0;
          bottom: 1.76471rem;
        }
        .form-tooltip .form-tooltip-info,
        .form-tooltip .form-tooltip-info .form-tooltip-pointer,
        .form-tooltip .form-tooltip-info:after {
          background-color: #e8e8ed;
        }
        .form-tooltip .form-tooltip-pointer-middle {
          left: -6.52941rem;
        }
        .form-tooltip.form-tooltip-show .form-tooltip-info,
        .form-tooltip:hover .form-tooltip-info {
          display: block;
        }

        .form-tooltip-title {
          font-weight: 600;
        }

        .form-tooltip-content {
          margin-top: 6px;
        }

        .form-tooltip-info .form-tooltip-pointer,
        .form-tooltip-info:after {
          position: absolute;
          content: '';
          width: 0.88235rem;
          height: 0.88235rem;
          border-bottom-right-radius: 2px;
          transform: rotate(45deg);
          bottom: -0.23529rem;
        }
        .form-tooltip .form-tooltip-pointer-middle:after {
          right: 6.58824rem;
        }

        /* rs-summary-total */
        .rs-summary-installmentsamountdue,
        .rs-summary-total {
          border-top: 1px solid #d2d2d7;
        }

        .rs-summary-financingmessage-wrapper .rs-summary-value,
        .rs-summary-loyaltysavings-message .rs-summary-value {
          font-size: 14px;
          line-height: 1.42859;
          font-weight: 400;
          letter-spacing: -0.016em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
          margin: 1px 0 0;
        }

        .rf-acmessages-defaultmessage {
          display: none;
        }

        .rs-summary-financingmessage {
          display: flex;
          justify-content: flex-end;
        }

        @media only screen and (min-width: 734px) {
          .rs-summary {
            margin-top: 41px;
          }

          .rs-summary-tax .rs-summary-tooltip {
            position: absolute;

            transform: translate(-100%, -50%);
            top: 50%;
            left: -8px;
          }

          .rs-summary-installmentsamountdue,
          .rs-summary-total {
            margin-top: 16px;
            padding-top: 19px;
          }

          .rs-summary-installmentsamountdue .rs-summary-label,
          .rs-summary-installmentsamountdue .rs-summary-value,
          .rs-summary-total .rs-summary-label,
          .rs-summary-total .rs-summary-value {
            font-size: 24px;
            line-height: 1.16667;
            font-weight: 600;
            letter-spacing: 0.009em;
            font-family: SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue,
              Helvetica, Arial, sans-serif;
          }
        }
        @media only screen and (max-width: 734px) {
          .rs-summary {
            margin-top: 12px;
          }

          .rs-summary-tax .rs-summary-tooltip {
            margin-left: 4px;
            top: 2px;
          }

          .rs-summary-label .as-buttonlink {
            display: block;
          }

          .rs-summary-installmentsamountdue,
          .rs-summary-total {
            margin-top: 13px;
            padding-top: 20px;
          }

          .rs-summary-installmentsamountdue .rs-summary-label,
          .rs-summary-installmentsamountdue .rs-summary-value,
          .rs-summary-total .rs-summary-label,
          .rs-summary-total .rs-summary-value {
            font-size: 21px;
            line-height: 1.19048;
            font-weight: 600;
            letter-spacing: 0.011em;
            font-family: SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue,
              Helvetica, Arial, sans-serif;
          }
        }
      `}</style>
    </>
  )
}
