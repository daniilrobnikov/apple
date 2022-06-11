import Link from 'next/link'

export default function Legal() {
  return (
    <>
      <section className='as-globalfooter-mini' data-nosnippet=''>
        <div className='as-globalfooter-mini-shop'>
          <p>
            More ways to shop:{' '}
            <span className='nowrap'>
              <Link href='/retail'>
                <a
                  data-slot-name='footerConfig'
                  data-feature-name='Footer Navigation'
                  data-display-name='Find an Apple Store'
                >
                  Find an Apple Store
                </a>
              </Link>
            </span>{' '}
            or{' '}
            <Link href='https://locate.apple.com'>
              <a
                data-slot-name='footerConfig'
                data-feature-name='Footer Navigation'
                data-display-name='other retailer'
              >
                other retailer
              </a>
            </Link>{' '}
            near you. Or{' '}
            <span className='nowrap'>
              call <span>1‑800‑MY‑APPLE</span>
            </span>
            .
          </p>
        </div>
        <div className='as-globalfooter-mini-locale'>
          <Link href='/choose-your-country'>
            <a
              data-slot-name='footerConfig'
              data-feature-name='Footer Navigation'
              data-display-name='Country Selector'
              className='as-globalfooter-mini-locale-link'
              data-autom='footer'
            >
              {' '}
              United States
            </a>
          </Link>{' '}
        </div>
        <div className='as-globalfooter-mini-legal'>
          <div className='as-globalfooter-mini-legal-copyright'>
            Copyright © 2022 Apple Inc. All rights reserved.
          </div>
          <div className='as-globalfooter-mini-legal-links'>
            <Link href='/privacy/privacy-policy'>
              <a
                data-slot-name='footerConfig'
                data-feature-name='Footer Navigation'
                data-display-name='Privacy Policy'
                className='as-globalfooter-mini-legal-link'
                data-autom='footer'
              >
                Privacy Policy
              </a>
            </Link>
            <Link href='/legal/internet-services/terms/site.html'>
              <a
                data-slot-name='footerConfig'
                data-feature-name='Footer Navigation'
                data-display-name='Terms of Use'
                className='as-globalfooter-mini-legal-link'
                data-autom='footer'
              >
                Terms of Use
              </a>
            </Link>
            <Link href='/shop/open/salespolicies'>
              <a
                data-slot-name='footerConfig'
                data-feature-name='Footer Navigation'
                data-display-name='Sales and Refunds'
                className='as-globalfooter-mini-legal-link'
                target='new'
                data-autom='footer'
              >
                Sales and Refunds
              </a>
            </Link>
            <Link href='/legal'>
              <a
                data-slot-name='footerConfig'
                data-feature-name='Footer Navigation'
                data-display-name='Legal'
                className='as-globalfooter-mini-legal-link'
                data-autom='footer'
              >
                Legal
              </a>
            </Link>
            <Link href='/shop/browse/sitemap'>
              <a
                data-slot-name='footerConfig'
                data-feature-name='Footer Navigation'
                data-display-name='Sitemap'
                className='as-globalfooter-mini-legal-link'
                data-autom='footer'
              >
                Site Map
              </a>
            </Link>{' '}
          </div>
        </div>
      </section>

      <style global jsx>{`
        .as-globalfooter .as-globalfooter-mini-shop {
          --footer-mini-shop-link-color: #0066cc;
          max-height: 9999px;
          margin-bottom: 7px;
          padding-bottom: 8px;
          border-bottom: 1px solid var(--footer-border-color);
        }

        .as-globalfooter .as-globalfooter-mini-shop a,
        .as-globalfooter .as-globalfooter-mini-shop a:hover {
          color: var(--footer-mini-shop-link-color);
        }

        .as-globalfooter .as-globalfooter-mini-locale {
          float: right;
          margin-top: 5px;
          position: relative;
          top: -3px;
          z-index: 2;
          white-space: nowrap;
        }

        .as-globalfooter .as-globalfooter-mini-locale-link {
          border-left: 1px solid var(--footer-border-color);
          margin-left: 7px;
          padding-left: 11px;
          display: inline;
        }
        .as-globalfooter .as-globalfooter-mini-locale-link:first-child {
          border-left: none;
          margin-left: 0;
          padding-left: 0;
        }

        .as-globalfooter .as-globalfooter-mini-legal {
          position: relative;
          top: -3px;
          z-index: 1;
        }

        .as-globalfooter .as-globalfooter-mini-legal::before,
        .as-globalfooter .as-globalfooter-mini-legal::after {
          content: ' ';
          display: table;
        }

        .as-globalfooter .as-globalfooter-mini-legal-copyright {
          max-height: 9999px;
        }

        .as-globalfooter .as-globalfooter-mini-legal-links {
          position: relative;
          z-index: 1;
        }

        .as-globalfooter .as-globalfooter-mini-legal-link {
          border-right: 1px solid var(--footer-border-color);
          margin-right: 7px;
          padding-right: 10px;
          display: inline-block;
          margin-top: 5px;
          white-space: nowrap;
        }

        .as-globalfooter .as-globalfooter-mini-legal-link:last-child {
          border: none;
          margin: 0;
          padding: 0;
        }

        .as-globalfooter .as-globalfooter-mini-legal::after {
          clear: both;
        }

        @media only screen and (min-width: 834px) {
          .as-globalfooter .as-globalfooter-mini {
            padding-top: 34px;
            padding-bottom: calc(max(21px, env(safe-area-inset-bottom)));
          }

          .as-globalfooter .as-globalfooter-mini-legal-copyright,
          .as-globalfooter .as-globalfooter-mini-legal-links {
            margin-right: 30px;
            float: left;
            margin-top: 5px;
          }
          .as-globalfooter .as-globalfooter-mini-legal-links {
            top: -5px;
          }
        }
        @media only screen and (max-width: 833px) {
          .as-globalfooter .as-globalfooter-mini {
            padding-top: 17px;
            padding-bottom: calc(max(19px, env(safe-area-inset-bottom)));
          }

          .as-globalfooter .as-globalfooter-mini-shop {
            border-bottom: none;
          }

          .as-globalfooter .as-globalfooter-mini-locale {
            left: -1px;
            padding-top: 5px;
            float: none;
          }

          .as-globalfooter .as-globalfooter-mini-legal {
            padding-top: 12px;
          }

          .as-globalfooter .as-globalfooter-mini-legal-copyright,
          .as-globalfooter .as-globalfooter-mini-legal-links {
            margin-right: 0;
            float: none;
          }
        }
      `}</style>
    </>
  )
}
