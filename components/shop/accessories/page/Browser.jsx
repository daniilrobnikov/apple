import TabNav from '@/components/templates/layout/nav/TabNav'

import { useState } from 'react'

export default function Browser({ tabs }) {
  const [length, setLength] = useState(5)
  const [curTab, setCurTab] = useState(0)

  function handleTabChange(e) {
    setCurTab(e)
    setLength(5)
  }
  return (
    <div id='alp-category-browser' className='rf-categorybrowser-container'>
      <div className='rf-browser-container'>
        <div data-core-tabs='' data-core-tabs-transition-done=''>
          <TabNav
            parentClass='rf-browser-wrapper'
            tabs={tabs}
            tab={curTab}
            handleTabChange={handleTabChange}
          />
          <div
            data-core-tabs-panels=''
            className='rf-browser-wrapper section-content'
          >
            {tabs.map((tab, i) => (
              <div
                className={`rf-browser-list ${curTab === i ? 'current' : ''}`}
                key={i}
              >
                <ul
                  data-core-fade-transition-wrapper=''
                  className='rf-browser-items-list r-fade-transition-enter-done r-fade-transition-appear-done'
                  data-core-tabs-panel=''
                  data-core-tabs-panel-selected=''
                >
                  {tab.pages.slice(0, length).map((page, i) => (
                    <li className='rf-browser-item' key={i}>
                      <a
                        className='column large-12'
                        href={page.href}
                        data-autom={page.title}
                      >
                        <div className='rf-browser-itemiconwrapper small-3'>
                          <img
                            className='rf-browser-itemicon'
                            aria-hidden='true'
                            src={page.icon}
                            alt={`${page.title} - Icon`}
                          />
                        </div>
                        <span className='rf-browser-itemname small-8'>
                          {page.title}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
                <div className='rf-browser-borderline'>
                  {tab.pages.length > 5 && (
                    <button
                      type='button'
                      className='rf-see-all-link small-12'
                      aria-expanded='false'
                      onClick={() =>
                        setLength(
                          tab.pages.length === length ? 5 : tab.pages.length
                        )
                      }
                    >
                      <div
                        className='icon icon-after icon-pluscircle'
                        data-display-name='tabs-1 : see-all-link : See all categories'
                        data-autom='See all categories'
                      >
                        See all categories
                      </div>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .rf-browser-container {
          margin-top: 15px;
        }

        [data-core-tabs-panels] {
          position: relative;
          transition: height 0.5s ease-in-out;
          overflow: hidden;
        }
        [data-core-tabs-transition-done] [data-core-tabs-panels] {
          overflow: visible;
          height: auto !important;
        }

        .rf-browser-list {
          list-style: none;
          margin: 0;
          padding: 0;
          text-align: center;
        }

        /* r-fade-transition */
        [data-core-fade-transition-wrapper] {
          opacity: 0;
          transition-property: opacity;
          transition-timing-function: ease-in-out;
          transition-duration: 0.4s;
        }
        .r-fade-transition-appear-active,
        .r-fade-transition-enter-active,
        .r-fade-transition-enter-done,
        .r-fade-transition-exit {
          opacity: 1;
        }
        [data-core-tabs-panel] {
          position: absolute;
        }
        [data-core-tabs-transition-done] [data-core-tabs-panel] {
          position: static;
        }

        .rf-browser-item {
          background-color: inherit;
          outline: 0;
        }

        .rf-browser-itemiconwrapper {
          vertical-align: middle;
          border-radius: 50%;
          display: inline-block;
          position: relative;
        }

        .rf-browser-itemicon {
          margin: 0;
          vertical-align: middle;
        }

        .rf-browser-itemname {
          font-size: 17px;
          line-height: 1.47059;
          font-weight: 400;
          letter-spacing: -0.022em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
          color: #1d1d1f;
          min-width: 165px;
          overflow: hidden;
          text-decoration: inherit;
          vertical-align: text-top;
          display: inline-block;
        }

        .rf-browser-borderline {
          border-top: 1px solid #d2d2d7;
        }

        .rf-browser-borderline .rf-see-all-link {
          color: #06c;
          width: 100%;
          text-align: center;
        }

        .rf-browser-borderline .rf-see-all-link .icon-pluscircle,
        .rf-browser-borderline .rf-see-all-link .icon-resetcircle {
          position: relative;
          top: -14px;
          z-index: 3;
          display: inline-block;
          padding: 0 36px 0 14px;
          background: #fff;
        }
        .rf-browser-borderline .rf-see-all-link .icon-pluscircle::after {
          transform: ${length !== 5
            ? 'rotate(45deg) scale(1.3)'
            : 'scale(1.3)'};
        }

        @media only screen and (min-width: 735px) {
          .rf-browser-wrapper {
            margin-top: 30px;
          }

          .rf-browser-item {
            width: 180px;
            text-align: center;
            margin: 0 0 51px;
            padding: 0 7px;
          }
          .rf-browser-item,
          .rf-browser-item a {
            display: inline-block;
          }

          .rf-browser-itemiconwrapper {
            margin: 0;
            border: 1px solid #d2d2d7;
            padding: 33px;
            width: 75px;
            height: 75px;
          }

          .rf-browser-itemicon {
            width: 75px;
            height: 75px;
          }

          .rf-browser-itemname {
            margin: 17px 0 0;
            text-align: center;
          }
        }
        @media only screen and (max-width: 734px) {
          .rf-browser-wrapper {
            margin-top: 20px;
          }

          .rf-browser-items-list {
            display: flex;
            flex-wrap: wrap;
          }

          .rf-browser-item {
            width: 100%;
            text-align: left;
            margin: 0 0 20px;
            padding: 0 5px;
          }

          .rf-browser-item a {
            display: flex;
            align-items: center;
          }

          .rf-browser-itemiconwrapper {
            margin: 0;
            border: 0;
            padding: 0;
            width: 45px;
            height: auto;
          }

          .rf-browser-itemicon {
            width: 50px;
            height: 50px;
          }

          .rf-browser-itemname {
            margin: 0;
            text-align: left;
          }

          .rf-browser-borderline {
            text-align: center;
            height: 1px;
            border: 0;
            border-top: 1px solid #d2d2d7;
            margin: 16px 0 14px;
            padding: 0;
            width: 100%;
            display: inline-block;
          }
        }
      `}</style>
    </div>
  )
}
