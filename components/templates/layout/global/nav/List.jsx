import Link from 'next/link'

export default function List({
  setIsSearchView,
  isBagView,
  setIsBagView,
  setIsMenuOpen,
}) {
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
              onClick={() => setIsMenuOpen(false)}
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

          #ac-globalnav .ac-gn-item-menu::before {
            content: '';
            display: block;
            width: 100%;
            height: 1px;
            background: #424245;
          }
          #ac-globalnav .ac-gn-item-menu:nth-child(1)::before,
          #ac-globalnav .ac-gn-item-menu:nth-child(2)::before {
            display: none;
          }

          #ac-globalnav .ac-gn-item-menu:nth-child(1) {
            transform: translateY(-48px);
            transition: opacity 0.35s cubic-bezier(0.52, 0.16, 0.52, 0.84)
                0.163s,
              transform 0.48s cubic-bezier(0.52, 0.16, 0.52, 0.84) 0.117s;
          }
          #ac-gn-menustate:checked
            ~ #ac-globalnav
            .ac-gn-item-menu:nth-child(1),
          #ac-gn-menustate:target
            ~ #ac-globalnav
            .ac-gn-item-menu:nth-child(1) {
            transition: opacity 0.3s cubic-bezier(0.32, 0.08, 0.24, 1) 0.017s,
              transform 0.336s cubic-bezier(0.32, 0.08, 0.24, 1) 0.007s;
          }

          #ac-globalnav .ac-gn-item-menu:nth-child(2) {
            transform: translateY(-44px);
            transition: opacity 0.337s cubic-bezier(0.52, 0.16, 0.52, 0.84)
                0.15s,
              transform 0.469s cubic-bezier(0.52, 0.16, 0.52, 0.84) 0.108s;
          }
          #ac-gn-menustate:checked
            ~ #ac-globalnav
            .ac-gn-item-menu:nth-child(2),
          #ac-gn-menustate:target
            ~ #ac-globalnav
            .ac-gn-item-menu:nth-child(2) {
            transition: opacity 0.309s cubic-bezier(0.32, 0.08, 0.24, 1) 0.03s,
              transform 0.344s cubic-bezier(0.32, 0.08, 0.24, 1) 0.02s;
          }

          #ac-globalnav .ac-gn-item-menu:nth-child(3) {
            transform: translateY(-40px);
            transition: opacity 0.323s cubic-bezier(0.52, 0.16, 0.52, 0.84)
                0.137s,
              transform 0.458s cubic-bezier(0.52, 0.16, 0.52, 0.84) 0.099s;
          }
          #ac-gn-menustate:checked
            ~ #ac-globalnav
            .ac-gn-item-menu:nth-child(3),
          #ac-gn-menustate:target
            ~ #ac-globalnav
            .ac-gn-item-menu:nth-child(3) {
            transition: opacity 0.318s cubic-bezier(0.32, 0.08, 0.24, 1) 0.043s,
              transform 0.353s cubic-bezier(0.32, 0.08, 0.24, 1) 0.033s;
          }

          #ac-globalnav .ac-gn-item-menu:nth-child(4) {
            transform: translateY(-36px);
            transition: opacity 0.31s cubic-bezier(0.52, 0.16, 0.52, 0.84)
                0.123s,
              transform 0.447s cubic-bezier(0.52, 0.16, 0.52, 0.84) 0.09s;
          }
          #ac-gn-menustate:checked
            ~ #ac-globalnav
            .ac-gn-item-menu:nth-child(4),
          #ac-gn-menustate:target
            ~ #ac-globalnav
            .ac-gn-item-menu:nth-child(4) {
            transition: opacity 0.327s cubic-bezier(0.32, 0.08, 0.24, 1) 0.057s,
              transform 0.362s cubic-bezier(0.32, 0.08, 0.24, 1) 0.047s;
          }

          #ac-globalnav .ac-gn-item-menu:nth-child(5) {
            transform: translateY(-32px);
            transition: opacity 0.297s cubic-bezier(0.52, 0.16, 0.52, 0.84)
                0.11s,
              transform 0.436s cubic-bezier(0.52, 0.16, 0.52, 0.84) 0.081s;
          }
          #ac-gn-menustate:checked
            ~ #ac-globalnav
            .ac-gn-item-menu:nth-child(5),
          #ac-gn-menustate:target
            ~ #ac-globalnav
            .ac-gn-item-menu:nth-child(5) {
            transition: opacity 0.336s cubic-bezier(0.32, 0.08, 0.24, 1) 0.07s,
              transform 0.371s cubic-bezier(0.32, 0.08, 0.24, 1) 0.06s;
          }

          #ac-globalnav .ac-gn-item-menu:nth-child(6) {
            transform: translateY(-28px);
            transition: opacity 0.283s cubic-bezier(0.52, 0.16, 0.52, 0.84)
                0.097s,
              transform 0.424s cubic-bezier(0.52, 0.16, 0.52, 0.84) 0.072s;
          }
          #ac-gn-menustate:checked
            ~ #ac-globalnav
            .ac-gn-item-menu:nth-child(6),
          #ac-gn-menustate:target
            ~ #ac-globalnav
            .ac-gn-item-menu:nth-child(6) {
            transition: opacity 0.344s cubic-bezier(0.32, 0.08, 0.24, 1) 0.083s,
              transform 0.38s cubic-bezier(0.32, 0.08, 0.24, 1) 0.073s;
          }

          #ac-globalnav .ac-gn-item-menu:nth-child(7) {
            transform: translateY(-24px);
            transition: opacity 0.27s cubic-bezier(0.52, 0.16, 0.52, 0.84)
                0.083s,
              transform 0.413s cubic-bezier(0.52, 0.16, 0.52, 0.84) 0.064s;
          }
          #ac-gn-menustate:checked
            ~ #ac-globalnav
            .ac-gn-item-menu:nth-child(7),
          #ac-gn-menustate:target
            ~ #ac-globalnav
            .ac-gn-item-menu:nth-child(7) {
            transition: opacity 0.353s cubic-bezier(0.32, 0.08, 0.24, 1) 0.097s,
              transform 0.389s cubic-bezier(0.32, 0.08, 0.24, 1) 0.087s;
          }

          #ac-globalnav .ac-gn-item-menu:nth-child(8) {
            transform: translateY(-20px);
            transition: opacity 0.257s cubic-bezier(0.52, 0.16, 0.52, 0.84)
                0.07s,
              transform 0.402s cubic-bezier(0.52, 0.16, 0.52, 0.84) 0.055s;
          }
          #ac-gn-menustate:checked
            ~ #ac-globalnav
            .ac-gn-item-menu:nth-child(8),
          #ac-gn-menustate:target
            ~ #ac-globalnav
            .ac-gn-item-menu:nth-child(8) {
            transition: opacity 0.362s cubic-bezier(0.32, 0.08, 0.24, 1) 0.11s,
              transform 0.398s cubic-bezier(0.32, 0.08, 0.24, 1) 0.1s;
          }

          #ac-globalnav .ac-gn-item-menu:nth-child(9) {
            transform: translateY(-16px);
            transition: opacity 0.243s cubic-bezier(0.52, 0.16, 0.52, 0.84)
                0.057s,
              transform 0.391s cubic-bezier(0.52, 0.16, 0.52, 0.84) 0.046s;
          }
          #ac-gn-menustate:checked
            ~ #ac-globalnav
            .ac-gn-item-menu:nth-child(9),
          #ac-gn-menustate:target
            ~ #ac-globalnav
            .ac-gn-item-menu:nth-child(9) {
            transition: opacity 0.371s cubic-bezier(0.32, 0.08, 0.24, 1) 0.123s,
              transform 0.407s cubic-bezier(0.32, 0.08, 0.24, 1) 0.113s;
          }

          #ac-globalnav .ac-gn-item-menu:nth-child(10) {
            transform: translateY(-12px);
            transition: opacity 0.23s cubic-bezier(0.52, 0.16, 0.52, 0.84)
                0.043s,
              transform 0.38s cubic-bezier(0.52, 0.16, 0.52, 0.84) 0.037s;
          }
          #ac-gn-menustate:checked
            ~ #ac-globalnav
            .ac-gn-item-menu:nth-child(10),
          #ac-gn-menustate:target
            ~ #ac-globalnav
            .ac-gn-item-menu:nth-child(10) {
            transition: opacity 0.38s cubic-bezier(0.32, 0.08, 0.24, 1) 0.137s,
              transform 0.416s cubic-bezier(0.32, 0.08, 0.24, 1) 0.127s;
          }

          #ac-globalnav .ac-gn-item-menu:nth-child(11) {
            transform: translateY(-8px);
            transition: opacity 0.217s cubic-bezier(0.52, 0.16, 0.52, 0.84)
                0.03s,
              transform 0.369s cubic-bezier(0.52, 0.16, 0.52, 0.84) 0.028s;
          }
          #ac-gn-menustate:checked
            ~ #ac-globalnav
            .ac-gn-item-menu:nth-child(11),
          #ac-gn-menustate:target
            ~ #ac-globalnav
            .ac-gn-item-menu:nth-child(11) {
            transition: opacity 0.389s cubic-bezier(0.32, 0.08, 0.24, 1) 0.15s,
              transform 0.424s cubic-bezier(0.32, 0.08, 0.24, 1) 0.14s;
          }
        }

        #ac-globalnav.searchshow .ac-gn-apple,
        #ac-globalnav.searchshow .ac-gn-item-menu,
        #ac-globalnav.searchshow .ac-gn-bag {
          animation: ac-gn-item-searchshow 0.325s both;
        }
        #ac-globalnav.searchshow .ac-gn-apple {
          animation-delay: 0.36s;
        }

        /* searchshow searchhide */
        #ac-globalnav.searchshow .ac-gn-item-menu:nth-child(1) {
          animation-delay: 0.36s;
        }
        #ac-globalnav.searchhide .ac-gn-item-menu:nth-child(1) {
          animation-delay: 0s;
        }

        #ac-globalnav.searchshow .ac-gn-item-menu:nth-child(2) {
          animation-delay: 0.33s;
        }
        #ac-globalnav.searchhide .ac-gn-item-menu:nth-child(2) {
          animation-delay: 0.03s;
        }

        #ac-globalnav.searchshow .ac-gn-item-menu:nth-child(3) {
          animation-delay: 0.3s;
        }
        #ac-globalnav.searchhide .ac-gn-item-menu:nth-child(3) {
          animation-delay: 0.06s;
        }

        #ac-globalnav.searchshow .ac-gn-item-menu:nth-child(4) {
          animation-delay: 0.27s;
        }
        #ac-globalnav.searchhide .ac-gn-item-menu:nth-child(4) {
          animation-delay: 0.09s;
        }

        #ac-globalnav.searchshow .ac-gn-item-menu:nth-child(5) {
          animation-delay: 0.24s;
        }
        #ac-globalnav.searchhide .ac-gn-item-menu:nth-child(5) {
          animation-delay: 0.12s;
        }

        #ac-globalnav.searchshow .ac-gn-item-menu:nth-child(6) {
          animation-delay: 0.21s;
        }
        #ac-globalnav.searchhide .ac-gn-item-menu:nth-child(6) {
          animation-delay: 0.15s;
        }

        #ac-globalnav.searchshow .ac-gn-item-menu:nth-child(7) {
          animation-delay: 0.18s;
        }
        #ac-globalnav.searchhide .ac-gn-item-menu:nth-child(7) {
          animation-delay: 0.18s;
        }

        #ac-globalnav.searchshow .ac-gn-item-menu:nth-child(8) {
          animation-delay: 0.15s;
        }
        #ac-globalnav.searchhide .ac-gn-item-menu:nth-child(8) {
          animation-delay: 0.21s;
        }

        #ac-globalnav.searchshow .ac-gn-item-menu:nth-child(9) {
          animation-delay: 0.12s;
        }
        #ac-globalnav.searchhide .ac-gn-item-menu:nth-child(9) {
          animation-delay: 0.24s;
        }

        #ac-globalnav.searchshow .ac-gn-item-menu:nth-child(10) {
          animation-delay: 0.09s;
        }
        #ac-globalnav.searchhide .ac-gn-item-menu:nth-child(10) {
          animation-delay: 0.27s;
        }

        #ac-globalnav.searchshow .ac-gn-item-menu:nth-child(11) {
          animation-delay: 0.06s;
        }
        #ac-globalnav.searchhide .ac-gn-item-menu:nth-child(11) {
          animation-delay: 0.3s;
        }
        /* searchshow searchhide */

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
