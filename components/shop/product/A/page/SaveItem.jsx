export default function SaveItem() {
  return (
    <>
      <div className='rf-pdp-addtocart-saveditem-wrapper' data-autom='favorite'>
        <div
          id='839c1a30-ea58-11ec-a513-15ba5200123b_MLWK3AM/A'
          className='rf-saveditem-container'
        >
          <div className='rf-saveditem-content'>
            <h2 className='rf-saveditem-content-header'>
              <span>Still deciding?</span>
            </h2>
            <div className='rf-saveditem-content-description'>
              Add this item to a list and easily come back to it later.
            </div>
          </div>
          <div data-core-tooltip='' className='rf-saveditem-tooltip'>
            <button
              type='button'
              className='rf-saveditem-button'
              aria-label='Add to Saved Items '
              data-core-tooltip-trigger=''
            >
              <svg
                width='35'
                height='35'
                className='as-svgicon as-svgicon-bookmark as-svgicon-base as-svgicon-bookmarkbase'
                role='img'
                aria-hidden='true'
              >
                <path fill='none' d='M0 0h35v35H0z'></path>
                <path d='M21.952 6.433a2.157 2.157 0 011.567.481A2.228 2.228 0 0124 8.516v19.866a.709.709 0 01-.018.178.7.7 0 01-.058-.013 8.985 8.985 0 01-.757-.674l-4.866-4.901a1.111 1.111 0 00-1.602 0l-4.857 4.891a7.25 7.25 0 01-.754.676.145.145 0 01-.053.028h-.015a.681.681 0 01-.02-.185V8.516a2.228 2.228 0 01.48-1.602 2.158 2.158 0 011.568-.48h8.904m0-1h-8.904a3.077 3.077 0 00-2.278.776A3.144 3.144 0 0010 8.516v19.866a1.276 1.276 0 00.276.868.956.956 0 00.76.317 1.073 1.073 0 00.632-.213 8.377 8.377 0 00.874-.776l4.866-4.9a.115.115 0 01.184 0l4.866 4.9a10.454 10.454 0 00.868.77 1.048 1.048 0 00.639.219.956.956 0 00.76-.317 1.276 1.276 0 00.275-.868V8.516a3.144 3.144 0 00-.77-2.306 3.077 3.077 0 00-2.278-.776z'></path>
              </svg>
            </button>
            <div
              aria-hidden='true'
              data-core-fade-transition-wrapper=''
              className='r-fade-transition-exit-done'
              data-core-tooltip-trans=''
            >
              <div
                role='tooltip'
                data-core-tooltip-content=''
                data-core-tooltip-withtip=''
                aria-hidden='true'
                tabIndex='-1'
                id='839d79c0-ea58-11ec-a513-15ba5200123b'
                data-core-tooltip-top=''
              >
                <span>Add to Saved Items</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style global jsx>{`
        .rf-saveditem-container {
          display: flex;
          padding-top: 30px;
        }

        .rf-saveditem-container .rf-saveditem-content-header {
          font-size: 14px;
          line-height: 1.42859;
          font-weight: 400;
          letter-spacing: -0.016em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
          font-weight: 600;
        }

        .rf-saveditem-container .rf-saveditem-content-description {
          font-size: 14px;
          line-height: 1.42859;
          font-weight: 400;
          letter-spacing: -0.016em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
          margin-top: 0;
        }

        [data-core-tooltip] {
          display: inline-block;
        }
        .rf-saveditem-container .rf-saveditem-tooltip {
          vertical-align: top;
          margin-left: auto;
          position: relative;
          left: 10px;
        }

        .rf-saveditem-container .rf-saveditem-button {
          color: #06c;
          display: block;
        }

        .rf-saveditem-container .rf-saveditem-button svg {
          pointer-events: none;
        }

        [data-core-fade-transition-wrapper] {
          opacity: 0;
          transition-property: opacity;
          transition-timing-function: ease-in-out;
          transition-duration: 0.4s;
        }
        .r-fade-transition-exit-done {
          display: none;
        }
        [data-core-tooltip-trans] {
          transition: opacity 0.1s ease-in-out;
          position: relative;
        }

        [data-core-tooltip-content] {
          position: absolute;
          top: 0;
          left: 0;
          will-change: top, left;
          padding: 12px 17px;
          background: #e8e8ed;
          border-radius: 12px;
        }
        .rf-saveditem-container
          .rf-saveditem-tooltip
          [data-core-tooltip-content] {
          font-size: 12px;
          line-height: 1.33337;
          font-weight: 400;
          letter-spacing: -0.01em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
          width: 154px;
          text-align: center;
          vertical-align: top;
        }

        @media only screen and (min-width: 735px) {
          .rf-saveditem-container .rf-saveditem-content-description {
            margin-right: 20px;
          }
        }

        @media only screen and (max-width: 734px) {
          .rf-saveditem-container .rf-saveditem-content-description {
            margin-right: 10px;
          }
        }
      `}</style>
    </>
  )
}
