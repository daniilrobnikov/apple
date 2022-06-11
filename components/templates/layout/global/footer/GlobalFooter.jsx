// import dynamic from 'next/dynamic'
// import { Suspense } from 'react'
// const FootNotes = dynamic(() => import('./FootNotes'), {
//   suspense: true,
// })
// const BreadCrumbs = dynamic(() => import('./BreadCrumbs'), {
//   suspense: true,
// })
import FootNotes from './FootNotes'
import BreadCrumbs from './BreadCrumbs'

import Directory from './Directory'
import Legal from './Legal'

export default function GlobalFooter() {
  return (
    <>
      <FootNotes />

      <footer className='as-globalfooter js flexbox' id='apple-footer'>
        <div className='as-globalfooter-content'>
          <BreadCrumbs />

          <nav className='as-globalfooter-directory'>
            {directory.map((section, index) => (
              <Directory section={section} key={index} index />
            ))}
          </nav>
          <Legal />
        </div>
      </footer>

      <style global jsx>{`
        .as-globalfooter,
        .as-footnotes {
          clear: both;
          left: 50%;
          transform: translateX(-50%);
          --footer-background: #f5f5f7;
          --footer-border-color: #d2d2d7;
          --footer-text-color: #6e6e73;
          --footer-link-color: #424245;
          --footer-directory-title-color: #1d1d1f;
          --footer-directory-title-color-hover: #000;
          background: var(--footer-background);
          color: var(--footer-text-color);
          min-width: 320px; // Custom
          overflow: hidden;
        }
        .as-globalfooter :is(h1, h2, h3, h4, h5, h6) {
          color: var(--footer-directory-title-color);
        }

        .as-globalfooter,
        .as-footnotes,
        .as-globalfooter .as-globalfooter-breadcrumbs-path {
          font-size: 12px;
          line-height: 1.33337;
          font-weight: 400;
          letter-spacing: -0.01em;
          font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue',
            'Helvetica', 'Arial', sans-serif;
          position: relative;
          z-index: 1;
        }

        .as-globalfooter .as-globalfooter-content,
        .as-footnotes .as-footnotes-content {
          margin: 0 auto;
          max-width: 980px;
          padding: 0 22px;
        }

        .as-footnotes .as-footnotes-sosumi {
          border-bottom: 1px solid var(--footer-border-color);
          padding: 17px 0 11px;
        }
        .as-footnotes .as-footnotes-sosumi li,
        .as-footnotes .as-footnotes-sosumi p {
          padding-bottom: 4px;
        }

        .as-globalfooter a,
        .as-footnotes a {
          color: var(--footer-link-color);
        }

        @media only screen and (min-width: 834px) {
          .as-globalfooter .as-globalfooter-content,
          .as-footnotes .as-footnotes-content {
            padding-left: max(22px, env(safe-area-inset-left));
            padding-right: max(22px, env(safe-area-inset-right));
          }
        }
        @media only screen and (max-width: 833px) {
          .as-globalfooter .as-globalfooter-content,
          .as-footnotes .as-footnotes-content {
            padding-left: max(16px, env(safe-area-inset-left));
            padding-right: max(16px, env(safe-area-inset-right));
          }
        }
      `}</style>
    </>
  )
}

