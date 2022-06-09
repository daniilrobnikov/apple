export default function SearchControls() {
  return (
    <div className='rf-accessories-section-header'>
      <div className='rf-accessories-section-results-controls-container'>
        <div data-core-sticky=''>
          <div className='rf-accessories-section-results-controls'>
            <div className='rf-accessories-sort-wrapper'>
              <div className='rf-accessories-sort-mobile'>
                <span className='rf-accessories-sort-label'>
                  Sort By:&nbsp;
                </span>
                <div className='form-dropdown'>
                  <select
                    name='dropdown'
                    className='rf-accessories-sort-list-mobile'
                  >
                    <option value='Featured' data-autom='sortBy-featured'>
                      Featured
                    </option>
                    <option value='Newest' data-autom='sortBy-newest'>
                      Newest
                    </option>
                    <option
                      value='Price: Low to High'
                      data-autom='sortBy-priceLH'
                    >
                      Price: Low to High
                    </option>
                    <option
                      value='Price: High to Low'
                      data-autom='sortBy-priceHL'
                    >
                      Price: High to Low
                    </option>
                  </select>
                  <span
                    className='form-dropdown-chevron'
                    aria-hidden='true'
                  ></span>
                  <span
                    className='form-dropdown-label'
                    aria-hidden='true'
                  ></span>
                </div>
              </div>
            </div>
            <div className='rf-accessories-filters-toggle'>
              <button
                className='icon icon-before icon-filter'
                type='button'
                data-autom='filterButton'
                aria-expanded='true'
                aria-controls='rf-searchfilters'
              >
                {/* <BsListUl /> */}
                Filter
              </button>
            </div>
          </div>
          <div className='rf-fullwidth-border'></div>
        </div>
        <div className='rf-accessories-section-results-controls-placeholder'></div>
      </div>

      <style global jsx>{`
        .rf-accessories-section .rf-accessories-section-header {
          font-weight: 400;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
          color: #6e6e73;
          border-bottom: 1px solid #d2d2d7;
        }

        /* [data-core-sticky] */
        [data-core-sticky] {
          top: 0;
        }
        .rf-accessories-section-results-controls-container [data-core-sticky] {
          width: 100%;
          z-index: 2;
          background: #fff;
        }

        .rf-accessories-section
          .rf-accessories-section-header
          .rf-accessories-section-results-controls {
          margin: 0 auto;
          box-sizing: border-box;
          padding: 21px 44px 17px;
        }

        .rf-accessories-sort-wrapper {
          float: right;
        }
        /* ////////////////////////////////////////// */
        .rf-accessories-sort-mobile {
          display: flex;
        }

        .form-dropdown {
          position: relative;
        }

        .rf-accessories-sort-list-mobile {
          border: none;
          background: #fff;
          color: #1d1d1f;
          margin-top: 0;
          vertical-align: top;
          appearance: none;
        }

        .rf-accessories-sort-mobile .form-dropdown .form-dropdown-chevron {
          display: inline-block;
        }

        .form-dropdown-label {
          position: absolute;
          pointer-events: none;
          transition-timing-function: ease-in;
          transition-duration: 0.125s;
          top: 0.58824rem;
          left: 1rem;
          font-size: 12px;
          line-height: 1.33337;
          font-weight: 400;
          letter-spacing: -0.01em;
          font-family: SF Pro Text, SF Pro Icons, Helvetica Neue, Helvetica,
            Arial, sans-serif;
        }

        .rf-accessories-sort-wrapper .form-dropdown-chevron {
          display: block;
          position: relative;
          width: 1em;
          height: 100%;
          z-index: 1;
          transition: transform 1s cubic-bezier(0.86, 0, 0.07, 1),
            transform-origin 1s cubic-bezier(0.86, 0, 0.07, 1);
          transform: translateY(0);
          opacity: 0.8;
        }
        .rf-accessories-sort-wrapper .form-dropdown-chevron:hover {
          opacity: 1;
        }
        #ac-ln-menustate:checked
          ~ .rf-accessories-sort-wrapper
          .form-dropdown-chevron,
        #ac-ln-menustate:target
          ~ .rf-accessories-sort-wrapper
          .form-dropdown-chevron {
          transform: translateY(-8px);
        }

        .rf-accessories-sort-wrapper .form-dropdown-chevron::before,
        .rf-accessories-sort-wrapper .form-dropdown-chevron::after {
          content: '';
          display: block;
          position: absolute;
          top: 0.9em;
          width: 0.5em;
          height: 0;
          z-index: 1;
          transition: transform 1s cubic-bezier(0.86, 0, 0.07, 1),
            transform-origin 1s cubic-bezier(0.86, 0, 0.07, 1);
          background: currentColor;
          border: currentColor 0.04em solid;
          /* border-radius: 1em; */
        }
        .rf-accessories-sort-wrapper .form-dropdown-chevron::before {
          right: 50%;
          border-radius: 1em 0 0 1em;
          transform-origin: 100% 100%;
          transform: rotate(45deg) scaleY(1.1);
        }
        .rf-accessories-sort-wrapper .form-dropdown-chevron::after {
          left: 50%;
          border-radius: 0 1em 1em 0;
          transform-origin: 0% 100%;
          transform: rotate(-45deg) scaleY(1.1);
        }
        /* :checked */
        #ac-ln-menustate:checked
          ~ .rf-accessories-sort-wrapper
          .form-dropdown-chevron::before,
        #ac-ln-menustate:target
          ~ .rf-accessories-sort-wrapper
          .form-dropdown-chevron::before {
          transform-origin: 100% 0%;
          transform: rotate(-45deg) scaleY(1.1);
        }
        #ac-ln-menustate:checked
          ~ .rf-accessories-sort-wrapper
          .form-dropdown-chevron::after,
        #ac-ln-menustate:target
          ~ .rf-accessories-sort-wrapper
          .form-dropdown-chevron::after {
          transform-origin: 0% 0%;
          transform: rotate(45deg) scaleY(1.1);
        }
        /* ////////////////////////////////////////// */

        .rf-accessories-container .rf-fullwidth-border {
          border-bottom: 1px solid #d2d2d7;
          width: 100%;
          position: absolute;
          left: 0;
        }

        /* rf-accessories-section-results-controls-placeholder */
        .rf-accessories-section-results-controls-placeholder {
          display: none;
        }

        @media only screen and (min-width: 735px) {
          .rf-accessories-section .rf-accessories-section-header,
          .rf-accessories-sort-list-mobile {
            font-size: 12px;
            line-height: 1.33337;
            letter-spacing: -0.01em;
          }

          .rf-accessories-section-results-controls-container [data-core-sticky],
          .rf-accessories-section-results-controls-placeholder {
            min-height: 54px;
          }

          .rf-accessories-sort-list-mobile {
            width: 99px;
          }
        }
        @media only screen and (max-width: 734px) {
          .rf-accessories-section .rf-accessories-section-header,
          .rf-accessories-sort-list-mobile {
            font-size: 17px;
            line-height: 1.47059;
            letter-spacing: -0.022em;
          }

          .rf-accessories-section-results-controls-container [data-core-sticky],
          .rf-accessories-section-results-controls-placeholder {
            min-height: 70px;
          }

          .rf-accessories-section
            .rf-accessories-section-header
            .rf-accessories-section-results-controls {
            width: auto;
            padding: 26px 20px 24px;
            padding-left: calc(50vw - 43.75%);
            padding-right: calc(50vw - 43.75%);
          }

          .rf-accessories-sort-list-mobile {
            width: 132px;
          }
        }
      `}</style>
    </div>
  )
}

