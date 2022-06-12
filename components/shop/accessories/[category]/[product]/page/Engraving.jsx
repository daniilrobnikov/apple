import React from 'react'

export default function Engraving() {
  return (
    <>
      <div className='rf-pdp-engraving'>
        <div className='rf-engraving'>
          <div className='rf-engraving-nonbundle row'>
            <div className='column large-12 rf-engraving-headline'>
              <span className='rf-engraving-iconcontainer'>
                <svg
                  viewBox='0 0 35 35'
                  className='as-svgicon as-svgicon-engraving as-svgicon-base as-svgicon-engravingbase'
                  role='img'
                  aria-hidden='true'
                  width='35px'
                  height='35px'
                >
                  <path fill='none' d='M0 0h35v35H0z'></path>
                  <path d='M17.5 6.1A11.4 11.4 0 116.1 17.5 11.413 11.413 0 0117.5 6.1m0-1.1A12.5 12.5 0 1030 17.5 12.5 12.5 0 0017.5 5z'></path>
                  <path d='M23 20.5H12a.5.5 0 010-1h11a.5.5 0 010 1zM25 15.5H10a.5.5 0 010-1h15a.5.5 0 010 1z'></path>
                </svg>
              </span>
              <button
                type='button'
                className='as-buttonlink'
                aria-describedby='engraving-footer-app'
                data-autom='addEngraving-app'
                data-analytics-title='open modal | personalize it'
                data-trigger-id='engraving-add'
              >
                <span>Personalize them for free</span>
              </button>
            </div>
            <div className='column large-12'>
              <div
                id='engraving-footer-app'
                className='rf-engraving-footer'
                aria-hidden='true'
              >
                Engrave a mix of emoji, names, initials, and numbers to make
                AirPods unmistakably yours. Only at Apple.
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .rf-pdp-engraving {
          border-top: 1px solid #d2d2d7;
          padding: 20px 0 33px;
          margin-top: 20px;
        }

        .rf-engraving-bundleview,
        .rf-engraving-nonbundle {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }

        .rf-engraving-headline {
          display: flex;
        }

        .rf-engraving-iconcontainer {
          margin-right: 8px;
        }

        .rf-engraving-iconcontainer .as-svgicon {
          color: #333;
        }
        .rf-pdp-engraving .as-svgicon-engraving {
          width: 25px;
          height: 25px;
        }

        .rf-engraving-footer {
          padding-left: 0;
        }
        .rf-pdp-engraving .rf-engraving-footer {
          font-size: 14px;
          line-height: 1.42859;
          font-weight: 400;
          letter-spacing: -0.016em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
          padding-left: 33px;
        }
      `}</style>
    </>
  )
}
