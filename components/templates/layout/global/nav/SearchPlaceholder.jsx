export default function SearchPlaceholder() {
  return (
    <div className='search-placeholder-container' role='search'>
      <div className='ac-gn-search search-small'>
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
          <div className='search-placeholder-bar'>
            <div className='search-placeholder-input'>
              <div className='search-placeholder-input-text' aria-hidden='true'>
                <div className='ac-gn-link-search search-placeholder-input-icon'></div>
                <span className='search-placeholder'>Search apple.com</span>
              </div>
            </div>
            <div className='searchview-close searchview-close-small search-placeholder-searchview-close'>
              <span className='searchview-close-cancel' aria-hidden='true'>
                Cancel
              </span>
            </div>
          </div>
        </a>
      </div>

      <style global jsx>{`
        @media only screen and (min-width: 834px) {
          #ac-globalnav .search-small {
            display: none;
          }
          #ac-globalnav .searchview-close-small {
            display: none;
          }
        }
        @media only screen and (max-width: 833px) {
          #ac-globalnav .search-placeholder-container {
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
            background-color: transparent;
            visibility: hidden;
            transition: background-color 0.44s cubic-bezier(0.52, 0.16, 0.24, 1)
                0.1s,
              visibility 0s linear 0.5s;
          }
          #ac-gn-menustate:checked
            ~ #ac-globalnav
            .search-placeholder-container {
            background-color: #000;
            visibility: visible;
            transition: background-color 0.18s cubic-bezier(0.32, 0.08, 0.24, 1)
                0.18s,
              visibility 0s linear 0s;
          }

          /* search-small */
          #ac-globalnav .search-small.ac-gn-search {
            display: block;
          }
          #ac-globalnav .search-placeholder-container .search-small {
            margin: 0;
            padding: 0;
            height: 2.11765em;
          }

          #ac-globalnav
            .search-placeholder-container
            .search-small
            .ac-gn-link {
            display: block;
            height: 2.11765em;
            max-width: 584px;
            margin: 0 auto;
            padding: 0;
            outline-offset: 0;
            opacity: 1;
          }

          #ac-globalnav .search-placeholder-bar {
            display: flex;
            justify-content: center;
            position: relative;
            z-index: 1;
            max-width: 584px;
            margin: 0 auto;
          }

          #ac-globalnav .search-placeholder-input {
            position: relative;
            z-index: 3;
            flex: 1;
            line-height: 2.11765em;
            padding: 0;
            overflow: hidden;
            border-radius: 8px;
          }

          /* search-placeholder-input-text */
          #ac-globalnav .search-placeholder,
          #ac-globalnav .search-placeholder-input-text,
          #ac-globalnav .searchview-close-cancel {
            font-size: 17px;
            line-height: 1.23536;
            font-weight: 400;
            letter-spacing: -0.022em;
            font-family: 'SF Pro Text', 'Myriad Set Pro', 'SF Pro Icons',
              'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
          }
          #ac-globalnav .searchview-close-cancel {
            color: #2997ff;
          }
          #ac-globalnav .search-placeholder-input-text {
            border-bottom: none;
            box-sizing: border-box;
            width: 100%;
            height: 2.11765em;
            cursor: text;
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
            .search-placeholder-input-text {
            transform: none;
            opacity: 1;
            transition: transform 0.28s cubic-bezier(0.32, 0.08, 0.24, 1) 0.08s,
              opacity 0.26s cubic-bezier(0.32, 0.08, 0.24, 1) 0.1s;
          }

          #ac-globalnav
            .search-placeholder-container
            .search-small
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

          /* searchview-close */
          #ac-globalnav .searchview-close {
            display: none;
          }
          #ac-globalnav .searchview-close-small {
            display: block;
            position: relative;
            width: auto;
            height: 2.11765em;
            right: auto;
            opacity: 1;
            padding: 0 8px;
            margin-left: 10px;
            line-height: 2.11765em;

            z-index: 2;
          }
          #ac-globalnav .search-placeholder-container .searchview-close:before {
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

          #ac-globalnav .search-placeholder-container .searchview-close-cancel {
            opacity: 0;
          }

          #ac-globalnav .search-placeholder-bar:after {
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
            .search-placeholder-bar:after {
            transform: none;
            opacity: 1;
            transition: transform 0.36s cubic-bezier(0.32, 0.08, 0.24, 1),
              opacity 0.06s cubic-bezier(0.32, 0.08, 0.24, 1) 0.04s;
          }

          #ac-globalnav .search-placeholder-container:after {
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
            .search-placeholder-container:after {
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
