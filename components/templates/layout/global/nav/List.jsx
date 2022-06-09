import Link from 'next/link'

export default function List({ setIsSearchView, isBagView, setIsBagView }) {
  let transition = ''
  let searchTransition = ''
  for (let i = 1; i <= 11; i++) {
    transition += `
    #ac-globalnav .ac-gn-item-menu:nth-child(${i}) {
      transform: translateY(${-52 + i * 4}px);
      transition: opacity ${0.35 - (i - 1) / 75}s
          cubic-bezier(0.52, 0.16, 0.52, 0.84) ${0.15 - (i - 2) / 75}s,
        transform ${0.48 - (i - 1) / 90}s
          cubic-bezier(0.52, 0.16, 0.52, 0.84)
          ${0.108 - ((i - 2) * 2) / 225}s;
    }
    #ac-gn-menustate:checked
          ~ #ac-globalnav
          .ac-gn-item-menu:nth-child(${i}),
        #ac-gn-menustate:target
          ~ #ac-globalnav
          .ac-gn-item-menu:nth-child(${i}) {
          transition: opacity ${0.3 + ((i - 1) * 2) / 225}s
              cubic-bezier(0.32, 0.08, 0.24, 1) ${0.03 + (i - 2) / 75}s,
            transform ${0.3 + ((i + 3) * 2) / 225}s
              cubic-bezier(0.32, 0.08, 0.24, 1) ${0.02 + (i - 2) / 75}s;
        }
      #ac-globalnav .ac-gn-item-menu:nth-child(${i})::before {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background: #424245;
      }
      `
    searchTransition += `
      #ac-globalnav.searchshow .ac-gn-item-menu:nth-child(${i}) {
        animation-delay: ${0.39 - i * 0.03}s;
      }

      #ac-globalnav.searchhide .ac-gn-item-menu:nth-child(${i}) {
        animation-delay: ${-0.03 + i * 0.03}s;
      }
    `
  }

  return (
    <>
      <ul className='ac-gn-list'>
        <li className='ac-gn-item ac-gn-apple'>
          <Link href='/'>
            <a
              className='ac-gn-link ac-gn-link-apple'
              data-analytics-title='apple home'
              id='ac-gn-firstfocus'
            >
              <span className='a11y'>Apple</span>
            </a>
          </Link>
        </li>
        <li className='ac-gn-item ac-gn-item-menu ac-gn-store'>
          <Link href='/store'>
            <a
              className='ac-gn-link ac-gn-link-store'
              data-analytics-title='store'
            >
              <span className='ac-gn-link-text'>Store</span>
            </a>
          </Link>
        </li>
        <li className='ac-gn-item ac-gn-item-menu ac-gn-mac'>
          <a
            className='ac-gn-link ac-gn-link-mac'
            href='/mac/'
            data-analytics-title='mac'
          >
            <span className='ac-gn-link-text'>Mac</span>
          </a>
        </li>
        <li className='ac-gn-item ac-gn-item-menu ac-gn-ipad'>
          <a
            className='ac-gn-link ac-gn-link-ipad'
            href='/ipad/'
            data-analytics-title='ipad'
          >
            <span className='ac-gn-link-text'>iPad</span>
          </a>
        </li>
        <li className='ac-gn-item ac-gn-item-menu ac-gn-iphone'>
          <a
            className='ac-gn-link ac-gn-link-iphone'
            href='/iphone/'
            data-analytics-title='iphone'
          >
            <span className='ac-gn-link-text'>iPhone</span>
          </a>
        </li>
        <li className='ac-gn-item ac-gn-item-menu ac-gn-watch'>
          <a
            className='ac-gn-link ac-gn-link-watch'
            href='/watch/'
            data-analytics-title='watch'
          >
            <span className='ac-gn-link-text'>Watch</span>
          </a>
        </li>
        <li className='ac-gn-item ac-gn-item-menu ac-gn-airpods'>
          <a
            className='ac-gn-link ac-gn-link-airpods'
            href='/airpods/'
            data-analytics-title='airpods'
          >
            <span className='ac-gn-link-text'>AirPods</span>
          </a>
        </li>
        <li className='ac-gn-item ac-gn-item-menu ac-gn-tvhome'>
          <a
            className='ac-gn-link ac-gn-link-tvhome'
            href='/tv-home/'
            data-analytics-title='tv and home'
          >
            <span className='ac-gn-link-text'>TV &amp; Home</span>
          </a>
        </li>
        <li className='ac-gn-item ac-gn-item-menu ac-gn-onlyonapple'>
          <a
            className='ac-gn-link ac-gn-link-onlyonapple'
            href='/services/'
            data-analytics-title='only on apple'
          >
            <span className='ac-gn-link-text'>Only on Apple</span>
          </a>
        </li>
        <li className='ac-gn-item ac-gn-item-menu ac-gn-accessories'>
          <Link href='/shop/accessories/all'>
            <a
              className='ac-gn-link ac-gn-link-accessories'
              data-analytics-title='accessories'
            >
              <span className='ac-gn-link-text'>Accessories</span>
            </a>
          </Link>
        </li>
        <li className='ac-gn-item ac-gn-item-menu ac-gn-support'>
          <a
            className='ac-gn-link ac-gn-link-support'
            href='https://support.apple.com'
            data-analytics-title='support'
          >
            <span className='ac-gn-link-text'>Support</span>
          </a>
        </li>
        <li className='ac-gn-item ac-gn-item-menu ac-gn-search' role='search'>
          <Link href='#searchview'>
            <a
              id='ac-gn-link-search'
              className='ac-gn-link ac-gn-link-search'
              data-analytics-title='search'
              data-analytics-intrapage-link=''
              aria-label='Search apple.com'
              role='button'
              aria-haspopup='true'
              onClick={() => setIsSearchView(true)}
            />
          </Link>
        </li>
        <li className='ac-gn-item ac-gn-bag with-badge' id='ac-gn-bag'>
          <div
            className='ac-gn-bag-wrapper'
            onClick={() => setIsBagView(!isBagView)}
          >
            <a
              className='ac-gn-link ac-gn-link-bag'
              data-analytics-title='bag | items'
              data-analytics-click='bag'
              aria-label='Shopping Bag with item count : 3'
              data-string-badge='Shopping Bag with item count : {%BAGITEMCOUNT%}'
              role='button'
              aria-haspopup='true'
              aria-expanded='false'
              aria-controls='ac-gn-bagview-content'
            >
              <span className='a11y'>Shopping Bag</span>
            </a>
            <span
              className='ac-gn-bag-badge'
              aria-hidden='true'
              data-analytics-title='bag | items'
              data-analytics-click='bag'
            >
              <span className='ac-gn-bag-badge-separator'></span>
              <span className='ac-gn-bag-badge-number'>3</span>
              <span className='ac-gn-bag-badge-unit'>+</span>
            </span>
          </div>
          <span className='ac-gn-bagview-caret ac-gn-bagview-caret-large'></span>
        </li>
      </ul>

      <style global jsx>{`
        #ac-globalnav.searchopen .ac-gn-list .ac-gn-apple,
        #ac-globalnav.searchopen .ac-gn-list .ac-gn-item-menu,
        #ac-globalnav.searchopen .ac-gn-list .ac-gn-bag {
          visibility: hidden;
        }

        #ac-globalnav.searchshow .ac-gn-item-menu,
        #ac-globalnav.searchopen .ac-gn-item-menu,
        #ac-globalnav.searchhide .ac-gn-item-menu,
        #ac-globalnav.searchshow .ac-gn-bag,
        #ac-globalnav.searchopen .ac-gn-bag,
        #ac-globalnav.searchhide .ac-gn-bag,
        #ac-globalnav.searchshow .ac-gn-apple,
        #ac-globalnav.searchopen .ac-gn-apple,
        #ac-globalnav.searchhide .ac-gn-apple {
          pointer-events: none;
        }

        @media only screen and (min-width: 834px) {
          #ac-globalnav .ac-gn-list {
            cursor: default;
            margin: 0 -8px;
            width: auto;
            height: var(--globalnav-height);
            display: flex;
            justify-content: space-between;
            user-select: none;
          }
        }

        @media only screen and (max-width: 833px) {
          #ac-globalnav .ac-gn-list {
            display: block;
            position: absolute;
            z-index: 1;
            top: 3.52941em;
            right: 0;
            bottom: 0;
            left: 0;
            max-width: 664px;
            margin: 0 auto;
            padding: 45px 40px 8px;
            height: auto;
            box-sizing: border-box;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            visibility: hidden;
            transition: visibility 0s linear 1s;
          }
          #ac-gn-menustate:checked ~ #ac-globalnav .ac-gn-list,
          #ac-gn-menustate:target ~ #ac-globalnav .ac-gn-list {
            visibility: visible;
            transition-delay: 0s;
          }

          #ac-globalnav .ac-gn-item-menu:nth-child(1)::before,
          #ac-globalnav .ac-gn-item-menu:nth-child(2)::before {
            display: none;
          }

          ${transition}
        }

        #ac-globalnav.searchshow .ac-gn-apple,
        #ac-globalnav.searchshow .ac-gn-item-menu,
        #ac-globalnav.searchshow .ac-gn-bag {
          animation: ac-gn-item-searchshow 0.325s both;
        }
        #ac-globalnav.searchshow .ac-gn-apple {
          animation-delay: 0.36s;
        }

        ${searchTransition}

        #ac-globalnav.searchhide .ac-gn-apple,
        #ac-globalnav.searchhide .ac-gn-item-menu,
        #ac-globalnav.searchhide .ac-gn-bag {
          animation: ac-gn-item-searchhide 0.325s both;
        }
        #ac-globalnav.searchhide .ac-gn-item-menu:nth-child(12) {
          animation-delay: 0.33s;
        }
        #ac-globalnav.searchhide .ac-gn-bag {
          animation-delay: 0.36s;
        }

        @keyframes ac-gn-item-searchshow {
          0% {
            opacity: 1;
            transform: none;
            animation-timing-function: cubic-bezier(0.2727, 0.0986, 0.8333, 1);
          }
          40% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: scale(0.7);
          }
        }
        @keyframes ac-gn-item-searchhide {
          0% {
            opacity: 0;
            transform: scale(0.7);
          }
          60% {
            opacity: 1;
          }
          100% {
            opacity: 1;
            transform: none;
            animation-timing-function: cubic-bezier(0.2727, 0.0986, 0.8333, 1);
          }
        }
      `}</style>
    </>
  )
}
