export default function SearchView({ setIsSearchView }) {
  var searchResult = ''

  for (var i = 1; i < 6; i++) {
    searchResult += `
    #ac-globalnav .ac-gn-searchresults-animated:nth-child(${i}) {
      animation-delay: ${0.2 + 0.02 * i}s;
    }
    `
  }

  return (
    <aside
      id='searchview'
      className='ac-gn-searchview'
      role='search'
      data-analytics-region='search'
    >
      <div className='ac-gn-searchview-content'>
        <div className='ac-gn-searchview-bar'>
          <div className='ac-gn-searchview-bar-wrapper'>
            <form
              id='ac-gn-searchform'
              className='ac-gn-searchform'
              action='/us/search'
              method='get'
            >
              <div className='ac-gn-searchform-wrapper'>
                <input
                  id='ac-gn-searchform-input'
                  className='ac-gn-searchform-input'
                  type='text'
                  aria-label='Search apple.com'
                  placeholder='Search apple.com'
                  autoCorrect='off'
                  autoCapitalize='off'
                  autoComplete='off'
                  spellCheck='false'
                  role='combobox'
                  aria-autocomplete='list'
                  aria-expanded='true'
                  aria-owns='quicklinks suggestions'
                />
                <input
                  id='ac-gn-searchform-src'
                  type='hidden'
                  name='src'
                  value='globalnav'
                />
                <button
                  id='ac-gn-searchform-submit'
                  className='ac-gn-searchform-submit'
                  type='submit'
                  disabled=''
                  aria-label='Submit Search'
                >
                  {' '}
                </button>
                <button
                  id='ac-gn-searchform-reset'
                  className='ac-gn-searchform-reset'
                  type='reset'
                  disabled=''
                  aria-label='Clear Search'
                >
                  <span className='ac-gn-searchform-reset-background'></span>
                </button>
              </div>
            </form>
            <button
              id='ac-gn-searchview-close-small'
              className='ac-gn-searchview-close ac-gn-searchview-close-small'
              aria-label='Cancel Search'
            >
              <span
                className='ac-gn-searchview-close-cancel'
                aria-hidden='true'
              >
                Cancel
              </span>
            </button>
          </div>
        </div>
        <aside
          id='ac-gn-searchresults'
          className='ac-gn-searchresults'
          data-string-quicklinks='Quick Links'
          data-string-suggestions='Suggested Searches'
          data-string-noresults=''
        >
          {' '}
          <section
            className='ac-gn-searchresults-section ac-gn-searchresults-section-defaultlinks'
            data-analytics-region='defaultlinks search'
          >
            <div className='ac-gn-searchresults-section-wrapper'>
              <h3 className='ac-gn-searchresults-header ac-gn-searchresults-animated'>
                Quick Links
              </h3>
              <ul
                className='ac-gn-searchresults-list'
                id='defaultlinks'
                role='listbox'
              >
                <li
                  className='ac-gn-searchresults-item ac-gn-searchresults-animated'
                  role='presentation'
                >
                  <a
                    href='https://www.apple.com/us/shop/goto/temporary_closures'
                    role='option'
                    className='ac-gn-searchresults-link ac-gn-searchresults-link-defaultlinks'
                    data-query='no keyword'
                    data-section='defaultlinks'
                    data-items='5'
                    data-index='0'
                    data-label='Visiting an Apple Store FAQ'
                    data-analytics-click='eVar23: {data-query} | {data-section} | {data-items} | {data-label} | {data-index}, events:event50'
                  >
                    Visiting an Apple Store FAQ
                  </a>
                </li>
                <li
                  className='ac-gn-searchresults-item ac-gn-searchresults-animated'
                  role='presentation'
                >
                  <a
                    href='https://www.apple.com/airpods/'
                    role='option'
                    className='ac-gn-searchresults-link ac-gn-searchresults-link-defaultlinks'
                    data-query='no keyword'
                    data-section='defaultlinks'
                    data-items='5'
                    data-index='1'
                    data-label='AirPods'
                    data-analytics-click='eVar23: {data-query} | {data-section} | {data-items} | {data-label} | {data-index}, events:event50'
                  >
                    AirPods
                  </a>
                </li>
                <li
                  className='ac-gn-searchresults-item ac-gn-searchresults-animated'
                  role='presentation'
                >
                  <a
                    href='https://www.apple.com/airtag/'
                    role='option'
                    className='ac-gn-searchresults-link ac-gn-searchresults-link-defaultlinks'
                    data-query='no keyword'
                    data-section='defaultlinks'
                    data-items='5'
                    data-index='2'
                    data-label='AirTag'
                    data-analytics-click='eVar23: {data-query} | {data-section} | {data-items} | {data-label} | {data-index}, events:event50'
                  >
                    AirTag
                  </a>
                </li>
                <li
                  className='ac-gn-searchresults-item ac-gn-searchresults-animated'
                  role='presentation'
                >
                  <a
                    href='https://www.apple.com/support/products/'
                    role='option'
                    className='ac-gn-searchresults-link ac-gn-searchresults-link-defaultlinks'
                    data-query='no keyword'
                    data-section='defaultlinks'
                    data-items='5'
                    data-index='3'
                    data-label='AppleCare+'
                    data-analytics-click='eVar23: {data-query} | {data-section} | {data-items} | {data-label} | {data-index}, events:event50'
                  >
                    AppleCare+
                  </a>
                </li>
                <li
                  className='ac-gn-searchresults-item ac-gn-searchresults-animated'
                  role='presentation'
                >
                  <a
                    href='https://www.apple.com/us/shop/goto/giftcards'
                    role='option'
                    className='ac-gn-searchresults-link ac-gn-searchresults-link-defaultlinks'
                    data-query='no keyword'
                    data-section='defaultlinks'
                    data-items='5'
                    data-index='4'
                    data-label='Gift Cards'
                    data-analytics-click='eVar23: {data-query} | {data-section} | {data-items} | {data-label} | {data-index}, events:event50'
                  >
                    Gift Cards
                  </a>
                </li>
              </ul>
              <span role='status' className='visuallyhidden' aria-live='polite'>
                5 Quick Links
              </span>
            </div>
          </section>
        </aside>
      </div>
      <button
        id='ac-gn-searchview-close'
        className='ac-gn-searchview-close'
        aria-label='Cancel Search'
        onClick={() => setIsSearchView(false)}
      >
        <span className='ac-gn-searchview-close-wrapper'>
          <span className='ac-gn-searchview-close-left' />
          <span className='ac-gn-searchview-close-right' />
        </span>
      </button>

      <style global jsx>{`
        #ac-globalnav .ac-gn-searchview {
          display: none;
        }
        #ac-globalnav.searchshow .ac-gn-searchview,
        #ac-globalnav.searchopen .ac-gn-searchview,
        #ac-globalnav.searchhide .ac-gn-searchview {
          display: block;
        }

        #ac-globalnav .ac-gn-searchview-content {
          position: absolute;
          top: 0;
          left: 16.66667%;
          width: 66.66667%;
          height: calc(100vh - 16px);
          z-index: 3;
          pointer-events: none;
        }
        #ac-globalnav.searchhide .ac-gn-searchview-content {
          animation: ac-gn-searchview-searchhide 0.2s both;
        }
        @keyframes ac-gn-searchview-searchhide {
          0% {
            opacity: 1;
            animation-timing-function: ease;
          }
          100% {
            opacity: 0;
          }
        }

        #ac-globalnav .ac-gn-searchform {
          height: 44px;
          line-height: 44px;
        }
        #ac-globalnav.searchshow .ac-gn-searchform {
          animation: ac-gn-searchform-fade 0.4s 0.4s both;
        }

        #ac-globalnav .ac-gn-searchform-wrapper {
          position: relative;
          z-index: 2;
        }
        #ac-globalnav.searchshow .ac-gn-searchform-wrapper {
          animation: ac-gn-searchform-slide 1s 0.4s both;
        }

        /* ac-gn-searchform-input */
        #ac-globalnav input,
        #ac-globalnav button {
          border: none;
          background-color: transparent;
        }
        #ac-globalnav .ac-gn-searchform-input {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size: 17px;
          line-height: 1.29412;
          letter-spacing: -0.021em;
          font-family: 'SF Pro Text', 'Myriad Set Pro', 'SF Pro Icons',
            'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
          color: #fff;
          outline: none;
          width: calc(100% - 38px - 40px);
          height: 44px;
          position: absolute;
          padding: 0 38px 0 40px;
        }
        .touch#ac-globalnav.searchshow .ac-gn-searchform-input {
          transform: translateY(-200px);
        }
        .touch#ac-globalnav.searchopen .ac-gn-searchform-input {
          animation: ac-gn-searchinput-fade 0.2s both;
        }
        @keyframes ac-gn-searchinput-fade {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        #ac-globalnav .ac-gn-searchform-submit {
          left: 0;
          background-size: 15px 88px;
          background-repeat: no-repeat;
          background-image: url(../../en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_search_image__cbllq1gkias2_large.svg);
          background-position: 12.5px -44px;
          background-repeat: no-repeat;
          position: absolute;
          opacity: 0.8;
          z-index: 1;
          top: 0;
          width: 40px;
          height: 44px;
          cursor: pointer;
          transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
        }
        #ac-globalnav .ac-gn-searchform-submit[disabled] {
          opacity: 0.8;
          cursor: default;
        }

        #ac-globalnav .ac-gn-searchform-reset {
          display: none;
          position: absolute;
          z-index: 1;
          top: 0;
          cursor: pointer;
        }

        #ac-globalnav .ac-gn-searchview-close {
          right: 16.66667%;
          position: absolute;
          opacity: 0.8;
          z-index: 4;
          width: 37px;
          height: 44px;
          top: 0;
          pointer-events: none;
          color: #86868b;
          cursor: pointer;
          transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        }
        #ac-globalnav.searchopen .ac-gn-searchview-close {
          pointer-events: auto;
        }
        #ac-globalnav .ac-gn-searchview-close-small {
          display: none;
        }

        #ac-globalnav .ac-gn-searchview-close-cancel {
          font-size: 17px;
          line-height: 1.23536;
          font-weight: 400;
          letter-spacing: -0.022em;
          font-family: 'SF Pro Text', 'Myriad Set Pro', 'SF Pro Icons',
            'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
          color: #2997ff;
        }

        #ac-globalnav .ac-gn-searchresults {
          font-size: 14px;
          line-height: 2;
          font-weight: 400;
          letter-spacing: -0.016em;
          font-family: 'SF Pro Text', 'Myriad Set Pro', 'SF Pro Icons',
            'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
          display: none;
          background: #fff;
          border-top: none;
          border-bottom-left-radius: 18px;
          border-bottom-right-radius: 18px;
          color: #86868b;
          max-height: calc(100% - 44px);
          overflow-x: hidden;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          white-space: nowrap;
        }
        #ac-globalnav.searchshow .ac-gn-searchresults,
        #ac-globalnav.searchopen .ac-gn-searchresults,
        #ac-globalnav.searchhide .ac-gn-searchresults {
          display: block;
        }
        #ac-globalnav.searchshow .ac-gn-searchresults {
          animation: ac-gn-searchresults-show 0.2s 0.2s both;
        }
        @keyframes ac-gn-searchresults-show {
          0% {
            opacity: 0;
            animation-timing-function: ease;
          }
          100% {
            opacity: 1;
          }
        }

        /* ac-gn-searchresults */
        #ac-globalnav .ac-gn-searchresults * {
          letter-spacing: inherit;
        }
        #ac-globalnav .ac-gn-searchresults-section {
          border-top: 1px solid #d2d2d7;
          margin: 0 40px;
          padding: 23px 0 18px;
        }
        #ac-globalnav .ac-gn-searchresults-section:first-child {
          border-top-color: transparent;
        }

        /* ac-gn-searchresults-animated */
        #ac-globalnav .ac-gn-searchresults-header {
          font-size: 12px;
          line-height: 1.33337;
          letter-spacing: -0.01em;
          font-family: 'SF Pro Text', 'Myriad Set Pro', 'SF Pro Icons',
            'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
          text-transform: uppercase;
          color: #6e6e73;
        }
        #ac-globalnav .ac-gn-searchresults-animated {
          animation: ac-gn-searchresults-items-show 0.4s both;
        }
        #ac-globalnav .ac-gn-searchresults-animated.ac-gn-searchresults-header {
          animation-delay: 0.2s;
        }
        #ac-globalnav.searchhide .ac-gn-searchresults-animated {
          animation: none;
        }
        @keyframes ac-gn-searchresults-items-show {
          0% {
            opacity: 0;
            transform: translateX(100px);
            animation-timing-function: ease;
          }
          100% {
            opacity: 1;
            transform: none;
          }
        }

        #ac-globalnav .ac-gn-searchresults-list {
          padding-top: 5px;
        }

        #ac-globalnav .ac-gn-searchresults-item {
          margin: 6px -32px;
        }
        ${searchResult}

        #ac-globalnav .ac-gn-searchresults-link {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          color: #6e6e73;
          display: block;
          padding: 0 48px;
          text-decoration: none;
        }
        #ac-globalnav .ac-gn-searchresults-link-defaultlinks {
          color: #1d1d1f;
        }
        #ac-globalnav .ac-gn-searchresults-link:hover {
          color: #06c;
          background-color: #f5f5f7;
        }

        #ac-globalnav .ac-gn-searchview-close {
          right: 16.66667%;
          position: absolute;
          opacity: 0.8;
          z-index: 4;
          width: 37px;
          height: 44px;
          top: 0;
          pointer-events: none;
          color: #86868b;
          cursor: pointer;
          transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        }
        #ac-globalnav .ac-gn-searchview-close:hover,
        #ac-globalnav .ac-gn-searchview-close:active {
          opacity: 1;
        }

        /* ac-gn-searchview-close-wrapper */
        #ac-globalnav .ac-gn-searchview-close-wrapper {
          display: block;
          width: 100%;
          height: 100%;
        }
        #ac-globalnav.searchshow .ac-gn-searchview-close-wrapper {
          transform: translateZ(0);
          animation: ac-gn-close-slide 1s 0.4s both,
            ac-gn-searchform-fade 0.4s 0.4s both;
        }
        #ac-globalnav.searchhide .ac-gn-searchview-close-wrapper {
          transform: translateZ(0);
          animation: ac-gn-searchview-searchhide 0.325s 0.03s both;
        }
        @keyframes ac-gn-searchform-fade {
          0% {
            opacity: 0;
            animation-timing-function: cubic-bezier(0.67, 0, 0.33, 1);
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes ac-gn-searchform-slide {
          0% {
            transform: translate3d(100px, 0, 0);
            animation-timing-function: cubic-bezier(0.12, 0.87, 0.15, 1);
          }
          100% {
            transform: translateZ(0);
          }
        }

        #ac-globalnav .ac-gn-searchview-close-left,
        #ac-globalnav .ac-gn-searchview-close-right {
          height: 17px;
          width: 1px;
          background: #86868b;
          position: absolute;
          display: block;
          border-radius: 0.5px;
          top: 11px;
          z-index: 1;
        }
        #ac-globalnav .ac-gn-searchview-close-left {
          right: 12px;
          transform: rotate(-45deg);
          transform-origin: 50% 100%;
        }
        #ac-globalnav .ac-gn-searchview-close-right {
          left: 12px;
          transform: rotate(45deg);
          transform-origin: 50% 100%;
        }
      `}</style>
    </aside>
  )
}
