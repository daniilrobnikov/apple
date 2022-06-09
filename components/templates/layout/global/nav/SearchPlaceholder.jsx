import React from 'react'

export default function SearchPlaceholder() {
  return (
    <div className='ac-gn-search-placeholder-container' role='search'>
      <div className='ac-gn-search ac-gn-search-small'>
        <a
          id='ac-gn-link-search-small'
          className='ac-gn-link'
          href='/us/search'
          data-analytics-title='search'
          data-analytics-intrapage-link=''
          aria-label='Search apple.com'
          role='button'
          aria-haspopup='true'
        >
          <div className='ac-gn-search-placeholder-bar'>
            <div className='ac-gn-search-placeholder-input'>
              <div
                className='ac-gn-search-placeholder-input-text'
                aria-hidden='true'
              >
                <div className='ac-gn-link-search ac-gn-search-placeholder-input-icon'></div>
                <span className='ac-gn-search-placeholder'>
                  Search apple.com
                </span>
              </div>
            </div>
            <div className='ac-gn-searchview-close ac-gn-searchview-close-small ac-gn-search-placeholder-searchview-close'>
              <span
                className='ac-gn-searchview-close-cancel'
                aria-hidden='true'
              >
                Cancel
              </span>
            </div>
          </div>
        </a>
      </div>

      <style global jsx>{`
        #ac-globalnav .ac-gn-search-placeholder,
        #ac-globalnav .ac-gn-search-placeholder-input-text {
          font-size: 12px;
          line-height: 3.66667;
          font-weight: 400;
          letter-spacing: -0.01em;
          font-family: 'SF Pro Text', 'Myriad Set Pro', 'SF Pro Icons',
            'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
        }
        #ac-globalnav .ac-gn-search-placeholder-input-text {
          display: none;
          border-bottom: none;
          box-sizing: border-box;
          width: 100%;
          height: 2.11765em;
          color: #86868b;
          cursor: text;
        }

        #ac-globalnav .ac-gn-searchview-close {
          position: absolute;
          width: 37px;
          height: 44px;
          right: 16.66667%;
          opacity: 0.8;
          z-index: 4;

          top: 0;
          pointer-events: none;
          color: #86868b;
          cursor: pointer;
          transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
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

        @media only screen and (min-width: 834px) {
          #ac-globalnav .ac-gn-search-small {
            display: none;
          }
        }
        @media only screen and (max-width: 833px) {
          #ac-globalnav .ac-gn-search-placeholder-container {
            display: block;
            position: absolute;
            z-index: 4;
            top: 48px;
            right: 0;
            bottom: 0;
            left: 0;
            padding: 0 10px 0 10px;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            height: 3.11765em;
            background: transparent;
            visibility: hidden;
            transition: background 0.44s cubic-bezier(0.52, 0.16, 0.24, 1) 0.1s,
              visibility 0s linear 0.5s;
          }
          #ac-gn-menustate:checked
            ~ #ac-globalnav
            .ac-gn-search-placeholder-container,
          #ac-gn-menustate:target
            ~ #ac-globalnav
            .ac-gn-search-placeholder-container {
            background: #000;
            visibility: visible;
            transition: background 0.18s cubic-bezier(0.32, 0.08, 0.24, 1) 0.18s,
              visibility 0s linear 0s;
          }

          /* ac-gn-search-small */
          #ac-globalnav .ac-gn-search-small.ac-gn-search {
            display: block;
          }
          #ac-globalnav
            .ac-gn-search-placeholder-container
            .ac-gn-search-small {
            margin: 0;
            padding: 0;
            height: 2.11765em;
          }

          #ac-globalnav
            .ac-gn-search-placeholder-container
            .ac-gn-search-small
            .ac-gn-link {
            display: block;
            height: 2.11765em;
            max-width: 584px;
            margin: 0 auto;
            padding: 0;
            outline-offset: 0;
            opacity: 1;
          }

          #ac-globalnav .ac-gn-search-placeholder-bar {
            display: flex;
            justify-content: center;
            position: relative;
            z-index: 1;
            max-width: 584px;
            margin: 0 auto;
          }

          #ac-globalnav .ac-gn-search-placeholder-input {
            position: relative;
            z-index: 3;
            flex: 1;
            line-height: 2.11765em;
            padding: 0;
            overflow: hidden;
            border-radius: 8px;
          }

          /* ac-gn-search-placeholder-input-text */
          #ac-globalnav .ac-gn-search-placeholder,
          #ac-globalnav .ac-gn-search-placeholder-input-text {
            font-size: 17px;
            line-height: 1.23536;
            font-weight: 400;
            letter-spacing: -0.022em;
            font-family: 'SF Pro Text', 'Myriad Set Pro', 'SF Pro Icons',
              'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
          }
          #ac-globalnav .ac-gn-search-placeholder-input-text {
            display: block;
            padding-left: 30px;
            color: #6e6e73;
            line-height: 2.11765em;
            transform: translateY(-8px);
            opacity: 0;
            transition: transform 0.49s cubic-bezier(0.32, 0.08, 0.24, 1) 0.15s,
              opacity 0.2s cubic-bezier(0.52, 0.16, 0.52, 0.84) 0.16s;
          }
          #ac-gn-menustate:checked
            ~ #ac-globalnav
            .ac-gn-search-placeholder-input-text,
          #ac-gn-menustate:target
            ~ #ac-globalnav
            .ac-gn-search-placeholder-input-text {
            transform: none;
            opacity: 1;
            transition: transform 0.28s cubic-bezier(0.32, 0.08, 0.24, 1) 0.08s,
              opacity 0.26s cubic-bezier(0.32, 0.08, 0.24, 1) 0.1s;
          }

          #ac-globalnav
            .ac-gn-search-placeholder-container
            .ac-gn-search-small
            .ac-gn-link-search {
            display: block;
            left: 0;
            top: 0;
            position: absolute;
            width: 30px;
            height: 2.11765em;
            background-position: left 8px center;
            opacity: 0.8;
          }

          /* ac-gn-searchview-close */
          #ac-globalnav .ac-gn-searchview-close {
            display: none;
          }
          #ac-globalnav .ac-gn-searchview-close-small {
            display: block;
            position: relative;
            width: auto;
            height: 36px;
            right: auto;
            opacity: 1;
            padding: 0 8px;
            margin-left: 10px;
          }
          #ac-globalnav
            .ac-gn-search-placeholder-container
            .ac-gn-searchview-close {
            z-index: 2;
            height: 2.11765em;
            line-height: 2.11765em;
          }

          #ac-globalnav
            .ac-gn-search-placeholder-container
            .ac-gn-searchview-close:before {
            right: 0;
            content: '';
            display: block;
            position: absolute;
            z-index: 1;
            top: 0;
            width: calc(100% + 18px);
            height: 100%;
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
          }

          #ac-globalnav
            .ac-gn-search-placeholder-container
            .ac-gn-searchview-close-cancel {
            opacity: 0;
          }

          #ac-globalnav .ac-gn-search-placeholder-bar:after {
            left: 0;
            content: '';
            display: block;
            position: absolute;
            z-index: 1;
            top: 0;
            width: 100%;
            height: 2.11765em;
            background-color: #1d1d1f;
            border-radius: 8px;
            transform-origin: 0 0;
            transform: scaleY(0);
            opacity: 0;
            transition: transform 0.38s cubic-bezier(0.52, 0.16, 0.52, 0.84)
                0.15s,
              opacity 0.1s cubic-bezier(0.52, 0.16, 0.52, 0.84) 0.42s;
          }
          #ac-gn-menustate:checked
            ~ #ac-globalnav
            .ac-gn-search-placeholder-bar:after,
          #ac-gn-menustate:target
            ~ #ac-globalnav
            .ac-gn-search-placeholder-bar:after {
            transform: none;
            opacity: 1;
            transition: transform 0.36s cubic-bezier(0.32, 0.08, 0.24, 1),
              opacity 0.06s cubic-bezier(0.32, 0.08, 0.24, 1) 0.04s;
          }

          #ac-globalnav .ac-gn-search-placeholder-container:after {
            content: '';
            display: block;
            height: 1px;
            background: #424245;
            position: absolute;
            z-index: 2;
            right: 0;
            bottom: 0;
            left: 0;
            opacity: 0;
            transform: translateY(-46px);
            transition: opacity 0.2s cubic-bezier(0.52, 0.16, 0.52, 0.84) 0.3s,
              transform 0.38s cubic-bezier(0.52, 0.16, 0.52, 0.84) 0.15s;
          }
          #ac-gn-menustate:checked
            ~ #ac-globalnav
            .ac-gn-search-placeholder-container:after,
          #ac-gn-menustate:target
            ~ #ac-globalnav
            .ac-gn-search-placeholder-container:after {
            opacity: 1;
            transform: none;
            transition: opacity 0.31s cubic-bezier(0.52, 0.16, 0.52, 0.84) 0.03s,
              transform 0.34s cubic-bezier(0.32, 0.08, 0.24, 1) 0.02s;
          }
        }
      `}</style>
    </div>
  )
}
