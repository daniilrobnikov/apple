export default function SearchView({ setIsSearchView }) {
  return (
    <aside
      id='searchview'
      className='searchview'
      role='search'
      data-analytics-region='search'
    >
      <div className='searchview-content'>
        <div className='searchview-bar'>
          <div className='searchview-bar-wrapper'>
            <form
              id='searchform'
              className='searchform'
              action='/us/search'
              method='get'
            >
              <div className='searchform-wrapper'>
                <input
                  id='searchform-input'
                  className='searchform-input'
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
                  id='searchform-src'
                  type='hidden'
                  name='src'
                  value='globalnav'
                />
                <button
                  id='searchform-submit'
                  className='searchform-submit'
                  type='submit'
                  disabled=''
                  aria-label='Submit Search'
                >
                  {' '}
                </button>
                <button
                  id='searchform-reset'
                  className='searchform-reset'
                  type='reset'
                  disabled=''
                  aria-label='Clear Search'
                >
                  <span className='searchform-reset-background'></span>
                </button>
              </div>
            </form>
            <button
              id='searchview-close-small'
              className='searchview-close searchview-close-small'
              aria-label='Cancel Search'
            >
              <span className='searchview-close-cancel' aria-hidden='true'>
                Cancel
              </span>
            </button>
          </div>
        </div>
        <aside
          id='searchresults'
          className='searchresults'
          data-string-quicklinks='Quick Links'
          data-string-suggestions='Suggested Searches'
          data-string-noresults=''
        >
          {' '}
          <section
            className='searchresults-section searchresults-section-defaultlinks'
            data-analytics-region='defaultlinks search'
          >
            <div className='searchresults-section-wrapper'>
              <h3 className='searchresults-header searchresults-animated'>
                Quick Links
              </h3>
              <ul className='searchresults-list' role='listbox'>
                <li
                  className='searchresults-item searchresults-animated'
                  role='presentation'
                >
                  <a
                    href='https://www.apple.com/us/shop/goto/temporary_closures'
                    role='option'
                    className='searchresults-link searchresults-link-defaultlinks'
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
                  className='searchresults-item searchresults-animated'
                  role='presentation'
                >
                  <a
                    href='https://www.apple.com/airpods/'
                    role='option'
                    className='searchresults-link searchresults-link-defaultlinks'
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
                  className='searchresults-item searchresults-animated'
                  role='presentation'
                >
                  <a
                    href='https://www.apple.com/airtag/'
                    role='option'
                    className='searchresults-link searchresults-link-defaultlinks'
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
                  className='searchresults-item searchresults-animated'
                  role='presentation'
                >
                  <a
                    href='https://www.apple.com/support/products/'
                    role='option'
                    className='searchresults-link searchresults-link-defaultlinks'
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
                  className='searchresults-item searchresults-animated'
                  role='presentation'
                >
                  <a
                    href='https://www.apple.com/us/shop/goto/giftcards'
                    role='option'
                    className='searchresults-link searchresults-link-defaultlinks'
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
        id='searchview-close'
        className='searchview-close'
        aria-label='Cancel Search'
        onClick={() => setIsSearchView(false)}
      >
        <span className='searchview-close-wrapper'>
          <span className='searchview-close-left' />
          <span className='searchview-close-right' />
        </span>
      </button>

      <style global jsx>{`
        #ac-globalnav .searchview {
          display: none;
        }

        #ac-globalnav .searchview-close {
          top: 0;
          pointer-events: none;
          color: #86868b;
          cursor: pointer;
          transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        }
        #ac-globalnav .searchview-close:hover,
        #ac-globalnav .searchview-close:active {
          opacity: 1;
        }
        @media only screen and (min-width: 834px) {
          #ac-globalnav.searchshow .searchview,
          #ac-globalnav.searchopen .searchview,
          #ac-globalnav.searchhide .searchview {
            display: block;
          }

          #ac-globalnav .searchview-content {
            position: absolute;
            top: 0;
            left: 16.66667%;
            width: 66.66667%;
            height: calc(100vh - 16px);
            z-index: 3;
            pointer-events: none;
          }
          #ac-globalnav.searchhide .searchview-content {
            animation: searchview-searchhide 0.2s both;
          }
          @keyframes searchview-searchhide {
            0% {
              opacity: 1;
              animation-timing-function: ease;
            }
            100% {
              opacity: 0;
            }
          }

          #ac-globalnav .searchform {
            height: 44px;
            line-height: 44px;
          }
          #ac-globalnav.searchshow .searchform {
            animation: searchform-fade 0.4s 0.4s both;
          }

          #ac-globalnav .searchform-wrapper {
            position: relative;
            z-index: 2;
          }
          #ac-globalnav.searchshow .searchform-wrapper {
            animation: searchform-slide 1s 0.4s both;
          }

          /* searchform-input */
          #ac-globalnav input,
          #ac-globalnav button {
            border: none;
            background-color: transparent;
          }
          #ac-globalnav .searchform-input {
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
          .touch#ac-globalnav.searchshow .searchform-input {
            transform: translateY(-200px);
          }
          .touch#ac-globalnav.searchopen .searchform-input {
            animation: searchinput-fade 0.2s both;
          }
          @keyframes searchinput-fade {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          #ac-globalnav .searchform-submit {
            background-size: 15px 88px;
            background-repeat: no-repeat;
            background-position: 12.5px -44px;
            background-image: url(../../en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_search_image__cbllq1gkias2_large.svg);

            position: absolute;
            opacity: 0.8;
            z-index: 1;
            top: 0;
            left: 0;
            width: 40px;
            height: 44px;
            cursor: pointer;
            transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
          }
          #ac-globalnav .searchform-submit[disabled] {
            opacity: 0.8;
            cursor: default;
          }

          #ac-globalnav .searchform-reset {
            display: none;
            position: absolute;
            z-index: 1;
            top: 0;
            cursor: pointer;
          }

          #ac-globalnav .searchview-close {
            right: 16.66667%;
            position: absolute;
            opacity: 0.8;
            z-index: 4;
            width: 37px;
            height: 44px;
          }
          #ac-globalnav.searchopen .searchview-close {
            pointer-events: auto;
          }

          #ac-globalnav .searchresults {
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
          #ac-globalnav.searchshow .searchresults,
          #ac-globalnav.searchopen .searchresults,
          #ac-globalnav.searchhide .searchresults {
            display: block;
          }
          #ac-globalnav.searchshow .searchresults {
            animation: searchresults-show 0.2s 0.2s both;
          }
          @keyframes searchresults-show {
            0% {
              opacity: 0;
              animation-timing-function: ease;
            }
            100% {
              opacity: 1;
            }
          }

          /* searchresults */
          #ac-globalnav .searchresults * {
            letter-spacing: inherit;
          }
          #ac-globalnav .searchresults-section {
            border-top: 1px solid #d2d2d7;
            margin: 0 40px;
            padding: 23px 0 18px;
          }
          #ac-globalnav .searchresults-section:first-child {
            border-top-color: transparent;
          }

          /* searchresults-animated */
          #ac-globalnav .searchresults-header {
            font-size: 12px;
            line-height: 1.33337;
            letter-spacing: -0.01em;
            font-family: 'SF Pro Text', 'Myriad Set Pro', 'SF Pro Icons',
              'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
            text-transform: uppercase;
            color: #6e6e73;
          }
          #ac-globalnav .searchresults-animated {
            animation: searchresults-items-show 0.4s both;
          }
          #ac-globalnav .searchresults-animated:nth-child(1) {
            animation-delay: 0.22s;
          }
          #ac-globalnav .searchresults-animated:nth-child(2) {
            animation-delay: 0.24s;
          }
          #ac-globalnav .searchresults-animated:nth-child(3) {
            animation-delay: 0.26s;
          }
          #ac-globalnav .searchresults-animated:nth-child(4) {
            animation-delay: 0.28s;
          }
          #ac-globalnav .searchresults-animated:nth-child(5) {
            animation-delay: 0.3s;
          }
          #ac-globalnav .searchresults-animated.searchresults-header {
            animation-delay: 0.2s;
          }
          #ac-globalnav.searchhide .searchresults-animated {
            animation: none;
          }
          @keyframes searchresults-items-show {
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

          #ac-globalnav .searchresults-list {
            padding-top: 5px;
          }

          #ac-globalnav .searchresults-item {
            margin: 6px -32px;
          }

          #ac-globalnav .searchresults-link {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            color: #6e6e73;
            display: block;
            padding: 0 48px;
            text-decoration: none;
          }
          #ac-globalnav .searchresults-link-defaultlinks {
            color: #1d1d1f;
          }
          #ac-globalnav .searchresults-link:hover {
            color: #06c;
            background-color: #f5f5f7;
          }

          /* searchview-close-wrapper */
          #ac-globalnav .searchview-close-wrapper {
            display: block;
            width: 100%;
            height: 100%;
          }
          #ac-globalnav.searchshow .searchview-close-wrapper {
            transform: translateZ(0);
            animation: close-slide 1s 0.4s both, searchform-fade 0.4s 0.4s both;
          }
          @keyframes close-slide {
            0% {
              transform: translate3d(10px, 0, 0);
              animation-timing-function: cubic-bezier(0.12, 0.87, 0.15, 1);
            }
            100% {
              transform: translateZ(0);
            }
          }
          #ac-globalnav.searchhide .searchview-close-wrapper {
            transform: translateZ(0);
            animation: searchview-searchhide 0.325s 0.03s both;
          }
          @keyframes searchform-fade {
            0% {
              opacity: 0;
              animation-timing-function: cubic-bezier(0.67, 0, 0.33, 1);
            }
            100% {
              opacity: 1;
            }
          }
          @keyframes searchform-slide {
            0% {
              transform: translate3d(100px, 0, 0);
              animation-timing-function: cubic-bezier(0.12, 0.87, 0.15, 1);
            }
            100% {
              transform: translateZ(0);
            }
          }

          #ac-globalnav .searchview-close-left,
          #ac-globalnav .searchview-close-right {
            height: 17px;
            width: 1px;
            background: #86868b;
            position: absolute;
            display: block;
            border-radius: 0.5px;
            top: 11px;
            z-index: 1;
          }
          #ac-globalnav .searchview-close-left {
            right: 12px;
            transform: rotate(-45deg);
            transform-origin: 50% 100%;
          }
          #ac-globalnav .searchview-close-right {
            left: 12px;
            transform: rotate(45deg);
            transform-origin: 50% 100%;
          }
        }
      `}</style>
    </aside>
  )
}
