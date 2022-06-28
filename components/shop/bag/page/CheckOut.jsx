export default function CheckOut({ total, monthlyInstallment }) {
  return (
    <>
      <div className='row rs-bag-checkoutbutton-bottom'>
        <div className='large-9 medium-12 large-offset-3 madium-offset-0'>
          <div>
            <h2 className='rs-bag-installment-actions-label'>
              How would you like to check out?
            </h2>
            <div className='row rs-bag-installment-actions'>
              <div className='column large-6 small-12 rs-bag-installment rs-bag-actions-box-wrapper'>
                <div className='rs-bag-actions-box'>
                  <div className='rs-bag-actions-box-title'>
                    <div className='rs-bag-actions-box-paymentlabel'>
                      Pay Monthly <br />
                      with Apple Card
                    </div>
                    <div>
                      ${monthlyInstallment}
                      <span aria-hidden='true'>/mo.</span>
                      <span className='visuallyhidden'>
                        per month at 0% APR
                      </span>
                      <span className='visuallyhidden'>Footnote</span> at 0% APR
                    </div>
                  </div>
                  <div className='rs-bag-actions-box-message'></div>
                  <div className='rs-applecardinstallment-checkout'>
                    <button
                      id='cart-actions-installmentCheckout'
                      type='button'
                      className='rs-bag-installmentbutton form-button'
                      data-autom='bag-checkout-button'
                      aria-describedby='bag-instalment-button-due-detail'
                    >
                      <span>
                        <span>
                          Check Out with Apple Card Monthly Installments
                        </span>
                      </span>
                    </button>
                  </div>
                  <div
                    id='bag-instalment-button-due-detail'
                    className='rs-bag-actions-box-footer'
                  >
                    $0.00 due today, which includes applicable full-price items,
                    down payments, shipping, and taxes.
                  </div>
                  <div className='rs-bag-actions-box-promo'></div>
                </div>
              </div>
              <div className='column large-6 small-12 rs-bag-payinfull rs-bag-actions-box-wrapper'>
                <div className='rs-bag-actions-box'>
                  <div className='rs-bag-actions-box-title'>
                    <div className='rs-bag-actions-box-paymentlabel'>
                      Pay in Full
                    </div>
                    <div>${total}</div>
                  </div>
                  <div className='rs-bag-actions-box-message'></div>
                  <div className='rs-bag-checkoutbuttons-wrapper rs-bag-applepay-enabled rs-bag-checkout-mainbutton-show'>
                    <div className='rs-bag-checkoutbutton rs-bag-checkout-mainbutton'>
                      <button
                        id='shoppingCart.actions.checkout'
                        type='button'
                        className='form-button'
                        data-autom='checkout'
                      >
                        <span>Check Out</span>
                      </button>
                    </div>
                    <div className='rs-bag-checkoutbutton rs-bag-checkout-otheroptions'>
                      <button
                        id='shoppingCart.actions.checkoutOtherPayments'
                        type='button'
                        className='form-button'
                      >
                        <span>Check Out</span>
                      </button>
                    </div>
                    <div className='rs-bag-checkoutbutton rs-bag-applepay rs-bag-applepay-activecard'>
                      <button
                        id='shoppingCart.actions.apwCheckout'
                        type='button'
                        className='rs-applepay form-button'
                      >
                        <span>Check Out with Apple Pay</span>
                      </button>
                    </div>
                  </div>
                  <div className='rs-bag-actions-box-promo'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style global jsx>{`
        .rs-bag-installment-actions-label {
          padding: 66px 0 23px;
        }

        .rs-bag-installment-actions .rs-bag-actions-box-wrapper {
          display: flex;
        }

        .rs-bag-installment-actions .rs-bag-actions-box {
          border-radius: 12px;
          background-color: #f5f5f7;
          text-align: center;
          padding: 24px 32px 28px;
          display: flex;
          flex-direction: column;
          width: 100%; // 300px
        }

        .rs-bag-installment-actions
          .rs-bag-actions-box
          .rs-bag-actions-box-title {
          font-size: 21px;
          line-height: 1.19048;
          font-weight: 600;
          letter-spacing: 0.011em;
          font-family: SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
          margin: 14px 0;
        }

        .rs-bag-installment-actions
          .rs-bag-actions-box
          .rs-bag-actions-box-title
          .rs-bag-actions-box-paymentlabel {
          margin-bottom: 4px;
        }

        .rs-bag-installment-actions
          .rs-bag-actions-box
          .rs-bag-actions-box-message {
          font-size: 14px;
          line-height: 1.42859;
          font-weight: 400;
          letter-spacing: -0.016em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
        }

        .rs-bag-installment-actions
          .rs-bag-payinfull
          .rs-bag-actions-box-message:empty {
          margin-bottom: 28px;
        }

        /* form-button */
        .form-button {
          cursor: pointer;
          text-align: center;
          white-space: nowrap;
          border-radius: 980px;
          background: #0071e3;
          color: #fff;
          font-size: 17px;
          line-height: 1.17648;
          font-weight: 400;
          letter-spacing: -0.022em;
          font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica,
            Arial, sans-serif;
          min-width: 28px;
          padding: 18px 31px;
          box-sizing: border-box;
          display: block;
          width: 100%;
          border-radius: 8px;
          border-radius: 12px;
          white-space: normal;
          display: inline-block;
        }
        .form-button:hover {
          background: #0077ed;
          text-decoration: none;
        }
        .rs-bag-installment-actions .rs-bag-checkoutbutton,
        .rs-bag-installment-actions
          .rs-bag-checkoutbutton.rs-bag-applepay.rs-bag-applepay-activecard,
        .rs-bag-installment-actions .rs-bag-installmentbutton {
          width: 100%; // 300px
          float: none;
          margin: 7px auto;
        }
        .rs-bag-checkoutbutton.rs-bag-checkout-otheroptions,
        .rs-bag-checkoutbutton.rs-bag-applepay {
          display: none;
        }

        .rs-bag-installment-actions
          .rs-bag-actions-box
          .rs-bag-actions-box-footer {
          font-size: 14px;
          line-height: 1.42859;
          font-weight: 400;
          letter-spacing: -0.016em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
          width: 230px;
          margin: 0 auto auto;
          padding-bottom: 20px;
        }

        .rs-bag-actions-box-promo {
          margin-bottom: 20px;
        }

        @media only screen and (min-width: 734px) {
          .rs-bag-installment-actions-label {
            font-size: 24px;
            line-height: 1.16667;
            font-weight: 600;
            letter-spacing: 0.009em;
            font-family: SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue,
              Helvetica, Arial, sans-serif;
          }

          .rs-bag-installment-actions .rs-bag-installment {
            padding-right: 13px;
          }
          .rs-bag-installment-actions .rs-bag-payinfull {
            padding-left: 13px;
          }
        }
        @media only screen and (max-width: 734px) {
          .rs-bag-installment-actions-label {
            font-size: 21px;
            line-height: 1.19048;
            font-weight: 600;
            letter-spacing: 0.011em;
            font-family: SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue,
              Helvetica, Arial, sans-serif;
          }

          .rs-bag-installment-actions {
            flex-direction: column-reverse;
          }

          .rs-bag-installment-actions .rs-bag-actions-box-wrapper {
            padding-bottom: 14px;
          }
        }
      `}</style>
    </>
  )
}
