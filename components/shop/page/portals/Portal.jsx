import StyledLink from '@/components/templates/layout/styled/StyledLink'

export default function Portal() {
  function handleClose() {
    document.querySelector('#portal > *').className = document
      .querySelector('#portal > *')
      .className.replace(
        'r-fade-transition-enter-done',
        'r-fade-transition-exit-done'
      )
  }
  return (
    <div id='portal'>
      <div
        data-core-fade-transition-wrapper=''
        className='rc-overlay rc-overlay-popup rc-overlay-fixed-width r-fade-transition-enter-done'
        data-core-overlay=''
        data-core-overlay-cover=''
      >
        <div
          data-core-overlay-content=''
          tabIndex='-1'
          role='dialog'
          aria-labelledby='5656e7e0-e034-11ec-b092-ab55343b5d1d'
        >
          <div className='rc-overlay-popup-outer'>
            <div className='rc-overlay-popup-content'>
              <div className='rc-overlay-loader-content'>
                <div className='dd-modal'>
                  <h2
                    className='t-headline-reduced'
                    id='5656e7e0-e034-11ec-b092-ab55343b5d1d'
                  >
                    Apple&nbsp;Card Monthly Installments
                  </h2>
                  <p className='t-body'>
                    Buy your next iPhone, Mac, iPad, Apple Watch, or eligible
                    accessories interest‑free<sup>◊</sup> with Apple Card when
                    you choose to check out with Apple Card Monthly
                    Installments. Terms apply.
                  </p>
                  <h2 className='t-label'>Apple&nbsp;Card</h2>
                  <p className='t-body'>
                    Pay with your Apple Card and get 3% Daily Cash back on any
                    purchase from Apple.
                  </p>
                  <h2 className='t-label'>Carrier Financing</h2>
                  <p className='t-body'>
                    Buy your new iPhone directly from Apple with special deals
                    from your carrier. Terms apply.
                  </p>
                  <p className='dd-modal-link'>
                    <StyledLink
                      link={{
                        href: '/shop/browse/financing',
                        target: '_blank',
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            type='button'
            className='rc-overlay-close'
            aria-label='Close'
            data-autom='overlay-close'
            onClick={() => handleClose()}
          >
            <span className='rc-overlay-closesvg'>
              <svg
                width='21'
                height='21'
                className='as-svgicon as-svgicon-close as-svgicon-tiny as-svgicon-closetiny'
                role='img'
                aria-hidden='true'
              >
                <path fill='none' d='M0 0h21v21H0z'></path>
                <path d='M12.12 10l4.07-4.06a1.5 1.5 0 10-2.11-2.12L10 7.88 5.94 3.81a1.5 1.5 0 10-2.12 2.12L7.88 10l-4.07 4.06a1.5 1.5 0 000 2.12 1.51 1.51 0 002.13 0L10 12.12l4.06 4.07a1.45 1.45 0 001.06.44 1.5 1.5 0 001.06-2.56z'></path>
              </svg>
            </span>
          </button>
        </div>
      </div>

      <style jsx>{`
        [data-core-fade-transition-wrapper] {
          opacity: 0;
          transition-property: opacity;
          transition-timing-function: ease-in-out;
          transition-duration: 0.4s;
        }
        /* TODO */
        .r-fade-transition-appear-active,
        .r-fade-transition-enter-active,
        .r-fade-transition-enter-done,
        .r-fade-transition-exit {
          opacity: 1;
        }
        [data-core-overlay] {
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          z-index: 99999;
          position: fixed;
          overflow: auto;
          display: flex;
          box-sizing: border-box;
          align-items: flex-start;
          padding: 54px 0;
          -webkit-overflow-scrolling: touch;
          -webkit-tap-highlight-color: transparent;
        }
        [data-core-overlay-cover] {
          background-color: rgba(50, 50, 50, 0.88);
          backface-visibility: visible;
          -webkit-tap-highlight-color: transparent;
        }
        [data-core-overlay][data-core-fade-transition-wrapper] {
          transition-duration: 0.1s;
        }
        .rc-overlay-popup[data-core-overlay] {
          padding: 0;
          margin: 0;
        }
        /* exit-done */
        [data-core-overlay].r-fade-transition-exit-done {
          display: none;
        }

        /* [data-core-overlay-content] */
        [data-core-overlay-content] {
          margin: auto;
          padding: 30px;
          position: relative;
          background: #fff;
        }
        .rc-overlay-popup [data-core-overlay-content] {
          padding: 0;
          max-width: 816px;
          background: transparent;
        }
        .rc-overlay-fixed-width [data-core-overlay-content] {
          flex-grow: 1;
          min-width: 816px;
        }

        /* rc-overlay-popup-outer */
        .rc-overlay-popup-outer {
          background: #fff;
          border-radius: 18px;
          margin: 40px 0;
          overflow: hidden;
        }

        .rc-overlay-popup-content {
          padding: 76px;
        }

        .t-headline-reduced + .t-body,
        .t-headline-reduced + p,
        .t-headline-reduced + ul,
        .dd-modal p + .t-label {
          margin-top: 1em;
        }

        .rc-overlay-close {
          display: flex;
          align-self: flex-start;
          justify-content: center;
          align-items: center;
          height: 44px;
          width: 44px;
          position: absolute;
          top: 56px;
          left: 16px;
          cursor: pointer;
        }

        .rc-overlay-close .rc-overlay-closesvg {
          background: #e8e8ed;
          border-radius: 50%;
          color: #6e6e73;
          display: flex;
          align-items: center;
          height: 36px;
          width: 36px;
          outline: none;
          position: relative;
        }

        .rc-overlay-close .rc-overlay-closesvg svg {
          fill: currentColor;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          height: 20px;
          width: 20px;
        }

        /* desktop */
        @media only screen and (min-width: 1069px) {
          .t-headline-reduced {
            font-size: 40px;
            line-height: 1.1;
            letter-spacing: 0;
          }

          .t-label {
            font-size: 24px;
            line-height: 1.16667;
            letter-spacing: 0.009em;
          }
        }
        /* tablet */
        @media only screen and (min-width: 735px) and (max-width: 1068px) {
          .t-headline-reduced {
            font-size: 32px;
            line-height: 1.125;
            letter-spacing: 0.004em;
          }

          .t-label {
            font-size: 21px;
            line-height: 1.19048;
            letter-spacing: 0.011em;
          }
        }

        /* mobile */
        @media only screen and (max-width: 734px) {
          .rc-overlay-popup[data-core-overlay] {
            padding: 0 20px;
          }
          .rc-overlay-fixed-width[data-core-overlay] {
            padding: 0;
          }

          .rc-overlay-popup [data-core-overlay-content] {
            padding: 0;
            max-width: 640px;
            border: none;
          }
          .rc-overlay-fixed-width [data-core-overlay-content] {
            margin: 0 auto;
            min-width: inherit;
            min-height: 100vh;
            width: 100%;
          }

          .rc-overlay-fixed-width .rc-overlay-popup-outer {
            margin-top: 20px;
            margin-bottom: 0;
            border-radius: 18px 18px 0 0;
            min-height: calc(100vh - 20px);
          }

          .rc-overlay-popup-content {
            padding: 76px 6.25% 60px;
          }

          .t-headline-reduced {
            font-size: 28px;
            line-height: 1.14286;
            letter-spacing: 0.007em;
          }

          .rc-overlay-fixed-width .rc-overlay-close {
            top: 36px;
            left: 14px;
          }
        }
      `}</style>
    </div>
  )
}
