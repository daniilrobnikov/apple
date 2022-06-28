import { BsChevronDown } from 'react-icons/bs'

export default function Quantity() {
  return (
    <>
      <div className='rs-quantity'>
        <div className='rs-quantity-selector'>
          <div className='rs-quantity-wrapper form-dropdown'>
            <select
              className='rs-quantity-dropdown form-dropdown-select'
              id='cart-items-item-fee8e4d9-9c61-4baa-aac3-8a549d1064e2-itemQuantity'
              data-autom='item-quantity-dropdown'
              style={{ width: '2.35294rem' }}
            >
              <option value='1' aria-label='1 ,  Quantity for AirPods Pro'>
                1
              </option>
              <option value='2' aria-label='2 ,  Quantity for AirPods Pro'>
                2
              </option>
              <option value='3' aria-label='3 ,  Quantity for AirPods Pro'>
                3
              </option>
              <option value='4' aria-label='4 ,  Quantity for AirPods Pro'>
                4
              </option>
              <option value='5' aria-label='5 ,  Quantity for AirPods Pro'>
                5
              </option>
              <option value='6' aria-label='6 ,  Quantity for AirPods Pro'>
                6
              </option>
              <option value='7' aria-label='7 ,  Quantity for AirPods Pro'>
                7
              </option>
              <option value='8' aria-label='8 ,  Quantity for AirPods Pro'>
                8
              </option>
              <option value='9' aria-label='9 ,  Quantity for AirPods Pro'>
                9
              </option>
              <option value='10' aria-label='10+ ,  Quantity for AirPods Pro'>
                10+
              </option>
            </select>
            <label
              htmlFor='cart-items-item-fee8e4d9-9c61-4baa-aac3-8a549d1064e2-itemQuantity'
              aria-hidden='true'
              className='visuallyhidden'
            >
              1
            </label>
            <span
              className='rs-quantity-icon form-dropdown-chevron'
              aria-hidden='true'
            >
              {/* <BsChevronDown /> */}
            </span>
            <select aria-hidden='true' className='rs-quantity-hidden-select'>
              <option>1</option>
            </select>
          </div>
        </div>
      </div>

      <style global jsx>{`
        .form-dropdown {
          position: relative;
        }
        .rs-quantity-selector .rs-quantity-wrapper {
          display: inline-block;
          position: relative;
        }

        /* form-dropdown-select */
        .form-dropdown-select {
          font-size: 17px;
          line-height: 1.23536;
          font-weight: 400;
          letter-spacing: -0.022em;
          font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica,
            Arial, sans-serif;
          width: 100%;
          height: 3.29412rem;
          border-radius: 12px;
          border-width: 1px;
          border-style: solid;
          box-sizing: border-box;
          margin-bottom: 0.82353rem;
          padding: 1.05882rem 2.35294rem 0 0.94118rem;
          appearance: none;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .form-dropdown .form-dropdown-select {
          color: #1d1d1f;
          border-color: #d2d2d7;
          background-color: hsla(0, 0%, 100%, 0.8);
        }
        .rs-quantity-selector .rs-quantity-wrapper select {
          color: #1d1d1f;
          height: 1.41176rem;
          margin-bottom: 0;
          padding: 0 0 0 5px;
          border: 0;
          display: inline-block;
          background-color: transparent;
        }
        .form-dropdown .form-dropdown-select option:not(:disabled) {
          color: #1d1d1f;
        }

        /* form-dropdown-chevron */
        .form-dropdown-chevron {
          font-size: 20px;
          line-height: 1.4;
          font-weight: 400;
          letter-spacing: 0.006em;
          font-family: SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica,
            Arial, sans-serif;
          position: absolute;
          pointer-events: none;
          right: 0.94118rem;
          top: 0.70588rem;
        }
        .form-dropdown .form-dropdown-chevron {
          color: #86868b;
        }
        .rs-quantity-selector .rs-quantity-wrapper .rs-quantity-icon {
          color: #0071e3;
          position: absolute;
        }

        .form-dropdown-chevron:after,
        .form-dropdown-chevron:before {
          font-family: SF Pro Icons;
          color: inherit;
          display: inline-block;
          font-style: normal;
          font-weight: inherit;
          font-size: inherit;
          line-height: 1;
          position: relative;
          z-index: 1;
          text-decoration: none;

          -webkit-mask-image: url(data:image/svg+xml;base64,${btoa(
            `
            <svg stroke="currentColor" fill="currentColor" stroke-width="2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path></svg>
            `
          )});
          background-color: currentColor;
          -webkit-mask-repeat: no-repeat;
          height: 1em;
          width: 0.5em;
          top: 0.25em;
        }
        .form-dropdown-chevron:after {
          content: '';
        }

        .rs-quantity-selector .rs-quantity-wrapper .rs-quantity-hidden-select {
          visibility: hidden;
          position: absolute;
          bottom: 9999px;
          padding-right: 23px;
          appearance: none;
        }

        @media only screen and (min-width: 734px) {
          .rs-quantity {
            padding-left: 19px;
            margin-top: -2px;
          }

          .rs-quantity-selector .rs-quantity-wrapper select,
          .rs-quantity-selector label,
          .rs-quantity-text,
          .rs-quantity-selector .rs-quantity-wrapper .rs-quantity-icon {
            font-size: 24px;
            line-height: 1.16667;
            font-weight: 600;
            letter-spacing: 0.009em;
            font-family: SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue,
              Helvetica, Arial, sans-serif;
          }

          .rs-quantity-selector .rs-quantity-wrapper .rs-quantity-icon {
            right: -1px;
            top: 2px;
          }
        }
        @media only screen and (max-width: 734px) {
          .rs-quantity {
            padding-left: 0;
            margin-top: -6px;
          }
          .rs-quantity-selector {
            margin-top: 10px;
          }

          .rs-quantity-selector .rs-quantity-wrapper select,
          .rs-quantity-selector label,
          .rs-quantity-text,
          .rs-quantity-selector .rs-quantity-wrapper .rs-quantity-icon {
            font-size: 21px;
            line-height: 1.19048;
            font-weight: 600;
            letter-spacing: 0.011em;
            font-family: SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue,
              Helvetica, Arial, sans-serif;
          }

          .rs-quantity-selector .rs-quantity-wrapper .rs-quantity-icon {
            right: 3px;
            top: 4px;
          }
        }
      `}</style>
    </>
  )
}