/* [data-core-tooltip] {
          display: inline-block;
        }

        .rf-accessories-sort-wrapper .rf-accessories-sort-selected {
          color: #1d1d1f;
        }

        [data-core-fade-transition-wrapper] {
          opacity: 0;
          transition-property: opacity;
          transition-timing-function: ease-in-out;
          transition-duration: 0.4s;
        }
        .r-fade-transition-exit-done {
          display: none;
        }
        [data-core-tooltip-trans] {
          transition: opacity 0.1s ease-in-out;
          position: relative;
        }
        .rf-accessories-sort-wrapper [data-core-tooltip-trans] {
          right: 35px;
        }

        [data-core-tooltip-content] {
          position: absolute;
          top: 0;
          left: 0;
          will-change: top, left;
          padding: 12px 17px;
          background: #e8e8ed;
          border-radius: 12px;
        }
        .rf-accessories-sort-wrapper div[role='tooltip'] {
          width: 215px;
          background: #e8e8ed;
          border: 1px solid #d2d2d7;
          border-radius: 12px;
          z-index: 3;
          padding: 4px 16px;
        }

        .rf-accessories-sort-wrapper
          div[role='tooltip']
          .rf-accessories-sort-list {
          list-style: none;
          margin-left: 0;
        }

        .rf-accessories-sort-wrapper
          div[role='tooltip']
          .rf-accessories-sort-list
          .rf-accessories-sort-listitem {
          font-size: 12px;
          line-height: 1.33337;
          font-weight: 400;
          letter-spacing: -0.01em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
          border-bottom: 1px solid #d2d2d7;
          padding: 12px 0 11px;
        }

        .rf-accessories-sort-wrapper
          div[role='tooltip']
          .rf-accessories-sort-list
          .rf-accessories-sort-listitem
          .rf-accessories-sort-links {
          display: block;
          color: #1d1d1f;
          text-decoration: none;
        }
        .rf-accessories-sort-wrapper
          div[role='tooltip']
          .rf-accessories-sort-list
          .rf-accessories-sort-listitem
          .rf-accessories-sort-links.rf-accessories-selected-option {
          color: #6e6e73;
          cursor: default;
          text-decoration: none;
        } */
