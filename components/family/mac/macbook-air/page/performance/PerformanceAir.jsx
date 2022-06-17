import PerformanceAirGallery from './PerformanceAirGallery'
import PerformanceAirHero from './performanceAirHero'
import PerformanceAirIntro from './PerformanceAirIntro'
import PerformanceAirSub from './PerformanceAirSub'

export default function PerformanceAir() {
  return (
    <>
      <article
        className='section section-performance'
        aria-label='Performance Article'
        data-anim-scroll-group='Section - Performance'
        data-component-list='Modal'
      >
        <div className='section-content'>
          <PerformanceAirIntro />
          <div className='subsection-badges row large-justify-content-spacearound medium-justify-content-spacebetween large-6 large-centered medium-9 small-10'>
            <figure className='badge'>
              <div className='badge-content'>
                <span className='badge-caption typography-body-reduced'>
                  Up to
                </span>
                <span className='badge-value typography-headline-elevated'>
                  1.4x
                </span>
                <span className='badge-caption typography-body-reduced'>
                  faster than M1&nbsp;model
                  <sup className='footnote footnote-number'>
                    <a
                      href='#footnote-5'
                      aria-label='Footnote 3'
                      data-modal-close=''
                    >
                      3
                    </a>
                  </sup>
                </span>
              </div>
            </figure>
            <figure className='badge'>
              <div className='badge-content'>
                <span className='badge-caption typography-body-reduced'>
                  Up to
                </span>
                <span className='badge-value typography-headline-elevated'>
                  15x
                </span>
                <span className='badge-caption typography-body-reduced'>
                  faster than Intel‑based model
                  <sup className='footnote footnote-number'>
                    <a
                      href='#footnote-5'
                      aria-label='Footnote 3'
                      data-modal-close=''
                    >
                      3
                    </a>
                  </sup>
                </span>
              </div>
            </figure>
            <figure className='badge'>
              <div className='badge-content'>
                <span className='badge-caption typography-body-reduced'>
                  Up to
                </span>
                <span className='badge-value typography-headline-elevated'>
                  18 hrs
                </span>
                <span className='badge-caption typography-body-reduced'>
                  battery life
                  <sup className='footnote footnote-number'>
                    <a
                      href='#footnote-4'
                      aria-label='Footnote 2'
                      data-modal-close=''
                    >
                      2
                    </a>
                  </sup>
                </span>
              </div>
            </figure>
          </div>
          <PerformanceAirHero />
          <div
            className='row modal-wrapper'
            data-analytics-activitymap-region-id='modal button'
          >
            <div className='column modal-trigger-container small-offset-1'>
              <button
                data-analytics-click='prop3:open modal | m2 chip'
                data-analytics-title='open modal | m2 chip'
                data-analytics-intrapage-link=''
                className='button modal-trigger typography-modal-cta'
              >
                Go inside M2
              </button>
            </div>
          </div>

          <h2 className='typography-headline-elevated graph-galleries-headline medium-7 small-10 small-offset-1'>
            The M2 chip <br className='small' />
            can really zip.
          </h2>
          <PerformanceAirGallery />
        </div>
        <PerformanceAirSub />
      </article>

      <style global jsx>{`
        .section-performance {
          overflow: hidden;
          padding-top: 140px;
        }

        .modal-wrapper {
          position: relative;
          margin-top: -68px;
          z-index: 2;
        }

        .typography-modal-cta {
          font-size: 21px;
          line-height: 1.1904761905;
          font-weight: 600;
          letter-spacing: 0.011em;
          font-family: SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica,
            Arial, sans-serif;
        }
        .modal-trigger-container .button {
          padding: 14px 60px;
          background-color: initial;
          color: #1d1d1f;
          border: 3px solid #1d1d1f;
          transition: background-color 350ms ease-in-out,
            color 350ms ease-in-out;
          z-index: 1;
        }

        .section-performance .subsection-badges {
          position: relative;
          z-index: 2;
        }
        .subsection-badges .badge:last-child:not(:nth-of-type(2n)) {
          margin-right: 0;
        }
        @media only screen and (min-width: 1068px) {
          .graph-galleries-headline {
            margin-top: 135px;
            margin-bottom: 75px;
          }

          .section-performance .subsection-badges {
            margin-top: 30px;
            justify-content: space-around;
          }
        }
        @media only screen and (min-width: 734px) and (max-width: 1068px) {
          .graph-galleries-headline {
            margin-top: 109px;
            margin-bottom: 54px;
          }

          .modal-wrapper {
            margin-top: -30px;
          }

          .section-performance .subsection-badges {
            margin-top: 32px;
            justify-content: space-between;
          }
        }
        @media only screen and (min-width: 734px) {
          .graph-galleries-headline {
            margin-left: auto;
            margin-right: auto;
            text-align: center;
          }

          .modal-trigger-container {
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
    </>
  )
}
