import React from 'react'

export default function Software() {
  return (
    <>
      <div className='rf-configuration-categorypresoftware'>
        <h2 className='rf-configuration-categorygroup'>
          Pre-Installed Software
        </h2>
        <div
          data-analytics-option-group='sw_final_cut_pro_x'
          className='rf-configuration-optiongroup'
        >
          <h3 className='rf-configuration-optiongroup-header typography-body'>
            <span>Final Cut Pro</span>
          </h3>
          <button
            type='button'
            className='as-buttonlink rf-configuration-learnmorebtn typography-body-reduced'
            data-autom='sw_final_cut_pro_x_z12x-learn_more_content'
          >
            <span>Learn more</span>
            <span className='visuallyhidden'>Final Cut Pro</span>
          </button>
          <div className='row form-selector-group'>
            <div className='rf-configuration-categoryoption large-12 small-12 form-selector'>
              <input
                className='form-selector-input'
                name='option.sw_final_cut_pro_x_z12x'
                id='sw_final_cut_pro_x_z12x_065_c171_1'
                type='radio'
                aria-labelledby='sw_final_cut_pro_x_z12x_065_c171_1_label'
                data-autom='optionSelector-software_1'
                value='065-C171'
                checked=''
                readOnly
              />
              <label
                htmlFor='sw_final_cut_pro_x_z12x_065_c171_1'
                className='form-selector-label'
                id='sw_final_cut_pro_x_z12x_065_c171_1_label'
              >
                <span className='row'>
                  <span className='form-selector-left-col column small-12 large-6'>
                    <span className='form-selector-title'>None</span>
                  </span>
                  <span className='form-selector-right-col column small-12 large-6'></span>
                </span>
              </label>
            </div>
            <div className='rf-configuration-categoryoption large-12 small-12 form-selector'>
              <input
                className='form-selector-input'
                name='option.sw_final_cut_pro_x_z12x'
                id='sw_final_cut_pro_x_z12x_065_cc8g_2'
                type='radio'
                aria-labelledby='sw_final_cut_pro_x_z12x_065_cc8g_2_label'
                data-autom='optionSelector-software_2'
                value='065-CC8G'
                readOnly
              />
              <label
                htmlFor='sw_final_cut_pro_x_z12x_065_cc8g_2'
                className='form-selector-label'
                id='sw_final_cut_pro_x_z12x_065_cc8g_2_label'
              >
                <span className='row'>
                  <span className='form-selector-left-col column small-12 large-6'>
                    <span className='form-selector-title'>Final Cut Pro</span>
                  </span>
                  <span className='form-selector-right-col column small-12 large-6'>
                    <span className='rf-optiontile-pricedelta'>
                      <span role='text' aria-label='plus'>
                        +
                      </span>{' '}
                      $299.99
                    </span>
                  </span>
                </span>
              </label>
            </div>
          </div>
        </div>
        <div
          data-analytics-option-group='sw_logic_pro_x'
          className='rf-configuration-optiongroup'
        >
          <h3 className='rf-configuration-optiongroup-header typography-body'>
            <span>Logic Pro</span>
          </h3>
          <button
            type='button'
            className='as-buttonlink rf-configuration-learnmorebtn typography-body-reduced'
            data-autom='sw_logic_pro_x_z12x-learn_more_content'
          >
            <span>Learn more</span>
            <span className='visuallyhidden'>Logic Pro</span>
          </button>
          <div className='row form-selector-group'>
            <div className='rf-configuration-categoryoption large-12 small-12 form-selector'>
              <input
                className='form-selector-input'
                name='option.sw_logic_pro_x_z12x'
                id='sw_logic_pro_x_z12x_065_c172_1'
                type='radio'
                aria-labelledby='sw_logic_pro_x_z12x_065_c172_1_label'
                data-autom='optionSelector-software_1'
                value='065-C172'
                checked=''
                readOnly
              />
              <label
                htmlFor='sw_logic_pro_x_z12x_065_c172_1'
                className='form-selector-label'
                id='sw_logic_pro_x_z12x_065_c172_1_label'
              >
                <span className='row'>
                  <span className='form-selector-left-col column small-12 large-6'>
                    <span className='form-selector-title'>None</span>
                  </span>
                  <span className='form-selector-right-col column small-12 large-6'></span>
                </span>
              </label>
            </div>
            <div className='rf-configuration-categoryoption large-12 small-12 form-selector'>
              <input
                className='form-selector-input'
                name='option.sw_logic_pro_x_z12x'
                id='sw_logic_pro_x_z12x_065_cc8j_2'
                type='radio'
                aria-labelledby='sw_logic_pro_x_z12x_065_cc8j_2_label'
                data-autom='optionSelector-software_2'
                value='065-CC8J'
                readOnly
              />
              <label
                htmlFor='sw_logic_pro_x_z12x_065_cc8j_2'
                className='form-selector-label'
                id='sw_logic_pro_x_z12x_065_cc8j_2_label'
              >
                <span className='row'>
                  <span className='form-selector-left-col column small-12 large-6'>
                    <span className='form-selector-title'>Logic Pro</span>
                  </span>
                  <span className='form-selector-right-col column small-12 large-6'>
                    <span className='rf-optiontile-pricedelta'>
                      <span role='text' aria-label='plus'>
                        +
                      </span>{' '}
                      $199.99
                    </span>
                  </span>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <style global jsx>{`
        .rf-configuration-categorypresoftware .rf-configuration-categorygroup {
          margin-top: 22px;
        }

        .rf-configuration-categorypresoftware .rf-configuration-categoryoption {
          max-width: 50%;
          flex-basis: 50%;
        }

        .rf-configuration-categorypresoftware
          .rf-configuration-categoryoption:first-child
          label {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }
        .rf-configuration-categorypresoftware
          .rf-configuration-categoryoption:first-child
          + .rf-configuration-categoryoption
          label {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }

        .rf-configuration-main
          .rf-configuration-categorypresoftware
          .form-selector-left-col,
        .rf-configuration-main
          .rf-configuration-categorypresoftware
          .form-selector-right-col {
          text-align: center;
          flex-basis: 100%;
          max-width: 100%;
        }

        @media only screen and (min-width: 735px) {
          .rf-configuration-categorypresoftware
            .rf-configuration-categorygroup {
            font-size: 24px;
            line-height: 1.16667;
            font-weight: 600;
            letter-spacing: 0.009em;
            font-family: SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue,
              Helvetica, Arial, sans-serif;
            margin-top: 22px;
          }
        }
        @media only screen and (max-width: 734px) {
          .rf-configuration-categorypresoftware
            .rf-configuration-categorygroup {
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
