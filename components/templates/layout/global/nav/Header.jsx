import Link from 'next/link'

export default function Header({
  setIsMenuOpen,
  isBagView,
  setIsBagView,
  bagItemsCount,
}) {
  return (
    <>
      <ul className='ac-gn-header'>
        <li className='ac-gn-item ac-gn-menuicon'>
          <a
            href='#ac-gn-menustate'
            role='button'
            className='ac-gn-menuanchor ac-gn-menuanchor-open'
            id='ac-gn-menuanchor-open'
            onClick={() => {
              setIsMenuOpen(true)
              setIsBagView(false)
            }}
          >
            <span className='a11y'>Global Nav Open Menu</span>
          </a>
          <a
            href='#'
            role='button'
            className='ac-gn-menuanchor ac-gn-menuanchor-close'
            id='ac-gn-menuanchor-close'
            onClick={() => {
              setIsMenuOpen(false)
            }}
          >
            <span className='a11y'>Global Nav Close Menu</span>
          </a>
          <label
            className='ac-gn-menuicon-label'
            htmlFor='ac-gn-menustate'
            aria-hidden='true'
          >
            <span className='ac-gn-menuicon-bread ac-gn-menuicon-bread-top'>
              <span className='ac-gn-menuicon-bread-crust ac-gn-menuicon-bread-crust-top'></span>
            </span>
            <span className='ac-gn-menuicon-bread ac-gn-menuicon-bread-bottom'>
              <span className='ac-gn-menuicon-bread-crust ac-gn-menuicon-bread-crust-bottom'></span>
            </span>
          </label>
        </li>
        <li className='ac-gn-item ac-gn-apple'>
          <Link href='/'>
            <a
              className='ac-gn-link ac-gn-link-apple'
              data-analytics-title='apple home'
              id='ac-gn-firstfocus-small'
            >
              <span className='a11y'>Apple</span>
            </a>
          </Link>
        </li>
        <li
          className='ac-gn-item ac-gn-bag ac-gn-bag-small with-badge'
          id='ac-gn-bag-small'
        >
          <div
            className='ac-gn-bag-wrapper'
            onClick={() => {
              setIsBagView(!isBagView)
            }}
          >
            <a
              className='ac-gn-link ac-gn-link-bag'
              data-analytics-title='bag | items'
              data-analytics-click='bag'
              aria-label='Shopping Bag with item count : 3'
              data-string-badge='Shopping Bag with item count :'
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
              {bagItemsCount > 0 ? (
                <span className='ac-gn-bag-badge-number'>{bagItemsCount}</span>
              ) : (
                <span className='ac-gn-bag-badge-unit'>+</span>
              )}
            </span>
          </div>
          <span className='ac-gn-bagview-caret ac-gn-bagview-caret-large'></span>
        </li>
      </ul>

      <style global jsx>{`
        @media only screen and (min-width: 834px) {
          #ac-globalnav .ac-gn-header {
            display: none;
          }
        }
        /* Mobile */
        @media only screen and (max-width: 833px) {
          #ac-globalnav .ac-gn-header {
            position: absolute;
            z-index: 5;
            top: 0;
            left: 0;
            width: 100%;
            height: var(--globalnav-height);
            overflow: hidden;
          }

          /* ac-gn-menuicon */
          #ac-globalnav .ac-gn-menuicon {
            left: max(0px, env(safe-area-inset-left));
            position: absolute;
            z-index: 2;
            border-bottom: none;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          }

          #ac-globalnav .ac-gn-header .ac-gn-item,
          #ac-globalnav .ac-gn-header .ac-gn-link {
            height: var(--globalnav-height);
            width: var(--globalnav-height);
            padding: 0 !important;
            top: 0;
            display: block;
            text-align: center;
            position: absolute;
            z-index: 2;
          }

          #ac-globalnav .ac-gn-menuanchor {
            left: 0;
            color: #fff;
            position: absolute;
            top: 0;
            width: var(--globalnav-height);
            height: var(--globalnav-height);
            z-index: 10;
          }
          #ac-gn-menustate:checked ~ #ac-globalnav .ac-gn-menuanchor-open,
          #ac-globalnav .ac-gn-menuanchor-close {
            display: none;
          }
          #ac-gn-menustate:checked ~ #ac-globalnav .ac-gn-menuanchor-close {
            display: block;
          }

          #ac-globalnav .ac-gn-menuicon-label {
            display: block;
            position: absolute;
            opacity: 0.8;
            z-index: 3;
            top: 0;
            width: var(--globalnav-height);
            height: var(--globalnav-height);
            cursor: pointer;
            transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
          }
          #ac-globalnav
            .ac-gn-menuanchor:is(:hover, :focus, :active)
            ~ .ac-gn-menuicon-label {
            opacity: 1;
          }

          /* ac-gn-menuicon-bread */
          #ac-globalnav .ac-gn-menuicon-bread {
            position: absolute;
            z-index: 3;
            top: 9px;
            left: 9px;
            width: 30px;
            height: 30px;
            transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
          }
          #ac-globalnav .ac-gn-menuicon-bread-top {
            transition: transform 0.1806s cubic-bezier(0.04, 0.04, 0.12, 0.96);
            transform: none;
            z-index: 4;
          }
          #ac-gn-menustate:checked ~ #ac-globalnav .ac-gn-menuicon-bread-top {
            transition: transform 0.3192s cubic-bezier(0.04, 0.04, 0.12, 0.96)
              0.1008s;
            transform: rotate(45deg);
          }
          #ac-globalnav .ac-gn-menuicon-bread-bottom {
            transition: transform 0.1806s cubic-bezier(0.04, 0.04, 0.12, 0.96);
            transform: none;
          }
          #ac-gn-menustate:checked
            ~ #ac-globalnav
            .ac-gn-menuicon-bread-bottom {
            transition: transform 0.3192s cubic-bezier(0.04, 0.04, 0.12, 0.96)
              0.1008s;
            transform: rotate(-45deg);
          }

          /* ac-gn-menuicon-bread-crust */
          #ac-globalnav .ac-gn-menuicon-bread-crust {
            display: block;
            width: 17px;
            height: 1px;
            background: #fff;
            border-radius: 0.5px;
            position: absolute;
            left: 7px;
            z-index: 1;
          }
          #ac-globalnav .ac-gn-menuicon-bread-crust-top {
            top: 14px;
            transform: translateY(-3px) scaleX(0.88235);
            transition: transform 0.1596s cubic-bezier(0.52, 0.16, 0.52, 0.84)
              0.1008s;
          }
          #ac-gn-menustate:checked
            ~ #ac-globalnav
            .ac-gn-menuicon-bread-crust-top {
            transition: transform 0.1806s cubic-bezier(0.04, 0.04, 0.12, 0.96);
            transform: none;
          }

          #ac-globalnav .ac-gn-menuicon-bread-crust-bottom {
            bottom: 14px;
            transform: translateY(3px) scaleX(0.88235);
            transition: transform 0.1596s cubic-bezier(0.52, 0.16, 0.52, 0.84)
              0.1008s;
          }
          #ac-gn-menustate:checked
            ~ #ac-globalnav
            .ac-gn-menuicon-bread-crust-bottom {
            transition: transform 0.1806s cubic-bezier(0.04, 0.04, 0.12, 0.96);
            transform: none;
          }

          /* ac-gn-apple */
          #ac-globalnav .ac-gn-header .ac-gn-apple {
            left: 50%;
            margin-left: calc(-0.5 * var(--globalnav-height));
          }

          #ac-globalnav .ac-gn-header .ac-gn-link {
            line-height: 2.82353em;
          }

          #ac-globalnav .ac-gn-header .ac-gn-bag-small {
            right: max(0px, env(safe-area-inset-right));
            visibility: visible;
            transition: transform 0.44s 0.2s
                cubic-bezier(0.04, 0.04, 0.12, 0.96),
              opacity 0.28s 0.36s cubic-bezier(0.52, 0.16, 0.24, 1);
          }
          #ac-gn-menustate:checked
            ~ #ac-globalnav
            .ac-gn-header
            .ac-gn-bag-small {
            transform: translateY(8px);
            opacity: 0;
            visibility: hidden;
            transition: transform 0.36s cubic-bezier(0.54, 0.12, 0.88, 0.64),
              opacity 0.3s cubic-bezier(0.32, 0.08, 0.24, 1),
              visibility 0s linear 0.64s;
          }
        }
      `}</style>
    </>
  )
}
