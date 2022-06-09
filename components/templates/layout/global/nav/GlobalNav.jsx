import Header from './Header'
import SearchPlaceholder from './SearchPlaceholder'
import List from './List'
import SearchView from './SearchView'
import BagView from './BagView'

import { useState, useEffect } from 'react'

export default function GlobalNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchView, setIsSearchView] = useState(false)
  const [isBagView, setIsBagView] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      document
        .querySelector('html')
        .classList.add('black', 'ac-gn-noscroll', 'ac-gn-noscroll-long')
    } else {
      document
        .querySelector('html')
        .classList.remove('black', 'ac-gn-noscroll', 'ac-gn-noscroll-long')
    }
  }, [isMenuOpen])

  useEffect(() => {
    if (isSearchView) {
      document.getElementById('ac-globalnav').classList.add('searchshow')
      document
        .querySelector('html')
        .classList.add('ac-gn-noscroll', 'ac-gn-noscroll-long')
      setIsBagView(false)
    } else {
      document.getElementById('ac-globalnav').className = document
        .getElementById('ac-globalnav')
        .className.replace('searchopen', 'searchhide')
      document
        .querySelector('html')
        .classList.remove('ac-gn-noscroll', 'ac-gn-noscroll-long')
    }

    setTimeout(() => {
      if (isSearchView) {
        document.getElementById('ac-globalnav').className = document
          .getElementById('ac-globalnav')
          .className.replace('searchshow', 'searchopen')
      } else {
        document.getElementById('ac-globalnav').classList.remove('searchhide')
      }
    }, 685)
  }, [isSearchView])

  useEffect(() => {
    function updateSize() {
      var width = window.innerWidth
      if (width > 833) {
        setIsMenuOpen(false)
      } else {
        setIsSearchView(false)
      }
    }
    window.addEventListener('resize', updateSize)
    return () => {
      window.removeEventListener('resize', updateSize)
    }
  }, [])

  return (
    <>
      <style global jsx>{`
        #ac-gn-menustate {
          display: none;
        }

        /* #ac-globalnav */
        #ac-globalnav {
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          z-index: 9999;
          display: block;
          margin: 0;
          width: 100%;
          min-width: 1024px;
          height: 48px;
          max-height: 44px;
          background: rgba(0, 0, 0, 0.92);
          font-size: 17px;
          user-select: none;
        }
        #ac-globalnav {
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: saturate(180%) blur(20px);
        }
        #ac-globalnav,
        #ac-globalnav:before,
        #ac-globalnav:after,
        #ac-globalnav *,
        #ac-globalnav *:before,
        #ac-globalnav *:after,
        #ac-gn-segmentbar,
        #ac-gn-segmentbar:before,
        #ac-gn-segmentbar:after,
        #ac-gn-segmentbar *,
        #ac-gn-segmentbar *:before,
        #ac-gn-segmentbar *:after {
          box-sizing: content-box;
          margin: 0;
          padding: 0;
          float: initial;
          pointer-events: auto;
          letter-spacing: normal;
        }
        /* ac-gn-content */
        #ac-globalnav .ac-gn-content {
          margin: 0 auto;
          max-width: 980px;
          padding: 0 22px;
          position: relative;
          z-index: 2;
          padding-left: max(22px, env(safe-area-inset-left));
          padding-right: max(22px, env(safe-area-inset-right));
        }

        .ac-gn-blur {
          display: none;
        }
        /* ac-gn-curtain */
        #ac-gn-curtain {
          background: rgba(0, 0, 0, 0.48);
          display: none;
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 9998;
        }
        #ac-globalnav.searchshow ~ #ac-gn-curtain,
        #ac-globalnav.searchopen ~ #ac-gn-curtain,
        #ac-globalnav.searchhide ~ #ac-gn-curtain {
          display: block;
        }
        #ac-globalnav.searchhide ~ #ac-gn-curtain {
          animation: ac-gn-curtain-show 0.2s reverse both;
        }
        @keyframes ac-gn-curtain-show {
          0% {
            opacity: 0;
            animation-timing-function: ease;
          }
          100% {
            opacity: 1;
          }
        }

        #ac-gn-placeholder {
          height: var(--globalnav-height);
        }

        /*  Tablet */
        @media only screen and (max-width: 1044px) {
          #ac-globalnav {
            min-width: 320px;
          }
        }
        /* Mobile */
        @media only screen and (max-width: 833px) {
          #ac-globalnav {
            overflow-y: hidden;
            max-height: none;
            backdrop-filter: none;
            transition: background 0.44s 0.2s cubic-bezier(0.52, 0.16, 0.24, 1),
              height 0.56s cubic-bezier(0.52, 0.16, 0.24, 1);
          }
          #ac-gn-menustate:checked ~ #ac-globalnav,
          #ac-gn-menustate:target ~ #ac-globalnav {
            height: 100%;
            background: #000;
            transition: background 0.36s cubic-bezier(0.32, 0.08, 0.24, 1),
              height 0.56s cubic-bezier(0.52, 0.16, 0.24, 1);
          }

          #ac-globalnav.with-bagview {
            overflow-y: visible;
          }
          #ac-globalnav .ac-gn-content {
            padding: 0;
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
          }

          /* ac-gn-blur  */
          .ac-gn-blur {
            backdrop-filter: saturate(180%) blur(20px);
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            z-index: 9998;
            margin: 0;
            width: 100%;
            height: 48px;
            user-select: none;
          }
          /* #ac-gn-curtain */
          #ac-globalnav.with-bagview ~ #ac-gn-curtain {
            display: block;
            animation: ac-gn-curtain-show 0.2s both;
          }
          @keyframes ac-gn-curtain-show {
            0% {
              opacity: 0;
              animation-timing-function: ease;
            }
            100% {
              opacity: 1;
            }
          }
        }
      `}</style>
      <style global jsx>{`
        #ac-globalnav .ac-gn-item {
          display: inline-block;
          position: relative;
          box-sizing: border-box;
          height: 44px; /* for all sizes */
          z-index: 1;
          vertical-align: top;
        }

        /* ac-gn-link */
        #ac-globalnav .ac-gn-link {
          font-weight: 400;
          font-family: 'SF Pro Text', 'Myriad Set Pro', 'SF Pro Icons',
            'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
          color: #f5f5f7;

          display: inline-block;
          position: relative;
          z-index: 1;
          padding: 0 8px;
          height: var(--globalnav-height);
          opacity: 0.8;
          /* background: no-repeat; */
          text-decoration: none;
          white-space: nowrap;
          transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          outline-offset: -7px;
        }
        #ac-globalnav .ac-gn-link:hover {
          opacity: 1;
        }
        /* ac-gn-link ICONS */
        #ac-globalnav .ac-gn-link-apple,
        #ac-globalnav .ac-gn-link-search,
        #ac-globalnav .ac-gn-link-bag {
          background-color: currentColor;
          mask-position: center center;
          mask-repeat: no-repeat;
          -webkit-mask-size: 13px var(--globalnav-height);
          min-width: 13px;
        }

        #ac-globalnav .ac-gn-link-apple {
          mask-image: url(data:image/svg+xml;base64,${btoa(
            `
<svg
  xmlns='http://www.w3.org/2000/svg'
  viewBox='0 0 814 1000'
  enable-background='new 0 0 814 1000'
  xml:space='preserve'
>
  <path d='M788.1,340.9c-5.8,4.5-108.2,62.2-108.2,190.5c0,148.4,130.3,200.9,134.2,202.2c-0.6,3.2-20.7,71.9-68.7,141.9  c-42.8,61.6-87.5,123.1-155.5,123.1s-85.5-39.5-164-39.5c-76.5,0-103.7,40.8-165.9,40.8s-105.6-57-155.5-127  C46.7,790.7,0,663,0,541.8c0-194.4,126.4-297.5,250.8-297.5c66.1,0,121.2,43.4,162.7,43.4c39.5,0,101.1-46,176.3-46  C618.3,241.7,720.7,244.3,788.1,340.9z M554.1,159.4c31.1-36.9,53.1-88.1,53.1-139.3c0-7.1-0.6-14.3-1.9-20.1  c-50.6,1.9-110.8,33.7-147.1,75.8c-28.5,32.4-55.1,83.6-55.1,135.5c0,7.8,1.3,15.6,1.9,18.1c3.2,0.6,8.4,1.3,13.6,1.3  C464,230.7,521.1,200.3,554.1,159.4z' />
</svg>
`
          )});
        }
        #ac-globalnav .ac-gn-link-bag {
          mask-image: url(data:image/svg+xml;base64,${btoa(
            `
            <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='4.011000156402588 2 12.979000091552734 14.992000579833984'
              >
                <path
                  d='M14.934,5.017H13.828A3.413,3.413,0,0,0,10.5,2,3.413,3.413,0,0,0,7.172,5.017H6.066A2.058,2.058,0,0,0,4.011,7.072v7.865a2.058,2.058,0,0,0,2.056,2.055h8.867a2.058,2.058,0,0,0,2.056-2.055V7.072A2.058,2.058,0,0,0,14.934,5.017ZM10.5,3a2.413,2.413,0,0,1,2.328,2.017H8.172A2.413,2.413,0,0,1,10.5,3Zm5.511,11.938a1.079,1.079,0,0,1-1.077,1.078H6.066a1.079,1.079,0,0,1-1.077-1.078V7.072A1.079,1.079,0,0,1,6.066,5.995h8.867a1.079,1.079,0,0,1,1.077,1.078Z'
                />
              </svg>
`
          )});
        }
        #ac-globalnav .ac-gn-link-search {
          mask-image: url(data:image/svg+xml;base64,${btoa(
            `
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0.8333399295806885 14.968915939331055 13.308326721191406 13.312753677368164'
            >
              <path
                d='M13.98,27.343l-3.5-3.5a5.436,5.436,0,1,0-.778.777l3.5,3.5a.55.55,0,1,0,.778-.778ZM1.959,20.418a4.319,4.319,0,1,1,4.319,4.32A4.323,4.323,0,0,1,1.959,20.418Z'
              />
            </svg>
`
          )});
        }

        /* ac-gn-bag */
        #ac-globalnav .ac-gn-bag {
          z-index: 2;
        }
        #ac-globalnav.with-bag-count .ac-gn-bag.with-badge {
          padding-left: 6px;
          transition: padding 0.3s cubic-bezier(0.25, 0.1, 0.3, 1);
        }
        #ac-globalnav.with-bag-count-onload .ac-gn-bag.with-badge {
          transition: none;
        }

        #ac-globalnav .ac-gn-bag-wrapper {
          cursor: pointer;
          height: 100%;
          opacity: 0.8;
          transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        }
        #ac-globalnav .ac-gn-bag-wrapper:hover {
          opacity: 1;
        }

        /* ac-gn-link-bag */
        #ac-globalnav .ac-gn-link-bag {
          opacity: 1;
        }
        #ac-globalnav.with-bag-count .ac-gn-link-bag {
          transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.3, 1);
          transform: translateX(-6px);
        }
        #ac-globalnav.with-bag-count-onload .ac-gn-link-bag {
          transition: none;
        }

        /* ac-gn-bag-badge */
        #ac-globalnav .ac-gn-bag-badge {
          display: inline-block;
          position: absolute;
          width: 1.3em;
          height: 1.3em;
          top: auto;
          z-index: 1;
          box-sizing: border-box;
          float: none;

          font-size: 10px;
          font-weight: 600;
          letter-spacing: -0.008em;
          line-height: 1.3;

          text-align: center;
          color: #1d1d1f;
          bottom: 11px;

          transform: scale(0) translateX(-7px);
          transform-origin: right;
        }
        #ac-globalnav.with-bag-count .ac-gn-bag.with-badge .ac-gn-bag-badge {
          transform: none;
          transition: width 0.3s cubic-bezier(0.25, 0.1, 0.3, 1);
        }
        #ac-globalnav.with-bag-count-onload
          .ac-gn-bag.with-badge
          .ac-gn-bag-badge {
          transition: none;
        }

        #ac-globalnav .ac-gn-bag-badge-separator {
          background: #fff;
          position: absolute;
          width: 1em;
          height: 100%;
          top: 0;
          right: 0.65em;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.3, 1);
        }

        #ac-globalnav .ac-gn-bag-badge-number {
          display: block;
          position: relative;
          z-index: 2;
          font-family: 'SF Pro Text', 'Myriad Set Pro', 'SF Pro Icons',
            'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
          letter-spacing: inherit;
          transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.3, 1);
        }

        #ac-globalnav .ac-gn-bag-badge-unit {
          right: 1.5px;
          opacity: 0;
          display: inline-block;
          position: absolute;
          top: 0;
          z-index: 2;
          font-family: 'SF Pro Text', 'Myriad Set Pro', 'SF Pro Icons',
            'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
          font-feature-settings: 'case';
          transition: opacity 0.1s cubic-bezier(0.25, 0.1, 0.3, 1);
        }

        #ac-globalnav .ac-gn-bagview-caret {
          display: none;
          position: absolute;
          overflow: hidden;
          width: 100%;
          height: 8px;
          left: 0;
          bottom: -5px;
          z-index: 1;
        }
        #ac-globalnav .ac-gn-bagview-caret:after {
          left: 50%;
          border: 1px solid;
          content: '';
          display: block;
          position: absolute;
          top: 0;
          width: 12px;
          height: 12px;
          transform: rotate(45deg) skew(4deg, 4deg);
          transform-origin: 0% 0;
          z-index: 1;
          background: #fff;
          border-color: #d2d2d7;
          border-radius: 2px 0 0 0;
        }

        #ac-globalnav .ac-gn-bag-badge::before,
        #ac-globalnav .ac-gn-bag-badge::after {
          right: 0;
          content: '';
          background: #fff;
          border-radius: 1.3em;
          display: block;
          height: 100%;
          width: 1.3em;
          position: absolute;
          top: 0;
        }
        #ac-globalnav .ac-gn-bag-badge::before {
          transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.3, 1);
        }
        #ac-globalnav.with-bag-count-onload
          .ac-gn-bag.with-badge
          .ac-gn-bag-badge::before,
        #ac-globalnav.with-bag-count-onload
          .ac-gn-bag.with-badge
          .ac-gn-bag-badge::after,
        #ac-globalnav.with-bag-count-onload
          .ac-gn-bag.with-badge
          .ac-gn-bag-badge-separator,
        #ac-globalnav.with-bag-count-onload
          .ac-gn-bag.with-badge
          .ac-gn-bag-badge-number,
        #ac-globalnav.with-bag-count-onload
          .ac-gn-bag.with-badge
          .ac-gn-bag-badge-unit {
          transition: none;
        }

        @media only screen and (min-width: 834px) {
          /* ac-gn-link-apple */
          #ac-globalnav .ac-gn-link {
            font-size: 12px;
            line-height: 3.66667;
            letter-spacing: -0.01em;
          }

          #ac-globalnav .ac-gn-bag-badge {
            right: 9px;
          }

          #ac-globalnav.with-bag-count .ac-gn-bagview-caret {
            left: -3px;
          }
        }
        /* Mobile */
        @media only screen and (max-width: 833px) {
          #ac-globalnav .ac-gn-item {
            width: 100%;
          }

          /* ac-gn-link */
          #ac-globalnav .ac-gn-link {
            font-size: 17px;
            line-height: 1.23536;
            letter-spacing: -0.022em;
          }
          #ac-globalnav .ac-gn-link-apple,
          #ac-globalnav .ac-gn-link-search,
          #ac-globalnav .ac-gn-link-bag {
            -webkit-mask-size: 15px var(--globalnav-height);
            min-width: 15px;
          }
          #ac-globalnav .ac-gn-apple,
          #ac-globalnav .ac-gn-search,
          #ac-globalnav .ac-gn-bag {
            display: none;
          }

          #ac-globalnav .ac-gn-item-menu {
            opacity: 0;
            pointer-events: none;
          }

          #ac-gn-menustate:checked ~ #ac-globalnav .ac-gn-item-menu,
          #ac-gn-menustate:target ~ #ac-globalnav .ac-gn-item-menu {
            opacity: 1;
            pointer-events: auto;
            transform: none;
          }
          #ac-globalnav .ac-gn-item-menu:nth-child(2) {
            transform: translateY(-44px);
            transition: opacity 0.3345s cubic-bezier(0.52, 0.16, 0.52, 0.84)
                0.15s,
              transform 0.4669s cubic-bezier(0.52, 0.16, 0.52, 0.84) 0.108s;
            padding-top: 1px;
          }
          #ac-gn-menustate:checked
            ~ #ac-globalnav
            .ac-gn-item-menu:nth-child(2),
          #ac-gn-menustate:target
            ~ #ac-globalnav
            .ac-gn-item-menu:nth-child(2) {
            transition: opacity 0.3091s cubic-bezier(0.32, 0.08, 0.24, 1) 0.03s,
              transform 0.3455s cubic-bezier(0.32, 0.08, 0.24, 1) 0.02s;
          }

          #ac-globalnav .ac-gn-item-menu .ac-gn-link {
            display: block;
            /* Custom */
            display: flex;
            align-items: center;
            bottom: 2px;

            outline-offset: 0;
            padding: 0;
            width: auto;
            max-width: none;
          }

          /* ac-gn-bag */
          #ac-globalnav .ac-gn-bag {
            top: 0;
            right: 0;
            position: absolute;
            width: auto;
          }

          #ac-globalnav .ac-gn-link-bag {
            padding: 0 16px;
          }
          #ac-globalnav.with-bag-count .ac-gn-link-bag {
            transform: translateX(-4px);
          }
          #ac-globalnav .ac-gn-bag-badge {
            right: 15px;
          }
          #ac-globalnav .ac-gn-bagview-caret {
            bottom: calc(100% - 0.5px);
          }
          #ac-globalnav.with-bag-count .ac-gn-bagview-caret {
            left: -4px;
          }
        }
      `}</style>

      <input type='checkbox' id='ac-gn-menustate' className='ac-gn-menustate' />
      <nav
        id='ac-globalnav'
        className={`js touch no-windows no-firefox with-bag-count-onload with-bag-count${
          isBagView ? ' with-bagview' : ''
        }`}
        role='navigation'
        aria-label='Global'
        lang='en-US'
        dir='ltr'
        data-hires='false'
        data-analytics-region='global nav'
        data-www-domain='www.apple.com'
        data-store-locale='us'
        data-store-root-path='/us'
        data-store-api='/[storefront]/shop/bag/status'
        data-search-locale='en_US'
        data-search-suggestions-api='/search-services/suggestions/'
        data-search-defaultlinks-api='/search-services/suggestions/defaultlinks/'
      >
        <div className='ac-gn-content'>
          <Header
            setIsMenuOpen={setIsMenuOpen}
            isBagView={isBagView}
            setIsBagView={setIsBagView}
          />
          <SearchPlaceholder />
          <List
            setIsSearchView={setIsSearchView}
            isBagView={isBagView}
            setIsBagView={setIsBagView}
          />
          <SearchView setIsSearchView={setIsSearchView} />
          <BagView />
        </div>
      </nav>
      <div className='ac-gn-blur' />
      <div
        id='ac-gn-curtain'
        className='ac-gn-curtain'
        onClick={() => {
          setIsSearchView(false)
          setIsBagView(false)
        }}
      />
      <div id='ac-gn-placeholder' className='ac-nav-placeholder' />
    </>
  )
}
