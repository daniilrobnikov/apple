import Tile from './Tile'

export default function Recommendations() {
  return (
    <>
      <style global jsx>{`
        .rf-recommendations-title {
          text-align: center;
          border-top: none;
        }

        .rf-recommendations-tiles {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        .rf-recommendations-footer {
          text-align: center;
          padding: 0 0 72px;
          margin-top: -16px;
        }

        @media only screen and (min-width: 734px) {
          .rf-recommendations-title {
            padding-top: 63px;
          }
        }
        @media only screen and (max-width: 734px) {
          .rf-recommendations-title {
            padding-top: 54px;
          }
          .rf-recommendations-footer {
            padding-bottom: 53px;
          }
        }
      `}</style>
      <div className='rs-recommendations'>
        <div className='rf-recommendations rf-recommendations-grid'>
          <div className='section-content'>
            <h2 className='rf-recommendations-title typography-headline-reduced'>
              A few recommendations.
            </h2>
          </div>
          <div
            className='section-content rf-recommendations-tiles'
            data-analytics-type=''
          >
            <Tile />
            <Tile />
            <Tile />
            <div className='section-content rf-recommendations-footer'>
              <button
                type='button'
                className='as-buttonlink'
                data-analytics-title='show more products'
              >
                Show more products
                <span
                  aria-hidden='true'
                  className='icon icon-after icon-chevrondown'
                ></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
