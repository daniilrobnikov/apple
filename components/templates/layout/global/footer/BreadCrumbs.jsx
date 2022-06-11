import Link from 'next/link'

export default function BreadCrumbs() {
  return (
    <>
      <nav
        className='as-globalfooter-breadcrumbs'
        aria-label='Breadcrumbs'
        role='navigation'
      >
        <Link href='/'>
          <a
            data-feature-name='Breadcrumb'
            data-display-name='Apple'
            className='as-globalfooter-breadcrumbs-home'
            data-autom='footer'
          >
            {' '}
            <span
              className='as-globalfooter-breadcrumbs-home-icon'
              aria-hidden='true'
            />
            <span className='visuallyhidden'>Apple</span>
          </a>
        </Link>
        <div className='as-globalfooter-breadcrumbs-path'>
          <ol
            className='as-globalfooter-breadcrumbs-list'
            typeof='BreadcrumbList'
          >
            <li
              className='as-globalfooter-breadcrumbs-item'
              property='itemListElement'
              typeof='ListItem'
            >
              <Link href='/shop/accessories/all'>
                <a
                  data-feature-name='Breadcrumb'
                  data-display-name='All Accessories'
                  className='as-globalfooter-breadcrumbs-link'
                  data-autom='footer'
                >
                  All Accessories
                </a>
              </Link>
            </li>
            <li
              className='as-globalfooter-breadcrumbs-item'
              property='itemListElement'
              typeof='ListItem'
            >
              <span property='item'>Made by Apple</span>
              <meta property='position' content='2' />
            </li>
          </ol>
        </div>
      </nav>

      <style global jsx>{`
        .as-globalfooter .as-globalfooter-breadcrumbs {
          padding: 17px 0;
          position: relative;
          z-index: 1;
          color: var(--footer-link-color);
        }

        .as-globalfooter .as-globalfooter-breadcrumbs::before,
        .as-globalfooter .as-globalfooter-breadcrumbs::after {
          content: ' ';
          display: table;
        }
        .as-globalfooter .as-globalfooter-breadcrumbs::after,
        .as-globalfooter .as-globalfooter-breadcrumbs-path::after {
          clear: both;
        }

        .as-globalfooter .as-globalfooter-breadcrumbs-home {
          left: 0;
          position: absolute;
          z-index: 2;
          top: 17px;
        }

        .as-globalfooter .as-globalfooter-breadcrumbs-home-icon {
          width: 14px;
          height: 72px;
          background-size: 14px 72px;
          background-repeat: no-repeat;
          background-image: url(data:image/svg+xml;base64,${btoa(
            `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="14px" height="72px" viewBox="0 0 14 72" xml:space="preserve">
	<defs>
		<symbol id="apple">
			<path d="M4.02,15.73c-0.25-0.16-0.51-0.39-0.77-0.71c-0.18-0.21-0.4-0.51-0.66-0.9c-0.45-0.65-0.82-1.4-1.1-2.25c-0.31-0.93-0.46-1.82-0.46-2.69c0-0.97,0.21-1.82,0.62-2.53C1.97,6.08,2.4,5.63,2.95,5.3C3.5,4.96,4.08,4.79,4.71,4.78c0.22,0,0.45,0.03,0.7,0.09C5.59,4.92,5.81,5,6.07,5.1c0.34,0.13,0.53,0.21,0.59,0.23c0.2,0.07,0.37,0.1,0.5,0.1c0.1,0,0.24-0.03,0.4-0.08c0.09-0.03,0.26-0.09,0.5-0.19C8.3,5.07,8.49,5,8.64,4.94c0.23-0.07,0.45-0.13,0.65-0.16C9.53,4.74,9.77,4.73,10,4.75c0.44,0.03,0.84,0.12,1.2,0.26c0.63,0.25,1.14,0.65,1.52,1.21c-0.16,0.1-0.31,0.21-0.45,0.34c-0.31,0.28-0.57,0.59-0.76,0.93c-0.27,0.48-0.4,1.01-0.4,1.56c0.01,0.67,0.18,1.26,0.52,1.77c0.24,0.37,0.56,0.69,0.95,0.95c0.19,0.13,0.36,0.22,0.52,0.28c-0.08,0.26-0.17,0.49-0.25,0.68c-0.22,0.52-0.48,0.99-0.77,1.43c-0.27,0.39-0.48,0.68-0.64,0.87c-0.25,0.3-0.49,0.52-0.73,0.68c-0.28,0.18-0.58,0.27-0.9,0.27c-0.22,0.01-0.43-0.02-0.64-0.08c-0.12-0.04-0.3-0.1-0.53-0.2c-0.23-0.1-0.42-0.17-0.56-0.21c-0.23-0.06-0.47-0.09-0.72-0.09c-0.25,0-0.49,0.03-0.72,0.09c-0.16,0.04-0.34,0.11-0.56,0.2c-0.26,0.11-0.43,0.18-0.53,0.21c-0.2,0.06-0.41,0.1-0.61,0.11C4.62,16.01,4.32,15.92,4.02,15.73z M8.26,4.31c-0.42,0.21-0.82,0.3-1.22,0.27c-0.06-0.4,0-0.81,0.17-1.26c0.15-0.38,0.35-0.73,0.62-1.04s0.6-0.57,1.01-0.78c0.41-0.21,0.8-0.32,1.17-0.34C10.06,1.58,10.01,2,9.86,2.44C9.72,2.84,9.51,3.2,9.24,3.53C8.97,3.86,8.64,4.12,8.26,4.31z"/>
		</symbol>
	</defs>
	<use xlink:href="#apple" x="0" y="0.5" fill="#555"/>
	<use xlink:href="#apple" x="0" y="18.5" fill="#333"/>
	<use xlink:href="#apple" x="0" y="36.5" fill="#515154"/>
	<use xlink:href="#apple" x="0" y="54.5" fill="#1d1d1f"/>
</svg>
`
          )});
          height: 18px;
          display: block;
          position: relative;
          z-index: 2;
          color: transparent;
          background-position-y: -36px;
        }
        .as-globalfooter
          .as-globalfooter-breadcrumbs-home:hover
          .as-globalfooter-breadcrumbs-home-icon {
          background-position-y: 100%;
        }

        .as-globalfooter .as-globalfooter-breadcrumbs-list {
          max-height: 9999px;
          padding-left: 25px;
          direction: ltr;
          list-style: none;
        }

        .as-globalfooter .as-globalfooter-breadcrumbs-item {
          margin-right: 7px;
          float: left;
          padding: 3px 4px 3px 0;
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .as-globalfooter .as-globalfooter-breadcrumbs-item:before {
          width: 8px;
          height: 18px;
          background-size: 8px 36px;
          background-repeat: no-repeat;
          background-image: url(data:image/svg+xml;base64,${btoa(
            `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="8px" height="36px" viewBox="0 0 8 36" xml:space="preserve">
	<defs>
		<symbol id="seperator">
			<path d="M1.29,0.98L7.5,9l-6.21,8.01l-0.68-0.54L6.42,9l-5.8-7.49L1.29,0.98z"/>
		</symbol>
	</defs>
	<use xlink:href="#seperator" x="0" y="0" fill="#d6d6d6"/>
	<use xlink:href="#seperator" x="0" y="18" fill="#d2d2d7"/>
</svg>
            `
          )});
          margin-right: 11px;
          content: '';
          display: inline-block;
          vertical-align: middle;
          margin-top: -1px;
          background-position-y: 100%;
        }

        @media only screen and (max-width: 833px) {
          .as-globalfooter .as-globalfooter-breadcrumbs {
            border-bottom: 1px solid var(--footer-border-color);
          }
        }
      `}</style>
    </>
  )
}
