import { useRef } from 'react'

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

import { useScrollX } from '@/hooks/useScrollX'
export default function ChapterNav() {
  const familyRef = useRef(null)

  const { left, right } = useScrollX(familyRef)

  return (
    <>
      <nav
        id='chapternav'
        className='chapternav with-paddles'
        data-analytics-region='family browser'
        data-analytics-activitymap-region-id='chapternav'
        aria-label='Mac Family of products'
      >
        <div className='chapternav-wrapper'>
          <ul className='chapternav-items' ref={familyRef}>
            <li className='chapternav-item chapternav-item-macbook-air'>
              <a className='chapternav-link' href='/macbook-air/'>
                <figure className='chapternav-icon'></figure>
                <span className='chapternav-label' role='text'>
                  MacBook Air
                </span>
                <span className='chapternav-new'>New</span>
              </a>
            </li>
            <li className='chapternav-item chapternav-item-macbook-pro'>
              <a className='chapternav-link' href='/macbook-pro/'>
                <figure className='chapternav-icon'></figure>
                <span className='chapternav-label' role='text'>
                  MacBook Pro
                </span>
                <span className='chapternav-new'>New</span>
              </a>
            </li>
            <li className='chapternav-item chapternav-item-imac-24'>
              <a className='chapternav-link' href='/imac-24/'>
                <figure className='chapternav-icon'></figure>
                <span className='chapternav-label' role='text'>
                  iMac 24”
                </span>
              </a>
            </li>
            <li className='chapternav-item chapternav-item-mac-mini'>
              <a className='chapternav-link' href='/mac-mini/'>
                <figure className='chapternav-icon'></figure>
                <span className='chapternav-label' role='text'>
                  Mac mini
                </span>
              </a>
            </li>
            <li className='chapternav-item chapternav-item-mac-studio'>
              <a className='chapternav-link' href='/mac-studio/'>
                <figure className='chapternav-icon'></figure>
                <span className='chapternav-label' role='text'>
                  Mac Studio
                </span>
              </a>
            </li>
            <li className='chapternav-item chapternav-item-mac-pro'>
              <a className='chapternav-link' href='/mac-pro/'>
                <figure className='chapternav-icon'></figure>
                <span className='chapternav-label' role='text'>
                  Mac Pro
                </span>
              </a>
            </li>
            <li className='chapternav-item chapternav-item-compare'>
              <a className='chapternav-link' href='/mac/compare/'>
                <figure className='chapternav-icon'></figure>
                <span className='chapternav-label' role='text'>
                  Compare<span className='visuallyhidden'>Mac models</span>
                </span>
              </a>
            </li>
            <li className='chapternav-item chapternav-item-displays'>
              <a className='chapternav-link' href='/displays/'>
                <figure className='chapternav-icon'></figure>
                <span className='chapternav-label' role='text'>
                  Displays
                </span>
              </a>
            </li>
            <li className='chapternav-item chapternav-item-accessories'>
              <a
                className='chapternav-link'
                href='/us/shop/goto/mac/accessories'
              >
                <figure className='chapternav-icon'></figure>
                <span className='chapternav-label' role='text'>
                  Accessories<span className='visuallyhidden'>for Mac</span>
                </span>
              </a>
            </li>
            <li className='chapternav-item chapternav-item-macos'>
              <a className='chapternav-link' href='/macos/monterey/'>
                <figure className='chapternav-icon'></figure>
                <span className='chapternav-label' role='text'>
                  Monterey
                </span>
              </a>
            </li>
            <li className='chapternav-item chapternav-item-shop'>
              <a className='chapternav-link' href='/us/shop/goto/buy_mac'>
                <figure className='chapternav-icon'></figure>
                <span className='chapternav-label' role='text'>
                  Shop Mac
                </span>
              </a>
            </li>{' '}
          </ul>
          <div className='chapternav-paddles'>
            <button
              className='chapternav-paddle chapternav-paddle-left'
              aria-hidden='true'
              onClick={() =>
                familyRef.current.scrollTo({
                  left: left - 34,
                  behavior: 'smooth',
                })
              }
            >
              <BsChevronLeft />
            </button>
            <button
              className='chapternav-paddle chapternav-paddle-right'
              aria-hidden='true'
              onClick={() =>
                familyRef.current.scrollTo({
                  left: right - 34,
                  behavior: 'smooth',
                })
              }
            >
              <BsChevronRight />
            </button>
          </div>
        </div>
      </nav>

      <style global jsx>{`
        .chapternav {
          /* background: rgba(245, 245, 247, 0.7); */
          /* background: rgba(245, 245, 247, 0.6); */
          text-align: center;
          position: relative;
          height: 100px;
          width: 100%;
          z-index: 9987;
          padding: 8px 0;
          overflow: hidden;
          backdrop-filter: saturate(180%) blur(20px);
          background-color: #fff;
        }

        .chapternav-wrapper {
          position: relative;
          height: 100%;
          z-index: 1;
        }

        .chapternav-items {
          overflow-x: auto;
          overflow-y: hidden;
          white-space: nowrap;
          padding-bottom: 49px;
          margin: 0 calc(max(env(safe-area-inset-left) + 24px, 34px));
        }

        .chapternav-item {
          display: inline-block;
          vertical-align: top;
          margin: 0 -0.11765em;
          padding: 0 20px;
          animation: chapternav-slidein 350ms backwards;
        }
        .chapternav-item:first-child {
          margin-left: 0;
          padding-left: 4px;
        }
        .chapternav-item:last-child {
          margin-right: 0;
          padding-right: 4px;
        }
        @keyframes chapternav-slidein {
          0% {
            opacity: 0;
          }
          1% {
            transform: translateX(160px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .chapternav-link {
          display: block;
          position: relative;
          padding: 0;
          margin-top: 3px;
          z-index: 1;
          color: #1d1d1f;
        }
        .chapternav-link:hover {
          color: #06c;
          text-decoration: none;
        }

        .chapternav-icon {
          background: center bottom no-repeat;
          background-size: contain;
          display: block;
          margin: 0 auto 4px;
          height: 54px;
        }

        .chapternav-label {
          font-size: 12px;
          line-height: 1.33337;
          font-weight: 400;
          letter-spacing: -0.01em;
          font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue',
            'Helvetica', 'Arial', sans-serif;
          display: block;
          margin: 0;
        }

        .chapternav-new {
          font-size: 10px;
          line-height: 1.2;
          font-weight: 400;
          letter-spacing: -0.008em;
          font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue',
            'Helvetica', 'Arial', sans-serif;
          color: #bf4800;

          display: block;
          position: relative;
          width: 100%;
          top: 100%;
          left: 0;
        }
      `}</style>
      <style global jsx>{`
        .chapternav-paddle {
          font-size: 17px;
          line-height: 1.76471;
          font-weight: 300;
          letter-spacing: 0em;
          font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue',
            'Helvetica', 'Arial', sans-serif;
          border: 0 solid #d2d2d7;
          border-radius: 0;
          color: #1d1d1f;
          opacity: 1;
          position: absolute;
          top: 0;
          bottom: 0;
          text-align: center;
          width: 33px;
          transition: opacity 150ms ease-out;
        }
        button:disabled {
          cursor: default;
        }
        .chapternav-paddle:disabled {
          opacity: 0;
        }

        .chapternav-paddle-left {
          border-right-width: 1px;
          left: calc(max(env(safe-area-inset-left) + -10px, 0px));
        }
        .chapternav-paddle-right {
          border-left-width: 1px;
          right: calc(max(env(safe-area-inset-left) + -10px, 0px));
        }
        /* after */
        .chapternav-paddle::after {
          opacity: 0.8;
          transition: opacity 200ms linear;
        }
        .chapternav-paddle::before,
        .chapternav-paddle::after {
          font-family: 'SF Pro Icons';
          color: inherit;
          font-style: normal;
          font-weight: inherit;
          font-size: inherit;
          line-height: 1;
          text-decoration: none;

          display: inline-block;
          position: relative;
          z-index: 1;
          content: '';
        }

        .chapternav-paddle-left::after {
          margin-left: -0.5px;
        }
        .chapternav-paddle-right::after {
          margin-right: -0.5px;
        }
      `}</style>
      {/* Mac */}
      <style global jsx>{`
        .chapternav-item-macbook-air .chapternav-icon {
          width: 80px;
          background-image: url(https://www.apple.com/v/mac/home/bp/images/familybrowser/macbookair_light__f0o95rwae8ae_large.svg);
        }
        .chapternav-item-macbook-pro .chapternav-icon {
          width: 84px;
          background-image: url(https://www.apple.com/v/mac/home/bp/images/familybrowser/macbook_pro_light__e791sjqzt32a_large.svg);
        }
        .chapternav-item-imac-24 .chapternav-icon {
          width: 43px;
          background-image: url(https://www.apple.com/v/mac/home/bp/images/familybrowser/imac_24_light__colyztscbeeu_large.svg);
        }
        .chapternav-item-mac-mini .chapternav-icon {
          width: 28px;
          background-image: url(https://www.apple.com/v/mac/home/bp/images/familybrowser/mac_mini_light__frtahmzmd4mm_large.svg);
        }
        .chapternav-item-mac-studio .chapternav-icon {
          width: 28px;
          background-image: url(https://www.apple.com/v/mac/home/bp/images/familybrowser/mac_studio_light__ea3pb1auizu6_large.svg);
        }
        .chapternav-item-mac-pro .chapternav-icon {
          width: 35px;
          background-image: url(https://www.apple.com/v/mac/home/bp/images/familybrowser/mac_pro_light__cj4dvg7thx5y_large.svg);
        }
        .chapternav-item-compare .chapternav-icon {
          width: 45px;
          background-image: url(https://www.apple.com/v/mac/home/bp/images/familybrowser/mac_compare_light__emml1umdv9m6_large.svg);
        }
        .chapternav-item-displays .chapternav-icon {
          width: 72px;
          background-image: url(https://www.apple.com/v/mac/home/bp/images/familybrowser/displays_light__ewxqx5obdxci_large.svg);
        }
        .chapternav-item-accessories .chapternav-icon {
          width: 33px;
          background-image: url(https://www.apple.com/v/mac/home/bp/images/familybrowser/mac_accessories_light__cuds10wyptyu_large.svg);
        }
        .chapternav-item-macos .chapternav-icon {
          width: 35px;
          background-image: url(https://www.apple.com/v/mac/home/bp/images/familybrowser/mac_os_light__d0zczt34scq6_large.svg);
        }
        .chapternav-item-shop .chapternav-icon {
          width: 103px;
          background-image: url(https://www.apple.com/v/mac/home/bp/images/familybrowser/mac_shop_light__layuggud1xe2_large.svg);
        }
      `}</style>
    </>
  )
}
