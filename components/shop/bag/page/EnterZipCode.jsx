import React, { useState } from 'react'

export default function EnterZipCode({ showZipCode, setShowZipCode }) {
  const [zipCode, setZipCode] = useState('')
  const [saveLocation, setSaveLocation] = useState(false)
  return (
    <>
      <div
        data-core-height-transition-wrapper=''
        className='rs-summary-enterzipcode'
        style={{ height: `${showZipCode ? 114 : 0}px` }}
      >
        <div data-core-height-transition-content=''>
          <div className='rf-inlineeditor rf-inlineeditor-collapsible'>
            <div className='rf-inlineeditor-content row'>
              <div className='rf-inlineeditor-input column'>
                <div className='form-textbox form-textbox-with-button'>
                  {' '}
                  <input
                    id='shoppingCart.summary.taxCalculator.address.postalCode'
                    type='text'
                    className={`form-textbox-input ${
                      zipCode.replace(/\s/g, '').length > 0
                        ? 'form-textbox-entered'
                        : ''
                    }`}
                    aria-labelledby='shoppingCart.summary.taxCalculator.address.postalCode_label'
                    aria-describedby='shoppingCart.summary.taxCalculator.address.postalCode_error '
                    aria-invalid='false'
                    maxLength='10'
                    aria-required='false'
                    autoComplete='off'
                    data-autom='bag-zipcode-input'
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                  />
                  <span
                    id='shoppingCart.summary.taxCalculator.address.postalCode_label'
                    className='form-textbox-label'
                    aria-hidden='true'
                  >
                    Zip Code
                  </span>
                  <button
                    type='button'
                    className='rf-inlineeditor-apply form-textbox-button'
                    id='shoppingCart.summary.taxCalculator.address.calculate'
                    disabled=''
                    data-autom='bag-zipcode-apply'
                    aria-label='Apply Zip Code'
                  >
                    <span>Apply</span>
                  </button>
                </div>
              </div>
              <div className='rf-inlineeditor-cancel-wrapper column'>
                <button
                  type='button'
                  className='rf-inlineeditor-cancel form-textbox-sidebutton'
                  data-autom='bag-zipcode-cancel'
                  aria-label='Cancel Tax Calculator'
                  onClick={() => setShowZipCode(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
            <div className='rs-location-consent'>
              <div className='form-checkbox'>
                <input
                  type='checkbox'
                  checked={saveLocation}
                  onChange={(e) => setSaveLocation(e.target.checked)}
                  className='form-checkbox-input'
                  id='9e8f2800-f57a-11ec-a6a1-41dc380ed313'
                  aria-labelledby='9e8f2800-f57a-11ec-a6a1-41dc380ed313_label'
                />
                <label
                  className='form-label'
                  htmlFor='9e8f2800-f57a-11ec-a6a1-41dc380ed313'
                  id='9e8f2800-f57a-11ec-a6a1-41dc380ed313_label'
                  onClick={() => setSaveLocation(!saveLocation)}
                >
                  Save my location for future visits
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style global jsx>{`
        .rf-inlineeditor {
          padding: 0 4px;
        }

        .rf-inlineeditor-collapsible .rf-inlineeditor-content {
          padding-top: 8px;
          padding-bottom: 2px;
        }

        .rf-inlineeditor-input {
          flex: 1;
          max-width: 19.17647rem;
        }

        .form-textbox {
          position: relative;
        }

        /* form-textbox-input */
        .form-textbox-input {
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
          padding: 1.05882rem 0.94118rem 0;
          text-align: left;
          appearance: none;
        }
        .form-textbox .form-textarea,
        .form-textbox .form-textbox-input {
          color: #1d1d1f;
          border-color: #d2d2d7;
          background-color: hsla(0, 0%, 100%, 0.8);
          text-overflow: ellipsis;
        }
        .form-textbox-with-button .form-textbox-input {
          padding-right: 3.82353rem;
        }
        .form-textbox-input:focus {
          box-shadow: 0 0 0 4px rgb(0 125 250 / 60%);
          outline: none;
        }
        .form-textbox .form-textarea:focus,
        .form-textbox .form-textbox-input:focus {
          border-color: #0071e3;
        }

        .form-textbox-label {
          position: absolute;
          pointer-events: none;
          transition-timing-function: ease-in;
          transition-duration: 0.125s;
          top: 1.05882rem;
          white-space: nowrap;
          overflow: hidden;
          max-width: calc(100% - 32px);
          left: 1rem;
          font-size: 17px;
          line-height: 1.23536;
          font-weight: 400;
          letter-spacing: -0.022em;
          font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica,
            Arial, sans-serif;
        }
        .form-textbox .form-textbox-label {
          color: #6e6e73;
        }
        .form-textbox-input.form-textbox-entered ~ .form-textbox-label,
        .form-textbox-input:focus ~ .form-textbox-label {
          font-size: 12px;
          line-height: 1.33337;
          font-weight: 400;
          letter-spacing: -0.01em;
          font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica,
            Arial, sans-serif;
          top: 0.58824rem;
        }

        /* form-textbox-button */
        .form-textbox-with-button .form-textbox-button {
          font-size: 17px;
          line-height: 1.23536;
          font-weight: 400;
          letter-spacing: -0.022em;
          font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica,
            Arial, sans-serif;
          right: 0.88235rem;
          color: #06c;
          position: absolute;
          user-select: none;
          top: 1.05882rem;
        }
        .rf-inlineeditor-apply:disabled {
          pointer-events: none;
        }
        .form-textbox-with-button .form-textbox-button:disabled {
          color: #86868b;
        }

        .form-textbox-sidebutton {
          font-size: 17px;
          line-height: 1.23536;
          font-weight: 400;
          letter-spacing: -0.022em;
          font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica,
            Arial, sans-serif;
          margin-left: 0.94118rem;
          color: #06c;
          margin-top: 1.11765rem;
        }

        .rs-summary .rs-location-consent {
          margin-bottom: 10px;
        }
        .form-checkbox {
          position: relative;
        }
        .form-checkbox-input {
          position: absolute;
          top: 0.17647rem;
          left: 0;
          opacity: 1;
          width: 0.94118rem;
          height: 0.94118rem;
        }

        .form-label {
          display: inline-block;
          position: relative;
          font-size: 17px;
          line-height: 1.23536;
          font-weight: 400;
          letter-spacing: -0.022em;
          font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica,
            Arial, sans-serif;
          color: #1d1d1f;
        }
        .form-checkbox .form-label {
          padding-left: 1.52941rem;
          margin-bottom: 0.64706rem;
        }

        .form-checkbox-indicator {
          position: absolute;
          top: 0.11765rem;
          display: inline-block;
          cursor: pointer;
          width: 0.82353rem;
          height: 0.82353rem;
          border-radius: 0.17647rem;
          border-width: 1px;
          border-style: solid;
          left: 0;
        }
        .form-checkbox .form-checkbox-indicator {
          border-color: #d2d2d7;
          background-color: hsla(0, 0%, 100%, 0.8);
        }
      `}</style>
    </>
  )
}
