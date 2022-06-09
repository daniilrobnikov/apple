import PaddleNav from '@/components/templates/layout/nav/PaddleNav'

import { useState, useEffect, useRef } from 'react'

export default function CardShelf({ children, type }) {
  const ref = useRef(null)

  const [step, setStep] = useState(320)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [visibleWidth, setVisibleWidth] = useState(0)
  const [scrollWidth, setScrollWidth] = useState(1)

  useEffect(() => {
    setStep(ref.current.querySelector('.cards-scroller-item').offsetWidth * 0.6)
  }, [])
  useEffect(() => {
    function updateScroll() {
      setScrollLeft(
        ref.current.querySelector(`.cards-scroller-snap`).scrollLeft
      )
      setVisibleWidth(
        ref.current.querySelector(`.cards-scroller-snap`).offsetWidth
      )
      setScrollWidth(
        ref.current.querySelector(`.cards-scroller-snap`).scrollWidth
      )
    }

    updateScroll()
    window.addEventListener('resize', updateScroll)
    ref.current
      .querySelector(`.cards-scroller-snap`)
      .addEventListener('scroll', updateScroll)

    return () => {
      window.removeEventListener('resize', updateScroll)
    }
  }, [])

  const handleArrowClick = (e) => {
    ref.current.querySelector(`.cards-scroller-snap`).scrollBy({
      left: e * step,
      behavior: 'smooth',
    })
  }

  return (
    <div className={`cardshelf ${type}`}>
      <div id='shelf-3'>
        <div>
          <div className='section-content cardshelf-header'>
            <div className='small-mr-10'>
              <h2 className='header'>The latest.</h2>{' '}
              <span className='subhead'>
                Take a look at what’s new, right now.
              </span>
            </div>
          </div>
          <div className='cards-scroller' ref={ref}>
            <div className='cards-scroller-crop'>
              <div className='cards-scroller-snap'>
                <div
                  className='cards-scroller-platter'
                  style={{
                    justifyContent:
                      visibleWidth === scrollWidth ? 'center' : 'flex-start',
                  }}
                >
                  {children}
                </div>
              </div>
            </div>
            {/* TODO: import header */}
            <PaddleNav
              parentClass='cards-scroller'
              disablePrevious={scrollLeft <= 10}
              disableNext={scrollLeft + visibleWidth >= scrollWidth - 10}
              handleArrowClick={handleArrowClick}
            />
          </div>
        </div>
      </div>

      <style global jsx>{`
        /* cardshelf-header */
        .cardshelf-header {
          padding-bottom: 14px;
        }

        /* header */
        .cardshelf .header,
        .cardshelf .subhead {
          font-weight: 600;
          font-family: SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
          display: inline;
        } /* subhead */
        .cardshelf .subhead {
          color: #6e6e73;
        }

        /* cards-scroller */
        .cards-scroller {
          position: relative;
        }

        /* cards-scroller-crop */
        .cards-scroller-crop {
          overflow: hidden;
          padding-bottom: 26px;
        }

        /* cards-scroller-snap */
        .cards-scroller-snap {
          position: relative;
          white-space: nowrap;
          scroll-snap-type: mandatory;
          scroll-snap-type: x mandatory;
          overflow-x: scroll;
          -webkit-overflow-scrolling: touch;
          overscroll-behavior-x: contain;
        }
        /* cards-scroller-platter */
        .cards-scroller-platter {
          width: 100%;
          vertical-align: top;
          display: inline-flex;
          padding-top: 10px;
          padding-bottom: 40px;
        }
        .cards-scroller-platter > * {
          display: inline-block;
          scroll-snap-coordinate: left;
          scroll-snap-align: start;
        }

        .cards-scroller .paddlenav-arrow,
        .cards-scroller:hover .paddlenav-arrow:not([disabled]) {
          background-color: rgba(0, 0, 0, 0.2);
          color: #fff;
        }
        /* container : hover, paddlenav-arrow : hover  /////////////////////////////// */
        .cards-scroller:hover .paddlenav-arrow:hover:not([disabled]) {
          background-color: rgba(0, 0, 0, 0.28);
        }
        /* container : hover, paddlenav-arrow : active  /////////////////////////////// */
        .cards-scroller:hover .paddlenav-arrow:hover:not([disabled]) {
          background-color: rgba(0, 0, 0, 0.28);
        }
        /* desktop & tablet ////////////////// */
        @media only screen and (min-width: 735px) {
          .cardshelf {
            padding-bottom: 54px;
          }

          /* header, subhead */
          .cardshelf .header,
          .cardshelf .subhead {
            font-size: 28px;
            line-height: 1.14286;
            letter-spacing: 0.007em;
          }
        }

        /* mobile //////////////////////////// */
        @media only screen and (max-width: 734px) {
          .cardshelf {
            padding-bottom: 28px;
          }
          .small-mr-10 {
            margin-right: 10% !important;
          }

          /* header, subhead */
          .cardshelf .header,
          .cardshelf .subhead {
            font-size: 24px;
            line-height: 1.16667;
            letter-spacing: 0.009em;
          }
        }
      `}</style>
    </div>
  )
}
