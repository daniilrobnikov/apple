export default function ColorNav() {
  return (
    <>
      <div className='colornav-wrapper' data-component-list='StickyColornav'>
        <fieldset
          data-analytics-gallery-interaction-type='dotnav'
          className='colornav'
          data-analytics-gallery-id='finishes gallery'
        >
          <legend>
            Color - Pride Edition
            <span className='visuallyhidden'>color picker</span>
          </legend>
          <ul role='tablist' className='colornav-items'>
            <li className='colornav-item current' role='presentation'>
              <input
                type='radio'
                name='finishes-gallery-value'
                className='colornav-value current'
                id='finishes-gallery-item-1-trigger'
                value='midnight'
                data-ac-gallery-trigger='finishes-gallery-midnight'
                aria-label='Midnight'
                role='tab'
                aria-controls='finishes-gallery-midnight'
                aria-selected='true'
                checked={true}
                readOnly
              />
              <label
                htmlFor='finishes-gallery-item-1-trigger'
                className='colornav-link'
                aria-hidden='true'
              >
                <span className='colornav-swatch colornav-swatch-midnight'>
                  <span className='colornav-label'>Midnight</span>
                </span>
              </label>
            </li>
            <li className='colornav-item' role='presentation'>
              <input
                type='radio'
                name='finishes-gallery-value'
                className='colornav-value'
                id='finishes-gallery-item-2-trigger'
                value='starlight'
                data-ac-gallery-trigger='finishes-gallery-starlight'
                aria-label='Starlight'
                role='tab'
                aria-controls='finishes-gallery-starlight'
              />
              <label
                htmlFor='finishes-gallery-item-2-trigger'
                className='colornav-link'
                aria-hidden='true'
              >
                <span className='colornav-swatch colornav-swatch-starlight'>
                  <span className='colornav-label'>Starlight</span>
                </span>
              </label>
            </li>
            <li className='colornav-item' role='presentation'>
              <input
                type='radio'
                name='finishes-gallery-value'
                className='colornav-value'
                id='finishes-gallery-item-3-trigger'
                value='spacegray'
                data-ac-gallery-trigger='finishes-gallery-spacegray'
                aria-label='Space Gray'
                role='tab'
                aria-controls='finishes-gallery-spacegray'
              />
              <label
                htmlFor='finishes-gallery-item-3-trigger'
                className='colornav-link'
                aria-hidden='true'
              >
                <span className='colornav-swatch colornav-swatch-spacegray'>
                  <span className='colornav-label'>Space Gray</span>
                </span>
              </label>
            </li>
            <li className='colornav-item' role='presentation'>
              <input
                type='radio'
                name='finishes-gallery-value'
                className='colornav-value'
                id='finishes-gallery-item-4-trigger'
                value='silver'
                data-ac-gallery-trigger='finishes-gallery-silver'
                aria-label='Silver'
                role='tab'
                aria-controls='finishes-gallery-silver'
              />
              <label
                htmlFor='finishes-gallery-item-4-trigger'
                className='colornav-link'
                aria-hidden='true'
              >
                <span className='colornav-swatch colornav-swatch-silver'>
                  <span className='colornav-label'>Silver</span>
                </span>
              </label>
            </li>
          </ul>
        </fieldset>
      </div>

      <style global jsx>{`
        .colornav-wrapper {
          display: flex;
          justify-content: center;
        }

        .colornav {
          display: inline-block;
          text-align: center;
        }
        .colornav-items {
          display: inline-block;
        }
        .colornav-item {
          float: left;
        }

        /* .colornav-link */
        .colornav-link {
          border: 2px solid transparent;
          border-radius: 50%;
          box-sizing: border-box;
          color: #1d1d1f;
          cursor: pointer;
          float: left;
          position: relative;
          z-index: 1;
        }
        .colornav-link.current,
        .colornav-value:checked ~ .colornav-link {
          border-color: #0071e3;
          cursor: default;
        }

        .colornav-swatch {
          background: #f5f5f7 50%;
          border-radius: 50%;
          display: block;
        }

        /* colornav-label */
        .colornav-label,
        .colornav-label-hidden,
        .colornav-value {
          position: absolute;
          clip: rect(1px, 1px, 1px, 1px);
          clip-path: inset(0px 0px 99.9% 99.9%);
          overflow: hidden;
          height: 1px;
          width: 1px;
          padding: 0;
          border: 0;
        }
        .colornav-label {
          overflow: visible;
        }
        .colornav-link.current .colornav-label,
        .colornav-value:checked ~ .colornav-link .colornav-label {
          font-size: 12px;
          line-height: 1.3333733333;
          font-weight: 400;
          letter-spacing: -0.01em;
          font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica,
            Arial, sans-serif;
          clip: auto;
          clip-path: none;
          margin-left: -50px;
          padding-top: 7px;
          position: absolute;
          top: 100%;
          left: 50%;
          text-align: center;
          white-space: nowrap;
          width: 100px;
          height: auto;
          z-index: 1;
        }

        .colornav-swatch:after {
          border-radius: inherit;
          box-shadow: inset 0 1px 1px rgb(0 0 0 / 10%);
          content: '';
          display: block;
          height: inherit;
          position: absolute;
          width: inherit;
        }
        @media only screen and (min-width: 1068px) {
          .colornav-items {
            margin: 0 -1px;
            padding-top: 17px;
          }
          .colornav-item {
            margin: -1px 5px;
          }

          .colornav-link {
            margin-bottom: 2.4705882353em;
            padding: 3px;
            width: 42px;
            height: 42px;
          }

          .colornav-swatch {
            width: 32px;
            height: 32px;
          }
        }
        @media only screen and (min-width: 734px) and (max-width: 1068px) {
          .colornav-items {
            margin: 0 2px;
            padding-top: 13px;
          }
          .colornav-item {
            margin: -1px 4px;
          }

          .colornav-link {
            margin-bottom: 2.5882352941em;
            padding: 2px;
            width: 36px;
            height: 36px;
          }

          .colornav-swatch {
            width: 28px;
            height: 28px;
          }

          .colornav-link.current .colornav-label,
          .colornav-value:checked ~ .colornav-link .colornav-label {
            padding-top: 4px;
          }
        }
      `}</style>
    </>
  )
}