const directory = [
  {
    title: 'Shop and Learn',
    pages: [
      {
        title: 'Store',
        url: '/store/',
      },
      {
        title: 'Mac',
        url: '/mac/',
      },
      {
        title: 'iPad',
        url: '/ipad/',
      },
      {
        title: 'iPhone',
        url: '/iphone/',
      },
      {
        title: 'Watch',
        url: '/watch/',
      },
      {
        title: 'AirPods',
        url: '/airpods/',
      },
      {
        title: 'TV & Home',
        url: '/tv-home/',
      },
      {
        title: 'iPod touch',
        url: '/ipod-touch/',
      },
      {
        title: 'AirTag',
        url: '/airtag/',
      },
      {
        title: 'Accessories',
        url: '/shop/accessories',
      },
      {
        title: 'Gift Cards',
        url: '/shop/gift-cards',
      },
    ],
  },
  {
    title: 'Services',
    pages: [
      {
        title: 'Apple Music',
        url: '/apple-music/',
      },
      {
        title: 'Apple TV+',
        url: '/apple-tv-plus/',
      },
      {
        title: 'Apple Fitness+',
        url: '/apple-fitness-plus/',
      },
      {
        title: 'Apple News+',
        url: '/apple-news/',
      },
      {
        title: 'Apple Arcade',
        url: '/apple-arcade/',
      },
      {
        title: 'iCloud',
        url: '/icloud/',
      },
      {
        title: 'Apple One',
        url: '/apple-one/',
      },
      {
        title: 'Apple Card',
        url: '/apple-card/',
      },
      {
        title: 'Apple Books',
        url: '/apple-books/',
      },
      {
        title: 'Apple Podcasts',
        url: '/apple-podcasts/',
      },
      {
        title: 'Apple Store',
        url: '/apple-store/',
      },
    ],
  },
  {
    title: 'Account',
    pages: [
      {
        title: 'Manage Your Apple ID',
        url: 'https://appleid.apple.com/us/',
      },
      {
        title: 'Apple Store Account',
        url: '/account/store',
      },
      {
        title: 'iCloud.com',
        url: '/account/icloud',
      },
    ],
  },
  {
    title: 'Apple Store',
    pages: [
      {
        title: 'Find a Store',
        url: '/retail/',
      },
      {
        title: 'Genius Bar',
        url: '/retail/geniusbar/',
      },
      {
        title: 'Today at Apple',
        url: '/today/',
      },
      {
        title: 'Apple Camp',
        url: '/today/camp/',
      },
      {
        title: 'Apple Store App',
        url: 'https://apps.apple.com/us/app/apple-store/id375380948',
      },
      {
        title: 'Refurbished and Clearance',
        url: '/shop/refurbished/',
      },
      {
        title: 'Financing',
        url: '/shop/browse/financing',
      },
      {
        title: 'Apple Trade In',
        url: '/shop/trade-in/',
      },
      {
        title: 'Order Status',
        url: '/404',
      },
      {
        title: 'Shopping Help',
        url: '/shop/help/',
      },
    ],
  },
  {
    title: 'For Business',
    pages: [
      {
        title: 'Apple and Business',
        url: '/business/',
      },
      {
        title: 'Shop for Business',
        url: '/retail/business/',
      },
    ],
  },
  {
    title: 'For Education',
    pages: [
      {
        title: 'Apple and Education',
        url: '/education/',
      },
      {
        title: 'Shop for K-12',
        url: '/education/k12/how-to-buy/',
      },
      {
        title: 'Shop for College',
        url: '/us-edu/store/',
      },
    ],
  },
  {
    title: 'For Healthcare',
    pages: [
      {
        title: 'Apple in Healthcare',
        url: '/healthcare/',
      },
      {
        title: 'Health on Apple Watch',
        url: '/healthcare/apple-watch/',
      },
      {
        title: 'Health Records on iPhone',
        url: '/healthcare/health-records/',
      },
    ],
  },
  {
    title: 'For Government',
    pages: [
      {
        title: 'Shop for Government',
        url: '/r/store/government/',
      },
      {
        title: 'Shop for Veterans and Military',
        url: '/us-edu/shop/browse/home/veterans_military/',
      },
    ],
  },
  {
    title: 'Apple Values',
    pages: [
      {
        title: 'Accessibility',
        url: '/accessibility/',
      },
      {
        title: 'Education',
        url: '/connectED/',
      },
      {
        title: 'Environment',
        url: '/environment/',
      },
      {
        title: 'Inclusion and Diversity',
        url: '/diversity/',
      },
      {
        title: 'Privacy',
        url: '/privacy/',
      },
      {
        title: 'Racial Equity and Justice',
        url: '/racial-equity-justice-initiative/',
      },
      {
        title: 'Supplier Responsibility',
        url: '/supplier-responsibility/',
      },
    ],
  },
  {
    title: 'About Apple',
    pages: [
      {
        title: 'Newsroom',
        url: '/newsroom/',
      },
      {
        title: 'Apple Leadership',
        url: '/leadership/',
      },
      {
        title: 'Career Opportunities',
        url: '/careers/',
      },
      {
        title: 'Investors',
        url: 'https://investor.apple.com/',
      },
      {
        title: 'Ethics & Compliance',
        url: '/compliance/',
      },
      {
        title: 'Events',
        url: '/apple-events/',
      },
      {
        title: 'Contact Apple',
        url: '/contact/',
      },
    ],
  },
]
