import PortalProductModal from './PortalProductModal'
import PortalTabNav from './PortalTabNav'

function ProductPortal() {
  return (
    <div id='portal'>
      <div
        data-core-fade-transition-wrapper=''
        className='rc-overlay rf-digitalmat-overlay rf-digitalmat-overlay-greybg rc-overlay-fullscreen rc-overlay-with-footer r-fade-transition-appear-done r-fade-transition-enter-done'
        data-core-overlay=''
        data-core-overlay-cover=''
        data-core-overlay-fullscreen=''
        data-autom='DigitalMat-overlay'
      >
        <div
          data-core-overlay-content=''
          tabIndex='-1'
          role='dialog'
          aria-labelledby='rf-digitalmat-overlay-label'
          className='rf-digitalmat-overlay-content-main'
        >
          <div className='rf-digitalmat-overlay-content rc-overlay-fullscreen-content'>
            <div className='rf-digitalmat-selecteditem'>
              <div
                data-core-tabs=''
                id='3de2be30-e0c2-11ec-bb44-35cae391b59c'
                className='rf-digitalmat-tabs'
                data-core-tabs-transition-done=''
              >
                <PortalTabNav />

                <div
                  data-core-tabs-panels=''
                  className='rf-digitalmat-overlay-contentsection'
                >
                  {/* TODO: for each */}
                  <PortalProductModal />
                </div>
              </div>
            </div>
            <div className='rc-overlay-footer'>
              <div>
                <p>
                  * Monthly pricing is available when you select Apple Card
                  Monthly Installments (ACMI) as payment type at checkout at
                  Apple, and is subject to credit approval and credit limit.
                  Financing terms vary by product. Taxes and shipping are not
                  included in ACMI and are subject to your card’s variable APR.
                  See the Apple Card Customer Agreement for more information.
                  ACMI is not available for purchases made online at special
                  storefronts. The last month’s payment for each product will be
                  the product’s purchase price, less all other payments at the
                  monthly payment amount.
                </p>
                <p>
                  1. Testing conducted by Apple in September 2021 using
                  preproduction 14-inch MacBook Pro systems with Apple M1 Pro,
                  8-core CPU, 14-core GPU, 16GB of RAM, and 512GB SSD. The Apple
                  TV app movie playback test measures battery life by playing
                  back HD 1080p content with display brightness set to 8 clicks
                  from bottom. Battery life varies by use and configuration. See{' '}
                  <a
                    href='https://www.apple.com/batteries'
                    data-feature-name='Astro Link'
                    data-display-name='AOS: batteries'
                    target='_blank'
                    rel='noreferrer'
                  >
                    apple.com/batteries
                    <span className='a11y'> (Opens in a new window)</span>
                  </a>{' '}
                  for more information.
                </p>
                <p>
                  <sup>◊</sup> Apple Card Monthly Installments (ACMI) is a 0%
                  APR payment option available to select at checkout for certain
                  Apple products purchased at Apple Store locations,{' '}
                  <a
                    href='https://www.apple.com/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    apple.com
                    <span className='a11y'> (Opens in a new window)</span>
                  </a>
                  , the Apple Store app, or by calling 1-800-MY-APPLE, and is
                  subject to credit approval and credit limit. See{' '}
                  <a
                    href='https://support.apple.com/kb/HT211204'
                    target='_blank'
                    rel='noreferrer'
                  >
                    https://support.apple.com/kb/HT211204
                    <span className='a11y'> (Opens in a new window)</span>
                  </a>{' '}
                  for more information about eligible products. Variable APRs
                  for Apple Card other than ACMI range from 11.24% to 22.24%
                  based on creditworthiness. Rates as of April 1, 2022. If you
                  choose the pay-in-full or one-time-payment option for an ACMI
                  eligible purchase instead of choosing ACMI as the payment
                  option at checkout, that purchase will be subject to the
                  variable APR assigned to your Apple Card. Taxes and shipping
                  are not included in ACMI and are subject to your card’s
                  variable APR. See the{' '}
                  <a
                    href='https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Apple Card Customer Agreement
                    <span className='a11y'> (Opens in a new window)</span>
                  </a>{' '}
                  for more information. ACMI is not available for purchases made
                  online at the following special stores: Apple Employee
                  Purchase Plan; participating corporate Employee Purchase
                  Programs; Apple at Work for small businesses; Government, and
                  Veterans and Military Purchase Programs, or on refurbished
                  devices. iPhone activation required on iPhone purchases made
                  at an Apple Store with one of these national carriers:
                  AT&amp;T, Sprint, Verizon, or T-Mobile.
                </p>
                <p>
                  To access and use all the features of Apple Card, you must add
                  Apple Card to Wallet on an iPhone or iPad with the latest
                  version of iOS or iPadOS. Update to the latest version by
                  going to Settings &gt; General &gt; Software Update. Tap
                  Download and Install.
                </p>
                <p>Available for qualifying applicants in the United States.</p>
                <p>
                  Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City
                  Branch.
                </p>
                <p>
                  ** Get extra trade-in credit when you trade in an eligible
                  iPhone, iPad, Mac, or Apple&nbsp;Watch and purchase a new
                  Apple device through May&nbsp;31. The extra trade-in credit
                  may range from $10 to $50 for iPhone, $10 to $50 for iPad, $10
                  for Mac, and $20 to $40 for Apple&nbsp;Watch. Additional terms
                  from Apple or Apple’s trade-in partners may apply.
                </p>
                <p>
                  Trade-in values will vary based on the condition, year, and
                  configuration of your eligible trade-in device. Not all
                  devices are eligible for credit. You must be at least 18 years
                  old to be eligible to trade in for credit or for an Apple Gift
                  Card. Trade-in value may be applied toward qualifying new
                  device purchase, or added to an Apple Gift Card. Actual value
                  awarded is based on receipt of a qualifying device matching
                  the description provided when estimate was made. Sales tax may
                  be assessed on full value of a new device purchase. In-store
                  trade-in requires presentation of a valid photo ID (local law
                  may require saving this information). Offer may not be
                  available in all stores, and may vary between in-store and
                  online trade-in. Some stores may have additional requirements.
                  Apple or its trade-in partners reserve the right to refuse or
                  limit quantity of any trade-in transaction for any reason.
                  More details are available from Apple’s trade-in partner for
                  trade-in and recycling of eligible devices. Restrictions and
                  limitations may apply.
                </p>
              </div>
            </div>
          </div>
          <button
            type='button'
            className='rc-overlay-close rf-digitalmat-overlay-close'
            aria-label='Close'
            data-autom='overlay-close'
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

      <style global jsx>{`
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
          -webkit-backface-visibility: visible;
          backface-visibility: visible;
          -webkit-tap-highlight-color: transparent;
        }
        [data-core-overlay][data-core-fade-transition-wrapper] {
          transition-duration: 0.1s;
        }
        [data-core-overlay-fullscreen][data-core-overlay] {
          background-color: #fff;
          padding: 0;
          margin: 0;
        }
        .rf-digitalmat-overlay-greybg.rf-digitalmat-overlay {
          background-color: rgba(0, 0, 0, 0.85);
        }

        /* rf-digitalmat-overlay-content-main */
        [data-core-overlay-content] {
          margin: auto;
          padding: 30px;
          position: relative;
          background: #fff;
        }
        [data-core-overlay-fullscreen] [data-core-overlay-content] {
          padding: 0;
          margin: 0;
          width: 100%;
          max-width: none;
          min-height: 100vh;
          border: none;
        }
        .rc-overlay-fullscreen [data-core-overlay-content] {
          min-width: 100vw;
        }
        .rf-digitalmat-overlay-greybg .rf-digitalmat-overlay-content-main {
          background: none;
          width: 980px;
          min-width: 980px;
          margin: 0 auto;
        }

        /* rf-digitalmat-overlay-content */
        .rc-overlay-fullscreen-content {
          background: #fff;
          padding: 80px;
        }
        .rf-digitalmat-overlay-greybg .rf-digitalmat-overlay-content {
          background: none;
          padding: 115px 0 0;
          width: 980px;
          min-height: 706px;
          margin-left: auto;
          margin-right: auto;
        }

        /* FOOTER */
        .rc-overlay-footer {
          border-radius: 0 0 18px 18px;
        }
        .rf-digitalmat-overlay .rc-overlay-footer {
          font-size: 12px;
          line-height: 1.33337;
          font-weight: 400;
          letter-spacing: -0.01em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
          color: #fff;
          padding: 30px 18px 24px;
        }
        .rf-digitalmat-overlay .rc-overlay-footer a {
          color: #2997ff;
        }

        /* CLOSE */
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
        .rf-digitalmat-overlay-close {
          left: 0;
        }
        .rc-overlay-fullscreen .rc-overlay-close {
          top: 28px;
        }
        .rf-digitalmat-overlay .rf-digitalmat-overlay-close {
          top: 44px;
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
      `}</style>
    </div>
  )
}

export default ProductPortal

/* <div
                    aria-hidden='true'
                    data-core-fade-transition-wrapper=''
                    className='rf-digitalmat-overlay-tabcontent r-fade-transition-exit-done'
                    data-core-tabs-panel=''
                    id='panel-3de2be30-e0c2-11ec-bb44-35cae391b59c-1'
                    aria-labelledby='tab-3de2be30-e0c2-11ec-bb44-35cae391b59c-1'
                  >
                    <div
                      data-core-tabs=''
                      id='3de640a0-e0c2-11ec-bb44-35cae391b59c'
                      className='rf-digitalmat-inlinetabs'
                      data-core-tabs-transition-done=''
                    >
                      <div
                        data-core-tabs-panels=''
                        className='rf-digitalmat-inlinetabnav-contentsection'
                        style='height: 0px;'
                      >
                        <div
                          data-core-fade-transition-wrapper=''
                          className='rf-digitalmat-inlinetabnav-tabcontent r-fade-transition-enter-done r-fade-transition-appear-done'
                          data-core-tabs-panel=''
                          data-core-tabs-panel-selected=''
                          id='panel-3de640a0-e0c2-11ec-bb44-35cae391b59c-0'
                        >
                          <div className='row rf-digitalmat-inlinetabnav-tabcontent-container'>
                            <div className='column large-6 small-12 rf-digitalmat-gallerysection'>
                              <div className='rf-digitalmat-cardgallery with-paddlenav with-paddlenav-onhover'>
                                <div
                                  className='rc-inline-gallery rf-digitalmat-gallery'
                                  role='group'
                                  aria-label='Gallery'
                                >
                                  <div className='rc-gallery-dotnav dotnav'>
                                    <ul
                                      className=''
                                      role='tablist'
                                      aria-label='MacBook&nbsp;Pro 13-inch'
                                    >
                                      <li role='presentation'>
                                        <button
                                          id='3de68ec0-e0c2-11ec-bb44-35cae391b59c-tab-item-0'
                                          type='button'
                                          role='tab'
                                          aria-controls='3de68ec0-e0c2-11ec-bb44-35cae391b59c-gallery-item-0'
                                          aria-selected='true'
                                          aria-label='Item 1'
                                          tabIndex='0'
                                          className='rc-gallery-dotnav-item dotnav-item current'
                                          data-autom='gallery-dot-nav-0'
                                        ></button>
                                      </li>
                                      <li role='presentation'>
                                        <button
                                          id='3de68ec0-e0c2-11ec-bb44-35cae391b59c-tab-item-1'
                                          type='button'
                                          role='tab'
                                          aria-controls='3de68ec0-e0c2-11ec-bb44-35cae391b59c-gallery-item-1'
                                          aria-selected='false'
                                          aria-label='Item 2'
                                          tabIndex='-1'
                                          className='rc-gallery-dotnav-item dotnav-item'
                                          data-autom='gallery-dot-nav-1'
                                        ></button>
                                      </li>
                                      <li role='presentation'>
                                        <button
                                          id='3de68ec0-e0c2-11ec-bb44-35cae391b59c-tab-item-2'
                                          type='button'
                                          role='tab'
                                          aria-controls='3de68ec0-e0c2-11ec-bb44-35cae391b59c-gallery-item-2'
                                          aria-selected='false'
                                          aria-label='Item 3'
                                          tabIndex='-1'
                                          className='rc-gallery-dotnav-item dotnav-item'
                                          data-autom='gallery-dot-nav-2'
                                        ></button>
                                      </li>
                                      <li role='presentation'>
                                        <button
                                          id='3de68ec0-e0c2-11ec-bb44-35cae391b59c-tab-item-3'
                                          type='button'
                                          role='tab'
                                          aria-controls='3de68ec0-e0c2-11ec-bb44-35cae391b59c-gallery-item-3'
                                          aria-selected='false'
                                          aria-label='Item 4'
                                          tabIndex='-1'
                                          className='rc-gallery-dotnav-item dotnav-item'
                                          data-autom='gallery-dot-nav-3'
                                        ></button>
                                      </li>
                                      <li role='presentation'>
                                        <button
                                          id='3de68ec0-e0c2-11ec-bb44-35cae391b59c-tab-item-4'
                                          type='button'
                                          role='tab'
                                          aria-controls='3de68ec0-e0c2-11ec-bb44-35cae391b59c-gallery-item-4'
                                          aria-selected='false'
                                          aria-label='Item 5'
                                          tabIndex='-1'
                                          className='rc-gallery-dotnav-item dotnav-item'
                                          data-autom='gallery-dot-nav-4'
                                        ></button>
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    id='3de68ec0-e0c2-11ec-bb44-35cae391b59c'
                                    className='rf-digitalmat-gallery-items'
                                    data-core-gallery='true'
                                    data-core-gallery-fade='false'
                                  >
                                    <div
                                      data-core-gallery-scroller='true'
                                      style='transform: translateX(0px); width: 500%; left: 0%; transition: none 0s ease 0s;'
                                    >
                                      <div
                                        id='3de68ec0-e0c2-11ec-bb44-35cae391b59c-gallery-item-0'
                                        data-core-gallery-item='true'
                                        aria-hidden='false'
                                        className='rc-inline-gallery-item'
                                        role='tabpanel'
                                        aria-label='Item 1'
                                      >
                                        <div className='rf-digitalmat-cardgallery-img-wrapper'>
                                          <img
                                            width='364'
                                            height='333'
                                            alt=''
                                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-13-digitalmat-gallery-1-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1636156358000'
                                            srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-13-digitalmat-gallery-1-202111?wid=364&amp;hei=333&amp;fmt=png-alpha&amp;.v=1636156358000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-13-digitalmat-gallery-1-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1636156358000 2x'
                                            className='rf-digitalmat-cardgallery-img'
                                          />
                                        </div>
                                      </div>
                                      <div
                                        id='3de68ec0-e0c2-11ec-bb44-35cae391b59c-gallery-item-1'
                                        data-core-gallery-item='true'
                                        aria-hidden='true'
                                        className='rc-inline-gallery-item'
                                        role='tabpanel'
                                        aria-label='Item 2'
                                      >
                                        <div className='rf-digitalmat-cardgallery-img-wrapper'>
                                          <img
                                            width='364'
                                            height='333'
                                            alt=''
                                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-13-digitalmat-gallery-2-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635187938000'
                                            srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-13-digitalmat-gallery-2-202111?wid=364&amp;hei=333&amp;fmt=png-alpha&amp;.v=1635187938000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-13-digitalmat-gallery-2-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635187938000 2x'
                                            className='rf-digitalmat-cardgallery-img'
                                          />
                                        </div>
                                      </div>
                                      <div
                                        id='3de68ec0-e0c2-11ec-bb44-35cae391b59c-gallery-item-2'
                                        data-core-gallery-item='true'
                                        aria-hidden='true'
                                        className='rc-inline-gallery-item'
                                        role='tabpanel'
                                        aria-label='Item 3'
                                      >
                                        <div className='rf-digitalmat-cardgallery-img-wrapper'>
                                          <img
                                            width='364'
                                            height='333'
                                            alt=''
                                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-13-digitalmat-gallery-3-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635187939000'
                                            srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-13-digitalmat-gallery-3-202111?wid=364&amp;hei=333&amp;fmt=png-alpha&amp;.v=1635187939000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-13-digitalmat-gallery-3-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635187939000 2x'
                                            className='rf-digitalmat-cardgallery-img'
                                          />
                                        </div>
                                      </div>
                                      <div
                                        id='3de68ec0-e0c2-11ec-bb44-35cae391b59c-gallery-item-3'
                                        data-core-gallery-item='true'
                                        aria-hidden='true'
                                        className='rc-inline-gallery-item'
                                        role='tabpanel'
                                        aria-label='Item 4'
                                      >
                                        <div className='rf-digitalmat-cardgallery-img-wrapper'>
                                          <img
                                            width='364'
                                            height='333'
                                            alt=''
                                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-13-digitalmat-gallery-4-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1636157948000'
                                            srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-13-digitalmat-gallery-4-202111?wid=364&amp;hei=333&amp;fmt=png-alpha&amp;.v=1636157948000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-13-digitalmat-gallery-4-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1636157948000 2x'
                                            className='rf-digitalmat-cardgallery-img'
                                          />
                                        </div>
                                      </div>
                                      <div
                                        id='3de68ec0-e0c2-11ec-bb44-35cae391b59c-gallery-item-4'
                                        data-core-gallery-item='true'
                                        aria-hidden='true'
                                        className='rc-inline-gallery-item'
                                        role='tabpanel'
                                        aria-label='Item 5'
                                      >
                                        <div className='rf-digitalmat-cardgallery-img-wrapper'>
                                          <img
                                            width='364'
                                            height='333'
                                            alt=''
                                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-13-digitalmat-gallery-5-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635187941000'
                                            srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-13-digitalmat-gallery-5-202111?wid=364&amp;hei=333&amp;fmt=png-alpha&amp;.v=1635187941000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-13-digitalmat-gallery-5-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635187941000 2x'
                                            className='rf-digitalmat-cardgallery-img'
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='rc-gallery-paddlenav paddlenav paddlenav-compact'>
                                    <button
                                      type='button'
                                      disabled=''
                                      aria-hidden='true'
                                      aria-label='Previous'
                                      className='paddlenav-arrow paddlenav-arrow-previous'
                                      data-autom='paddlenav-previous'
                                    ></button>
                                    <button
                                      type='button'
                                      aria-hidden='false'
                                      aria-label='Next'
                                      className='paddlenav-arrow paddlenav-arrow-next'
                                      data-autom='paddlenav-next'
                                    ></button>
                                  </div>
                                </div>
                              </div>
                              <div className='rf-digitalmat-swatchesselection'>
                                <div className='rf-digitalmat-availabletext'>
                                  Available in 2 finishes
                                </div>
                                <ul
                                  className='rf-digitalmat-swatchescontainer'
                                  role='list'
                                >
                                  <li className='rf-digitalmat-colorimage'>
                                    <img
                                      width='32'
                                      height='32'
                                      alt='Space Gray'
                                      src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202011_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1621278170000'
                                      srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202011_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1621278170000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202011_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1621278170000 2x'
                                    />
                                  </li>
                                  <li className='rf-digitalmat-colorimage'>
                                    <img
                                      width='32'
                                      height='32'
                                      alt='Silver'
                                      src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-silver-select-202011_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1621278121000'
                                      srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-silver-select-202011_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1621278121000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-silver-select-202011_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1621278121000 2x'
                                    />
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className='column large-6 small-12 rf-digitalmat-contentsection'>
                              <h2
                                className='rf-digitalmat-overlay-header'
                                id='rf-digitalmat-overlay-label'
                                data-autom='DigitalMat-overlay-header-1'
                              >
                                MacBook&nbsp;Pro 13-inch
                              </h2>
                              <div className='rf-digitalmat-price-button'>
                                <div
                                  className='rf-digitalmat-price'
                                  data-autom='DigitalMat-price-1'
                                >
                                  <div className='rc-prices-inline rc-prices-inline-lead-with-full-price'>
                                    <div className='rc-price'>
                                      <span className='rc-prices-currentprice'>
                                        From{' '}
                                        <span className='nowrap'>$1299</span>
                                      </span>
                                      <span className='rc-prices-installmentsseparator'>
                                        {' '}
                                      </span>
                                      <span className='rc-monthly-price'>
                                        <span className='rc-prices-currentprice'>
                                          {' '}
                                          <span className='nowrap'>
                                            {' '}
                                            or $108.25
                                            <span aria-hidden='true'>
                                              /mo.{' '}
                                            </span>
                                            <span className='visuallyhidden'>
                                              {' '}
                                              per month
                                            </span>
                                          </span>{' '}
                                          <span className='nowrap'>
                                            <span className='acinstallment-term-length'>
                                              {' '}
                                              for 12{' '}
                                              <span aria-hidden='true'>
                                                mo.
                                              </span>
                                              <span className='visuallyhidden'>
                                                months
                                              </span>
                                            </span>
                                            <span className='visuallyhidden'>
                                              Footnote{' '}
                                            </span>
                                            *
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div className='rc-prices-footer'>
                                      <div className='rc-financing-message'>
                                        <span className='as-prices-installments as-price-installments'>
                                          <a
                                            href='/us/shop/go/finance'
                                            target='_blank'
                                            rel="noreferrer"
                                            name='browse'
                                            className='as-price-installments-items'
                                            data-analytics-title='learn more about financing'
                                          >
                                            {' '}
                                            <span className='more'>
                                              null% Financing Available
                                            </span>
                                          </a>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <a
                                  href='/shop/buy-mac/macbook-pro/13-inch'
                                  data-feature-name='MacBook&nbsp;Pro 13-inch modal'
                                  data-display-name='shop AOS: '
                                  data-autom='DigitalMat-buynow-button-1'
                                  className='button rf-digitalmat-button'
                                >
                                  Buy
                                  <span className='visuallyhidden'>
                                    {' '}
                                    - MacBook&nbsp;Pro 13-inch
                                  </span>
                                </a>
                              </div>
                              <div
                                className='rf-digitalmat-productdetails'
                                data-autom='DigitalMat-productdetails-1'
                              >
                                <div className='rf-digitalmat-productdetails-item'>
                                  <div className='rf-digitalmat-productdetails-content'>
                                    <svg
                                      height='35'
                                      viewBox='0 0 35 35'
                                      width='35'
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <path
                                        d='m0 0h35v35h-35z'
                                        fill='none'
                                      ></path>
                                      <path d='m24.5 6h-14a4.505 4.505 0 0 0 -4.5 4.5v14a4.505 4.505 0 0 0 4.5 4.5h14a4.505 4.505 0 0 0 4.5-4.5v-14a4.505 4.505 0 0 0 -4.5-4.5zm-11.6562 8.0908a1.4863 1.4863 0 0 1 .9912-.5166.7251.7251 0 0 1 .0127.1367 1.5243 1.5243 0 0 1 -.3545.9434 1.3167 1.3167 0 0 1 -.919.4834.5255.5255 0 0 1 -.09-.0088.6771.6771 0 0 1 -.0127-.124 1.4632 1.4632 0 0 1 .3723-.9141zm1.9394 5.4131c-.2861.4141-.59.833-1.0508.833s-.581-.2685-1.1064-.2685c-.5215 0-.71.2773-1.1289.2773s-.7129-.3848-1.0508-.8594a4.1836 4.1836 0 0 1 -.709-2.247 1.8136 1.8136 0 0 1 1.7-2.0118c.4443 0 .82.294 1.1025.294.2647 0 .68-.3115 1.1924-.3115a1.5863 1.5863 0 0 1 1.3408.6748 1.5293 1.5293 0 0 0 -.73 1.2861 1.4937 1.4937 0 0 0 .9062 1.3721 3.5765 3.5765 0 0 1 -.466.9609zm6.5361.752h-.92v-3.3565h-.0683l-1.2637 3.3565h-.6465l-1.2647-3.3565h-.0683v3.3565h-.919v-4.9317h1.1817l1.3642 3.6094h.0616l1.36-3.6094h1.1826zm3.0547 0h-1.0312v-3.958h-.0628l-1.209.8408v-.93l1.2744-.8848h1.0286z'></path>
                                    </svg>
                                    <div className='rf-digitalmat-featuretext'>
                                      Apple M1 chip delivers powerful CPU, GPU,
                                      and machine learning performance
                                    </div>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-productdetails-item'>
                                  <div className='rf-digitalmat-productdetails-content'>
                                    <svg
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                      viewBox='0 0 35 35'
                                    >
                                      <rect
                                        width='35'
                                        height='35'
                                        fill='none'
                                      ></rect>
                                      <path d='M27,14.5v6A2.5,2.5,0,0,1,24.5,23H7.5A2.5,2.5,0,0,1,5,20.5v-6A2.5,2.5,0,0,1,7.5,12h17A2.5,2.5,0,0,1,27,14.5Zm2,0v6A4.505,4.505,0,0,1,24.5,25H7.5A4.505,4.505,0,0,1,3,20.5v-6A4.505,4.505,0,0,1,7.5,10h17A4.505,4.505,0,0,1,29,14.5Zm-1,0A3.5,3.5,0,0,0,24.5,11H7.5A3.5,3.5,0,0,0,4,14.5v6A3.5,3.5,0,0,0,7.5,24h17A3.5,3.5,0,0,0,28,20.5ZM30,20a2.562,2.562,0,0,0,0-5Z'></path>
                                    </svg>
                                    <div className='rf-digitalmat-featuretext'>
                                      Up to 20 hours of battery life
                                      <span className='visuallyhidden'>
                                        footnote
                                      </span>
                                      ¹
                                    </div>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-productdetails-item'>
                                  <div className='rf-digitalmat-productdetails-content'>
                                    <svg
                                      height='35'
                                      viewBox='0 0 35 35'
                                      width='35'
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <path
                                        d='m0 0h35v35h-35z'
                                        fill='none'
                                      ></path>
                                      <path d='m29 7.5v7.5068a.5.5 0 0 1 -1 0v-7.3l-8.6445 8.6451a.5.5 0 0 1 -.7071-.7071l8.6441-8.6448h-7.2993a.5.5 0 0 1 0-1h7.5068a1.5017 1.5017 0 0 1 1.5 1.5zm-13.3555 11.1484-8.6445 8.6451v-7.3a.5.5 0 0 0 -1 0v7.5065a1.5017 1.5017 0 0 0 1.5 1.5h7.5068a.5.5 0 0 0 0-1h-7.2993l8.6441-8.6445a.5.5 0 0 0 -.7071-.7071z'></path>
                                    </svg>
                                    <div className='rf-digitalmat-featuretext'>
                                      Retina display with 500 nits of brightness
                                      for vibrant colors and incredible detail
                                    </div>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-productdetails-item'>
                                  <div className='rf-digitalmat-productdetails-content'>
                                    <svg
                                      height='35'
                                      viewBox='0 0 35 35'
                                      width='35'
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <path
                                        d='m0 0h35v35h-35z'
                                        fill='none'
                                      ></path>
                                      <path d='m21.8 4.1138-.0095.0248-3.8665 10.0957-.52 1.3577h1.4538l7.2.0027c-.0161.0244-.0359.0522-.0606.0834l-11.8059 15.1827c-.0124.0167-.0244.0315-.0356.0448l.0168-.0464 3.8675-10.0827.521-1.3581h-1.4551l-7.2083-.0022a1.1551 1.1551 0 0 1 .0689-.0965l11.8061-15.17zm.144-1.1138a1.12 1.12 0 0 0 -.2766.0365 1.28 1.28 0 0 0 -.6946.5126l-11.7954 15.1564a1.3552 1.3552 0 0 0 -.3374.8305.843.843 0 0 0 .26.6294.9246.9246 0 0 0 .6748.253h7.3316l-3.867 10.0827a1.2746 1.2746 0 0 0 -.0715.8695.886.886 0 0 0 .4348.5253.9149.9149 0 0 0 .429.1041 1.1527 1.1527 0 0 0 .2656-.0325 1.2489 1.2489 0 0 0 .6941-.5061l11.7954-15.17a1.3563 1.3563 0 0 0 .3374-.83.8233.8233 0 0 0 -.2595-.6228.94.94 0 0 0 -.6748-.2466h-7.3321l3.867-10.0957a1.2509 1.2509 0 0 0 .071-.8629.8794.8794 0 0 0 -.8518-.6334z'></path>
                                    </svg>
                                    <div className='rf-digitalmat-featuretext'>
                                      Superfast SSD storage opens apps and files
                                      in an instant
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='rf-digitalmat-explorelink'>
                                <a
                                  href='https://www.apple.com/macbook-pro-13'
                                  data-feature-name='MacBook&nbsp;Pro 13-inch modal'
                                  data-display-name='Explore MacBook Pro 13-inch further'
                                  data-autom='DigitalMat-explorelink-1'
                                  className='icon icon-after more'
                                >
                                  Explore MacBook Pro 13-inch further
                                </a>
                              </div>
                            </div>
                          </div>
                          <div
                            className='rf-digitalmat-valueprops'
                            data-autom='DigitalMat-valueprops-1'
                          >
                            <div className='rf-digitalmat-valueprops-container'>
                              <div className='rf-digitalmat-valueprops-item'>
                                <div className='rf-digitalmat-valueprops-icon'>
                                  <div className='as-svgicon-container dd-color-saffron'>
                                    <svg
                                      height='25'
                                      viewBox='0 0 25 25'
                                      width='25'
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <path
                                        d='m0 0h25v25h-25z'
                                        fill='none'
                                      ></path>
                                      <path d='m17.6406 21h-10a3.6272 3.6272 0 0 1 -3.6406-3.5v-10a3.6272 3.6272 0 0 1 3.6406-3.5h10a3.3868 3.3868 0 0 1 3.3594 3.5v10a3.3868 3.3868 0 0 1 -3.3594 3.5zm-10-16a2.6267 2.6267 0 0 0 -2.6406 2.5v10a2.6267 2.6267 0 0 0 2.6406 2.5h10a2.3863 2.3863 0 0 0 2.3594-2.5v-10a2.3863 2.3863 0 0 0 -2.3594-2.5zm-.3486 9.4941a.867.867 0 0 1 -.1133-.4218.3632.3632 0 0 1 .3945-.3868.3917.3917 0 0 1 .3868.2891 1.1691 1.1691 0 0 0 1.2031.7188c.6836 0 1.1445-.3907 1.1484-.9375.0039-.6446-.4609-1.0039-1.2148-1.0039h-.375a.3406.3406 0 1 1 0-.68h.3515a.9636.9636 0 0 0 1.0821-.9063c0-.5234-.336-.8711-1.0039-.8711a1.0481 1.0481 0 0 0 -1.086.7071c-.0937.2265-.1875.3085-.3945.3085a.3425.3425 0 0 1 -.3789-.375.88.88 0 0 1 .1055-.4257 1.8513 1.8513 0 0 1 1.7539-.9336c1.1484 0 1.8554.6289 1.8554 1.4687a1.3541 1.3541 0 0 1 -1.1875 1.3242v.02a1.3593 1.3593 0 0 1 1.3828 1.3672c0 .9921-.8671 1.6679-2.0429 1.6679a1.9792 1.9792 0 0 1 -1.8672-.9298zm4.4629-3.4257c0-.9063.4492-1.4532 1.164-1.4532.7188 0 1.1641.5469 1.1641 1.4532s-.4414 1.4648-1.1641 1.4648-1.164-.5547-1.164-1.4648zm1.6719 0c0-.6211-.1914-.9414-.5079-.9414s-.5078.3242-.5078.9453.1875.9531.5078.9531.5079-.332.5079-.957zm-.7422 4.0546a.36.36 0 0 1 .0742-.2187l1.7773-2.5664 1.7461-2.5391a.3337.3337 0 0 1 .3125-.1914.2783.2783 0 0 1 .293.27.3451.3451 0 0 1 -.07.2148l-1.7227 2.4961-1.8008 2.6172c-.0976.1406-.1718.1875-.3007.1875a.2828.2828 0 0 1 -.3089-.27zm2.8086-1.203c0-.9062.4492-1.4531 1.164-1.4531.7188 0 1.1641.543 1.1641 1.4531 0 .9024-.4414 1.4649-1.1641 1.4649-.7187-.0001-1.164-.5587-1.164-1.4649zm1.6757 0c0-.6211-.1914-.9453-.5117-.9453-.3164 0-.5078.3242-.5078.9453 0 .625.1914.9531.5078.9531.3203-.0001.5117-.3282.5117-.9531z'></path>
                                    </svg>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-valueprops-description'>
                                  <h3 className='rf-digitalmat-valueprops-header'>
                                    3% Daily Cash back with Apple&nbsp;Card
                                  </h3>
                                  <span>
                                    And pay 0% APR over 12 mo. when you choose
                                    to check out with Apple Card Monthly
                                    Installments.<sup>◊</sup>
                                  </span>
                                </div>
                              </div>
                              <div className='rf-digitalmat-valueprops-item'>
                                <div className='rf-digitalmat-valueprops-icon'>
                                  <div className='as-svgicon-container dd-color-blue-violet'>
                                    <svg
                                      viewBox='0 0 43 56'
                                      xmlns='http://www.w3.org/2000/svg'
                                      className='as-svgicon as-svgicon-financing as-svgicon-elevated as-svgicon-financingelevated'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <path
                                        d='m0 0h43v56h-43z'
                                        fill='none'
                                      ></path>
                                      <path d='m38.5 27a.99974.99974 0 0 0 -1 1v11a5.00588 5.00588 0 0 1 -5 5h-22a5.00588 5.00588 0 0 1 -5-5v-3.83594l1.543 1.543a.99989.99989 0 1 0 1.414-1.41406l-3.25-3.25a.99962.99962 0 0 0 -1.41406 0l-3.25 3.25a.99989.99989 0 1 0 1.41406 1.414l1.543-1.543v3.836a7.00818 7.00818 0 0 0 7 7h22a7.00818 7.00818 0 0 0 7-7v-11a.99974.99974 0 0 0 -1-1z'></path>
                                      <path d='m28.17188 32.71533a.31074.31074 0 0 0 -.35157.35156q0 .334.35157.334h2.62792a.29915.29915 0 0 0 .34278-.334.30692.30692 0 0 0 -.34278-.35156z'></path>
                                      <path d='m30.60156 21.32031a1.92007 1.92007 0 0 0 -1.40136-.47021h-15.75a1.94085 1.94085 0 0 0 -1.376.47021 1.81128 1.81128 0 0 0 -.50488 1.39307v10.43262h-.92481a.95033.95033 0 0 0 -.70312.29443 1.00858 1.00858 0 0 0 0 1.41553.9536.9536 0 0 0 .70312.29394h20.74416a1.96828 1.96828 0 0 0 1.415-.51855 1.78331 1.78331 0 0 0 .54492-1.35352v-8.376a1.78328 1.78328 0 0 0 -.54492-1.35352 1.96828 1.96828 0 0 0 -1.415-.51855h-.30762v-.31641a1.8689 1.8689 0 0 0 -.47949-1.39304zm-4.99609 3.58155v8.24414h-12.62109v-10.03711a.74576.74576 0 0 1 .84374-.84375h14.99415a.85949.85949 0 0 1 .63281.21093.827.827 0 0 1 .19971.55372h-2.08936a1.96828 1.96828 0 0 0 -1.415.51855 1.78328 1.78328 0 0 0 -.54496 1.35352zm5.53711-.334v-.35156h.09668a.94481.94481 0 0 1 .67676.23291.83527.83527 0 0 1 .24609.63721v8.00683a.83528.83528 0 0 1 -.24609.63721.94481.94481 0 0 1 -.67676.23291h-3.51563a.95761.95761 0 0 1 -.68554-.23291.83525.83525 0 0 1 -.2461-.63721v-8.00682a.83524.83524 0 0 1 .2461-.63721.95761.95761 0 0 1 .68554-.23291h.09668v.35156a.52959.52959 0 0 0 .14063.37793.48342.48342 0 0 0 .36914.14941h2.30273a.48342.48342 0 0 0 .36914-.14941.52959.52959 0 0 0 .14063-.37793z'></path>
                                      <path d='m42.457 19.293a.99962.99962 0 0 0 -1.41406 0l-1.543 1.543v-3.836a7.00818 7.00818 0 0 0 -7-7h-22a7.00818 7.00818 0 0 0 -7 7v11a1 1 0 0 0 2 0v-11a5.00588 5.00588 0 0 1 5-5h22a5.00588 5.00588 0 0 1 5 5v3.83594l-1.543-1.543a.99989.99989 0 0 0 -1.41394 1.41406l3.25 3.25a.99963.99963 0 0 0 1.41406 0l3.25-3.25a.99962.99962 0 0 0 -.00006-1.414z'></path>
                                    </svg>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-valueprops-description'>
                                  <h3 className='rf-digitalmat-valueprops-header'>
                                    Get more with Apple Trade In
                                  </h3>
                                  Get extra credit now through May&nbsp;31. Save
                                  $25–$2,010 toward a new Mac when you trade in
                                  your current one.**
                                </div>
                              </div>
                              <div className='rf-digitalmat-valueprops-item'>
                                <div className='rf-digitalmat-valueprops-icon'>
                                  <div className='as-svgicon-container dd-color-razzmatazz'>
                                    <svg
                                      xmlns='http://www.w3.org/2000/svg'
                                      viewBox='0 0 36 56'
                                      className='as-svgicon as-svgicon-delivery as-svgicon-elevated as-svgicon-deliverydelevated'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <g>
                                        <rect
                                          width='36'
                                          height='56'
                                          fill='none'
                                        ></rect>
                                        <path d='M33.905,17.063l-14-7.581a3.991,3.991,0,0,0-3.811,0l-14,7.581A4,4,0,0,0,0,20.581V35.419a4,4,0,0,0,2.095,3.518l14,7.581a3.989,3.989,0,0,0,3.811,0l14-7.581A4,4,0,0,0,36,35.419V20.581A4,4,0,0,0,33.905,17.063ZM17.048,11.241a1.993,1.993,0,0,1,1.9,0l13.8,7.47-6.383,3.645L11.943,14.005ZM18,27.133,3.253,18.711l6.629-3.589L24.355,23.5ZM3.048,37.178A2,2,0,0,1,2,35.419V20.581a1.955,1.955,0,0,1,.036-.262L17,28.865V44.733ZM34,35.419a2,2,0,0,1-1.048,1.759L19,44.733V28.865l14.964-8.545a1.955,1.955,0,0,1,.036.262Z'></path>
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-valueprops-description'>
                                  <h3 className='rf-digitalmat-valueprops-header'>
                                    Free delivery
                                  </h3>
                                  <span>
                                    And free returns. See checkout for delivery
                                    dates.
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-core-fade-transition-wrapper=''
                    className='rf-digitalmat-overlay-tabcontent r-fade-transition-enter-done r-fade-transition-appear-done'
                    data-core-tabs-panel=''
                    data-core-tabs-panel-selected=''
                    id='panel-3de2be30-e0c2-11ec-bb44-35cae391b59c-2'
                    aria-labelledby='tab-3de2be30-e0c2-11ec-bb44-35cae391b59c-2'
                  >
                    <div
                      data-core-tabs=''
                      id='3de7c740-e0c2-11ec-bb44-35cae391b59c'
                      className='rf-digitalmat-inlinetabs'
                      data-core-tabs-transition-done=''
                    >
                      <div
                        data-core-tabs-panels=''
                        className='rf-digitalmat-inlinetabnav-contentsection'
                        style='height: 689px;'
                      >
                        <div
                          data-core-fade-transition-wrapper=''
                          className='rf-digitalmat-inlinetabnav-tabcontent r-fade-transition-enter-done r-fade-transition-appear-done'
                          data-core-tabs-panel=''
                          data-core-tabs-panel-selected=''
                          id='panel-3de7c740-e0c2-11ec-bb44-35cae391b59c-0'
                        >
                          <div className='row rf-digitalmat-inlinetabnav-tabcontent-container'>
                            <div className='column large-6 small-12 rf-digitalmat-gallerysection'>
                              <div className='rf-digitalmat-cardgallery with-paddlenav with-paddlenav-onhover'>
                                <div
                                  className='rc-inline-gallery rf-digitalmat-gallery'
                                  role='group'
                                  aria-label='Gallery'
                                >
                                  <div className='rc-gallery-dotnav dotnav'>
                                    <ul
                                      className=''
                                      role='tablist'
                                      aria-label='MacBook&nbsp;Pro 14-inch'
                                    >
                                      <li role='presentation'>
                                        <button
                                          id='3de7c741-e0c2-11ec-bb44-35cae391b59c-tab-item-0'
                                          type='button'
                                          role='tab'
                                          aria-controls='3de7c741-e0c2-11ec-bb44-35cae391b59c-gallery-item-0'
                                          aria-selected='true'
                                          aria-label='Item 1'
                                          tabIndex='0'
                                          className='rc-gallery-dotnav-item dotnav-item current'
                                          data-autom='gallery-dot-nav-0'
                                        ></button>
                                      </li>
                                      <li role='presentation'>
                                        <button
                                          id='3de7c741-e0c2-11ec-bb44-35cae391b59c-tab-item-1'
                                          type='button'
                                          role='tab'
                                          aria-controls='3de7c741-e0c2-11ec-bb44-35cae391b59c-gallery-item-1'
                                          aria-selected='false'
                                          aria-label='Item 2'
                                          tabIndex='-1'
                                          className='rc-gallery-dotnav-item dotnav-item'
                                          data-autom='gallery-dot-nav-1'
                                        ></button>
                                      </li>
                                      <li role='presentation'>
                                        <button
                                          id='3de7c741-e0c2-11ec-bb44-35cae391b59c-tab-item-2'
                                          type='button'
                                          role='tab'
                                          aria-controls='3de7c741-e0c2-11ec-bb44-35cae391b59c-gallery-item-2'
                                          aria-selected='false'
                                          aria-label='Item 3'
                                          tabIndex='-1'
                                          className='rc-gallery-dotnav-item dotnav-item'
                                          data-autom='gallery-dot-nav-2'
                                        ></button>
                                      </li>
                                      <li role='presentation'>
                                        <button
                                          id='3de7c741-e0c2-11ec-bb44-35cae391b59c-tab-item-3'
                                          type='button'
                                          role='tab'
                                          aria-controls='3de7c741-e0c2-11ec-bb44-35cae391b59c-gallery-item-3'
                                          aria-selected='false'
                                          aria-label='Item 4'
                                          tabIndex='-1'
                                          className='rc-gallery-dotnav-item dotnav-item'
                                          data-autom='gallery-dot-nav-3'
                                        ></button>
                                      </li>
                                      <li role='presentation'>
                                        <button
                                          id='3de7c741-e0c2-11ec-bb44-35cae391b59c-tab-item-4'
                                          type='button'
                                          role='tab'
                                          aria-controls='3de7c741-e0c2-11ec-bb44-35cae391b59c-gallery-item-4'
                                          aria-selected='false'
                                          aria-label='Item 5'
                                          tabIndex='-1'
                                          className='rc-gallery-dotnav-item dotnav-item'
                                          data-autom='gallery-dot-nav-4'
                                        ></button>
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    id='3de7c741-e0c2-11ec-bb44-35cae391b59c'
                                    className='rf-digitalmat-gallery-items'
                                    data-core-gallery='true'
                                    data-core-gallery-fade='false'
                                  >
                                    <div
                                      data-core-gallery-scroller='true'
                                      style='transform: translateX(0px); width: 500%; left: 0%; transition: none 0s ease 0s;'
                                    >
                                      <div
                                        id='3de7c741-e0c2-11ec-bb44-35cae391b59c-gallery-item-0'
                                        data-core-gallery-item='true'
                                        aria-hidden='false'
                                        className='rc-inline-gallery-item'
                                        role='tabpanel'
                                        aria-label='Item 1'
                                      >
                                        <div className='rf-digitalmat-cardgallery-img-wrapper'>
                                          <img
                                            width='364'
                                            height='333'
                                            alt=''
                                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-14-digitalmat-gallery-1-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635183223000'
                                            srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-14-digitalmat-gallery-1-202111?wid=364&amp;hei=333&amp;fmt=png-alpha&amp;.v=1635183223000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-14-digitalmat-gallery-1-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635183223000 2x'
                                            className='rf-digitalmat-cardgallery-img'
                                          />
                                        </div>
                                      </div>
                                      <div
                                        id='3de7c741-e0c2-11ec-bb44-35cae391b59c-gallery-item-1'
                                        data-core-gallery-item='true'
                                        aria-hidden='true'
                                        className='rc-inline-gallery-item'
                                        role='tabpanel'
                                        aria-label='Item 2'
                                      >
                                        <div className='rf-digitalmat-cardgallery-img-wrapper'>
                                          <img
                                            width='364'
                                            height='333'
                                            alt=''
                                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-14-digitalmat-gallery-2-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635183221000'
                                            srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-14-digitalmat-gallery-2-202111?wid=364&amp;hei=333&amp;fmt=png-alpha&amp;.v=1635183221000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-14-digitalmat-gallery-2-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635183221000 2x'
                                            className='rf-digitalmat-cardgallery-img'
                                          />
                                        </div>
                                      </div>
                                      <div
                                        id='3de7c741-e0c2-11ec-bb44-35cae391b59c-gallery-item-2'
                                        data-core-gallery-item='true'
                                        aria-hidden='true'
                                        className='rc-inline-gallery-item'
                                        role='tabpanel'
                                        aria-label='Item 3'
                                      >
                                        <div className='rf-digitalmat-cardgallery-img-wrapper'>
                                          <img
                                            width='364'
                                            height='333'
                                            alt=''
                                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-14-digitalmat-gallery-3-202111_GEO_US?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635183378000'
                                            srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-14-digitalmat-gallery-3-202111_GEO_US?wid=364&amp;hei=333&amp;fmt=png-alpha&amp;.v=1635183378000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-14-digitalmat-gallery-3-202111_GEO_US?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635183378000 2x'
                                            className='rf-digitalmat-cardgallery-img'
                                          />
                                        </div>
                                      </div>
                                      <div
                                        id='3de7c741-e0c2-11ec-bb44-35cae391b59c-gallery-item-3'
                                        data-core-gallery-item='true'
                                        aria-hidden='true'
                                        className='rc-inline-gallery-item'
                                        role='tabpanel'
                                        aria-label='Item 4'
                                      >
                                        <div className='rf-digitalmat-cardgallery-img-wrapper'>
                                          <img
                                            width='364'
                                            height='333'
                                            alt=''
                                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-14-digitalmat-gallery-4-202111_GEO_US?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635183531000'
                                            srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-14-digitalmat-gallery-4-202111_GEO_US?wid=364&amp;hei=333&amp;fmt=png-alpha&amp;.v=1635183531000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-14-digitalmat-gallery-4-202111_GEO_US?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635183531000 2x'
                                            className='rf-digitalmat-cardgallery-img'
                                          />
                                        </div>
                                      </div>
                                      <div
                                        id='3de7c741-e0c2-11ec-bb44-35cae391b59c-gallery-item-4'
                                        data-core-gallery-item='true'
                                        aria-hidden='true'
                                        className='rc-inline-gallery-item'
                                        role='tabpanel'
                                        aria-label='Item 5'
                                      >
                                        <div className='rf-digitalmat-cardgallery-img-wrapper'>
                                          <img
                                            width='364'
                                            height='333'
                                            alt=''
                                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-14-digitalmat-gallery-5-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635183222000'
                                            srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-14-digitalmat-gallery-5-202111?wid=364&amp;hei=333&amp;fmt=png-alpha&amp;.v=1635183222000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-14-digitalmat-gallery-5-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635183222000 2x'
                                            className='rf-digitalmat-cardgallery-img'
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='rc-gallery-paddlenav paddlenav paddlenav-compact'>
                                    <button
                                      type='button'
                                      disabled=''
                                      aria-hidden='true'
                                      aria-label='Previous'
                                      className='paddlenav-arrow paddlenav-arrow-previous'
                                      data-autom='paddlenav-previous'
                                    ></button>
                                    <button
                                      type='button'
                                      aria-hidden='false'
                                      aria-label='Next'
                                      className='paddlenav-arrow paddlenav-arrow-next'
                                      data-autom='paddlenav-next'
                                    ></button>
                                  </div>
                                </div>
                              </div>
                              <div className='rf-digitalmat-swatchesselection'>
                                <div className='rf-digitalmat-availabletext'>
                                  Available in 2 finishes
                                </div>
                                <ul
                                  className='rf-digitalmat-swatchescontainer'
                                  role='list'
                                >
                                  <li className='rf-digitalmat-colorimage'>
                                    <img
                                      width='32'
                                      height='32'
                                      alt='Space Gray'
                                      src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202110_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1632788569000'
                                      srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202110_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1632788569000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202110_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1632788569000 2x'
                                    />
                                  </li>
                                  <li className='rf-digitalmat-colorimage'>
                                    <img
                                      width='32'
                                      height='32'
                                      alt='Silver'
                                      src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-silver-select-202110_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1632788569000'
                                      srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-silver-select-202110_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1632788569000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-silver-select-202110_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1632788569000 2x'
                                    />
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className='column large-6 small-12 rf-digitalmat-contentsection'>
                              <h2
                                className='rf-digitalmat-overlay-header'
                                id='rf-digitalmat-overlay-label'
                                data-autom='DigitalMat-overlay-header-2'
                              >
                                MacBook&nbsp;Pro 14-inch
                              </h2>
                              <div className='rf-digitalmat-price-button'>
                                <div
                                  className='rf-digitalmat-price'
                                  data-autom='DigitalMat-price-2'
                                >
                                  <div className='rc-prices-inline rc-prices-inline-lead-with-full-price'>
                                    <div className='rc-price'>
                                      <span className='rc-prices-currentprice'>
                                        From{' '}
                                        <span className='nowrap'>$1999</span>
                                      </span>
                                      <span className='rc-prices-installmentsseparator'>
                                        {' '}
                                      </span>
                                      <span className='rc-monthly-price'>
                                        <span className='rc-prices-currentprice'>
                                          {' '}
                                          <span className='nowrap'>
                                            {' '}
                                            or $166.58
                                            <span aria-hidden='true'>
                                              /mo.{' '}
                                            </span>
                                            <span className='visuallyhidden'>
                                              {' '}
                                              per month
                                            </span>
                                          </span>{' '}
                                          <span className='nowrap'>
                                            <span className='acinstallment-term-length'>
                                              {' '}
                                              for 12{' '}
                                              <span aria-hidden='true'>
                                                mo.
                                              </span>
                                              <span className='visuallyhidden'>
                                                months
                                              </span>
                                            </span>
                                            <span className='visuallyhidden'>
                                              Footnote{' '}
                                            </span>
                                            *
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div className='rc-prices-footer'>
                                      <div className='rc-financing-message'>
                                        <span className='as-prices-installments as-price-installments'>
                                          <a
                                            href='/us/shop/go/finance'
                                            target='_blank'
                                            rel="noreferrer"
                                            name='browse'
                                            className='as-price-installments-items'
                                            data-analytics-title='learn more about financing'
                                          >
                                            {' '}
                                            <span className='more'>
                                              null% Financing Available
                                            </span>
                                          </a>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <a
                                  href='/shop/buy-mac/macbook-pro/14-inch'
                                  data-feature-name='MacBook&nbsp;Pro 14-inch modal'
                                  data-display-name='shop AOS: '
                                  data-autom='DigitalMat-buynow-button-2'
                                  className='button rf-digitalmat-button'
                                >
                                  Buy
                                  <span className='visuallyhidden'>
                                    {' '}
                                    - MacBook&nbsp;Pro 14-inch
                                  </span>
                                </a>
                              </div>
                              <div
                                className='rf-digitalmat-productdetails'
                                data-autom='DigitalMat-productdetails-2'
                              >
                                <div className='rf-digitalmat-productdetails-item'>
                                  <div className='rf-digitalmat-productdetails-content'>
                                    <svg
                                      height='35'
                                      viewBox='0 0 35 35'
                                      width='35'
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <path
                                        d='m0 0h35v35h-35z'
                                        fill='none'
                                      ></path>
                                      <path d='m24.5 6h-14a4.505 4.505 0 0 0 -4.5 4.5v14a4.505 4.505 0 0 0 4.5 4.5h14a4.505 4.505 0 0 0 4.5-4.5v-14a4.505 4.505 0 0 0 -4.5-4.5zm-11.6562 8.0908a1.4863 1.4863 0 0 1 .9912-.5166.7251.7251 0 0 1 .0127.1367 1.5243 1.5243 0 0 1 -.3545.9434 1.3167 1.3167 0 0 1 -.919.4834.5255.5255 0 0 1 -.09-.0088.6771.6771 0 0 1 -.0127-.124 1.4632 1.4632 0 0 1 .3723-.9141zm1.9394 5.4131c-.2861.4141-.59.833-1.0508.833s-.581-.2685-1.1064-.2685c-.5215 0-.71.2773-1.1289.2773s-.7129-.3848-1.0508-.8594a4.1836 4.1836 0 0 1 -.709-2.247 1.8136 1.8136 0 0 1 1.7-2.0118c.4443 0 .82.294 1.1025.294.2647 0 .68-.3115 1.1924-.3115a1.5863 1.5863 0 0 1 1.3408.6748 1.5293 1.5293 0 0 0 -.73 1.2861 1.4937 1.4937 0 0 0 .9062 1.3721 3.5765 3.5765 0 0 1 -.466.9609zm6.5361.752h-.92v-3.3565h-.0683l-1.2637 3.3565h-.6465l-1.2647-3.3565h-.0683v3.3565h-.919v-4.9317h1.1817l1.3642 3.6094h.0616l1.36-3.6094h1.1826zm3.0547 0h-1.0312v-3.958h-.0628l-1.209.8408v-.93l1.2744-.8848h1.0286z'></path>
                                    </svg>
                                    <div className='rf-digitalmat-featuretext'>
                                      New Apple M1 Pro and M1&nbsp;Max chips
                                      deliver incredible performance
                                    </div>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-productdetails-item'>
                                  <div className='rf-digitalmat-productdetails-content'>
                                    <svg
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                      viewBox='0 0 35 35'
                                    >
                                      <rect
                                        width='35'
                                        height='35'
                                        fill='none'
                                      ></rect>
                                      <path d='M27,14.5v6A2.5,2.5,0,0,1,24.5,23H7.5A2.5,2.5,0,0,1,5,20.5v-6A2.5,2.5,0,0,1,7.5,12h17A2.5,2.5,0,0,1,27,14.5Zm2,0v6A4.505,4.505,0,0,1,24.5,25H7.5A4.505,4.505,0,0,1,3,20.5v-6A4.505,4.505,0,0,1,7.5,10h17A4.505,4.505,0,0,1,29,14.5Zm-1,0A3.5,3.5,0,0,0,24.5,11H7.5A3.5,3.5,0,0,0,4,14.5v6A3.5,3.5,0,0,0,7.5,24h17A3.5,3.5,0,0,0,28,20.5ZM30,20a2.562,2.562,0,0,0,0-5Z'></path>
                                    </svg>
                                    <div className='rf-digitalmat-featuretext'>
                                      Up to 17 hours of battery life,
                                      <span className='visuallyhidden'>
                                        footnote
                                      </span>
                                      ¹ thanks to the efficiency of Apple
                                      silicon
                                    </div>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-productdetails-item'>
                                  <div className='rf-digitalmat-productdetails-content'>
                                    <svg
                                      height='35'
                                      viewBox='0 0 35 35'
                                      width='35'
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <path
                                        d='m0 0h35v35h-35z'
                                        fill='none'
                                      ></path>
                                      <path d='m29 7.5v7.5068a.5.5 0 0 1 -1 0v-7.3l-8.6445 8.6451a.5.5 0 0 1 -.7071-.7071l8.6441-8.6448h-7.2993a.5.5 0 0 1 0-1h7.5068a1.5017 1.5017 0 0 1 1.5 1.5zm-13.3555 11.1484-8.6445 8.6451v-7.3a.5.5 0 0 0 -1 0v7.5065a1.5017 1.5017 0 0 0 1.5 1.5h7.5068a.5.5 0 0 0 0-1h-7.2993l8.6441-8.6445a.5.5 0 0 0 -.7071-.7071z'></path>
                                    </svg>
                                    <div className='rf-digitalmat-featuretext'>
                                      Liquid Retina XDR display features extreme
                                      dynamic range and incredible contrast
                                      ratio
                                    </div>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-productdetails-item'>
                                  <div className='rf-digitalmat-productdetails-content'>
                                    <svg
                                      viewBox='0 0 35 35'
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <g>
                                        <rect
                                          width='35'
                                          height='35'
                                          fill='none'
                                        ></rect>
                                        <g>
                                          <path
                                            d='M17.5,12A5.5,5.5,0,1,0,23,17.5,5.507,5.507,0,0,0,17.5,12Zm0,10A4.5,4.5,0,1,1,22,17.5,4.5,4.5,0,0,1,17.5,22Z'
                                            fill='#1d1d1f'
                                          ></path>
                                          <path
                                            d='M26.5,9H24.133a1,1,0,0,1-.852-.476l-.756-1.173A2.682,2.682,0,0,0,20.2,6H14.8a2.678,2.678,0,0,0-2.321,1.343l-.761,1.181A1,1,0,0,1,10.867,9H8.5A3.5,3.5,0,0,0,5,12.5v11A3.5,3.5,0,0,0,8.5,27h18A3.5,3.5,0,0,0,30,23.5v-11A3.5,3.5,0,0,0,26.5,9ZM29,23.5A2.5,2.5,0,0,1,26.5,26H8.5A2.5,2.5,0,0,1,6,23.5v-11A2.5,2.5,0,0,1,8.5,10h2.367a2,2,0,0,0,1.7-.952l.766-1.189A1.692,1.692,0,0,1,14.8,7h5.4a1.7,1.7,0,0,1,1.47.867l.761,1.181a2,2,0,0,0,1.7.952H26.5A2.5,2.5,0,0,1,29,12.5Z'
                                            fill='#1d1d1f'
                                          ></path>
                                        </g>
                                      </g>
                                    </svg>
                                    <div className='rf-digitalmat-featuretext'>
                                      New 1080p FaceTime HD camera,
                                      high-fidelity six-speaker sound system,
                                      and studio-quality mic array{' '}
                                    </div>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-productdetails-item'>
                                  <div className='rf-digitalmat-productdetails-content'>
                                    <svg
                                      width='35'
                                      height='35'
                                      viewBox='0 0 35 35'
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <g>
                                        <rect
                                          width='35'
                                          height='35'
                                          fill='none'
                                        ></rect>
                                        <path
                                          d='M21.75,9.272V20.2143a1.2672,1.2672,0,0,1-.3408.9574,1.3791,1.3791,0,0,1-.9946.3283H18V32H17V21.5H14.5718a1.36,1.36,0,0,1-.981-.3283,1.2672,1.2672,0,0,1-.3408-.9574V9.272a1.2453,1.2453,0,0,1,.3408-.9506A1.38,1.38,0,0,1,14.5718,8h5.8428a1.4,1.4,0,0,1,.9946.3214A1.2453,1.2453,0,0,1,21.75,9.272Zm-2-5.0145a1.2374,1.2374,0,0,0-.3335-.9431A1.3874,1.3874,0,0,0,18.4307,3H16.5693a1.3944,1.3944,0,0,0-.979.3144,1.2222,1.2222,0,0,0-.34.9431V7h4.5Z'
                                          fill='#1d1d1f'
                                        ></path>
                                      </g>
                                    </svg>
                                    Thunderbolt 4, HDMI, SDXC, and MagSafe 3 for
                                    fast and versatile connectivity
                                  </div>
                                </div>
                              </div>
                              <div className='rf-digitalmat-explorelink'>
                                <a
                                  href='https://www.apple.com/macbook-pro-14-and-16'
                                  data-feature-name='MacBook&nbsp;Pro 14-inch modal'
                                  data-display-name='Explore MacBook&nbsp;Pro 14-inch further'
                                  data-autom='DigitalMat-explorelink-2'
                                  className='icon icon-after more'
                                >
                                  Explore MacBook&nbsp;Pro 14-inch further
                                </a>
                              </div>
                            </div>
                          </div>
                          <div
                            className='rf-digitalmat-valueprops'
                            data-autom='DigitalMat-valueprops-2'
                          >
                            <div className='rf-digitalmat-valueprops-container'>
                              <div className='rf-digitalmat-valueprops-item'>
                                <div className='rf-digitalmat-valueprops-icon'>
                                  <div className='as-svgicon-container dd-color-saffron'>
                                    <svg
                                      height='25'
                                      viewBox='0 0 25 25'
                                      width='25'
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <path
                                        d='m0 0h25v25h-25z'
                                        fill='none'
                                      ></path>
                                      <path d='m17.6406 21h-10a3.6272 3.6272 0 0 1 -3.6406-3.5v-10a3.6272 3.6272 0 0 1 3.6406-3.5h10a3.3868 3.3868 0 0 1 3.3594 3.5v10a3.3868 3.3868 0 0 1 -3.3594 3.5zm-10-16a2.6267 2.6267 0 0 0 -2.6406 2.5v10a2.6267 2.6267 0 0 0 2.6406 2.5h10a2.3863 2.3863 0 0 0 2.3594-2.5v-10a2.3863 2.3863 0 0 0 -2.3594-2.5zm-.3486 9.4941a.867.867 0 0 1 -.1133-.4218.3632.3632 0 0 1 .3945-.3868.3917.3917 0 0 1 .3868.2891 1.1691 1.1691 0 0 0 1.2031.7188c.6836 0 1.1445-.3907 1.1484-.9375.0039-.6446-.4609-1.0039-1.2148-1.0039h-.375a.3406.3406 0 1 1 0-.68h.3515a.9636.9636 0 0 0 1.0821-.9063c0-.5234-.336-.8711-1.0039-.8711a1.0481 1.0481 0 0 0 -1.086.7071c-.0937.2265-.1875.3085-.3945.3085a.3425.3425 0 0 1 -.3789-.375.88.88 0 0 1 .1055-.4257 1.8513 1.8513 0 0 1 1.7539-.9336c1.1484 0 1.8554.6289 1.8554 1.4687a1.3541 1.3541 0 0 1 -1.1875 1.3242v.02a1.3593 1.3593 0 0 1 1.3828 1.3672c0 .9921-.8671 1.6679-2.0429 1.6679a1.9792 1.9792 0 0 1 -1.8672-.9298zm4.4629-3.4257c0-.9063.4492-1.4532 1.164-1.4532.7188 0 1.1641.5469 1.1641 1.4532s-.4414 1.4648-1.1641 1.4648-1.164-.5547-1.164-1.4648zm1.6719 0c0-.6211-.1914-.9414-.5079-.9414s-.5078.3242-.5078.9453.1875.9531.5078.9531.5079-.332.5079-.957zm-.7422 4.0546a.36.36 0 0 1 .0742-.2187l1.7773-2.5664 1.7461-2.5391a.3337.3337 0 0 1 .3125-.1914.2783.2783 0 0 1 .293.27.3451.3451 0 0 1 -.07.2148l-1.7227 2.4961-1.8008 2.6172c-.0976.1406-.1718.1875-.3007.1875a.2828.2828 0 0 1 -.3089-.27zm2.8086-1.203c0-.9062.4492-1.4531 1.164-1.4531.7188 0 1.1641.543 1.1641 1.4531 0 .9024-.4414 1.4649-1.1641 1.4649-.7187-.0001-1.164-.5587-1.164-1.4649zm1.6757 0c0-.6211-.1914-.9453-.5117-.9453-.3164 0-.5078.3242-.5078.9453 0 .625.1914.9531.5078.9531.3203-.0001.5117-.3282.5117-.9531z'></path>
                                    </svg>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-valueprops-description'>
                                  <h3 className='rf-digitalmat-valueprops-header'>
                                    3% Daily Cash back with Apple&nbsp;Card
                                  </h3>
                                  <span>
                                    And pay 0% APR over 12 mo. when you choose
                                    to check out with Apple Card Monthly
                                    Installments.<sup>◊</sup>
                                  </span>
                                </div>
                              </div>
                              <div className='rf-digitalmat-valueprops-item'>
                                <div className='rf-digitalmat-valueprops-icon'>
                                  <div className='as-svgicon-container dd-color-blue-violet'>
                                    <svg
                                      viewBox='0 0 43 56'
                                      xmlns='http://www.w3.org/2000/svg'
                                      className='as-svgicon as-svgicon-financing as-svgicon-elevated as-svgicon-financingelevated'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <path
                                        d='m0 0h43v56h-43z'
                                        fill='none'
                                      ></path>
                                      <path d='m38.5 27a.99974.99974 0 0 0 -1 1v11a5.00588 5.00588 0 0 1 -5 5h-22a5.00588 5.00588 0 0 1 -5-5v-3.83594l1.543 1.543a.99989.99989 0 1 0 1.414-1.41406l-3.25-3.25a.99962.99962 0 0 0 -1.41406 0l-3.25 3.25a.99989.99989 0 1 0 1.41406 1.414l1.543-1.543v3.836a7.00818 7.00818 0 0 0 7 7h22a7.00818 7.00818 0 0 0 7-7v-11a.99974.99974 0 0 0 -1-1z'></path>
                                      <path d='m28.17188 32.71533a.31074.31074 0 0 0 -.35157.35156q0 .334.35157.334h2.62792a.29915.29915 0 0 0 .34278-.334.30692.30692 0 0 0 -.34278-.35156z'></path>
                                      <path d='m30.60156 21.32031a1.92007 1.92007 0 0 0 -1.40136-.47021h-15.75a1.94085 1.94085 0 0 0 -1.376.47021 1.81128 1.81128 0 0 0 -.50488 1.39307v10.43262h-.92481a.95033.95033 0 0 0 -.70312.29443 1.00858 1.00858 0 0 0 0 1.41553.9536.9536 0 0 0 .70312.29394h20.74416a1.96828 1.96828 0 0 0 1.415-.51855 1.78331 1.78331 0 0 0 .54492-1.35352v-8.376a1.78328 1.78328 0 0 0 -.54492-1.35352 1.96828 1.96828 0 0 0 -1.415-.51855h-.30762v-.31641a1.8689 1.8689 0 0 0 -.47949-1.39304zm-4.99609 3.58155v8.24414h-12.62109v-10.03711a.74576.74576 0 0 1 .84374-.84375h14.99415a.85949.85949 0 0 1 .63281.21093.827.827 0 0 1 .19971.55372h-2.08936a1.96828 1.96828 0 0 0 -1.415.51855 1.78328 1.78328 0 0 0 -.54496 1.35352zm5.53711-.334v-.35156h.09668a.94481.94481 0 0 1 .67676.23291.83527.83527 0 0 1 .24609.63721v8.00683a.83528.83528 0 0 1 -.24609.63721.94481.94481 0 0 1 -.67676.23291h-3.51563a.95761.95761 0 0 1 -.68554-.23291.83525.83525 0 0 1 -.2461-.63721v-8.00682a.83524.83524 0 0 1 .2461-.63721.95761.95761 0 0 1 .68554-.23291h.09668v.35156a.52959.52959 0 0 0 .14063.37793.48342.48342 0 0 0 .36914.14941h2.30273a.48342.48342 0 0 0 .36914-.14941.52959.52959 0 0 0 .14063-.37793z'></path>
                                      <path d='m42.457 19.293a.99962.99962 0 0 0 -1.41406 0l-1.543 1.543v-3.836a7.00818 7.00818 0 0 0 -7-7h-22a7.00818 7.00818 0 0 0 -7 7v11a1 1 0 0 0 2 0v-11a5.00588 5.00588 0 0 1 5-5h22a5.00588 5.00588 0 0 1 5 5v3.83594l-1.543-1.543a.99989.99989 0 0 0 -1.41394 1.41406l3.25 3.25a.99963.99963 0 0 0 1.41406 0l3.25-3.25a.99962.99962 0 0 0 -.00006-1.414z'></path>
                                    </svg>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-valueprops-description'>
                                  <h3 className='rf-digitalmat-valueprops-header'>
                                    Get more with Apple Trade In
                                  </h3>
                                  Get extra credit now through May&nbsp;31. Save
                                  $25–$2,010 toward a new Mac when you trade in
                                  your current one.**
                                </div>
                              </div>
                              <div className='rf-digitalmat-valueprops-item'>
                                <div className='rf-digitalmat-valueprops-icon'>
                                  <div className='as-svgicon-container dd-color-razzmatazz'>
                                    <svg
                                      xmlns='http://www.w3.org/2000/svg'
                                      viewBox='0 0 36 56'
                                      className='as-svgicon as-svgicon-delivery as-svgicon-elevated as-svgicon-deliverydelevated'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <g>
                                        <rect
                                          width='36'
                                          height='56'
                                          fill='none'
                                        ></rect>
                                        <path d='M33.905,17.063l-14-7.581a3.991,3.991,0,0,0-3.811,0l-14,7.581A4,4,0,0,0,0,20.581V35.419a4,4,0,0,0,2.095,3.518l14,7.581a3.989,3.989,0,0,0,3.811,0l14-7.581A4,4,0,0,0,36,35.419V20.581A4,4,0,0,0,33.905,17.063ZM17.048,11.241a1.993,1.993,0,0,1,1.9,0l13.8,7.47-6.383,3.645L11.943,14.005ZM18,27.133,3.253,18.711l6.629-3.589L24.355,23.5ZM3.048,37.178A2,2,0,0,1,2,35.419V20.581a1.955,1.955,0,0,1,.036-.262L17,28.865V44.733ZM34,35.419a2,2,0,0,1-1.048,1.759L19,44.733V28.865l14.964-8.545a1.955,1.955,0,0,1,.036.262Z'></path>
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-valueprops-description'>
                                  <h3 className='rf-digitalmat-valueprops-header'>
                                    Free delivery
                                  </h3>
                                  <span>
                                    And free returns. See checkout for delivery
                                    dates.
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    aria-hidden='true'
                    data-core-fade-transition-wrapper=''
                    className='rf-digitalmat-overlay-tabcontent r-fade-transition-exit-done'
                    data-core-tabs-panel=''
                    id='panel-3de2be30-e0c2-11ec-bb44-35cae391b59c-3'
                    aria-labelledby='tab-3de2be30-e0c2-11ec-bb44-35cae391b59c-3'
                  >
                    <div
                      data-core-tabs=''
                      id='3deb49b0-e0c2-11ec-bb44-35cae391b59c'
                      className='rf-digitalmat-inlinetabs'
                      data-core-tabs-transition-done=''
                    >
                      <div
                        data-core-tabs-panels=''
                        className='rf-digitalmat-inlinetabnav-contentsection'
                        style='height: 0px;'
                      >
                        <div
                          data-core-fade-transition-wrapper=''
                          className='rf-digitalmat-inlinetabnav-tabcontent r-fade-transition-enter-done r-fade-transition-appear-done'
                          data-core-tabs-panel=''
                          data-core-tabs-panel-selected=''
                          id='panel-3deb49b0-e0c2-11ec-bb44-35cae391b59c-0'
                        >
                          <div className='row rf-digitalmat-inlinetabnav-tabcontent-container'>
                            <div className='column large-6 small-12 rf-digitalmat-gallerysection'>
                              <div className='rf-digitalmat-cardgallery with-paddlenav with-paddlenav-onhover'>
                                <div
                                  className='rc-inline-gallery rf-digitalmat-gallery'
                                  role='group'
                                  aria-label='Gallery'
                                >
                                  <div className='rc-gallery-dotnav dotnav'>
                                    <ul
                                      className=''
                                      role='tablist'
                                      aria-label='MacBook&nbsp;Pro 16-inch'
                                    >
                                      <li role='presentation'>
                                        <button
                                          id='3deb49b1-e0c2-11ec-bb44-35cae391b59c-tab-item-0'
                                          type='button'
                                          role='tab'
                                          aria-controls='3deb49b1-e0c2-11ec-bb44-35cae391b59c-gallery-item-0'
                                          aria-selected='true'
                                          aria-label='Item 1'
                                          tabIndex='0'
                                          className='rc-gallery-dotnav-item dotnav-item current'
                                          data-autom='gallery-dot-nav-0'
                                        ></button>
                                      </li>
                                      <li role='presentation'>
                                        <button
                                          id='3deb49b1-e0c2-11ec-bb44-35cae391b59c-tab-item-1'
                                          type='button'
                                          role='tab'
                                          aria-controls='3deb49b1-e0c2-11ec-bb44-35cae391b59c-gallery-item-1'
                                          aria-selected='false'
                                          aria-label='Item 2'
                                          tabIndex='-1'
                                          className='rc-gallery-dotnav-item dotnav-item'
                                          data-autom='gallery-dot-nav-1'
                                        ></button>
                                      </li>
                                      <li role='presentation'>
                                        <button
                                          id='3deb49b1-e0c2-11ec-bb44-35cae391b59c-tab-item-2'
                                          type='button'
                                          role='tab'
                                          aria-controls='3deb49b1-e0c2-11ec-bb44-35cae391b59c-gallery-item-2'
                                          aria-selected='false'
                                          aria-label='Item 3'
                                          tabIndex='-1'
                                          className='rc-gallery-dotnav-item dotnav-item'
                                          data-autom='gallery-dot-nav-2'
                                        ></button>
                                      </li>
                                      <li role='presentation'>
                                        <button
                                          id='3deb49b1-e0c2-11ec-bb44-35cae391b59c-tab-item-3'
                                          type='button'
                                          role='tab'
                                          aria-controls='3deb49b1-e0c2-11ec-bb44-35cae391b59c-gallery-item-3'
                                          aria-selected='false'
                                          aria-label='Item 4'
                                          tabIndex='-1'
                                          className='rc-gallery-dotnav-item dotnav-item'
                                          data-autom='gallery-dot-nav-3'
                                        ></button>
                                      </li>
                                      <li role='presentation'>
                                        <button
                                          id='3deb49b1-e0c2-11ec-bb44-35cae391b59c-tab-item-4'
                                          type='button'
                                          role='tab'
                                          aria-controls='3deb49b1-e0c2-11ec-bb44-35cae391b59c-gallery-item-4'
                                          aria-selected='false'
                                          aria-label='Item 5'
                                          tabIndex='-1'
                                          className='rc-gallery-dotnav-item dotnav-item'
                                          data-autom='gallery-dot-nav-4'
                                        ></button>
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    id='3deb49b1-e0c2-11ec-bb44-35cae391b59c'
                                    className='rf-digitalmat-gallery-items'
                                    data-core-gallery='true'
                                    data-core-gallery-fade='false'
                                  >
                                    <div
                                      data-core-gallery-scroller='true'
                                      style='transform: translateX(0px); width: 500%; left: 0%; transition: none 0s ease 0s;'
                                    >
                                      <div
                                        id='3deb49b1-e0c2-11ec-bb44-35cae391b59c-gallery-item-0'
                                        data-core-gallery-item='true'
                                        aria-hidden='false'
                                        className='rc-inline-gallery-item'
                                        role='tabpanel'
                                        aria-label='Item 1'
                                      >
                                        <div className='rf-digitalmat-cardgallery-img-wrapper'>
                                          <img
                                            width='364'
                                            height='333'
                                            alt=''
                                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-16-digitalmat-gallery-1-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635206712000'
                                            srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-16-digitalmat-gallery-1-202111?wid=364&amp;hei=333&amp;fmt=png-alpha&amp;.v=1635206712000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-16-digitalmat-gallery-1-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635206712000 2x'
                                            className='rf-digitalmat-cardgallery-img'
                                          />
                                        </div>
                                      </div>
                                      <div
                                        id='3deb49b1-e0c2-11ec-bb44-35cae391b59c-gallery-item-1'
                                        data-core-gallery-item='true'
                                        aria-hidden='true'
                                        className='rc-inline-gallery-item'
                                        role='tabpanel'
                                        aria-label='Item 2'
                                      >
                                        <div className='rf-digitalmat-cardgallery-img-wrapper'>
                                          <img
                                            width='364'
                                            height='333'
                                            alt=''
                                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-16-digitalmat-gallery-2-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635206712000'
                                            srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-16-digitalmat-gallery-2-202111?wid=364&amp;hei=333&amp;fmt=png-alpha&amp;.v=1635206712000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-16-digitalmat-gallery-2-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635206712000 2x'
                                            className='rf-digitalmat-cardgallery-img'
                                          />
                                        </div>
                                      </div>
                                      <div
                                        id='3deb49b1-e0c2-11ec-bb44-35cae391b59c-gallery-item-2'
                                        data-core-gallery-item='true'
                                        aria-hidden='true'
                                        className='rc-inline-gallery-item'
                                        role='tabpanel'
                                        aria-label='Item 3'
                                      >
                                        <div className='rf-digitalmat-cardgallery-img-wrapper'>
                                          <img
                                            width='364'
                                            height='333'
                                            alt=''
                                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-16-digitalmat-gallery-3-202111_GEO_US?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635183625000'
                                            srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-16-digitalmat-gallery-3-202111_GEO_US?wid=364&amp;hei=333&amp;fmt=png-alpha&amp;.v=1635183625000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-16-digitalmat-gallery-3-202111_GEO_US?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635183625000 2x'
                                            className='rf-digitalmat-cardgallery-img'
                                          />
                                        </div>
                                      </div>
                                      <div
                                        id='3deb49b1-e0c2-11ec-bb44-35cae391b59c-gallery-item-3'
                                        data-core-gallery-item='true'
                                        aria-hidden='true'
                                        className='rc-inline-gallery-item'
                                        role='tabpanel'
                                        aria-label='Item 4'
                                      >
                                        <div className='rf-digitalmat-cardgallery-img-wrapper'>
                                          <img
                                            width='364'
                                            height='333'
                                            alt=''
                                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-16-digitalmat-gallery-4-202111_GEO_US?wid=728&amp;hei=666&amp;fmt=jpeg&amp;qlt=90&amp;.v=1635183712000'
                                            srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-16-digitalmat-gallery-4-202111_GEO_US?wid=364&amp;hei=333&amp;fmt=jpeg&amp;qlt=95&amp;.v=1635183712000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-16-digitalmat-gallery-4-202111_GEO_US?wid=728&amp;hei=666&amp;fmt=jpeg&amp;qlt=90&amp;.v=1635183712000 2x'
                                            className='rf-digitalmat-cardgallery-img'
                                          />
                                        </div>
                                      </div>
                                      <div
                                        id='3deb49b1-e0c2-11ec-bb44-35cae391b59c-gallery-item-4'
                                        data-core-gallery-item='true'
                                        aria-hidden='true'
                                        className='rc-inline-gallery-item'
                                        role='tabpanel'
                                        aria-label='Item 5'
                                      >
                                        <div className='rf-digitalmat-cardgallery-img-wrapper'>
                                          <img
                                            width='364'
                                            height='333'
                                            alt=''
                                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-16-digitalmat-gallery-5-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635206716000'
                                            srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-16-digitalmat-gallery-5-202111?wid=364&amp;hei=333&amp;fmt=png-alpha&amp;.v=1635206716000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-16-digitalmat-gallery-5-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635206716000 2x'
                                            className='rf-digitalmat-cardgallery-img'
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='rc-gallery-paddlenav paddlenav paddlenav-compact'>
                                    <button
                                      type='button'
                                      disabled=''
                                      aria-hidden='true'
                                      aria-label='Previous'
                                      className='paddlenav-arrow paddlenav-arrow-previous'
                                      data-autom='paddlenav-previous'
                                    ></button>
                                    <button
                                      type='button'
                                      aria-hidden='false'
                                      aria-label='Next'
                                      className='paddlenav-arrow paddlenav-arrow-next'
                                      data-autom='paddlenav-next'
                                    ></button>
                                  </div>
                                </div>
                              </div>
                              <div className='rf-digitalmat-swatchesselection'>
                                <div className='rf-digitalmat-availabletext'>
                                  Available in 2 finishes
                                </div>
                                <ul
                                  className='rf-digitalmat-swatchescontainer'
                                  role='list'
                                >
                                  <li className='rf-digitalmat-colorimage'>
                                    <img
                                      width='32'
                                      height='32'
                                      alt='Space Gray'
                                      src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202110_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1632788570000'
                                      srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202110_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1632788570000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spacegray-select-202110_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1632788570000 2x'
                                    />
                                  </li>
                                  <li className='rf-digitalmat-colorimage'>
                                    <img
                                      width='32'
                                      height='32'
                                      alt='Silver'
                                      src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-silver-select-202110_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1632788570000'
                                      srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-silver-select-202110_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1632788570000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-silver-select-202110_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1632788570000 2x'
                                    />
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className='column large-6 small-12 rf-digitalmat-contentsection'>
                              <h2
                                className='rf-digitalmat-overlay-header'
                                id='rf-digitalmat-overlay-label'
                                data-autom='DigitalMat-overlay-header-3'
                              >
                                MacBook&nbsp;Pro 16-inch
                              </h2>
                              <div className='rf-digitalmat-price-button'>
                                <div
                                  className='rf-digitalmat-price'
                                  data-autom='DigitalMat-price-3'
                                >
                                  <div className='rc-prices-inline rc-prices-inline-lead-with-full-price'>
                                    <div className='rc-price'>
                                      <span className='rc-prices-currentprice'>
                                        From{' '}
                                        <span className='nowrap'>$2499</span>
                                      </span>
                                      <span className='rc-prices-installmentsseparator'>
                                        {' '}
                                      </span>
                                      <span className='rc-monthly-price'>
                                        <span className='rc-prices-currentprice'>
                                          {' '}
                                          <span className='nowrap'>
                                            {' '}
                                            or $208.25
                                            <span aria-hidden='true'>
                                              /mo.{' '}
                                            </span>
                                            <span className='visuallyhidden'>
                                              {' '}
                                              per month
                                            </span>
                                          </span>{' '}
                                          <span className='nowrap'>
                                            <span className='acinstallment-term-length'>
                                              {' '}
                                              for 12{' '}
                                              <span aria-hidden='true'>
                                                mo.
                                              </span>
                                              <span className='visuallyhidden'>
                                                months
                                              </span>
                                            </span>
                                            <span className='visuallyhidden'>
                                              Footnote{' '}
                                            </span>
                                            *
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div className='rc-prices-footer'>
                                      <div className='rc-financing-message'>
                                        <span className='as-prices-installments as-price-installments'>
                                          <a
                                            href='/us/shop/go/finance'
                                            target='_blank'
                                            rel="noreferrer"
                                            name='browse'
                                            className='as-price-installments-items'
                                            data-analytics-title='learn more about financing'
                                          >
                                            {' '}
                                            <span className='more'>
                                              null% Financing Available
                                            </span>
                                          </a>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <a
                                  href='/shop/buy-mac/macbook-pro/16-inch'
                                  data-feature-name='MacBook&nbsp;Pro 16-inch modal'
                                  data-display-name='shop AOS: '
                                  data-autom='DigitalMat-buynow-button-3'
                                  className='button rf-digitalmat-button'
                                >
                                  Buy
                                  <span className='visuallyhidden'>
                                    {' '}
                                    - MacBook&nbsp;Pro 16-inch
                                  </span>
                                </a>
                              </div>
                              <div
                                className='rf-digitalmat-productdetails'
                                data-autom='DigitalMat-productdetails-3'
                              >
                                <div className='rf-digitalmat-productdetails-item'>
                                  <div className='rf-digitalmat-productdetails-content'>
                                    <svg
                                      height='35'
                                      viewBox='0 0 35 35'
                                      width='35'
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <path
                                        d='m0 0h35v35h-35z'
                                        fill='none'
                                      ></path>
                                      <path d='m24.5 6h-14a4.505 4.505 0 0 0 -4.5 4.5v14a4.505 4.505 0 0 0 4.5 4.5h14a4.505 4.505 0 0 0 4.5-4.5v-14a4.505 4.505 0 0 0 -4.5-4.5zm-11.6562 8.0908a1.4863 1.4863 0 0 1 .9912-.5166.7251.7251 0 0 1 .0127.1367 1.5243 1.5243 0 0 1 -.3545.9434 1.3167 1.3167 0 0 1 -.919.4834.5255.5255 0 0 1 -.09-.0088.6771.6771 0 0 1 -.0127-.124 1.4632 1.4632 0 0 1 .3723-.9141zm1.9394 5.4131c-.2861.4141-.59.833-1.0508.833s-.581-.2685-1.1064-.2685c-.5215 0-.71.2773-1.1289.2773s-.7129-.3848-1.0508-.8594a4.1836 4.1836 0 0 1 -.709-2.247 1.8136 1.8136 0 0 1 1.7-2.0118c.4443 0 .82.294 1.1025.294.2647 0 .68-.3115 1.1924-.3115a1.5863 1.5863 0 0 1 1.3408.6748 1.5293 1.5293 0 0 0 -.73 1.2861 1.4937 1.4937 0 0 0 .9062 1.3721 3.5765 3.5765 0 0 1 -.466.9609zm6.5361.752h-.92v-3.3565h-.0683l-1.2637 3.3565h-.6465l-1.2647-3.3565h-.0683v3.3565h-.919v-4.9317h1.1817l1.3642 3.6094h.0616l1.36-3.6094h1.1826zm3.0547 0h-1.0312v-3.958h-.0628l-1.209.8408v-.93l1.2744-.8848h1.0286z'></path>
                                    </svg>
                                    <div className='rf-digitalmat-featuretext'>
                                      New Apple M1 Pro and M1&nbsp;Max chips
                                      deliver incredible performance
                                    </div>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-productdetails-item'>
                                  <div className='rf-digitalmat-productdetails-content'>
                                    <svg
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                      viewBox='0 0 35 35'
                                    >
                                      <rect
                                        width='35'
                                        height='35'
                                        fill='none'
                                      ></rect>
                                      <path d='M27,14.5v6A2.5,2.5,0,0,1,24.5,23H7.5A2.5,2.5,0,0,1,5,20.5v-6A2.5,2.5,0,0,1,7.5,12h17A2.5,2.5,0,0,1,27,14.5Zm2,0v6A4.505,4.505,0,0,1,24.5,25H7.5A4.505,4.505,0,0,1,3,20.5v-6A4.505,4.505,0,0,1,7.5,10h17A4.505,4.505,0,0,1,29,14.5Zm-1,0A3.5,3.5,0,0,0,24.5,11H7.5A3.5,3.5,0,0,0,4,14.5v6A3.5,3.5,0,0,0,7.5,24h17A3.5,3.5,0,0,0,28,20.5ZM30,20a2.562,2.562,0,0,0,0-5Z'></path>
                                    </svg>
                                    <div className='rf-digitalmat-featuretext'>
                                      Up to 21 hours of battery life,
                                      <span className='visuallyhidden'>
                                        footnote
                                      </span>
                                      ¹ thanks to the efficiency of Apple
                                      silicon
                                    </div>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-productdetails-item'>
                                  <div className='rf-digitalmat-productdetails-content'>
                                    <svg
                                      height='35'
                                      viewBox='0 0 35 35'
                                      width='35'
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <path
                                        d='m0 0h35v35h-35z'
                                        fill='none'
                                      ></path>
                                      <path d='m29 7.5v7.5068a.5.5 0 0 1 -1 0v-7.3l-8.6445 8.6451a.5.5 0 0 1 -.7071-.7071l8.6441-8.6448h-7.2993a.5.5 0 0 1 0-1h7.5068a1.5017 1.5017 0 0 1 1.5 1.5zm-13.3555 11.1484-8.6445 8.6451v-7.3a.5.5 0 0 0 -1 0v7.5065a1.5017 1.5017 0 0 0 1.5 1.5h7.5068a.5.5 0 0 0 0-1h-7.2993l8.6441-8.6445a.5.5 0 0 0 -.7071-.7071z'></path>
                                    </svg>
                                    <div className='rf-digitalmat-featuretext'>
                                      Liquid Retina XDR display features extreme
                                      dynamic range and incredible contrast
                                      ratio
                                    </div>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-productdetails-item'>
                                  <div className='rf-digitalmat-productdetails-content'>
                                    <svg
                                      viewBox='0 0 35 35'
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <g>
                                        <rect
                                          width='35'
                                          height='35'
                                          fill='none'
                                        ></rect>
                                        <g>
                                          <path
                                            d='M17.5,12A5.5,5.5,0,1,0,23,17.5,5.507,5.507,0,0,0,17.5,12Zm0,10A4.5,4.5,0,1,1,22,17.5,4.5,4.5,0,0,1,17.5,22Z'
                                            fill='#1d1d1f'
                                          ></path>
                                          <path
                                            d='M26.5,9H24.133a1,1,0,0,1-.852-.476l-.756-1.173A2.682,2.682,0,0,0,20.2,6H14.8a2.678,2.678,0,0,0-2.321,1.343l-.761,1.181A1,1,0,0,1,10.867,9H8.5A3.5,3.5,0,0,0,5,12.5v11A3.5,3.5,0,0,0,8.5,27h18A3.5,3.5,0,0,0,30,23.5v-11A3.5,3.5,0,0,0,26.5,9ZM29,23.5A2.5,2.5,0,0,1,26.5,26H8.5A2.5,2.5,0,0,1,6,23.5v-11A2.5,2.5,0,0,1,8.5,10h2.367a2,2,0,0,0,1.7-.952l.766-1.189A1.692,1.692,0,0,1,14.8,7h5.4a1.7,1.7,0,0,1,1.47.867l.761,1.181a2,2,0,0,0,1.7.952H26.5A2.5,2.5,0,0,1,29,12.5Z'
                                            fill='#1d1d1f'
                                          ></path>
                                        </g>
                                      </g>
                                    </svg>
                                    <div className='rf-digitalmat-featuretext'>
                                      New 1080p FaceTime HD camera,
                                      high-fidelity six-speaker sound system,
                                      and studio-quality mic array{' '}
                                    </div>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-productdetails-item'>
                                  <div className='rf-digitalmat-productdetails-content'>
                                    <svg
                                      width='35'
                                      height='35'
                                      viewBox='0 0 35 35'
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <g>
                                        <rect
                                          width='35'
                                          height='35'
                                          fill='none'
                                        ></rect>
                                        <path
                                          d='M21.75,9.272V20.2143a1.2672,1.2672,0,0,1-.3408.9574,1.3791,1.3791,0,0,1-.9946.3283H18V32H17V21.5H14.5718a1.36,1.36,0,0,1-.981-.3283,1.2672,1.2672,0,0,1-.3408-.9574V9.272a1.2453,1.2453,0,0,1,.3408-.9506A1.38,1.38,0,0,1,14.5718,8h5.8428a1.4,1.4,0,0,1,.9946.3214A1.2453,1.2453,0,0,1,21.75,9.272Zm-2-5.0145a1.2374,1.2374,0,0,0-.3335-.9431A1.3874,1.3874,0,0,0,18.4307,3H16.5693a1.3944,1.3944,0,0,0-.979.3144,1.2222,1.2222,0,0,0-.34.9431V7h4.5Z'
                                          fill='#1d1d1f'
                                        ></path>
                                      </g>
                                    </svg>
                                    <div className='rf-digitalmat-featuretext'>
                                      Thunderbolt 4, HDMI, SDXC, and MagSafe 3
                                      for fast and versatile connectivity
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='rf-digitalmat-explorelink'>
                                <a
                                  href='https://www.apple.com/macbook-pro-14-and-16'
                                  data-feature-name='MacBook&nbsp;Pro 16-inch modal'
                                  data-display-name='Explore MacBook&nbsp;Pro 16-inch further'
                                  data-autom='DigitalMat-explorelink-3'
                                  className='icon icon-after more'
                                >
                                  Explore MacBook&nbsp;Pro 16-inch further
                                </a>
                              </div>
                            </div>
                          </div>
                          <div
                            className='rf-digitalmat-valueprops'
                            data-autom='DigitalMat-valueprops-3'
                          >
                            <div className='rf-digitalmat-valueprops-container'>
                              <div className='rf-digitalmat-valueprops-item'>
                                <div className='rf-digitalmat-valueprops-icon'>
                                  <div className='as-svgicon-container dd-color-saffron'>
                                    <svg
                                      height='25'
                                      viewBox='0 0 25 25'
                                      width='25'
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <path
                                        d='m0 0h25v25h-25z'
                                        fill='none'
                                      ></path>
                                      <path d='m17.6406 21h-10a3.6272 3.6272 0 0 1 -3.6406-3.5v-10a3.6272 3.6272 0 0 1 3.6406-3.5h10a3.3868 3.3868 0 0 1 3.3594 3.5v10a3.3868 3.3868 0 0 1 -3.3594 3.5zm-10-16a2.6267 2.6267 0 0 0 -2.6406 2.5v10a2.6267 2.6267 0 0 0 2.6406 2.5h10a2.3863 2.3863 0 0 0 2.3594-2.5v-10a2.3863 2.3863 0 0 0 -2.3594-2.5zm-.3486 9.4941a.867.867 0 0 1 -.1133-.4218.3632.3632 0 0 1 .3945-.3868.3917.3917 0 0 1 .3868.2891 1.1691 1.1691 0 0 0 1.2031.7188c.6836 0 1.1445-.3907 1.1484-.9375.0039-.6446-.4609-1.0039-1.2148-1.0039h-.375a.3406.3406 0 1 1 0-.68h.3515a.9636.9636 0 0 0 1.0821-.9063c0-.5234-.336-.8711-1.0039-.8711a1.0481 1.0481 0 0 0 -1.086.7071c-.0937.2265-.1875.3085-.3945.3085a.3425.3425 0 0 1 -.3789-.375.88.88 0 0 1 .1055-.4257 1.8513 1.8513 0 0 1 1.7539-.9336c1.1484 0 1.8554.6289 1.8554 1.4687a1.3541 1.3541 0 0 1 -1.1875 1.3242v.02a1.3593 1.3593 0 0 1 1.3828 1.3672c0 .9921-.8671 1.6679-2.0429 1.6679a1.9792 1.9792 0 0 1 -1.8672-.9298zm4.4629-3.4257c0-.9063.4492-1.4532 1.164-1.4532.7188 0 1.1641.5469 1.1641 1.4532s-.4414 1.4648-1.1641 1.4648-1.164-.5547-1.164-1.4648zm1.6719 0c0-.6211-.1914-.9414-.5079-.9414s-.5078.3242-.5078.9453.1875.9531.5078.9531.5079-.332.5079-.957zm-.7422 4.0546a.36.36 0 0 1 .0742-.2187l1.7773-2.5664 1.7461-2.5391a.3337.3337 0 0 1 .3125-.1914.2783.2783 0 0 1 .293.27.3451.3451 0 0 1 -.07.2148l-1.7227 2.4961-1.8008 2.6172c-.0976.1406-.1718.1875-.3007.1875a.2828.2828 0 0 1 -.3089-.27zm2.8086-1.203c0-.9062.4492-1.4531 1.164-1.4531.7188 0 1.1641.543 1.1641 1.4531 0 .9024-.4414 1.4649-1.1641 1.4649-.7187-.0001-1.164-.5587-1.164-1.4649zm1.6757 0c0-.6211-.1914-.9453-.5117-.9453-.3164 0-.5078.3242-.5078.9453 0 .625.1914.9531.5078.9531.3203-.0001.5117-.3282.5117-.9531z'></path>
                                    </svg>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-valueprops-description'>
                                  <h3 className='rf-digitalmat-valueprops-header'>
                                    3% Daily Cash back with Apple&nbsp;Card
                                  </h3>
                                  <span>
                                    And pay 0% APR over 12 mo. when you choose
                                    to check out with Apple Card Monthly
                                    Installments.<sup>◊</sup>
                                  </span>
                                </div>
                              </div>
                              <div className='rf-digitalmat-valueprops-item'>
                                <div className='rf-digitalmat-valueprops-icon'>
                                  <div className='as-svgicon-container dd-color-blue-violet'>
                                    <svg
                                      viewBox='0 0 43 56'
                                      xmlns='http://www.w3.org/2000/svg'
                                      className='as-svgicon as-svgicon-financing as-svgicon-elevated as-svgicon-financingelevated'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <path
                                        d='m0 0h43v56h-43z'
                                        fill='none'
                                      ></path>
                                      <path d='m38.5 27a.99974.99974 0 0 0 -1 1v11a5.00588 5.00588 0 0 1 -5 5h-22a5.00588 5.00588 0 0 1 -5-5v-3.83594l1.543 1.543a.99989.99989 0 1 0 1.414-1.41406l-3.25-3.25a.99962.99962 0 0 0 -1.41406 0l-3.25 3.25a.99989.99989 0 1 0 1.41406 1.414l1.543-1.543v3.836a7.00818 7.00818 0 0 0 7 7h22a7.00818 7.00818 0 0 0 7-7v-11a.99974.99974 0 0 0 -1-1z'></path>
                                      <path d='m28.17188 32.71533a.31074.31074 0 0 0 -.35157.35156q0 .334.35157.334h2.62792a.29915.29915 0 0 0 .34278-.334.30692.30692 0 0 0 -.34278-.35156z'></path>
                                      <path d='m30.60156 21.32031a1.92007 1.92007 0 0 0 -1.40136-.47021h-15.75a1.94085 1.94085 0 0 0 -1.376.47021 1.81128 1.81128 0 0 0 -.50488 1.39307v10.43262h-.92481a.95033.95033 0 0 0 -.70312.29443 1.00858 1.00858 0 0 0 0 1.41553.9536.9536 0 0 0 .70312.29394h20.74416a1.96828 1.96828 0 0 0 1.415-.51855 1.78331 1.78331 0 0 0 .54492-1.35352v-8.376a1.78328 1.78328 0 0 0 -.54492-1.35352 1.96828 1.96828 0 0 0 -1.415-.51855h-.30762v-.31641a1.8689 1.8689 0 0 0 -.47949-1.39304zm-4.99609 3.58155v8.24414h-12.62109v-10.03711a.74576.74576 0 0 1 .84374-.84375h14.99415a.85949.85949 0 0 1 .63281.21093.827.827 0 0 1 .19971.55372h-2.08936a1.96828 1.96828 0 0 0 -1.415.51855 1.78328 1.78328 0 0 0 -.54496 1.35352zm5.53711-.334v-.35156h.09668a.94481.94481 0 0 1 .67676.23291.83527.83527 0 0 1 .24609.63721v8.00683a.83528.83528 0 0 1 -.24609.63721.94481.94481 0 0 1 -.67676.23291h-3.51563a.95761.95761 0 0 1 -.68554-.23291.83525.83525 0 0 1 -.2461-.63721v-8.00682a.83524.83524 0 0 1 .2461-.63721.95761.95761 0 0 1 .68554-.23291h.09668v.35156a.52959.52959 0 0 0 .14063.37793.48342.48342 0 0 0 .36914.14941h2.30273a.48342.48342 0 0 0 .36914-.14941.52959.52959 0 0 0 .14063-.37793z'></path>
                                      <path d='m42.457 19.293a.99962.99962 0 0 0 -1.41406 0l-1.543 1.543v-3.836a7.00818 7.00818 0 0 0 -7-7h-22a7.00818 7.00818 0 0 0 -7 7v11a1 1 0 0 0 2 0v-11a5.00588 5.00588 0 0 1 5-5h22a5.00588 5.00588 0 0 1 5 5v3.83594l-1.543-1.543a.99989.99989 0 0 0 -1.41394 1.41406l3.25 3.25a.99963.99963 0 0 0 1.41406 0l3.25-3.25a.99962.99962 0 0 0 -.00006-1.414z'></path>
                                    </svg>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-valueprops-description'>
                                  <h3 className='rf-digitalmat-valueprops-header'>
                                    Get more with Apple Trade In
                                  </h3>
                                  Get extra credit now through May&nbsp;31. Save
                                  $25–$2,010 toward a new Mac when you trade in
                                  your current one.**
                                </div>
                              </div>
                              <div className='rf-digitalmat-valueprops-item'>
                                <div className='rf-digitalmat-valueprops-icon'>
                                  <div className='as-svgicon-container dd-color-razzmatazz'>
                                    <svg
                                      xmlns='http://www.w3.org/2000/svg'
                                      viewBox='0 0 36 56'
                                      className='as-svgicon as-svgicon-delivery as-svgicon-elevated as-svgicon-deliverydelevated'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <g>
                                        <rect
                                          width='36'
                                          height='56'
                                          fill='none'
                                        ></rect>
                                        <path d='M33.905,17.063l-14-7.581a3.991,3.991,0,0,0-3.811,0l-14,7.581A4,4,0,0,0,0,20.581V35.419a4,4,0,0,0,2.095,3.518l14,7.581a3.989,3.989,0,0,0,3.811,0l14-7.581A4,4,0,0,0,36,35.419V20.581A4,4,0,0,0,33.905,17.063ZM17.048,11.241a1.993,1.993,0,0,1,1.9,0l13.8,7.47-6.383,3.645L11.943,14.005ZM18,27.133,3.253,18.711l6.629-3.589L24.355,23.5ZM3.048,37.178A2,2,0,0,1,2,35.419V20.581a1.955,1.955,0,0,1,.036-.262L17,28.865V44.733ZM34,35.419a2,2,0,0,1-1.048,1.759L19,44.733V28.865l14.964-8.545a1.955,1.955,0,0,1,.036.262Z'></path>
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-valueprops-description'>
                                  <h3 className='rf-digitalmat-valueprops-header'>
                                    Free delivery
                                  </h3>
                                  <span>
                                    And free returns. See checkout for delivery
                                    dates.
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    aria-hidden='true'
                    data-core-fade-transition-wrapper=''
                    className='rf-digitalmat-overlay-tabcontent r-fade-transition-exit-done'
                    data-core-tabs-panel=''
                    id='panel-3de2be30-e0c2-11ec-bb44-35cae391b59c-4'
                    aria-labelledby='tab-3de2be30-e0c2-11ec-bb44-35cae391b59c-4'
                  >
                    <div
                      data-core-tabs=''
                      id='3ded4580-e0c2-11ec-bb44-35cae391b59c'
                      className='rf-digitalmat-inlinetabs'
                      data-core-tabs-transition-done=''
                    >
                      <div
                        data-core-tabs-panels=''
                        className='rf-digitalmat-inlinetabnav-contentsection'
                        style='height: 0px;'
                      >
                        <div
                          data-core-fade-transition-wrapper=''
                          className='rf-digitalmat-inlinetabnav-tabcontent r-fade-transition-enter-done r-fade-transition-appear-done'
                          data-core-tabs-panel=''
                          data-core-tabs-panel-selected=''
                          id='panel-3ded4580-e0c2-11ec-bb44-35cae391b59c-0'
                        >
                          <div className='row rf-digitalmat-inlinetabnav-tabcontent-container'>
                            <div className='column large-6 small-12 rf-digitalmat-gallerysection'>
                              <div className='rf-digitalmat-cardgallery with-paddlenav with-paddlenav-onhover'>
                                <div
                                  className='rc-inline-gallery rf-digitalmat-gallery'
                                  role='group'
                                  aria-label='Gallery'
                                >
                                  <div className='rc-gallery-dotnav dotnav'>
                                    <ul
                                      className=''
                                      role='tablist'
                                      aria-label='iMac 24-inch'
                                    >
                                      <li role='presentation'>
                                        <button
                                          id='3ded4581-e0c2-11ec-bb44-35cae391b59c-tab-item-0'
                                          type='button'
                                          role='tab'
                                          aria-controls='3ded4581-e0c2-11ec-bb44-35cae391b59c-gallery-item-0'
                                          aria-selected='true'
                                          aria-label='Item 1'
                                          tabIndex='0'
                                          className='rc-gallery-dotnav-item dotnav-item current'
                                          data-autom='gallery-dot-nav-0'
                                        ></button>
                                      </li>
                                      <li role='presentation'>
                                        <button
                                          id='3ded4581-e0c2-11ec-bb44-35cae391b59c-tab-item-1'
                                          type='button'
                                          role='tab'
                                          aria-controls='3ded4581-e0c2-11ec-bb44-35cae391b59c-gallery-item-1'
                                          aria-selected='false'
                                          aria-label='Item 2'
                                          tabIndex='-1'
                                          className='rc-gallery-dotnav-item dotnav-item'
                                          data-autom='gallery-dot-nav-1'
                                        ></button>
                                      </li>
                                      <li role='presentation'>
                                        <button
                                          id='3ded4581-e0c2-11ec-bb44-35cae391b59c-tab-item-2'
                                          type='button'
                                          role='tab'
                                          aria-controls='3ded4581-e0c2-11ec-bb44-35cae391b59c-gallery-item-2'
                                          aria-selected='false'
                                          aria-label='Item 3'
                                          tabIndex='-1'
                                          className='rc-gallery-dotnav-item dotnav-item'
                                          data-autom='gallery-dot-nav-2'
                                        ></button>
                                      </li>
                                      <li role='presentation'>
                                        <button
                                          id='3ded4581-e0c2-11ec-bb44-35cae391b59c-tab-item-3'
                                          type='button'
                                          role='tab'
                                          aria-controls='3ded4581-e0c2-11ec-bb44-35cae391b59c-gallery-item-3'
                                          aria-selected='false'
                                          aria-label='Item 4'
                                          tabIndex='-1'
                                          className='rc-gallery-dotnav-item dotnav-item'
                                          data-autom='gallery-dot-nav-3'
                                        ></button>
                                      </li>
                                      <li role='presentation'>
                                        <button
                                          id='3ded4581-e0c2-11ec-bb44-35cae391b59c-tab-item-4'
                                          type='button'
                                          role='tab'
                                          aria-controls='3ded4581-e0c2-11ec-bb44-35cae391b59c-gallery-item-4'
                                          aria-selected='false'
                                          aria-label='Item 5'
                                          tabIndex='-1'
                                          className='rc-gallery-dotnav-item dotnav-item'
                                          data-autom='gallery-dot-nav-4'
                                        ></button>
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    id='3ded4581-e0c2-11ec-bb44-35cae391b59c'
                                    className='rf-digitalmat-gallery-items'
                                    data-core-gallery='true'
                                    data-core-gallery-fade='false'
                                  >
                                    <div
                                      data-core-gallery-scroller='true'
                                      style='transform: translateX(0px); width: 500%; left: 0%; transition: none 0s ease 0s;'
                                    >
                                      <div
                                        id='3ded4581-e0c2-11ec-bb44-35cae391b59c-gallery-item-0'
                                        data-core-gallery-item='true'
                                        aria-hidden='false'
                                        className='rc-inline-gallery-item'
                                        role='tabpanel'
                                        aria-label='Item 1'
                                      >
                                        <div className='rf-digitalmat-cardgallery-img-wrapper'>
                                          <img
                                            width='364'
                                            height='333'
                                            alt=''
                                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac24-digitalmat-gallery-1-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635186197000'
                                            srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac24-digitalmat-gallery-1-202111?wid=364&amp;hei=333&amp;fmt=png-alpha&amp;.v=1635186197000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac24-digitalmat-gallery-1-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635186197000 2x'
                                            className='rf-digitalmat-cardgallery-img'
                                          />
                                        </div>
                                      </div>
                                      <div
                                        id='3ded4581-e0c2-11ec-bb44-35cae391b59c-gallery-item-1'
                                        data-core-gallery-item='true'
                                        aria-hidden='true'
                                        className='rc-inline-gallery-item'
                                        role='tabpanel'
                                        aria-label='Item 2'
                                      >
                                        <div className='rf-digitalmat-cardgallery-img-wrapper'>
                                          <img
                                            width='364'
                                            height='333'
                                            alt=''
                                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac24-digitalmat-gallery-2-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635186198000'
                                            srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac24-digitalmat-gallery-2-202111?wid=364&amp;hei=333&amp;fmt=png-alpha&amp;.v=1635186198000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac24-digitalmat-gallery-2-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635186198000 2x'
                                            className='rf-digitalmat-cardgallery-img'
                                          />
                                        </div>
                                      </div>
                                      <div
                                        id='3ded4581-e0c2-11ec-bb44-35cae391b59c-gallery-item-2'
                                        data-core-gallery-item='true'
                                        aria-hidden='true'
                                        className='rc-inline-gallery-item'
                                        role='tabpanel'
                                        aria-label='Item 3'
                                      >
                                        <div className='rf-digitalmat-cardgallery-img-wrapper'>
                                          <img
                                            width='364'
                                            height='333'
                                            alt=''
                                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac24-digitalmat-gallery-3-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635186200000'
                                            srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac24-digitalmat-gallery-3-202111?wid=364&amp;hei=333&amp;fmt=png-alpha&amp;.v=1635186200000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac24-digitalmat-gallery-3-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635186200000 2x'
                                            className='rf-digitalmat-cardgallery-img'
                                          />
                                        </div>
                                      </div>
                                      <div
                                        id='3ded4581-e0c2-11ec-bb44-35cae391b59c-gallery-item-3'
                                        data-core-gallery-item='true'
                                        aria-hidden='true'
                                        className='rc-inline-gallery-item'
                                        role='tabpanel'
                                        aria-label='Item 4'
                                      >
                                        <div className='rf-digitalmat-cardgallery-img-wrapper'>
                                          <img
                                            width='364'
                                            height='333'
                                            alt=''
                                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac24-digitalmat-gallery-4-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635186199000'
                                            srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac24-digitalmat-gallery-4-202111?wid=364&amp;hei=333&amp;fmt=png-alpha&amp;.v=1635186199000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac24-digitalmat-gallery-4-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635186199000 2x'
                                            className='rf-digitalmat-cardgallery-img'
                                          />
                                        </div>
                                      </div>
                                      <div
                                        id='3ded4581-e0c2-11ec-bb44-35cae391b59c-gallery-item-4'
                                        data-core-gallery-item='true'
                                        aria-hidden='true'
                                        className='rc-inline-gallery-item'
                                        role='tabpanel'
                                        aria-label='Item 5'
                                      >
                                        <div className='rf-digitalmat-cardgallery-img-wrapper'>
                                          <img
                                            width='364'
                                            height='333'
                                            alt=''
                                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac24-digitalmat-gallery-5-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635186199000'
                                            srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac24-digitalmat-gallery-5-202111?wid=364&amp;hei=333&amp;fmt=png-alpha&amp;.v=1635186199000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac24-digitalmat-gallery-5-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635186199000 2x'
                                            className='rf-digitalmat-cardgallery-img'
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='rc-gallery-paddlenav paddlenav paddlenav-compact'>
                                    <button
                                      type='button'
                                      disabled=''
                                      aria-hidden='true'
                                      aria-label='Previous'
                                      className='paddlenav-arrow paddlenav-arrow-previous'
                                      data-autom='paddlenav-previous'
                                    ></button>
                                    <button
                                      type='button'
                                      aria-hidden='false'
                                      aria-label='Next'
                                      className='paddlenav-arrow paddlenav-arrow-next'
                                      data-autom='paddlenav-next'
                                    ></button>
                                  </div>
                                </div>
                              </div>
                              <div className='rf-digitalmat-swatchesselection'>
                                <div className='rf-digitalmat-availabletext'>
                                  Available in 7 colors
                                </div>
                                <ul
                                  className='rf-digitalmat-swatchescontainer'
                                  role='list'
                                >
                                  <li className='rf-digitalmat-colorimage'>
                                    <img
                                      width='16'
                                      height='16'
                                      alt='Silver'
                                      src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-vesa-silver-selection-hero-202104_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1617420604000'
                                      srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-vesa-silver-selection-hero-202104_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1617420604000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-vesa-silver-selection-hero-202104_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1617420604000 2x'
                                    />
                                  </li>
                                  <li className='rf-digitalmat-colorimage'>
                                    <img
                                      width='16'
                                      height='16'
                                      alt='Green'
                                      src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-vesa-green-selection-hero-202104_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1617420593000'
                                      srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-vesa-green-selection-hero-202104_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1617420593000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-vesa-green-selection-hero-202104_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1617420593000 2x'
                                    />
                                  </li>
                                  <li className='rf-digitalmat-colorimage'>
                                    <img
                                      width='16'
                                      height='16'
                                      alt='Pink'
                                      src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-vesa-pink-selection-hero-202104_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1617420594000'
                                      srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-vesa-pink-selection-hero-202104_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1617420594000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-vesa-pink-selection-hero-202104_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1617420594000 2x'
                                    />
                                  </li>
                                  <li className='rf-digitalmat-colorimage'>
                                    <img
                                      width='16'
                                      height='16'
                                      alt='Purple'
                                      src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-vesa-purple-selection-hero-202104_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1617420595000'
                                      srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-vesa-purple-selection-hero-202104_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1617420595000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-vesa-purple-selection-hero-202104_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1617420595000 2x'
                                    />
                                  </li>
                                  <li className='rf-digitalmat-colorimage'>
                                    <img
                                      width='16'
                                      height='16'
                                      alt='Blue'
                                      src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-vesa-blue-selection-hero-202104_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1617478646000'
                                      srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-vesa-blue-selection-hero-202104_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1617478646000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-vesa-blue-selection-hero-202104_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1617478646000 2x'
                                    />
                                  </li>
                                  <li className='rf-digitalmat-colorimage'>
                                    <img
                                      width='16'
                                      height='16'
                                      alt='Yellow'
                                      src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-vesa-yellow-selection-hero-202104_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1617420605000'
                                      srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-vesa-yellow-selection-hero-202104_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1617420605000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-vesa-yellow-selection-hero-202104_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1617420605000 2x'
                                    />
                                  </li>
                                  <li className='rf-digitalmat-colorimage'>
                                    <img
                                      width='16'
                                      height='16'
                                      alt='Orange'
                                      src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-vesa-orange-selection-hero-202104_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1617420593000'
                                      srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-vesa-orange-selection-hero-202104_SW_COLOR?wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1617420593000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-vesa-orange-selection-hero-202104_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1617420593000 2x'
                                    />
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className='column large-6 small-12 rf-digitalmat-contentsection'>
                              <h2
                                className='rf-digitalmat-overlay-header'
                                id='rf-digitalmat-overlay-label'
                                data-autom='DigitalMat-overlay-header-4'
                              >
                                iMac 24-inch
                              </h2>
                              <div className='rf-digitalmat-price-button'>
                                <div
                                  className='rf-digitalmat-price'
                                  data-autom='DigitalMat-price-4'
                                >
                                  <div className='rc-prices-inline rc-prices-inline-lead-with-full-price'>
                                    <div className='rc-price'>
                                      <span className='rc-prices-currentprice'>
                                        From{' '}
                                        <span className='nowrap'>$1299</span>
                                      </span>
                                      <span className='rc-prices-installmentsseparator'>
                                        {' '}
                                      </span>
                                      <span className='rc-monthly-price'>
                                        <span className='rc-prices-currentprice'>
                                          {' '}
                                          <span className='nowrap'>
                                            {' '}
                                            or $108.25
                                            <span aria-hidden='true'>
                                              /mo.{' '}
                                            </span>
                                            <span className='visuallyhidden'>
                                              {' '}
                                              per month
                                            </span>
                                          </span>{' '}
                                          <span className='nowrap'>
                                            <span className='acinstallment-term-length'>
                                              {' '}
                                              for 12{' '}
                                              <span aria-hidden='true'>
                                                mo.
                                              </span>
                                              <span className='visuallyhidden'>
                                                months
                                              </span>
                                            </span>
                                            <span className='visuallyhidden'>
                                              Footnote{' '}
                                            </span>
                                            *
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div className='rc-prices-footer'>
                                      <div className='rc-financing-message'>
                                        <span className='as-prices-installments as-price-installments'>
                                          <a
                                            href='/us/shop/go/finance'
                                            target='_blank'
                                            rel="noreferrer"
                                            name='browse'
                                            className='as-price-installments-items'
                                            data-analytics-title='learn more about financing'
                                          >
                                            {' '}
                                            <span className='more'>
                                              null% Financing Available
                                            </span>
                                          </a>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <a
                                  href='/shop/buy-mac/imac'
                                  data-feature-name='iMac 24-inch modal'
                                  data-display-name='shop iMac - 24˝ - Main'
                                  data-autom='DigitalMat-buynow-button-4'
                                  className='button rf-digitalmat-button'
                                >
                                  Buy
                                  <span className='visuallyhidden'>
                                    {' '}
                                    - iMac 24-inch
                                  </span>
                                </a>
                              </div>
                              <div
                                className='rf-digitalmat-productdetails'
                                data-autom='DigitalMat-productdetails-4'
                              >
                                <div className='rf-digitalmat-productdetails-item'>
                                  <div className='rf-digitalmat-productdetails-content'>
                                    <svg
                                      height='35'
                                      viewBox='0 0 35 35'
                                      width='35'
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <path
                                        d='m0 0h35v35h-35z'
                                        fill='none'
                                      ></path>
                                      <path d='m24.5 6h-14a4.505 4.505 0 0 0 -4.5 4.5v14a4.505 4.505 0 0 0 4.5 4.5h14a4.505 4.505 0 0 0 4.5-4.5v-14a4.505 4.505 0 0 0 -4.5-4.5zm-11.6562 8.0908a1.4863 1.4863 0 0 1 .9912-.5166.7251.7251 0 0 1 .0127.1367 1.5243 1.5243 0 0 1 -.3545.9434 1.3167 1.3167 0 0 1 -.919.4834.5255.5255 0 0 1 -.09-.0088.6771.6771 0 0 1 -.0127-.124 1.4632 1.4632 0 0 1 .3723-.9141zm1.9394 5.4131c-.2861.4141-.59.833-1.0508.833s-.581-.2685-1.1064-.2685c-.5215 0-.71.2773-1.1289.2773s-.7129-.3848-1.0508-.8594a4.1836 4.1836 0 0 1 -.709-2.247 1.8136 1.8136 0 0 1 1.7-2.0118c.4443 0 .82.294 1.1025.294.2647 0 .68-.3115 1.1924-.3115a1.5863 1.5863 0 0 1 1.3408.6748 1.5293 1.5293 0 0 0 -.73 1.2861 1.4937 1.4937 0 0 0 .9062 1.3721 3.5765 3.5765 0 0 1 -.466.9609zm6.5361.752h-.92v-3.3565h-.0683l-1.2637 3.3565h-.6465l-1.2647-3.3565h-.0683v3.3565h-.919v-4.9317h1.1817l1.3642 3.6094h.0616l1.36-3.6094h1.1826zm3.0547 0h-1.0312v-3.958h-.0628l-1.209.8408v-.93l1.2744-.8848h1.0286z'></path>
                                    </svg>
                                    <div className='rf-digitalmat-featuretext'>
                                      Apple M1 chip delivers powerful CPU, GPU,
                                      and machine learning performance
                                    </div>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-productdetails-item'>
                                  <div className='rf-digitalmat-productdetails-content'>
                                    <svg
                                      height='35'
                                      viewBox='0 0 35 35'
                                      width='35'
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <path
                                        d='m0 0h35v35h-35z'
                                        fill='none'
                                      ></path>
                                      <path d='m29 7.5v7.5068a.5.5 0 0 1 -1 0v-7.3l-8.6445 8.6451a.5.5 0 0 1 -.7071-.7071l8.6441-8.6448h-7.2993a.5.5 0 0 1 0-1h7.5068a1.5017 1.5017 0 0 1 1.5 1.5zm-13.3555 11.1484-8.6445 8.6451v-7.3a.5.5 0 0 0 -1 0v7.5065a1.5017 1.5017 0 0 0 1.5 1.5h7.5068a.5.5 0 0 0 0-1h-7.2993l8.6441-8.6445a.5.5 0 0 0 -.7071-.7071z'></path>
                                    </svg>
                                    <div className='rf-digitalmat-featuretext'>
                                      Immersive 4.5K Retina display
                                      <span className='visuallyhidden'>
                                        Footnote
                                      </span>
                                      ¹
                                    </div>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-productdetails-item'>
                                  <div className='rf-digitalmat-productdetails-content'>
                                    <svg
                                      height='35'
                                      viewBox='0 0 35 35'
                                      width='35'
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <path
                                        d='m0 0h35v35h-35z'
                                        fill='none'
                                      ></path>
                                      <path d='m18 8.5v18a.5.5 0 0 1 -1 0v-18a.5.5 0 0 1 1 0zm13.5 8.5h-9.7969l4.0225-4.0215a.5.5 0 0 0 -.707-.707l-4.6993 4.6985a.7516.7516 0 0 0 0 1.0606l4.6993 4.6982a.5.5 0 0 0 .707-.707l-4.0225-4.0218h9.7969a.5.5 0 0 0 0-1zm-21.5215-4.7285a.5.5 0 0 0 -.707.707l4.0215 4.0215h-9.7969a.5.5 0 1 0 0 1h9.7969l-4.0215 4.0215a.5.5 0 1 0 .707.707l4.6983-4.6985a.7516.7516 0 0 0 0-1.0606z'></path>
                                    </svg>
                                    <div className='rf-digitalmat-featuretext'>
                                      Strikingly thin 11.5 mm design in seven
                                      vibrant colors
                                    </div>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-productdetails-item'>
                                  <div className='rf-digitalmat-productdetails-content'>
                                    <svg
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                      width='35'
                                      height='35'
                                      viewBox='0 0 35 35'
                                    >
                                      <rect
                                        width='35'
                                        height='35'
                                        fill='none'
                                      ></rect>
                                      <path d='M30.3228,6.6672a2.7719,2.7719,0,0,0-2.0206-.6657H6.6978a2.7719,2.7719,0,0,0-2.0206.6657A2.7368,2.7368,0,0,0,4,8.6992V22.0486a2.7371,2.7371,0,0,0,.6772,2.032,2.7723,2.7723,0,0,0,2.0206.6657h7.31l-.41,3.2522H12.125a.5.5,0,0,0,0,1h10.75a.5.5,0,0,0,0-1H21.4019l-.41-3.2522h7.31a2.7723,2.7723,0,0,0,2.0206-.6657A2.7371,2.7371,0,0,0,31,22.0486V8.6992A2.7368,2.7368,0,0,0,30.3228,6.6672ZM16.5273,22.616a.9451.9451,0,0,1,.2837-.6831.97.97,0,1,1,1.3721,1.3719.97.97,0,0,1-1.6558-.6888ZM30,19.452a.5465.5465,0,0,1-.5466.5465H5.5466A.5465.5465,0,0,1,5,19.452V8.4985a1.5,1.5,0,0,1,1.5-1.5h22a1.5,1.5,0,0,1,1.5,1.5Z'></path>
                                    </svg>
                                    <div className='rf-digitalmat-featuretext'>
                                      1080p FaceTime HD camera, high-fidelity
                                      six-speaker sound system, and
                                      studio-quality mic array
                                    </div>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-productdetails-item'>
                                  <div className='rf-digitalmat-productdetails-content'>
                                    <svg
                                      height='35'
                                      viewBox='0 0 35 35'
                                      width='35'
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <path
                                        d='m0 0h35v35h-35z'
                                        fill='none'
                                      ></path>
                                      <path d='m25.8337 14.0687c.0262-.27.0413-.5423.0413-.8187a8.375 8.375 0 0 0 -16.75 0c0 .2764.0151.5491.0413.8187a8.3713 8.3713 0 1 0 8.3337 14.3886 8.37 8.37 0 1 0 8.3337-14.3886zm-15.7087-.8187a7.375 7.375 0 0 1 14.75 0c0 .1572-.0139.311-.0237.4658a8.3148 8.3148 0 0 0 -7.3513 1.3269 8.3148 8.3148 0 0 0 -7.3513-1.3269c-.0098-.1548-.0237-.3086-.0237-.4658zm9.75 8.5a7.3478 7.3478 0 0 1 -2.375 5.4056 7.3478 7.3478 0 0 1 -2.375-5.4056c0-.1572.0139-.311.0237-.4658a8.2816 8.2816 0 0 0 4.7026 0c.0098.1548.0237.3086.0237.4658zm-2.375-1.125a7.3454 7.3454 0 0 1 -2.2271-.3455 7.3652 7.3652 0 0 1 2.2271-3.9351 7.3652 7.3652 0 0 1 2.2271 3.9356 7.3454 7.3454 0 0 1 -2.2271.345zm-3.1636-.7231a7.3941 7.3941 0 0 1 -4.0635-5.1814 7.3409 7.3409 0 0 1 6.44.9848 8.3541 8.3541 0 0 0 -2.3765 4.1966zm3.9507-4.1966a7.3409 7.3409 0 0 1 6.44-.9848 7.3941 7.3941 0 0 1 -4.0635 5.1814 8.3541 8.3541 0 0 0 -2.3765-4.1966zm-5.7871 13.4197a7.3688 7.3688 0 0 1 -3.1636-14.0269 8.3841 8.3841 0 0 0 4.83 5.8332c-.0262.27-.0413.5423-.0413.8187a8.3446 8.3446 0 0 0 2.5879 6.0447 7.3277 7.3277 0 0 1 -4.213 1.3303zm10 0a7.3277 7.3277 0 0 1 -4.2129-1.33 8.3446 8.3446 0 0 0 2.5879-6.045c0-.2764-.0151-.5491-.0413-.8187a8.3841 8.3841 0 0 0 4.83-5.8332 7.3688 7.3688 0 0 1 -3.1637 14.0269z'></path>
                                    </svg>
                                    <div className='rf-digitalmat-featuretext'>
                                      Color-matched Magic Mouse and Magic
                                      Keyboard
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='rf-digitalmat-explorelink'>
                                <a
                                  href='https://www.apple.com/imac-24'
                                  data-feature-name='iMac 24-inch modal'
                                  data-display-name='Explore iMac 24-inch further'
                                  data-autom='DigitalMat-explorelink-4'
                                  className='icon icon-after more'
                                >
                                  Explore iMac 24-inch further
                                </a>
                              </div>
                            </div>
                          </div>
                          <div
                            className='rf-digitalmat-valueprops'
                            data-autom='DigitalMat-valueprops-4'
                          >
                            <div className='rf-digitalmat-valueprops-container'>
                              <div className='rf-digitalmat-valueprops-item'>
                                <div className='rf-digitalmat-valueprops-icon'>
                                  <div className='as-svgicon-container dd-color-saffron'>
                                    <svg
                                      height='25'
                                      viewBox='0 0 25 25'
                                      width='25'
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <path
                                        d='m0 0h25v25h-25z'
                                        fill='none'
                                      ></path>
                                      <path d='m17.6406 21h-10a3.6272 3.6272 0 0 1 -3.6406-3.5v-10a3.6272 3.6272 0 0 1 3.6406-3.5h10a3.3868 3.3868 0 0 1 3.3594 3.5v10a3.3868 3.3868 0 0 1 -3.3594 3.5zm-10-16a2.6267 2.6267 0 0 0 -2.6406 2.5v10a2.6267 2.6267 0 0 0 2.6406 2.5h10a2.3863 2.3863 0 0 0 2.3594-2.5v-10a2.3863 2.3863 0 0 0 -2.3594-2.5zm-.3486 9.4941a.867.867 0 0 1 -.1133-.4218.3632.3632 0 0 1 .3945-.3868.3917.3917 0 0 1 .3868.2891 1.1691 1.1691 0 0 0 1.2031.7188c.6836 0 1.1445-.3907 1.1484-.9375.0039-.6446-.4609-1.0039-1.2148-1.0039h-.375a.3406.3406 0 1 1 0-.68h.3515a.9636.9636 0 0 0 1.0821-.9063c0-.5234-.336-.8711-1.0039-.8711a1.0481 1.0481 0 0 0 -1.086.7071c-.0937.2265-.1875.3085-.3945.3085a.3425.3425 0 0 1 -.3789-.375.88.88 0 0 1 .1055-.4257 1.8513 1.8513 0 0 1 1.7539-.9336c1.1484 0 1.8554.6289 1.8554 1.4687a1.3541 1.3541 0 0 1 -1.1875 1.3242v.02a1.3593 1.3593 0 0 1 1.3828 1.3672c0 .9921-.8671 1.6679-2.0429 1.6679a1.9792 1.9792 0 0 1 -1.8672-.9298zm4.4629-3.4257c0-.9063.4492-1.4532 1.164-1.4532.7188 0 1.1641.5469 1.1641 1.4532s-.4414 1.4648-1.1641 1.4648-1.164-.5547-1.164-1.4648zm1.6719 0c0-.6211-.1914-.9414-.5079-.9414s-.5078.3242-.5078.9453.1875.9531.5078.9531.5079-.332.5079-.957zm-.7422 4.0546a.36.36 0 0 1 .0742-.2187l1.7773-2.5664 1.7461-2.5391a.3337.3337 0 0 1 .3125-.1914.2783.2783 0 0 1 .293.27.3451.3451 0 0 1 -.07.2148l-1.7227 2.4961-1.8008 2.6172c-.0976.1406-.1718.1875-.3007.1875a.2828.2828 0 0 1 -.3089-.27zm2.8086-1.203c0-.9062.4492-1.4531 1.164-1.4531.7188 0 1.1641.543 1.1641 1.4531 0 .9024-.4414 1.4649-1.1641 1.4649-.7187-.0001-1.164-.5587-1.164-1.4649zm1.6757 0c0-.6211-.1914-.9453-.5117-.9453-.3164 0-.5078.3242-.5078.9453 0 .625.1914.9531.5078.9531.3203-.0001.5117-.3282.5117-.9531z'></path>
                                    </svg>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-valueprops-description'>
                                  <h3 className='rf-digitalmat-valueprops-header'>
                                    3% Daily Cash back with Apple&nbsp;Card
                                  </h3>
                                  <span>
                                    And pay 0% APR over 12 mo. when you choose
                                    to check out with Apple Card Monthly
                                    Installments.<sup>◊</sup>
                                  </span>
                                </div>
                              </div>
                              <div className='rf-digitalmat-valueprops-item'>
                                <div className='rf-digitalmat-valueprops-icon'>
                                  <div className='as-svgicon-container dd-color-blue-violet'>
                                    <svg
                                      viewBox='0 0 43 56'
                                      xmlns='http://www.w3.org/2000/svg'
                                      className='as-svgicon as-svgicon-financing as-svgicon-elevated as-svgicon-financingelevated'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <path
                                        d='m0 0h43v56h-43z'
                                        fill='none'
                                      ></path>
                                      <path d='m38.5 27a.99974.99974 0 0 0 -1 1v11a5.00588 5.00588 0 0 1 -5 5h-22a5.00588 5.00588 0 0 1 -5-5v-3.83594l1.543 1.543a.99989.99989 0 1 0 1.414-1.41406l-3.25-3.25a.99962.99962 0 0 0 -1.41406 0l-3.25 3.25a.99989.99989 0 1 0 1.41406 1.414l1.543-1.543v3.836a7.00818 7.00818 0 0 0 7 7h22a7.00818 7.00818 0 0 0 7-7v-11a.99974.99974 0 0 0 -1-1z'></path>
                                      <path d='m28.17188 32.71533a.31074.31074 0 0 0 -.35157.35156q0 .334.35157.334h2.62792a.29915.29915 0 0 0 .34278-.334.30692.30692 0 0 0 -.34278-.35156z'></path>
                                      <path d='m30.60156 21.32031a1.92007 1.92007 0 0 0 -1.40136-.47021h-15.75a1.94085 1.94085 0 0 0 -1.376.47021 1.81128 1.81128 0 0 0 -.50488 1.39307v10.43262h-.92481a.95033.95033 0 0 0 -.70312.29443 1.00858 1.00858 0 0 0 0 1.41553.9536.9536 0 0 0 .70312.29394h20.74416a1.96828 1.96828 0 0 0 1.415-.51855 1.78331 1.78331 0 0 0 .54492-1.35352v-8.376a1.78328 1.78328 0 0 0 -.54492-1.35352 1.96828 1.96828 0 0 0 -1.415-.51855h-.30762v-.31641a1.8689 1.8689 0 0 0 -.47949-1.39304zm-4.99609 3.58155v8.24414h-12.62109v-10.03711a.74576.74576 0 0 1 .84374-.84375h14.99415a.85949.85949 0 0 1 .63281.21093.827.827 0 0 1 .19971.55372h-2.08936a1.96828 1.96828 0 0 0 -1.415.51855 1.78328 1.78328 0 0 0 -.54496 1.35352zm5.53711-.334v-.35156h.09668a.94481.94481 0 0 1 .67676.23291.83527.83527 0 0 1 .24609.63721v8.00683a.83528.83528 0 0 1 -.24609.63721.94481.94481 0 0 1 -.67676.23291h-3.51563a.95761.95761 0 0 1 -.68554-.23291.83525.83525 0 0 1 -.2461-.63721v-8.00682a.83524.83524 0 0 1 .2461-.63721.95761.95761 0 0 1 .68554-.23291h.09668v.35156a.52959.52959 0 0 0 .14063.37793.48342.48342 0 0 0 .36914.14941h2.30273a.48342.48342 0 0 0 .36914-.14941.52959.52959 0 0 0 .14063-.37793z'></path>
                                      <path d='m42.457 19.293a.99962.99962 0 0 0 -1.41406 0l-1.543 1.543v-3.836a7.00818 7.00818 0 0 0 -7-7h-22a7.00818 7.00818 0 0 0 -7 7v11a1 1 0 0 0 2 0v-11a5.00588 5.00588 0 0 1 5-5h22a5.00588 5.00588 0 0 1 5 5v3.83594l-1.543-1.543a.99989.99989 0 0 0 -1.41394 1.41406l3.25 3.25a.99963.99963 0 0 0 1.41406 0l3.25-3.25a.99962.99962 0 0 0 -.00006-1.414z'></path>
                                    </svg>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-valueprops-description'>
                                  <h3 className='rf-digitalmat-valueprops-header'>
                                    Get more with Apple Trade In
                                  </h3>
                                  Get extra credit now through May&nbsp;31. Save
                                  $25–$2,010 toward a new Mac when you trade in
                                  your current one.**
                                </div>
                              </div>
                              <div className='rf-digitalmat-valueprops-item'>
                                <div className='rf-digitalmat-valueprops-icon'>
                                  <div className='as-svgicon-container dd-color-razzmatazz'>
                                    <svg
                                      xmlns='http://www.w3.org/2000/svg'
                                      viewBox='0 0 36 56'
                                      className='as-svgicon as-svgicon-delivery as-svgicon-elevated as-svgicon-deliverydelevated'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <g>
                                        <rect
                                          width='36'
                                          height='56'
                                          fill='none'
                                        ></rect>
                                        <path d='M33.905,17.063l-14-7.581a3.991,3.991,0,0,0-3.811,0l-14,7.581A4,4,0,0,0,0,20.581V35.419a4,4,0,0,0,2.095,3.518l14,7.581a3.989,3.989,0,0,0,3.811,0l14-7.581A4,4,0,0,0,36,35.419V20.581A4,4,0,0,0,33.905,17.063ZM17.048,11.241a1.993,1.993,0,0,1,1.9,0l13.8,7.47-6.383,3.645L11.943,14.005ZM18,27.133,3.253,18.711l6.629-3.589L24.355,23.5ZM3.048,37.178A2,2,0,0,1,2,35.419V20.581a1.955,1.955,0,0,1,.036-.262L17,28.865V44.733ZM34,35.419a2,2,0,0,1-1.048,1.759L19,44.733V28.865l14.964-8.545a1.955,1.955,0,0,1,.036.262Z'></path>
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-valueprops-description'>
                                  <h3 className='rf-digitalmat-valueprops-header'>
                                    Free delivery
                                  </h3>
                                  <span>
                                    And free returns. See checkout for delivery
                                    dates.
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    aria-hidden='true'
                    data-core-fade-transition-wrapper=''
                    className='rf-digitalmat-overlay-tabcontent r-fade-transition-exit-done'
                    data-core-tabs-panel=''
                    id='panel-3de2be30-e0c2-11ec-bb44-35cae391b59c-5'
                    aria-labelledby='tab-3de2be30-e0c2-11ec-bb44-35cae391b59c-5'
                  >
                    <div
                      data-core-tabs=''
                      id='3def8f70-e0c2-11ec-bb44-35cae391b59c'
                      className='rf-digitalmat-inlinetabs'
                      data-core-tabs-transition-done=''
                    >
                      <div
                        data-core-tabs-panels=''
                        className='rf-digitalmat-inlinetabnav-contentsection'
                        style='height: 0px;'
                      >
                        <div
                          data-core-fade-transition-wrapper=''
                          className='rf-digitalmat-inlinetabnav-tabcontent r-fade-transition-enter-done r-fade-transition-appear-done'
                          data-core-tabs-panel=''
                          data-core-tabs-panel-selected=''
                          id='panel-3def8f70-e0c2-11ec-bb44-35cae391b59c-0'
                        >
                          <div className='row rf-digitalmat-inlinetabnav-tabcontent-container'>
                            <div className='column large-6 small-12 rf-digitalmat-gallerysection'>
                              <div className='rf-digitalmat-cardgallery with-paddlenav with-paddlenav-onhover'>
                                <div
                                  className='rc-inline-gallery rf-digitalmat-gallery'
                                  role='group'
                                  aria-label='Gallery'
                                >
                                  <div className='rc-gallery-dotnav dotnav'>
                                    <ul
                                      className=''
                                      role='tablist'
                                      aria-label='Mac mini'
                                    >
                                      <li role='presentation'>
                                        <button
                                          id='3df20070-e0c2-11ec-bb44-35cae391b59c-tab-item-0'
                                          type='button'
                                          role='tab'
                                          aria-controls='3df20070-e0c2-11ec-bb44-35cae391b59c-gallery-item-0'
                                          aria-selected='true'
                                          aria-label='Item 1'
                                          tabIndex='0'
                                          className='rc-gallery-dotnav-item dotnav-item current'
                                          data-autom='gallery-dot-nav-0'
                                        ></button>
                                      </li>
                                      <li role='presentation'>
                                        <button
                                          id='3df20070-e0c2-11ec-bb44-35cae391b59c-tab-item-1'
                                          type='button'
                                          role='tab'
                                          aria-controls='3df20070-e0c2-11ec-bb44-35cae391b59c-gallery-item-1'
                                          aria-selected='false'
                                          aria-label='Item 2'
                                          tabIndex='-1'
                                          className='rc-gallery-dotnav-item dotnav-item'
                                          data-autom='gallery-dot-nav-1'
                                        ></button>
                                      </li>
                                      <li role='presentation'>
                                        <button
                                          id='3df20070-e0c2-11ec-bb44-35cae391b59c-tab-item-2'
                                          type='button'
                                          role='tab'
                                          aria-controls='3df20070-e0c2-11ec-bb44-35cae391b59c-gallery-item-2'
                                          aria-selected='false'
                                          aria-label='Item 3'
                                          tabIndex='-1'
                                          className='rc-gallery-dotnav-item dotnav-item'
                                          data-autom='gallery-dot-nav-2'
                                        ></button>
                                      </li>
                                      <li role='presentation'>
                                        <button
                                          id='3df20070-e0c2-11ec-bb44-35cae391b59c-tab-item-3'
                                          type='button'
                                          role='tab'
                                          aria-controls='3df20070-e0c2-11ec-bb44-35cae391b59c-gallery-item-3'
                                          aria-selected='false'
                                          aria-label='Item 4'
                                          tabIndex='-1'
                                          className='rc-gallery-dotnav-item dotnav-item'
                                          data-autom='gallery-dot-nav-3'
                                        ></button>
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    id='3df20070-e0c2-11ec-bb44-35cae391b59c'
                                    className='rf-digitalmat-gallery-items'
                                    data-core-gallery='true'
                                    data-core-gallery-fade='false'
                                  >
                                    <div
                                      data-core-gallery-scroller='true'
                                      style='transform: translateX(0px); width: 400%; left: 0%; transition: none 0s ease 0s;'
                                    >
                                      <div
                                        id='3df20070-e0c2-11ec-bb44-35cae391b59c-gallery-item-0'
                                        data-core-gallery-item='true'
                                        aria-hidden='false'
                                        className='rc-inline-gallery-item'
                                        role='tabpanel'
                                        aria-label='Item 1'
                                      >
                                        <div className='rf-digitalmat-cardgallery-img-wrapper'>
                                          <img
                                            width='364'
                                            height='333'
                                            alt=''
                                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-digitalmat-gallery-1-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635186947000'
                                            srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-digitalmat-gallery-1-202111?wid=364&amp;hei=333&amp;fmt=png-alpha&amp;.v=1635186947000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-digitalmat-gallery-1-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635186947000 2x'
                                            className='rf-digitalmat-cardgallery-img'
                                          />
                                        </div>
                                      </div>
                                      <div
                                        id='3df20070-e0c2-11ec-bb44-35cae391b59c-gallery-item-1'
                                        data-core-gallery-item='true'
                                        aria-hidden='true'
                                        className='rc-inline-gallery-item'
                                        role='tabpanel'
                                        aria-label='Item 2'
                                      >
                                        <div className='rf-digitalmat-cardgallery-img-wrapper'>
                                          <img
                                            width='364'
                                            height='333'
                                            alt=''
                                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-digitalmat-gallery-2-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635186947000'
                                            srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-digitalmat-gallery-2-202111?wid=364&amp;hei=333&amp;fmt=png-alpha&amp;.v=1635186947000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-digitalmat-gallery-2-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635186947000 2x'
                                            className='rf-digitalmat-cardgallery-img'
                                          />
                                        </div>
                                      </div>
                                      <div
                                        id='3df20070-e0c2-11ec-bb44-35cae391b59c-gallery-item-2'
                                        data-core-gallery-item='true'
                                        aria-hidden='true'
                                        className='rc-inline-gallery-item'
                                        role='tabpanel'
                                        aria-label='Item 3'
                                      >
                                        <div className='rf-digitalmat-cardgallery-img-wrapper'>
                                          <img
                                            width='364'
                                            height='333'
                                            alt=''
                                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-digitalmat-gallery-3-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635186948000'
                                            srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-digitalmat-gallery-3-202111?wid=364&amp;hei=333&amp;fmt=png-alpha&amp;.v=1635186948000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-digitalmat-gallery-3-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635186948000 2x'
                                            className='rf-digitalmat-cardgallery-img'
                                          />
                                        </div>
                                      </div>
                                      <div
                                        id='3df20070-e0c2-11ec-bb44-35cae391b59c-gallery-item-3'
                                        data-core-gallery-item='true'
                                        aria-hidden='true'
                                        className='rc-inline-gallery-item'
                                        role='tabpanel'
                                        aria-label='Item 4'
                                      >
                                        <div className='rf-digitalmat-cardgallery-img-wrapper'>
                                          <img
                                            width='364'
                                            height='333'
                                            alt=''
                                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-digitalmat-gallery-4-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635186948000'
                                            srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-digitalmat-gallery-4-202111?wid=364&amp;hei=333&amp;fmt=png-alpha&amp;.v=1635186948000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-digitalmat-gallery-4-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635186948000 2x'
                                            className='rf-digitalmat-cardgallery-img'
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='rc-gallery-paddlenav paddlenav paddlenav-compact'>
                                    <button
                                      type='button'
                                      disabled=''
                                      aria-hidden='true'
                                      aria-label='Previous'
                                      className='paddlenav-arrow paddlenav-arrow-previous'
                                      data-autom='paddlenav-previous'
                                    ></button>
                                    <button
                                      type='button'
                                      aria-hidden='false'
                                      aria-label='Next'
                                      className='paddlenav-arrow paddlenav-arrow-next'
                                      data-autom='paddlenav-next'
                                    ></button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='column large-6 small-12 rf-digitalmat-contentsection'>
                              <h2
                                className='rf-digitalmat-overlay-header'
                                id='rf-digitalmat-overlay-label'
                                data-autom='DigitalMat-overlay-header-5'
                              >
                                Mac mini
                              </h2>
                              <div className='rf-digitalmat-price-button'>
                                <div
                                  className='rf-digitalmat-price'
                                  data-autom='DigitalMat-price-5'
                                >
                                  <div className='rc-prices-inline rc-prices-inline-lead-with-full-price'>
                                    <div className='rc-price'>
                                      <span className='rc-prices-currentprice'>
                                        From{' '}
                                        <span className='nowrap'>$699</span>
                                      </span>
                                      <span className='rc-prices-installmentsseparator'>
                                        {' '}
                                      </span>
                                      <span className='rc-monthly-price'>
                                        <span className='rc-prices-currentprice'>
                                          {' '}
                                          <span className='nowrap'>
                                            {' '}
                                            or $58.25
                                            <span aria-hidden='true'>
                                              /mo.{' '}
                                            </span>
                                            <span className='visuallyhidden'>
                                              {' '}
                                              per month
                                            </span>
                                          </span>{' '}
                                          <span className='nowrap'>
                                            <span className='acinstallment-term-length'>
                                              {' '}
                                              for 12{' '}
                                              <span aria-hidden='true'>
                                                mo.
                                              </span>
                                              <span className='visuallyhidden'>
                                                months
                                              </span>
                                            </span>
                                            <span className='visuallyhidden'>
                                              Footnote{' '}
                                            </span>
                                            *
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div className='rc-prices-footer'>
                                      <div className='rc-financing-message'>
                                        <span className='as-prices-installments as-price-installments'>
                                          <a
                                            href='/us/shop/go/finance'
                                            target='_blank'
                                            rel="noreferrer"
                                            name='browse'
                                            className='as-price-installments-items'
                                            data-analytics-title='learn more about financing'
                                          >
                                            {' '}
                                            <span className='more'>
                                              null% Financing Available
                                            </span>
                                          </a>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <a
                                  href='/shop/buy-mac/mac-mini'
                                  data-feature-name='Mac mini modal'
                                  data-display-name='shop Mac&nbsp;mini 2020 Main'
                                  data-autom='DigitalMat-buynow-button-5'
                                  className='button rf-digitalmat-button'
                                >
                                  Buy
                                  <span className='visuallyhidden'>
                                    {' '}
                                    - Mac mini
                                  </span>
                                </a>
                              </div>
                              <div
                                className='rf-digitalmat-productdetails'
                                data-autom='DigitalMat-productdetails-5'
                              >
                                <div className='rf-digitalmat-productdetails-item'>
                                  <div className='rf-digitalmat-productdetails-content'>
                                    <svg
                                      height='35'
                                      viewBox='0 0 35 35'
                                      width='35'
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <path
                                        d='m0 0h35v35h-35z'
                                        fill='none'
                                      ></path>
                                      <path d='m24.5 6h-14a4.505 4.505 0 0 0 -4.5 4.5v14a4.505 4.505 0 0 0 4.5 4.5h14a4.505 4.505 0 0 0 4.5-4.5v-14a4.505 4.505 0 0 0 -4.5-4.5zm-11.6562 8.0908a1.4863 1.4863 0 0 1 .9912-.5166.7251.7251 0 0 1 .0127.1367 1.5243 1.5243 0 0 1 -.3545.9434 1.3167 1.3167 0 0 1 -.919.4834.5255.5255 0 0 1 -.09-.0088.6771.6771 0 0 1 -.0127-.124 1.4632 1.4632 0 0 1 .3723-.9141zm1.9394 5.4131c-.2861.4141-.59.833-1.0508.833s-.581-.2685-1.1064-.2685c-.5215 0-.71.2773-1.1289.2773s-.7129-.3848-1.0508-.8594a4.1836 4.1836 0 0 1 -.709-2.247 1.8136 1.8136 0 0 1 1.7-2.0118c.4443 0 .82.294 1.1025.294.2647 0 .68-.3115 1.1924-.3115a1.5863 1.5863 0 0 1 1.3408.6748 1.5293 1.5293 0 0 0 -.73 1.2861 1.4937 1.4937 0 0 0 .9062 1.3721 3.5765 3.5765 0 0 1 -.466.9609zm6.5361.752h-.92v-3.3565h-.0683l-1.2637 3.3565h-.6465l-1.2647-3.3565h-.0683v3.3565h-.919v-4.9317h1.1817l1.3642 3.6094h.0616l1.36-3.6094h1.1826zm3.0547 0h-1.0312v-3.958h-.0628l-1.209.8408v-.93l1.2744-.8848h1.0286z'></path>
                                    </svg>
                                    <div className='rf-digitalmat-featuretext'>
                                      Apple M1 chip delivers powerful CPU, GPU,
                                      and machine learning performance
                                    </div>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-productdetails-item'>
                                  <div className='rf-digitalmat-productdetails-content'>
                                    <svg
                                      height='35'
                                      viewBox='0 0 35 35'
                                      width='35'
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <path
                                        d='m0 0h35v35h-35z'
                                        fill='none'
                                      ></path>
                                      <path d='m21.8 4.1138-.0095.0248-3.8665 10.0957-.52 1.3577h1.4538l7.2.0027c-.0161.0244-.0359.0522-.0606.0834l-11.8059 15.1827c-.0124.0167-.0244.0315-.0356.0448l.0168-.0464 3.8675-10.0827.521-1.3581h-1.4551l-7.2083-.0022a1.1551 1.1551 0 0 1 .0689-.0965l11.8061-15.17zm.144-1.1138a1.12 1.12 0 0 0 -.2766.0365 1.28 1.28 0 0 0 -.6946.5126l-11.7954 15.1564a1.3552 1.3552 0 0 0 -.3374.8305.843.843 0 0 0 .26.6294.9246.9246 0 0 0 .6748.253h7.3316l-3.867 10.0827a1.2746 1.2746 0 0 0 -.0715.8695.886.886 0 0 0 .4348.5253.9149.9149 0 0 0 .429.1041 1.1527 1.1527 0 0 0 .2656-.0325 1.2489 1.2489 0 0 0 .6941-.5061l11.7954-15.17a1.3563 1.3563 0 0 0 .3374-.83.8233.8233 0 0 0 -.2595-.6228.94.94 0 0 0 -.6748-.2466h-7.3321l3.867-10.0957a1.2509 1.2509 0 0 0 .071-.8629.8794.8794 0 0 0 -.8518-.6334z'></path>
                                    </svg>
                                    <div className='rf-digitalmat-featuretext'>
                                      Superfast SSD storage opens apps and files
                                      in an instant
                                    </div>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-productdetails-item'>
                                  <div className='rf-digitalmat-productdetails-content'>
                                    <svg
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                      viewBox='0 0 35 35'
                                    >
                                      <g>
                                        <rect
                                          width='35'
                                          height='35'
                                          fill='none'
                                        ></rect>
                                        <path d='M26.5,13a4.5,4.5,0,0,1,0,9H8.5a4.5,4.5,0,0,1,0-9h18m0-1H8.5a5.5,5.5,0,0,0,0,11h18a5.5,5.5,0,0,0,0-11Zm.5,5.5h0a.5.5,0,0,0-.5-.5H8.5a.5.5,0,0,0-.5.5H8a.5.5,0,0,0,.5.5h18A.5.5,0,0,0,27,17.5Z'></path>
                                      </g>
                                    </svg>
                                    <div className='rf-digitalmat-featuretext'>
                                      Two Thunderbolt / USB 4 ports, one HDMI
                                      port, two USB-A ports, and Gigabit
                                      Ethernet
                                    </div>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-productdetails-item'>
                                  <div className='rf-digitalmat-productdetails-content'>
                                    <svg
                                      height='35'
                                      viewBox='0 0 35 35'
                                      width='35'
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <path
                                        d='m0 0h35v35h-35z'
                                        fill='none'
                                      ></path>
                                      <path d='m29.7672 14.7534-1.88 1.9019a13.4967 13.4967 0 0 0 -10.3822-4.71 13.48 13.48 0 0 0 -10.3823 4.71l-1.89-1.9019a.67.67 0 0 1 -.0447-.9733 16.8464 16.8464 0 0 1 24.6238 0 .67.67 0 0 1 -.0446.9733zm-3.8379 3.9045-2.5275 2.5061a7.6888 7.6888 0 0 0 -5.8964-2.9424 7.6012 7.6012 0 0 0 -5.8965 2.9424l-2.5275-2.5061a10.4751 10.4751 0 0 1 8.424-3.9493 10.4922 10.4922 0 0 1 8.4239 3.9493zm-4.4966 4.5087-2.8533 2.7522c-.4816.47-.75.6489-1.074.6489s-.6042-.179-1.0848-.6489l-2.8426-2.7522a4.6385 4.6385 0 0 1 7.8547 0z'></path>
                                    </svg>
                                    <div className='rf-digitalmat-featuretext'>
                                      Next-generation Wi-Fi 6 for faster
                                      connectivity
                                    </div>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-productdetails-item'>
                                  <div className='rf-digitalmat-productdetails-content'>
                                    <svg
                                      height='35'
                                      viewBox='0 0 35 35'
                                      width='35'
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <path
                                        d='m0 0h35v35h-35z'
                                        fill='none'
                                      ></path>
                                      <path d='m24.5 29h-14a4.505 4.505 0 0 1 -4.5-4.5v-14a4.505 4.505 0 0 1 4.5-4.5h14a4.505 4.505 0 0 1 4.5 4.5v14a4.505 4.505 0 0 1 -4.5 4.5zm-14-22a3.5042 3.5042 0 0 0 -3.5 3.5v14a3.5042 3.5042 0 0 0 3.5 3.5h14a3.5042 3.5042 0 0 0 3.5-3.5v-14a3.5042 3.5042 0 0 0 -3.5-3.5zm-.6978 7.7812h1.0078v5.6368h-1.0078zm2.1368 1.3672h.9726v.6524h.0664a1.2418 1.2418 0 0 1 1.2305-.7344 1.3864 1.3864 0 0 1 1.4727 1.59v2.7616h-.9727v-2.5352c0-.664-.27-1-.8594-1a.9269.9269 0 0 0 -.9375 1.0469v2.4883h-.9726zm5.0273 3.1368v-2.3829h-.6641v-.7539h.6641v-1.0468h.9883v1.0468h.9023v.7539h-.9023v2.1524c0 .4258.168.6055.5742.6055a2.8472 2.8472 0 0 0 .3281-.0157v.75a2.7635 2.7635 0 0 1 -.5078.043c-.9804 0-1.3828-.3281-1.3828-1.1523zm2.4492-.9922v-.0039a1.9838 1.9838 0 0 1 1.9922-2.2227 1.9231 1.9231 0 0 1 1.9649 2.1406v.32h-2.9844c.0117.7657.4258 1.211 1.0859 1.211a.99.99 0 0 0 .9219-.461l.0117-.0273h.9258l-.0117.0352a1.7708 1.7708 0 0 1 -1.8672 1.2187 1.9722 1.9722 0 0 1 -2.0391-2.2106zm.98-.418h2.0273c-.0664-.6992-.4609-1.0469-1.0039-1.0469a1.03 1.03 0 0 0 -1.0229 1.0469zm3.8291-3.3789h.9727v5.9219h-.9727z'></path>
                                    </svg>
                                    <div className='rf-digitalmat-featuretext'>
                                      Also available with Intel Core i5 or i7
                                      processor
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='rf-digitalmat-explorelink'>
                                <a
                                  href='https://www.apple.com/mac-mini'
                                  data-feature-name='Mac mini modal'
                                  data-display-name='Explore Mac mini further'
                                  data-autom='DigitalMat-explorelink-5'
                                  className='icon icon-after more'
                                >
                                  Explore Mac mini further
                                </a>
                              </div>
                            </div>
                          </div>
                          <div
                            className='rf-digitalmat-valueprops'
                            data-autom='DigitalMat-valueprops-5'
                          >
                            <div className='rf-digitalmat-valueprops-container'>
                              <div className='rf-digitalmat-valueprops-item'>
                                <div className='rf-digitalmat-valueprops-icon'>
                                  <div className='as-svgicon-container dd-color-saffron'>
                                    <svg
                                      height='25'
                                      viewBox='0 0 25 25'
                                      width='25'
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <path
                                        d='m0 0h25v25h-25z'
                                        fill='none'
                                      ></path>
                                      <path d='m17.6406 21h-10a3.6272 3.6272 0 0 1 -3.6406-3.5v-10a3.6272 3.6272 0 0 1 3.6406-3.5h10a3.3868 3.3868 0 0 1 3.3594 3.5v10a3.3868 3.3868 0 0 1 -3.3594 3.5zm-10-16a2.6267 2.6267 0 0 0 -2.6406 2.5v10a2.6267 2.6267 0 0 0 2.6406 2.5h10a2.3863 2.3863 0 0 0 2.3594-2.5v-10a2.3863 2.3863 0 0 0 -2.3594-2.5zm-.3486 9.4941a.867.867 0 0 1 -.1133-.4218.3632.3632 0 0 1 .3945-.3868.3917.3917 0 0 1 .3868.2891 1.1691 1.1691 0 0 0 1.2031.7188c.6836 0 1.1445-.3907 1.1484-.9375.0039-.6446-.4609-1.0039-1.2148-1.0039h-.375a.3406.3406 0 1 1 0-.68h.3515a.9636.9636 0 0 0 1.0821-.9063c0-.5234-.336-.8711-1.0039-.8711a1.0481 1.0481 0 0 0 -1.086.7071c-.0937.2265-.1875.3085-.3945.3085a.3425.3425 0 0 1 -.3789-.375.88.88 0 0 1 .1055-.4257 1.8513 1.8513 0 0 1 1.7539-.9336c1.1484 0 1.8554.6289 1.8554 1.4687a1.3541 1.3541 0 0 1 -1.1875 1.3242v.02a1.3593 1.3593 0 0 1 1.3828 1.3672c0 .9921-.8671 1.6679-2.0429 1.6679a1.9792 1.9792 0 0 1 -1.8672-.9298zm4.4629-3.4257c0-.9063.4492-1.4532 1.164-1.4532.7188 0 1.1641.5469 1.1641 1.4532s-.4414 1.4648-1.1641 1.4648-1.164-.5547-1.164-1.4648zm1.6719 0c0-.6211-.1914-.9414-.5079-.9414s-.5078.3242-.5078.9453.1875.9531.5078.9531.5079-.332.5079-.957zm-.7422 4.0546a.36.36 0 0 1 .0742-.2187l1.7773-2.5664 1.7461-2.5391a.3337.3337 0 0 1 .3125-.1914.2783.2783 0 0 1 .293.27.3451.3451 0 0 1 -.07.2148l-1.7227 2.4961-1.8008 2.6172c-.0976.1406-.1718.1875-.3007.1875a.2828.2828 0 0 1 -.3089-.27zm2.8086-1.203c0-.9062.4492-1.4531 1.164-1.4531.7188 0 1.1641.543 1.1641 1.4531 0 .9024-.4414 1.4649-1.1641 1.4649-.7187-.0001-1.164-.5587-1.164-1.4649zm1.6757 0c0-.6211-.1914-.9453-.5117-.9453-.3164 0-.5078.3242-.5078.9453 0 .625.1914.9531.5078.9531.3203-.0001.5117-.3282.5117-.9531z'></path>
                                    </svg>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-valueprops-description'>
                                  <h3 className='rf-digitalmat-valueprops-header'>
                                    3% Daily Cash back with Apple&nbsp;Card
                                  </h3>
                                  <span>
                                    And pay 0% APR over 12 mo. when you choose
                                    to check out with Apple Card Monthly
                                    Installments.<sup>◊</sup>
                                  </span>
                                </div>
                              </div>
                              <div className='rf-digitalmat-valueprops-item'>
                                <div className='rf-digitalmat-valueprops-icon'>
                                  <div className='as-svgicon-container dd-color-blue-violet'>
                                    <svg
                                      viewBox='0 0 43 56'
                                      xmlns='http://www.w3.org/2000/svg'
                                      className='as-svgicon as-svgicon-financing as-svgicon-elevated as-svgicon-financingelevated'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <path
                                        d='m0 0h43v56h-43z'
                                        fill='none'
                                      ></path>
                                      <path d='m38.5 27a.99974.99974 0 0 0 -1 1v11a5.00588 5.00588 0 0 1 -5 5h-22a5.00588 5.00588 0 0 1 -5-5v-3.83594l1.543 1.543a.99989.99989 0 1 0 1.414-1.41406l-3.25-3.25a.99962.99962 0 0 0 -1.41406 0l-3.25 3.25a.99989.99989 0 1 0 1.41406 1.414l1.543-1.543v3.836a7.00818 7.00818 0 0 0 7 7h22a7.00818 7.00818 0 0 0 7-7v-11a.99974.99974 0 0 0 -1-1z'></path>
                                      <path d='m28.17188 32.71533a.31074.31074 0 0 0 -.35157.35156q0 .334.35157.334h2.62792a.29915.29915 0 0 0 .34278-.334.30692.30692 0 0 0 -.34278-.35156z'></path>
                                      <path d='m30.60156 21.32031a1.92007 1.92007 0 0 0 -1.40136-.47021h-15.75a1.94085 1.94085 0 0 0 -1.376.47021 1.81128 1.81128 0 0 0 -.50488 1.39307v10.43262h-.92481a.95033.95033 0 0 0 -.70312.29443 1.00858 1.00858 0 0 0 0 1.41553.9536.9536 0 0 0 .70312.29394h20.74416a1.96828 1.96828 0 0 0 1.415-.51855 1.78331 1.78331 0 0 0 .54492-1.35352v-8.376a1.78328 1.78328 0 0 0 -.54492-1.35352 1.96828 1.96828 0 0 0 -1.415-.51855h-.30762v-.31641a1.8689 1.8689 0 0 0 -.47949-1.39304zm-4.99609 3.58155v8.24414h-12.62109v-10.03711a.74576.74576 0 0 1 .84374-.84375h14.99415a.85949.85949 0 0 1 .63281.21093.827.827 0 0 1 .19971.55372h-2.08936a1.96828 1.96828 0 0 0 -1.415.51855 1.78328 1.78328 0 0 0 -.54496 1.35352zm5.53711-.334v-.35156h.09668a.94481.94481 0 0 1 .67676.23291.83527.83527 0 0 1 .24609.63721v8.00683a.83528.83528 0 0 1 -.24609.63721.94481.94481 0 0 1 -.67676.23291h-3.51563a.95761.95761 0 0 1 -.68554-.23291.83525.83525 0 0 1 -.2461-.63721v-8.00682a.83524.83524 0 0 1 .2461-.63721.95761.95761 0 0 1 .68554-.23291h.09668v.35156a.52959.52959 0 0 0 .14063.37793.48342.48342 0 0 0 .36914.14941h2.30273a.48342.48342 0 0 0 .36914-.14941.52959.52959 0 0 0 .14063-.37793z'></path>
                                      <path d='m42.457 19.293a.99962.99962 0 0 0 -1.41406 0l-1.543 1.543v-3.836a7.00818 7.00818 0 0 0 -7-7h-22a7.00818 7.00818 0 0 0 -7 7v11a1 1 0 0 0 2 0v-11a5.00588 5.00588 0 0 1 5-5h22a5.00588 5.00588 0 0 1 5 5v3.83594l-1.543-1.543a.99989.99989 0 0 0 -1.41394 1.41406l3.25 3.25a.99963.99963 0 0 0 1.41406 0l3.25-3.25a.99962.99962 0 0 0 -.00006-1.414z'></path>
                                    </svg>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-valueprops-description'>
                                  <h3 className='rf-digitalmat-valueprops-header'>
                                    Get more with Apple Trade In
                                  </h3>
                                  Get extra credit now through May&nbsp;31. Save
                                  $25–$2,010 toward a new Mac when you trade in
                                  your current one.**
                                </div>
                              </div>
                              <div className='rf-digitalmat-valueprops-item'>
                                <div className='rf-digitalmat-valueprops-icon'>
                                  <div className='as-svgicon-container dd-color-razzmatazz'>
                                    <svg
                                      xmlns='http://www.w3.org/2000/svg'
                                      viewBox='0 0 36 56'
                                      className='as-svgicon as-svgicon-delivery as-svgicon-elevated as-svgicon-deliverydelevated'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <g>
                                        <rect
                                          width='36'
                                          height='56'
                                          fill='none'
                                        ></rect>
                                        <path d='M33.905,17.063l-14-7.581a3.991,3.991,0,0,0-3.811,0l-14,7.581A4,4,0,0,0,0,20.581V35.419a4,4,0,0,0,2.095,3.518l14,7.581a3.989,3.989,0,0,0,3.811,0l14-7.581A4,4,0,0,0,36,35.419V20.581A4,4,0,0,0,33.905,17.063ZM17.048,11.241a1.993,1.993,0,0,1,1.9,0l13.8,7.47-6.383,3.645L11.943,14.005ZM18,27.133,3.253,18.711l6.629-3.589L24.355,23.5ZM3.048,37.178A2,2,0,0,1,2,35.419V20.581a1.955,1.955,0,0,1,.036-.262L17,28.865V44.733ZM34,35.419a2,2,0,0,1-1.048,1.759L19,44.733V28.865l14.964-8.545a1.955,1.955,0,0,1,.036.262Z'></path>
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-valueprops-description'>
                                  <h3 className='rf-digitalmat-valueprops-header'>
                                    Free delivery
                                  </h3>
                                  <span>
                                    And free returns. See checkout for delivery
                                    dates.
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    aria-hidden='true'
                    data-core-fade-transition-wrapper=''
                    className='rf-digitalmat-overlay-tabcontent r-fade-transition-exit-done'
                    data-core-tabs-panel=''
                    id='panel-3de2be30-e0c2-11ec-bb44-35cae391b59c-6'
                    aria-labelledby='tab-3de2be30-e0c2-11ec-bb44-35cae391b59c-6'
                  >
                    <div
                      data-core-tabs=''
                      id='3df38710-e0c2-11ec-bb44-35cae391b59c'
                      className='rf-digitalmat-inlinetabs'
                      data-core-tabs-transition-done=''
                    >
                      <div
                        data-core-tabs-panels=''
                        className='rf-digitalmat-inlinetabnav-contentsection'
                        style='height: 0px;'
                      >
                        <div
                          data-core-fade-transition-wrapper=''
                          className='rf-digitalmat-inlinetabnav-tabcontent r-fade-transition-enter-done r-fade-transition-appear-done'
                          data-core-tabs-panel=''
                          data-core-tabs-panel-selected=''
                          id='panel-3df38710-e0c2-11ec-bb44-35cae391b59c-0'
                        >
                          <div className='row rf-digitalmat-inlinetabnav-tabcontent-container'>
                            <div className='column large-6 small-12 rf-digitalmat-gallerysection'>
                              <div className='rf-digitalmat-cardgallery with-paddlenav with-paddlenav-onhover'>
                                <div
                                  className='rc-inline-gallery rf-digitalmat-gallery'
                                  role='group'
                                  aria-label='Gallery'
                                >
                                  <div className='rc-gallery-dotnav dotnav'>
                                    <ul
                                      className=''
                                      role='tablist'
                                      aria-label='Mac Studio'
                                    >
                                      <li role='presentation'>
                                        <button
                                          id='3df38711-e0c2-11ec-bb44-35cae391b59c-tab-item-0'
                                          type='button'
                                          role='tab'
                                          aria-controls='3df38711-e0c2-11ec-bb44-35cae391b59c-gallery-item-0'
                                          aria-selected='true'
                                          aria-label='Item 1'
                                          tabIndex='0'
                                          className='rc-gallery-dotnav-item dotnav-item current'
                                          data-autom='gallery-dot-nav-0'
                                        ></button>
                                      </li>
                                      <li role='presentation'>
                                        <button
                                          id='3df38711-e0c2-11ec-bb44-35cae391b59c-tab-item-1'
                                          type='button'
                                          role='tab'
                                          aria-controls='3df38711-e0c2-11ec-bb44-35cae391b59c-gallery-item-1'
                                          aria-selected='false'
                                          aria-label='Item 2'
                                          tabIndex='-1'
                                          className='rc-gallery-dotnav-item dotnav-item'
                                          data-autom='gallery-dot-nav-1'
                                        ></button>
                                      </li>
                                      <li role='presentation'>
                                        <button
                                          id='3df38711-e0c2-11ec-bb44-35cae391b59c-tab-item-2'
                                          type='button'
                                          role='tab'
                                          aria-controls='3df38711-e0c2-11ec-bb44-35cae391b59c-gallery-item-2'
                                          aria-selected='false'
                                          aria-label='Item 3'
                                          tabIndex='-1'
                                          className='rc-gallery-dotnav-item dotnav-item'
                                          data-autom='gallery-dot-nav-2'
                                        ></button>
                                      </li>
                                      <li role='presentation'>
                                        <button
                                          id='3df38711-e0c2-11ec-bb44-35cae391b59c-tab-item-3'
                                          type='button'
                                          role='tab'
                                          aria-controls='3df38711-e0c2-11ec-bb44-35cae391b59c-gallery-item-3'
                                          aria-selected='false'
                                          aria-label='Item 4'
                                          tabIndex='-1'
                                          className='rc-gallery-dotnav-item dotnav-item'
                                          data-autom='gallery-dot-nav-3'
                                        ></button>
                                      </li>
                                      <li role='presentation'>
                                        <button
                                          id='3df38711-e0c2-11ec-bb44-35cae391b59c-tab-item-4'
                                          type='button'
                                          role='tab'
                                          aria-controls='3df38711-e0c2-11ec-bb44-35cae391b59c-gallery-item-4'
                                          aria-selected='false'
                                          aria-label='Item 5'
                                          tabIndex='-1'
                                          className='rc-gallery-dotnav-item dotnav-item'
                                          data-autom='gallery-dot-nav-4'
                                        ></button>
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    id='3df38711-e0c2-11ec-bb44-35cae391b59c'
                                    className='rf-digitalmat-gallery-items'
                                    data-core-gallery='true'
                                    data-core-gallery-fade='false'
                                  >
                                    <div
                                      data-core-gallery-scroller='true'
                                      style='transform: translateX(0px); width: 500%; left: 0%; transition: none 0s ease 0s;'
                                    >
                                      <div
                                        id='3df38711-e0c2-11ec-bb44-35cae391b59c-gallery-item-0'
                                        data-core-gallery-item='true'
                                        aria-hidden='false'
                                        className='rc-inline-gallery-item'
                                        role='tabpanel'
                                        aria-label='Item 1'
                                      >
                                        <div className='rf-digitalmat-cardgallery-img-wrapper'>
                                          <img
                                            width='364'
                                            height='333'
                                            alt=''
                                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-studio-digitalmat-gallery-1-202203?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1645207723410'
                                            srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-studio-digitalmat-gallery-1-202203?wid=364&amp;hei=333&amp;fmt=png-alpha&amp;.v=1645207723410, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-studio-digitalmat-gallery-1-202203?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1645207723410 2x'
                                            className='rf-digitalmat-cardgallery-img'
                                          />
                                        </div>
                                      </div>
                                      <div
                                        id='3df38711-e0c2-11ec-bb44-35cae391b59c-gallery-item-1'
                                        data-core-gallery-item='true'
                                        aria-hidden='true'
                                        className='rc-inline-gallery-item'
                                        role='tabpanel'
                                        aria-label='Item 2'
                                      >
                                        <div className='rf-digitalmat-cardgallery-img-wrapper'>
                                          <img
                                            width='364'
                                            height='333'
                                            alt=''
                                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-studio-digitalmat-gallery-2-202203?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1645207723396'
                                            srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-studio-digitalmat-gallery-2-202203?wid=364&amp;hei=333&amp;fmt=png-alpha&amp;.v=1645207723396, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-studio-digitalmat-gallery-2-202203?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1645207723396 2x'
                                            className='rf-digitalmat-cardgallery-img'
                                          />
                                        </div>
                                      </div>
                                      <div
                                        id='3df38711-e0c2-11ec-bb44-35cae391b59c-gallery-item-2'
                                        data-core-gallery-item='true'
                                        aria-hidden='true'
                                        className='rc-inline-gallery-item'
                                        role='tabpanel'
                                        aria-label='Item 3'
                                      >
                                        <div className='rf-digitalmat-cardgallery-img-wrapper'>
                                          <img
                                            width='364'
                                            height='333'
                                            alt=''
                                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-studio-digitalmat-gallery-3-202203?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1645207723358'
                                            srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-studio-digitalmat-gallery-3-202203?wid=364&amp;hei=333&amp;fmt=png-alpha&amp;.v=1645207723358, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-studio-digitalmat-gallery-3-202203?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1645207723358 2x'
                                            className='rf-digitalmat-cardgallery-img'
                                          />
                                        </div>
                                      </div>
                                      <div
                                        id='3df38711-e0c2-11ec-bb44-35cae391b59c-gallery-item-3'
                                        data-core-gallery-item='true'
                                        aria-hidden='true'
                                        className='rc-inline-gallery-item'
                                        role='tabpanel'
                                        aria-label='Item 4'
                                      >
                                        <div className='rf-digitalmat-cardgallery-img-wrapper'>
                                          <img
                                            width='364'
                                            height='333'
                                            alt=''
                                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-studio-digitalmat-gallery-4-202203?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1645207723416'
                                            srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-studio-digitalmat-gallery-4-202203?wid=364&amp;hei=333&amp;fmt=png-alpha&amp;.v=1645207723416, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-studio-digitalmat-gallery-4-202203?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1645207723416 2x'
                                            className='rf-digitalmat-cardgallery-img'
                                          />
                                        </div>
                                      </div>
                                      <div
                                        id='3df38711-e0c2-11ec-bb44-35cae391b59c-gallery-item-4'
                                        data-core-gallery-item='true'
                                        aria-hidden='true'
                                        className='rc-inline-gallery-item'
                                        role='tabpanel'
                                        aria-label='Item 5'
                                      >
                                        <div className='rf-digitalmat-cardgallery-img-wrapper'>
                                          <img
                                            width='364'
                                            height='333'
                                            alt=''
                                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-studio-digitalmat-gallery-5-202203?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1646257261656'
                                            srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-studio-digitalmat-gallery-5-202203?wid=364&amp;hei=333&amp;fmt=png-alpha&amp;.v=1646257261656, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-studio-digitalmat-gallery-5-202203?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1646257261656 2x'
                                            className='rf-digitalmat-cardgallery-img'
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='rc-gallery-paddlenav paddlenav paddlenav-compact'>
                                    <button
                                      type='button'
                                      disabled=''
                                      aria-hidden='true'
                                      aria-label='Previous'
                                      className='paddlenav-arrow paddlenav-arrow-previous'
                                      data-autom='paddlenav-previous'
                                    ></button>
                                    <button
                                      type='button'
                                      aria-hidden='false'
                                      aria-label='Next'
                                      className='paddlenav-arrow paddlenav-arrow-next'
                                      data-autom='paddlenav-next'
                                    ></button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='column large-6 small-12 rf-digitalmat-contentsection'>
                              <div className='rf-digitalmat-violatortext violator-frameless'>
                                New
                              </div>
                              <h2
                                className='rf-digitalmat-overlay-header'
                                id='rf-digitalmat-overlay-label'
                                data-autom='DigitalMat-overlay-header-6'
                              >
                                Mac Studio
                              </h2>
                              <div className='rf-digitalmat-price-button'>
                                <div
                                  className='rf-digitalmat-price'
                                  data-autom='DigitalMat-price-6'
                                >
                                  <div className='rc-prices-inline rc-prices-inline-lead-with-full-price'>
                                    <div className='rc-price'>
                                      <span className='rc-prices-currentprice'>
                                        From{' '}
                                        <span className='nowrap'>$1999</span>
                                      </span>
                                      <span className='rc-prices-installmentsseparator'>
                                        {' '}
                                      </span>
                                      <span className='rc-monthly-price'>
                                        <span className='rc-prices-currentprice'>
                                          {' '}
                                          <span className='nowrap'>
                                            {' '}
                                            or $166.58
                                            <span aria-hidden='true'>
                                              /mo.{' '}
                                            </span>
                                            <span className='visuallyhidden'>
                                              {' '}
                                              per month
                                            </span>
                                          </span>{' '}
                                          <span className='nowrap'>
                                            <span className='acinstallment-term-length'>
                                              {' '}
                                              for 12{' '}
                                              <span aria-hidden='true'>
                                                mo.
                                              </span>
                                              <span className='visuallyhidden'>
                                                months
                                              </span>
                                            </span>
                                            <span className='visuallyhidden'>
                                              Footnote{' '}
                                            </span>
                                            *
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div className='rc-prices-footer'>
                                      <div className='rc-financing-message'>
                                        <span className='as-prices-installments as-price-installments'>
                                          <a
                                            href='/us/shop/go/finance'
                                            target='_blank'
                                            rel="noreferrer"
                                            name='browse'
                                            className='as-price-installments-items'
                                            data-analytics-title='learn more about financing'
                                          >
                                            {' '}
                                            <span className='more'>
                                              null% Financing Available
                                            </span>
                                          </a>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <a
                                  href='/shop/buy-mac/mac-studio'
                                  data-feature-name='Mac Studio modal'
                                  data-display-name='shop Mac Studio 2022 Main'
                                  data-autom='DigitalMat-buynow-button-6'
                                  className='button rf-digitalmat-button'
                                >
                                  Buy
                                  <span className='visuallyhidden'>
                                    {' '}
                                    - Mac Studio
                                  </span>
                                </a>
                              </div>
                              <div
                                className='rf-digitalmat-productdetails'
                                data-autom='DigitalMat-productdetails-6'
                              >
                                <div className='rf-digitalmat-productdetails-item'>
                                  <div className='rf-digitalmat-productdetails-content'>
                                    <svg
                                      height='35'
                                      viewBox='0 0 35 35'
                                      width='35'
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <path
                                        d='m0 0h35v35h-35z'
                                        fill='none'
                                      ></path>
                                      <path d='m24.5 6h-14a4.505 4.505 0 0 0 -4.5 4.5v14a4.505 4.505 0 0 0 4.5 4.5h14a4.505 4.505 0 0 0 4.5-4.5v-14a4.505 4.505 0 0 0 -4.5-4.5zm-11.6562 8.0908a1.4863 1.4863 0 0 1 .9912-.5166.7251.7251 0 0 1 .0127.1367 1.5243 1.5243 0 0 1 -.3545.9434 1.3167 1.3167 0 0 1 -.919.4834.5255.5255 0 0 1 -.09-.0088.6771.6771 0 0 1 -.0127-.124 1.4632 1.4632 0 0 1 .3723-.9141zm1.9394 5.4131c-.2861.4141-.59.833-1.0508.833s-.581-.2685-1.1064-.2685c-.5215 0-.71.2773-1.1289.2773s-.7129-.3848-1.0508-.8594a4.1836 4.1836 0 0 1 -.709-2.247 1.8136 1.8136 0 0 1 1.7-2.0118c.4443 0 .82.294 1.1025.294.2647 0 .68-.3115 1.1924-.3115a1.5863 1.5863 0 0 1 1.3408.6748 1.5293 1.5293 0 0 0 -.73 1.2861 1.4937 1.4937 0 0 0 .9062 1.3721 3.5765 3.5765 0 0 1 -.466.9609zm6.5361.752h-.92v-3.3565h-.0683l-1.2637 3.3565h-.6465l-1.2647-3.3565h-.0683v3.3565h-.919v-4.9317h1.1817l1.3642 3.6094h.0616l1.36-3.6094h1.1826zm3.0547 0h-1.0312v-3.958h-.0628l-1.209.8408v-.93l1.2744-.8848h1.0286z'></path>
                                    </svg>
                                    <div className='rf-digitalmat-featuretext'>
                                      Extreme performance from the Apple M1 Max
                                      or M1 Ultra chip to unleash your
                                      creativity
                                    </div>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-productdetails-item'>
                                  <div className='rf-digitalmat-productdetails-content'>
                                    <svg
                                      height='35'
                                      viewBox='0 0 35 35'
                                      width='35'
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <path
                                        d='m0 0h35v35h-35z'
                                        fill='none'
                                      ></path>
                                      <path d='m29 9h-23a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h.5508a1 1 0 0 1 .8511.4749l.0309.05a1 1 0 0 0 .8511.4751h18.4322a1 1 0 0 0 .8511-.4749l.0309-.05a1 1 0 0 1 .8511-.4751h.5508a3 3 0 0 0 3-3v-10a3 3 0 0 0 -3-3zm2 13a2 2 0 0 1 -2 2h-1.1089a1 1 0 0 0 -.8511.4749l-.0309.05a1 1 0 0 1 -.8511.4751h-17.316a1 1 0 0 1 -.8511-.4749l-.0309-.05a1 1 0 0 0 -.8511-.4751h-1.1089a2 2 0 0 1 -2-2v-10a2 2 0 0 1 2-2h23a2 2 0 0 1 2 2zm-2.875-2.25a1.375 1.375 0 1 1 -1.375-1.375 1.3751 1.3751 0 0 1 1.375 1.375z'></path>
                                    </svg>
                                    <div className='rf-digitalmat-featuretext'>
                                      Stunningly compact design fits right on
                                      your desk
                                    </div>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-productdetails-item'>
                                  <div className='rf-digitalmat-productdetails-content'>
                                    <svg
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                      viewBox='0 0 35 35'
                                    >
                                      <g>
                                        <rect
                                          width='35'
                                          height='35'
                                          fill='none'
                                        ></rect>
                                        <path d='M26.5,13a4.5,4.5,0,0,1,0,9H8.5a4.5,4.5,0,0,1,0-9h18m0-1H8.5a5.5,5.5,0,0,0,0,11h18a5.5,5.5,0,0,0,0-11Zm.5,5.5h0a.5.5,0,0,0-.5-.5H8.5a.5.5,0,0,0-.5.5H8a.5.5,0,0,0,.5.5h18A.5.5,0,0,0,27,17.5Z'></path>
                                      </g>
                                    </svg>
                                    <div className='rf-digitalmat-featuretext'>
                                      A wide array of high-performance ports
                                      allows you to build the studio of your
                                      dreams
                                    </div>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-productdetails-item'>
                                  <div className='rf-digitalmat-productdetails-content'>
                                    <svg
                                      height='35'
                                      viewBox='0 0 35 35'
                                      width='35'
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <path
                                        d='m0 0h35v35h-35z'
                                        fill='none'
                                      ></path>
                                      <path d='m30.25 6h-25.5a1.75 1.75 0 0 0 -1.75 1.75v13.5a1.75 1.75 0 0 0 1.75 1.75h9.25v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5h9.25a1.75 1.75 0 0 0 1.75-1.75v-13.5a1.75 1.75 0 0 0 -1.75-1.75zm-11.65 17.1a1.1 1.1 0 0 1 -2.2 0c0-.0355.0171-.0654.02-.1h2.16c.003.0346.02.0645.02.1zm12.4-2.1a1 1 0 0 1 -1 1h-25a1 1 0 0 1 -1-1v-13a1 1 0 0 1 1-1h25a1 1 0 0 1 1 1z'></path>
                                    </svg>
                                    <div className='rf-digitalmat-featuretext'>
                                      Pairs perfectly with Studio Display — or
                                      up to four displays and one 4K TV for
                                      ultimate customization
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='rf-digitalmat-explorelink'>
                                <a
                                  href='https://www.apple.com/mac-studio'
                                  data-feature-name='Mac Studio modal'
                                  data-display-name='Explore Mac Studio further'
                                  data-autom='DigitalMat-explorelink-6'
                                  className='icon icon-after more'
                                >
                                  Explore Mac Studio further
                                </a>
                              </div>
                            </div>
                          </div>
                          <div
                            className='rf-digitalmat-valueprops'
                            data-autom='DigitalMat-valueprops-6'
                          >
                            <div className='rf-digitalmat-valueprops-container'>
                              <div className='rf-digitalmat-valueprops-item'>
                                <div className='rf-digitalmat-valueprops-icon'>
                                  <div className='as-svgicon-container dd-color-saffron'>
                                    <svg
                                      height='25'
                                      viewBox='0 0 25 25'
                                      width='25'
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <path
                                        d='m0 0h25v25h-25z'
                                        fill='none'
                                      ></path>
                                      <path d='m17.6406 21h-10a3.6272 3.6272 0 0 1 -3.6406-3.5v-10a3.6272 3.6272 0 0 1 3.6406-3.5h10a3.3868 3.3868 0 0 1 3.3594 3.5v10a3.3868 3.3868 0 0 1 -3.3594 3.5zm-10-16a2.6267 2.6267 0 0 0 -2.6406 2.5v10a2.6267 2.6267 0 0 0 2.6406 2.5h10a2.3863 2.3863 0 0 0 2.3594-2.5v-10a2.3863 2.3863 0 0 0 -2.3594-2.5zm-.3486 9.4941a.867.867 0 0 1 -.1133-.4218.3632.3632 0 0 1 .3945-.3868.3917.3917 0 0 1 .3868.2891 1.1691 1.1691 0 0 0 1.2031.7188c.6836 0 1.1445-.3907 1.1484-.9375.0039-.6446-.4609-1.0039-1.2148-1.0039h-.375a.3406.3406 0 1 1 0-.68h.3515a.9636.9636 0 0 0 1.0821-.9063c0-.5234-.336-.8711-1.0039-.8711a1.0481 1.0481 0 0 0 -1.086.7071c-.0937.2265-.1875.3085-.3945.3085a.3425.3425 0 0 1 -.3789-.375.88.88 0 0 1 .1055-.4257 1.8513 1.8513 0 0 1 1.7539-.9336c1.1484 0 1.8554.6289 1.8554 1.4687a1.3541 1.3541 0 0 1 -1.1875 1.3242v.02a1.3593 1.3593 0 0 1 1.3828 1.3672c0 .9921-.8671 1.6679-2.0429 1.6679a1.9792 1.9792 0 0 1 -1.8672-.9298zm4.4629-3.4257c0-.9063.4492-1.4532 1.164-1.4532.7188 0 1.1641.5469 1.1641 1.4532s-.4414 1.4648-1.1641 1.4648-1.164-.5547-1.164-1.4648zm1.6719 0c0-.6211-.1914-.9414-.5079-.9414s-.5078.3242-.5078.9453.1875.9531.5078.9531.5079-.332.5079-.957zm-.7422 4.0546a.36.36 0 0 1 .0742-.2187l1.7773-2.5664 1.7461-2.5391a.3337.3337 0 0 1 .3125-.1914.2783.2783 0 0 1 .293.27.3451.3451 0 0 1 -.07.2148l-1.7227 2.4961-1.8008 2.6172c-.0976.1406-.1718.1875-.3007.1875a.2828.2828 0 0 1 -.3089-.27zm2.8086-1.203c0-.9062.4492-1.4531 1.164-1.4531.7188 0 1.1641.543 1.1641 1.4531 0 .9024-.4414 1.4649-1.1641 1.4649-.7187-.0001-1.164-.5587-1.164-1.4649zm1.6757 0c0-.6211-.1914-.9453-.5117-.9453-.3164 0-.5078.3242-.5078.9453 0 .625.1914.9531.5078.9531.3203-.0001.5117-.3282.5117-.9531z'></path>
                                    </svg>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-valueprops-description'>
                                  <h3 className='rf-digitalmat-valueprops-header'>
                                    3% Daily Cash back with Apple&nbsp;Card
                                  </h3>
                                  <span>
                                    And pay 0% APR over 12 mo. when you choose
                                    to check out with Apple Card Monthly
                                    Installments.<sup>◊</sup>
                                  </span>
                                </div>
                              </div>
                              <div className='rf-digitalmat-valueprops-item'>
                                <div className='rf-digitalmat-valueprops-icon'>
                                  <div className='as-svgicon-container dd-color-blue-violet'>
                                    <svg
                                      viewBox='0 0 43 56'
                                      xmlns='http://www.w3.org/2000/svg'
                                      className='as-svgicon as-svgicon-financing as-svgicon-elevated as-svgicon-financingelevated'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <path
                                        d='m0 0h43v56h-43z'
                                        fill='none'
                                      ></path>
                                      <path d='m38.5 27a.99974.99974 0 0 0 -1 1v11a5.00588 5.00588 0 0 1 -5 5h-22a5.00588 5.00588 0 0 1 -5-5v-3.83594l1.543 1.543a.99989.99989 0 1 0 1.414-1.41406l-3.25-3.25a.99962.99962 0 0 0 -1.41406 0l-3.25 3.25a.99989.99989 0 1 0 1.41406 1.414l1.543-1.543v3.836a7.00818 7.00818 0 0 0 7 7h22a7.00818 7.00818 0 0 0 7-7v-11a.99974.99974 0 0 0 -1-1z'></path>
                                      <path d='m28.17188 32.71533a.31074.31074 0 0 0 -.35157.35156q0 .334.35157.334h2.62792a.29915.29915 0 0 0 .34278-.334.30692.30692 0 0 0 -.34278-.35156z'></path>
                                      <path d='m30.60156 21.32031a1.92007 1.92007 0 0 0 -1.40136-.47021h-15.75a1.94085 1.94085 0 0 0 -1.376.47021 1.81128 1.81128 0 0 0 -.50488 1.39307v10.43262h-.92481a.95033.95033 0 0 0 -.70312.29443 1.00858 1.00858 0 0 0 0 1.41553.9536.9536 0 0 0 .70312.29394h20.74416a1.96828 1.96828 0 0 0 1.415-.51855 1.78331 1.78331 0 0 0 .54492-1.35352v-8.376a1.78328 1.78328 0 0 0 -.54492-1.35352 1.96828 1.96828 0 0 0 -1.415-.51855h-.30762v-.31641a1.8689 1.8689 0 0 0 -.47949-1.39304zm-4.99609 3.58155v8.24414h-12.62109v-10.03711a.74576.74576 0 0 1 .84374-.84375h14.99415a.85949.85949 0 0 1 .63281.21093.827.827 0 0 1 .19971.55372h-2.08936a1.96828 1.96828 0 0 0 -1.415.51855 1.78328 1.78328 0 0 0 -.54496 1.35352zm5.53711-.334v-.35156h.09668a.94481.94481 0 0 1 .67676.23291.83527.83527 0 0 1 .24609.63721v8.00683a.83528.83528 0 0 1 -.24609.63721.94481.94481 0 0 1 -.67676.23291h-3.51563a.95761.95761 0 0 1 -.68554-.23291.83525.83525 0 0 1 -.2461-.63721v-8.00682a.83524.83524 0 0 1 .2461-.63721.95761.95761 0 0 1 .68554-.23291h.09668v.35156a.52959.52959 0 0 0 .14063.37793.48342.48342 0 0 0 .36914.14941h2.30273a.48342.48342 0 0 0 .36914-.14941.52959.52959 0 0 0 .14063-.37793z'></path>
                                      <path d='m42.457 19.293a.99962.99962 0 0 0 -1.41406 0l-1.543 1.543v-3.836a7.00818 7.00818 0 0 0 -7-7h-22a7.00818 7.00818 0 0 0 -7 7v11a1 1 0 0 0 2 0v-11a5.00588 5.00588 0 0 1 5-5h22a5.00588 5.00588 0 0 1 5 5v3.83594l-1.543-1.543a.99989.99989 0 0 0 -1.41394 1.41406l3.25 3.25a.99963.99963 0 0 0 1.41406 0l3.25-3.25a.99962.99962 0 0 0 -.00006-1.414z'></path>
                                    </svg>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-valueprops-description'>
                                  <h3 className='rf-digitalmat-valueprops-header'>
                                    Get more with Apple Trade In
                                  </h3>
                                  Get extra credit now through May&nbsp;31. Save
                                  $25–$2,010 toward a new Mac when you trade in
                                  your current one.**
                                </div>
                              </div>
                              <div className='rf-digitalmat-valueprops-item'>
                                <div className='rf-digitalmat-valueprops-icon'>
                                  <div className='as-svgicon-container dd-color-razzmatazz'>
                                    <svg
                                      xmlns='http://www.w3.org/2000/svg'
                                      viewBox='0 0 36 56'
                                      className='as-svgicon as-svgicon-delivery as-svgicon-elevated as-svgicon-deliverydelevated'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <g>
                                        <rect
                                          width='36'
                                          height='56'
                                          fill='none'
                                        ></rect>
                                        <path d='M33.905,17.063l-14-7.581a3.991,3.991,0,0,0-3.811,0l-14,7.581A4,4,0,0,0,0,20.581V35.419a4,4,0,0,0,2.095,3.518l14,7.581a3.989,3.989,0,0,0,3.811,0l14-7.581A4,4,0,0,0,36,35.419V20.581A4,4,0,0,0,33.905,17.063ZM17.048,11.241a1.993,1.993,0,0,1,1.9,0l13.8,7.47-6.383,3.645L11.943,14.005ZM18,27.133,3.253,18.711l6.629-3.589L24.355,23.5ZM3.048,37.178A2,2,0,0,1,2,35.419V20.581a1.955,1.955,0,0,1,.036-.262L17,28.865V44.733ZM34,35.419a2,2,0,0,1-1.048,1.759L19,44.733V28.865l14.964-8.545a1.955,1.955,0,0,1,.036.262Z'></path>
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-valueprops-description'>
                                  <h3 className='rf-digitalmat-valueprops-header'>
                                    Free delivery
                                  </h3>
                                  <span>
                                    And free returns. See checkout for delivery
                                    dates.
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    aria-hidden='true'
                    data-core-fade-transition-wrapper=''
                    className='rf-digitalmat-overlay-tabcontent r-fade-transition-exit-done'
                    data-core-tabs-panel=''
                    id='panel-3de2be30-e0c2-11ec-bb44-35cae391b59c-7'
                    aria-labelledby='tab-3de2be30-e0c2-11ec-bb44-35cae391b59c-7'
                  >
                    <div
                      data-core-tabs=''
                      id='3df42350-e0c2-11ec-bb44-35cae391b59c'
                      className='rf-digitalmat-inlinetabs'
                      data-core-tabs-transition-done=''
                    >
                      <div
                        data-core-tabs-panels=''
                        className='rf-digitalmat-inlinetabnav-contentsection'
                        style='height: 0px;'
                      >
                        <div
                          data-core-fade-transition-wrapper=''
                          className='rf-digitalmat-inlinetabnav-tabcontent r-fade-transition-enter-done r-fade-transition-appear-done'
                          data-core-tabs-panel=''
                          data-core-tabs-panel-selected=''
                          id='panel-3df42350-e0c2-11ec-bb44-35cae391b59c-0'
                        >
                          <div className='row rf-digitalmat-inlinetabnav-tabcontent-container'>
                            <div className='column large-6 small-12 rf-digitalmat-gallerysection'>
                              <div className='rf-digitalmat-cardgallery with-paddlenav with-paddlenav-onhover'>
                                <div
                                  className='rc-inline-gallery rf-digitalmat-gallery'
                                  role='group'
                                  aria-label='Gallery'
                                >
                                  <div className='rc-gallery-dotnav dotnav'>
                                    <ul
                                      className=''
                                      role='tablist'
                                      aria-label='Studio Display'
                                    >
                                      <li role='presentation'>
                                        <button
                                          id='3df42351-e0c2-11ec-bb44-35cae391b59c-tab-item-0'
                                          type='button'
                                          role='tab'
                                          aria-controls='3df42351-e0c2-11ec-bb44-35cae391b59c-gallery-item-0'
                                          aria-selected='true'
                                          aria-label='Item 1'
                                          tabIndex='0'
                                          className='rc-gallery-dotnav-item dotnav-item current'
                                          data-autom='gallery-dot-nav-0'
                                        ></button>
                                      </li>
                                      <li role='presentation'>
                                        <button
                                          id='3df42351-e0c2-11ec-bb44-35cae391b59c-tab-item-1'
                                          type='button'
                                          role='tab'
                                          aria-controls='3df42351-e0c2-11ec-bb44-35cae391b59c-gallery-item-1'
                                          aria-selected='false'
                                          aria-label='Item 2'
                                          tabIndex='-1'
                                          className='rc-gallery-dotnav-item dotnav-item'
                                          data-autom='gallery-dot-nav-1'
                                        ></button>
                                      </li>
                                      <li role='presentation'>
                                        <button
                                          id='3df42351-e0c2-11ec-bb44-35cae391b59c-tab-item-2'
                                          type='button'
                                          role='tab'
                                          aria-controls='3df42351-e0c2-11ec-bb44-35cae391b59c-gallery-item-2'
                                          aria-selected='false'
                                          aria-label='Item 3'
                                          tabIndex='-1'
                                          className='rc-gallery-dotnav-item dotnav-item'
                                          data-autom='gallery-dot-nav-2'
                                        ></button>
                                      </li>
                                      <li role='presentation'>
                                        <button
                                          id='3df42351-e0c2-11ec-bb44-35cae391b59c-tab-item-3'
                                          type='button'
                                          role='tab'
                                          aria-controls='3df42351-e0c2-11ec-bb44-35cae391b59c-gallery-item-3'
                                          aria-selected='false'
                                          aria-label='Item 4'
                                          tabIndex='-1'
                                          className='rc-gallery-dotnav-item dotnav-item'
                                          data-autom='gallery-dot-nav-3'
                                        ></button>
                                      </li>
                                      <li role='presentation'>
                                        <button
                                          id='3df42351-e0c2-11ec-bb44-35cae391b59c-tab-item-4'
                                          type='button'
                                          role='tab'
                                          aria-controls='3df42351-e0c2-11ec-bb44-35cae391b59c-gallery-item-4'
                                          aria-selected='false'
                                          aria-label='Item 5'
                                          tabIndex='-1'
                                          className='rc-gallery-dotnav-item dotnav-item'
                                          data-autom='gallery-dot-nav-4'
                                        ></button>
                                      </li>
                                      <li role='presentation'>
                                        <button
                                          id='3df42351-e0c2-11ec-bb44-35cae391b59c-tab-item-5'
                                          type='button'
                                          role='tab'
                                          aria-controls='3df42351-e0c2-11ec-bb44-35cae391b59c-gallery-item-5'
                                          aria-selected='false'
                                          aria-label='Item 6'
                                          tabIndex='-1'
                                          className='rc-gallery-dotnav-item dotnav-item'
                                          data-autom='gallery-dot-nav-5'
                                        ></button>
                                      </li>
                                      <li role='presentation'>
                                        <button
                                          id='3df42351-e0c2-11ec-bb44-35cae391b59c-tab-item-6'
                                          type='button'
                                          role='tab'
                                          aria-controls='3df42351-e0c2-11ec-bb44-35cae391b59c-gallery-item-6'
                                          aria-selected='false'
                                          aria-label='Item 7'
                                          tabIndex='-1'
                                          className='rc-gallery-dotnav-item dotnav-item'
                                          data-autom='gallery-dot-nav-6'
                                        ></button>
                                      </li>
                                      <li role='presentation'>
                                        <button
                                          id='3df42351-e0c2-11ec-bb44-35cae391b59c-tab-item-7'
                                          type='button'
                                          role='tab'
                                          aria-controls='3df42351-e0c2-11ec-bb44-35cae391b59c-gallery-item-7'
                                          aria-selected='false'
                                          aria-label='Item 8'
                                          tabIndex='-1'
                                          className='rc-gallery-dotnav-item dotnav-item'
                                          data-autom='gallery-dot-nav-7'
                                        ></button>
                                      </li>
                                      <li role='presentation'>
                                        <button
                                          id='3df42351-e0c2-11ec-bb44-35cae391b59c-tab-item-8'
                                          type='button'
                                          role='tab'
                                          aria-controls='3df42351-e0c2-11ec-bb44-35cae391b59c-gallery-item-8'
                                          aria-selected='false'
                                          aria-label='Item 9'
                                          tabIndex='-1'
                                          className='rc-gallery-dotnav-item dotnav-item'
                                          data-autom='gallery-dot-nav-8'
                                        ></button>
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    id='3df42351-e0c2-11ec-bb44-35cae391b59c'
                                    className='rf-digitalmat-gallery-items'
                                    data-core-gallery='true'
                                    data-core-gallery-fade='false'
                                  >
                                    <div
                                      data-core-gallery-scroller='true'
                                      style='transform: translateX(0px); width: 900%; left: 0%; transition: none 0s ease 0s;'
                                    >
                                      <div
                                        id='3df42351-e0c2-11ec-bb44-35cae391b59c-gallery-item-0'
                                        data-core-gallery-item='true'
                                        aria-hidden='false'
                                        className='rc-inline-gallery-item'
                                        role='tabpanel'
                                        aria-label='Item 1'
                                      >
                                        <div className='rf-digitalmat-cardgallery-img-wrapper'>
                                          <img
                                            width='364'
                                            height='333'
                                            alt=''
                                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/studio-display-digitalmat-gallery-1-202203?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1645207692041'
                                            srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/studio-display-digitalmat-gallery-1-202203?wid=364&amp;hei=333&amp;fmt=png-alpha&amp;.v=1645207692041, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/studio-display-digitalmat-gallery-1-202203?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1645207692041 2x'
                                            className='rf-digitalmat-cardgallery-img'
                                          />
                                        </div>
                                      </div>
                                      <div
                                        id='3df42351-e0c2-11ec-bb44-35cae391b59c-gallery-item-1'
                                        data-core-gallery-item='true'
                                        aria-hidden='true'
                                        className='rc-inline-gallery-item'
                                        role='tabpanel'
                                        aria-label='Item 2'
                                      >
                                        <div className='rf-digitalmat-cardgallery-img-wrapper'>
                                          <img
                                            width='364'
                                            height='333'
                                            alt=''
                                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/studio-display-digitalmat-gallery-2-202203?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1645207692037'
                                            srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/studio-display-digitalmat-gallery-2-202203?wid=364&amp;hei=333&amp;fmt=png-alpha&amp;.v=1645207692037, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/studio-display-digitalmat-gallery-2-202203?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1645207692037 2x'
                                            className='rf-digitalmat-cardgallery-img'
                                          />
                                        </div>
                                      </div>
                                      <div
                                        id='3df42351-e0c2-11ec-bb44-35cae391b59c-gallery-item-2'
                                        data-core-gallery-item='true'
                                        aria-hidden='true'
                                        className='rc-inline-gallery-item'
                                        role='tabpanel'
                                        aria-label='Item 3'
                                      >
                                        <div className='rf-digitalmat-cardgallery-img-wrapper'>
                                          <img
                                            width='364'
                                            height='333'
                                            alt=''
                                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/studio-display-digitalmat-gallery-3-202203?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1645207691982'
                                            srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/studio-display-digitalmat-gallery-3-202203?wid=364&amp;hei=333&amp;fmt=png-alpha&amp;.v=1645207691982, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/studio-display-digitalmat-gallery-3-202203?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1645207691982 2x'
                                            className='rf-digitalmat-cardgallery-img'
                                          />
                                        </div>
                                      </div>
                                      <div
                                        id='3df42351-e0c2-11ec-bb44-35cae391b59c-gallery-item-3'
                                        data-core-gallery-item='true'
                                        aria-hidden='true'
                                        className='rc-inline-gallery-item'
                                        role='tabpanel'
                                        aria-label='Item 4'
                                      >
                                        <div className='rf-digitalmat-cardgallery-img-wrapper'>
                                          <img
                                            width='364'
                                            height='333'
                                            alt=''
                                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/studio-display-digitalmat-gallery-4-202203?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1645207693063'
                                            srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/studio-display-digitalmat-gallery-4-202203?wid=364&amp;hei=333&amp;fmt=png-alpha&amp;.v=1645207693063, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/studio-display-digitalmat-gallery-4-202203?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1645207693063 2x'
                                            className='rf-digitalmat-cardgallery-img'
                                          />
                                        </div>
                                      </div>
                                      <div
                                        id='3df42351-e0c2-11ec-bb44-35cae391b59c-gallery-item-4'
                                        data-core-gallery-item='true'
                                        aria-hidden='true'
                                        className='rc-inline-gallery-item'
                                        role='tabpanel'
                                        aria-label='Item 5'
                                      >
                                        <div className='rf-digitalmat-cardgallery-img-wrapper'>
                                          <img
                                            width='364'
                                            height='333'
                                            alt=''
                                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/studio-display-digitalmat-gallery-5-202203_GEO_US?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1645668259845'
                                            srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/studio-display-digitalmat-gallery-5-202203_GEO_US?wid=364&amp;hei=333&amp;fmt=png-alpha&amp;.v=1645668259845, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/studio-display-digitalmat-gallery-5-202203_GEO_US?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1645668259845 2x'
                                            className='rf-digitalmat-cardgallery-img'
                                          />
                                        </div>
                                      </div>
                                      <div
                                        id='3df42351-e0c2-11ec-bb44-35cae391b59c-gallery-item-5'
                                        data-core-gallery-item='true'
                                        aria-hidden='true'
                                        className='rc-inline-gallery-item'
                                        role='tabpanel'
                                        aria-label='Item 6'
                                      >
                                        <div className='rf-digitalmat-cardgallery-img-wrapper'>
                                          <img
                                            width='364'
                                            height='333'
                                            alt=''
                                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/studio-display-digitalmat-gallery-6-202203?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1645474652834'
                                            srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/studio-display-digitalmat-gallery-6-202203?wid=364&amp;hei=333&amp;fmt=png-alpha&amp;.v=1645474652834, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/studio-display-digitalmat-gallery-6-202203?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1645474652834 2x'
                                            className='rf-digitalmat-cardgallery-img'
                                          />
                                        </div>
                                      </div>
                                      <div
                                        id='3df42351-e0c2-11ec-bb44-35cae391b59c-gallery-item-6'
                                        data-core-gallery-item='true'
                                        aria-hidden='true'
                                        className='rc-inline-gallery-item'
                                        role='tabpanel'
                                        aria-label='Item 7'
                                      >
                                        <div className='rf-digitalmat-cardgallery-img-wrapper'>
                                          <img
                                            width='364'
                                            height='333'
                                            alt=''
                                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/studio-display-digitalmat-gallery-7-202203?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1645207692509'
                                            srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/studio-display-digitalmat-gallery-7-202203?wid=364&amp;hei=333&amp;fmt=png-alpha&amp;.v=1645207692509, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/studio-display-digitalmat-gallery-7-202203?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1645207692509 2x'
                                            className='rf-digitalmat-cardgallery-img'
                                          />
                                        </div>
                                      </div>
                                      <div
                                        id='3df42351-e0c2-11ec-bb44-35cae391b59c-gallery-item-7'
                                        data-core-gallery-item='true'
                                        aria-hidden='true'
                                        className='rc-inline-gallery-item'
                                        role='tabpanel'
                                        aria-label='Item 8'
                                      >
                                        <div className='rf-digitalmat-cardgallery-img-wrapper'>
                                          <img
                                            width='364'
                                            height='333'
                                            alt=''
                                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/studio-display-digitalmat-gallery-8-202203?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1645207692966'
                                            srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/studio-display-digitalmat-gallery-8-202203?wid=364&amp;hei=333&amp;fmt=png-alpha&amp;.v=1645207692966, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/studio-display-digitalmat-gallery-8-202203?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1645207692966 2x'
                                            className='rf-digitalmat-cardgallery-img'
                                          />
                                        </div>
                                      </div>
                                      <div
                                        id='3df42351-e0c2-11ec-bb44-35cae391b59c-gallery-item-8'
                                        data-core-gallery-item='true'
                                        aria-hidden='true'
                                        className='rc-inline-gallery-item'
                                        role='tabpanel'
                                        aria-label='Item 9'
                                      >
                                        <div className='rf-digitalmat-cardgallery-img-wrapper'>
                                          <img
                                            width='364'
                                            height='333'
                                            alt=''
                                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/studio-display-digitalmat-gallery-9-202203?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1645207693001'
                                            srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/studio-display-digitalmat-gallery-9-202203?wid=364&amp;hei=333&amp;fmt=png-alpha&amp;.v=1645207693001, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/studio-display-digitalmat-gallery-9-202203?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1645207693001 2x'
                                            className='rf-digitalmat-cardgallery-img'
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='rc-gallery-paddlenav paddlenav paddlenav-compact'>
                                    <button
                                      type='button'
                                      disabled=''
                                      aria-hidden='true'
                                      aria-label='Previous'
                                      className='paddlenav-arrow paddlenav-arrow-previous'
                                      data-autom='paddlenav-previous'
                                    ></button>
                                    <button
                                      type='button'
                                      aria-hidden='false'
                                      aria-label='Next'
                                      className='paddlenav-arrow paddlenav-arrow-next'
                                      data-autom='paddlenav-next'
                                    ></button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='column large-6 small-12 rf-digitalmat-contentsection'>
                              <div className='rf-digitalmat-violatortext violator-frameless'>
                                New
                              </div>
                              <h2
                                className='rf-digitalmat-overlay-header'
                                id='rf-digitalmat-overlay-label'
                                data-autom='DigitalMat-overlay-header-7'
                              >
                                Studio Display
                              </h2>
                              <div className='rf-digitalmat-price-button'>
                                <div
                                  className='rf-digitalmat-price'
                                  data-autom='DigitalMat-price-7'
                                >
                                  <div className='rc-prices-inline rc-prices-inline-lead-with-full-price'>
                                    <div className='rc-price'>
                                      <span className='rc-prices-currentprice'>
                                        From{' '}
                                        <span className='nowrap'>$1599</span>
                                      </span>
                                      <span className='rc-prices-installmentsseparator'>
                                        {' '}
                                      </span>
                                      <span className='rc-monthly-price'>
                                        <span className='rc-prices-currentprice'>
                                          {' '}
                                          <span className='nowrap'>
                                            {' '}
                                            or $133.25
                                            <span aria-hidden='true'>
                                              /mo.{' '}
                                            </span>
                                            <span className='visuallyhidden'>
                                              {' '}
                                              per month
                                            </span>
                                          </span>{' '}
                                          <span className='nowrap'>
                                            <span className='acinstallment-term-length'>
                                              {' '}
                                              for 12{' '}
                                              <span aria-hidden='true'>
                                                mo.
                                              </span>
                                              <span className='visuallyhidden'>
                                                months
                                              </span>
                                            </span>
                                            <span className='visuallyhidden'>
                                              Footnote{' '}
                                            </span>
                                            *
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div className='rc-prices-footer'>
                                      <div className='rc-financing-message'>
                                        <span className='as-prices-installments as-price-installments'>
                                          <a
                                            href='/us/shop/go/finance'
                                            target='_blank'
                                            rel="noreferrer"
                                            name='browse'
                                            className='as-price-installments-items'
                                            data-analytics-title='learn more about financing'
                                          >
                                            {' '}
                                            <span className='more'>
                                              null% Financing Available
                                            </span>
                                          </a>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <a
                                  href='/shop/buy-mac/apple-studio-display'
                                  data-feature-name='Studio Display modal'
                                  data-display-name='shop Studio Display Main'
                                  data-autom='DigitalMat-buynow-button-7'
                                  className='button rf-digitalmat-button'
                                >
                                  Buy
                                  <span className='visuallyhidden'>
                                    {' '}
                                    - Studio Display
                                  </span>
                                </a>
                              </div>
                              <div
                                className='rf-digitalmat-productdetails'
                                data-autom='DigitalMat-productdetails-7'
                              >
                                <div className='rf-digitalmat-productdetails-item'>
                                  <div className='rf-digitalmat-productdetails-content'>
                                    <svg
                                      height='35'
                                      viewBox='0 0 35 35'
                                      width='35'
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <path
                                        d='m0 0h35v35h-35z'
                                        fill='none'
                                      ></path>
                                      <path d='m30.25 6h-25.5a1.75 1.75 0 0 0 -1.75 1.75v13.5a1.75 1.75 0 0 0 1.75 1.75h9.25v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5h9.25a1.75 1.75 0 0 0 1.75-1.75v-13.5a1.75 1.75 0 0 0 -1.75-1.75zm-11.65 17.1a1.1 1.1 0 0 1 -2.2 0c0-.0355.0171-.0654.02-.1h2.16c.003.0346.02.0645.02.1zm12.4-2.1a1 1 0 0 1 -1 1h-25a1 1 0 0 1 -1-1v-13a1 1 0 0 1 1-1h25a1 1 0 0 1 1 1z'></path>
                                    </svg>
                                    <div className='rf-digitalmat-featuretext'>
                                      27-inch 5K Retina display draws you in
                                      with 14.7 million pixels and one billion
                                      colors
                                    </div>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-productdetails-item'>
                                  <div className='rf-digitalmat-productdetails-content'>
                                    <svg
                                      width='35'
                                      height='35'
                                      viewBox='0 0 35 35'
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <rect
                                        width='35'
                                        height='35'
                                        fill='none'
                                      ></rect>
                                      <path d='M13.604,29H10.5A4.505,4.505,0,0,1,6,24.5V21.396a.5.5,0,0,1,1,0V24.5A3.5042,3.5042,0,0,0,10.5,28h3.104a.5.5,0,0,1,0,1ZM7,13.604V10.5A3.5042,3.5042,0,0,1,10.5,7h3.104a.5.5,0,0,0,0-1H10.5A4.505,4.505,0,0,0,6,10.5v3.104a.5.5,0,0,0,1,0ZM29,24.5V21.396a.5.5,0,0,0-1,0V24.5A3.5042,3.5042,0,0,1,24.5,28H21.396a.5.5,0,0,0,0,1H24.5A4.505,4.505,0,0,0,29,24.5Zm0-10.896V10.5A4.505,4.505,0,0,0,24.5,6H21.396a.5.5,0,0,0,0,1H24.5A3.5042,3.5042,0,0,1,28,10.5v3.104a.5.5,0,0,0,1,0Zm-17.6549,10.64H23.6444a.5788.5788,0,0,0,.4828-.1919.7988.7988,0,0,0,.152-.5093,3.6041,3.6041,0,0,0-.41-1.4216A6.865,6.865,0,0,0,17.4942,18.24,6.96,6.96,0,0,0,11.12,22.1213a3.6041,3.6041,0,0,0-.41,1.4216.7988.7988,0,0,0,.152.5093A.5788.5788,0,0,0,11.3451,24.2441Zm6.1491-7.0755a3.1381,3.1381,0,0,0,1.7064-.4828A3.516,3.516,0,0,0,20.4241,15.37a3.876,3.876,0,0,0,.4559-1.8915,3.6781,3.6781,0,0,0-.4559-1.8054,3.5887,3.5887,0,0,0-1.2235-1.3159,3.2193,3.2193,0,0,0-3.4117,0,3.5386,3.5386,0,0,0-1.2168,1.3159,3.715,3.715,0,0,0-.45,1.8054,3.8765,3.8765,0,0,0,.45,1.8847,3.531,3.531,0,0,0,1.2168,1.3159A3.1062,3.1062,0,0,0,17.4942,17.1686Z'></path>
                                    </svg>
                                    <div className='rf-digitalmat-featuretext'>
                                      12MP Ultra Wide camera with Center Stage —
                                      powered by Apple silicon — allows for more
                                      engaging video calls
                                    </div>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-productdetails-item'>
                                  <div className='rf-digitalmat-productdetails-content'>
                                    <svg
                                      viewBox='0 0 35 39'
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <path
                                        d='m0 0h35v39h-35z'
                                        fill='none'
                                      ></path>
                                      <path d='m25.6733 23.9739c.7969 1.0025 1.2461 2.1107 1.2461 3.1804 0 .1887-.0308.3469-.0669.499-.0078.0336-.0063.0769-.0161.1088-.0181.0608-.0522.1032-.0762.1581-.0444.1044-.0854.2136-.1465.2985-.0391.0538-.0903.0904-.1348.137-.0625.0656-.1201.1375-.1914.19-.0547.0403-.1167.0663-.1753.0997-.0723.0411-.1416.088-.2178.1197-.0649.027-.1323.0429-.1987.0639-.0747.0237-.1489.0519-.2241.069-.0703.0159-.1377.0239-.2061.0349-.0708.0114-.1436.0262-.2114.0334-.0688.0073-.1304.0099-.1948.014-.061.0038-.126.0098-.1812.0114-.0708.0021-.1299.0024-.1885.0027-.0259.0001-.0601.0012-.083.0012-.0112 0-.0225 0-.0332 0h-13.747c-.0669 0-.1558.0029-.25.0038-.0156.0002-.0254.0006-.042.0006-.0767 0-.1592-.002-.2456-.0088h-.0005c-.104-.0081-.2178-.0294-.3301-.0479-.3921-.0651-.8115-.1962-1.1348-.4877-.1387-.1249-.2583-.2777-.3496-.4644-.0508-.1038-.0923-.2178-.126-.3401-.04-.1474-.0674-.3083-.0674-.4968 0-.1707.0112-.3423.0337-.5144.0293-.2267.0776-.4541.1445-.6808.2002-.6801.5645-1.3539 1.0679-1.9858.2202-.2764.4619-.5464.7344-.8033.2378-.2244.4966-.4384.772-.6433.4131-.3076.8672-.5911 1.3579-.8433 1.4727-.7566 3.2764-1.2318 5.3086-1.2318 3.6788.0001 6.6094 1.5536 8.1739 3.5223zm-8.1787-5.4026c2.5186 0 4.4912-2.1328 4.4912-4.8555 0-2.6118-2.0146-4.7363-4.4912-4.7363-1.1504 0-2.2471.4653-3.0889 1.311-.9023.9062-1.3965 2.1265-1.3906 3.4355 0 2.6719 2.0098 4.8453 4.4795 4.8453zm4.9983-17.0356c-.1748.1024-.2336.327-.1313.5018.5943 1.0153-.2773 1.8434-1.3384 2.2982-1.0749.4483-2.3066.6445-3.5232.6433-1.2167.0013-2.4483-.1949-3.5233-.6432-1.0612-.4548-1.9326-1.283-1.3384-2.2983.0839-.1464.0597-.3396-.0706-.4574-.1503-.1358-.3822-.1241-.5181.0262-.2549.2768-.4707.6449-.5327 1.0778-.0508.4252.0155.8806.2076 1.2551.3978.7401 1.0278 1.2225 1.6606 1.5776 1.2906.706 2.7165.9405 4.1148.9622 1.3983-.0216 2.8242-.2561 4.1148-.9621.6328-.3552 1.2628-.8376 1.6606-1.5777.1921-.3745.2584-.83.2076-1.2551-.062-.4329-.2777-.801-.5326-1.0778-.1143-.1242-.3058-.1594-.4574-.0706zm-1.984-1.4532c-.1577.069-.2295.2526-.1606.4103.133.304.0872.5136-.0731.7001-.1578.1918-.4263.3642-.732.4875-.6165.2453-1.3352.3539-2.0432.3519-.7081.002-1.4268-.1066-2.0433-.352-.3057-.1233-.5742-.2957-.7319-.4875-.1602-.1865-.206-.396-.0731-.7001.0446-.1063.03-.2372-.0509-.3298-.1133-.1296-.3101-.1428-.4397-.0296-.3696.3148-.4979 1.0168-.2387 1.5137.2478.4875.6425.8024 1.0381 1.024.8028.4471 1.6786.597 2.5395.6112.8609-.0142 1.7368-.1641 2.5396-.6112.3955-.2216.7903-.5366 1.038-1.0241.2591-.4968.1308-1.1987-.2386-1.5136-.088-.0745-.2174-.1001-.3301-.0508zm8.9256 18.6858c-.1024-.1748-.327-.2336-.5018-.1312-1.0153.5944-1.8434-.2773-2.2982-1.3384-.4482-1.075-.6445-2.3066-.6432-3.5233-.0013-1.2167.1949-2.4483.6432-3.5233.4548-1.0612 1.283-1.9326 2.2983-1.3384.1464.0839.3396.0597.4574-.0706.1358-.1503.1241-.3823-.0262-.5181-.2768-.2549-.6449-.4707-1.0778-.5327-.4252-.0508-.8807.0156-1.2552.2077-.7401.3978-1.2225 1.0278-1.5776 1.6606-.706 1.2906-.9405 2.7165-.9621 4.1148.0216 1.3983.2561 2.8242.9621 4.1148.3552.6328.8376 1.2628 1.5777 1.6606.3745.1921.83.2584 1.2551.2076.4329-.0619.801-.2777 1.0778-.5326.1241-.1143.1592-.3059.0705-.4575zm1.4531-1.984c-.069-.1577-.2526-.2296-.4103-.1606-.304.133-.5136.0872-.7001-.0731-.1918-.1578-.3642-.4263-.4875-.7319-.2454-.6166-.3539-1.3353-.352-2.0433-.002-.7081.1066-1.4268.352-2.0433.1233-.3057.2957-.5742.4875-.7319.1865-.1602.396-.2059.7001-.0731.1063.0446.2372.03.3298-.0509.1296-.1133.1428-.3101.0296-.4397-.3148-.3696-1.0168-.4979-1.5137-.2387-.4875.2478-.8024.6425-1.024 1.0381-.4471.8028-.597 1.6786-.6112 2.5396.0142.8609.1641 1.7368.6112 2.5396.2216.3955.5366.7903 1.0241 1.038.4968.2591 1.1987.1308 1.5136-.2386.0746-.0881.1003-.2175.0509-.3302zm-25.2778 1.9234c-.1358.1503-.124.3823.0263.5181.2768.2549.6449.4707 1.0777.5326.4252.0508.8806-.0155 1.2552-.2076.7401-.3978 1.2225-1.0278 1.5777-1.6606.706-1.2906.9405-2.7165.9621-4.1148-.0216-1.3983-.2561-2.8242-.9621-4.1148-.3553-.6328-.8376-1.2628-1.5778-1.6606-.3745-.1921-.83-.2585-1.2552-.2076-.4327.0619-.8009.2777-1.0776.5326-.1242.1143-.1594.3058-.0707.4574.1023.1748.327.2336.5018.1313 1.0153-.5942 1.8434.2772 2.2983 1.3384.4483 1.075.6444 2.3066.6432 3.5233.0012 1.2167-.195 2.4483-.6432 3.5233-.4548 1.0612-1.2829 1.9328-2.2982 1.3384-.1464-.0839-.3397-.0598-.4575.0706zm-1.4173-2.033c-.1295.1133-.1426.3101-.0293.4396.3148.3694 1.0168.4977 1.5136.2386.4875-.2477.8025-.6425 1.0241-1.038.4471-.8028.597-1.6786.6112-2.5396-.0142-.8609-.1641-1.7368-.6112-2.5396-.2216-.3956-.5365-.7903-1.024-1.0381-.4969-.259-1.199-.1307-1.5137.2389-.0745.0879-.1001.2171-.0509.3298.0689.1577.2525.2297.4102.1608.3041-.1328.5136-.087.7001.0731.1918.1577.3642.4262.4875.7319.2455.6166.354 1.3353.352 2.0433.0019.7081-.1066 1.4268-.352 2.0433-.1233.3057-.2957.5742-.4875.7319-.1865.1603-.3961.2061-.7001.0731-.1063-.0446-.2374-.0301-.33.051z'></path>
                                    </svg>
                                    <div className='rf-digitalmat-featuretext'>
                                      Three studio-quality mics and six-speaker
                                      sound system with Spatial Audio for more
                                      immersive calls, movies, and music
                                    </div>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-productdetails-item'>
                                  <div className='rf-digitalmat-productdetails-content'>
                                    <svg
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                      viewBox='0 0 35 35'
                                    >
                                      <g>
                                        <rect
                                          width='35'
                                          height='35'
                                          fill='none'
                                        ></rect>
                                        <path d='M26.5,13a4.5,4.5,0,0,1,0,9H8.5a4.5,4.5,0,0,1,0-9h18m0-1H8.5a5.5,5.5,0,0,0,0,11h18a5.5,5.5,0,0,0,0-11Zm.5,5.5h0a.5.5,0,0,0-.5-.5H8.5a.5.5,0,0,0-.5.5H8a.5.5,0,0,0,.5.5h18A.5.5,0,0,0,27,17.5Z'></path>
                                      </g>
                                    </svg>
                                    <div className='rf-digitalmat-featuretext'>
                                      With ports for connectivity and charging
                                      and three stand options, it fits any setup
                                    </div>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-productdetails-item'>
                                  <div className='rf-digitalmat-productdetails-content'>
                                    <svg
                                      height='35'
                                      viewBox='0 0 35 35'
                                      width='35'
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <path
                                        d='m0 0h35v35h-35z'
                                        fill='none'
                                      ></path>
                                      <path d='m29 9h-23a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h.5508a1 1 0 0 1 .8511.4749l.0309.05a1 1 0 0 0 .8511.4751h18.4322a1 1 0 0 0 .8511-.4749l.0309-.05a1 1 0 0 1 .8511-.4751h.5508a3 3 0 0 0 3-3v-10a3 3 0 0 0 -3-3zm2 13a2 2 0 0 1 -2 2h-1.1089a1 1 0 0 0 -.8511.4749l-.0309.05a1 1 0 0 1 -.8511.4751h-17.316a1 1 0 0 1 -.8511-.4749l-.0309-.05a1 1 0 0 0 -.8511-.4751h-1.1089a2 2 0 0 1 -2-2v-10a2 2 0 0 1 2-2h23a2 2 0 0 1 2 2zm-2.875-2.25a1.375 1.375 0 1 1 -1.375-1.375 1.3751 1.3751 0 0 1 1.375 1.375z'></path>
                                    </svg>
                                    <div className='rf-digitalmat-featuretext'>
                                      Pairs perfectly with any Mac, including
                                      the all-new Mac Studio. Add new matching
                                      Magic accessories to complete your studio.
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='rf-digitalmat-explorelink'>
                                <a
                                  href='https://www.apple.com/studio-display'
                                  data-feature-name='Studio Display modal'
                                  data-display-name='Explore Studio Display further'
                                  data-autom='DigitalMat-explorelink-7'
                                  className='icon icon-after more'
                                >
                                  Explore Studio Display further
                                </a>
                              </div>
                            </div>
                          </div>
                          <div
                            className='rf-digitalmat-valueprops rf-digitalmat-valueprops-2items'
                            data-autom='DigitalMat-valueprops-7'
                          >
                            <div className='rf-digitalmat-valueprops-container'>
                              <div className='rf-digitalmat-valueprops-item'>
                                <div className='rf-digitalmat-valueprops-icon'>
                                  <div className='as-svgicon-container dd-color-saffron'>
                                    <svg
                                      height='25'
                                      viewBox='0 0 25 25'
                                      width='25'
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <path
                                        d='m0 0h25v25h-25z'
                                        fill='none'
                                      ></path>
                                      <path d='m17.6406 21h-10a3.6272 3.6272 0 0 1 -3.6406-3.5v-10a3.6272 3.6272 0 0 1 3.6406-3.5h10a3.3868 3.3868 0 0 1 3.3594 3.5v10a3.3868 3.3868 0 0 1 -3.3594 3.5zm-10-16a2.6267 2.6267 0 0 0 -2.6406 2.5v10a2.6267 2.6267 0 0 0 2.6406 2.5h10a2.3863 2.3863 0 0 0 2.3594-2.5v-10a2.3863 2.3863 0 0 0 -2.3594-2.5zm-.3486 9.4941a.867.867 0 0 1 -.1133-.4218.3632.3632 0 0 1 .3945-.3868.3917.3917 0 0 1 .3868.2891 1.1691 1.1691 0 0 0 1.2031.7188c.6836 0 1.1445-.3907 1.1484-.9375.0039-.6446-.4609-1.0039-1.2148-1.0039h-.375a.3406.3406 0 1 1 0-.68h.3515a.9636.9636 0 0 0 1.0821-.9063c0-.5234-.336-.8711-1.0039-.8711a1.0481 1.0481 0 0 0 -1.086.7071c-.0937.2265-.1875.3085-.3945.3085a.3425.3425 0 0 1 -.3789-.375.88.88 0 0 1 .1055-.4257 1.8513 1.8513 0 0 1 1.7539-.9336c1.1484 0 1.8554.6289 1.8554 1.4687a1.3541 1.3541 0 0 1 -1.1875 1.3242v.02a1.3593 1.3593 0 0 1 1.3828 1.3672c0 .9921-.8671 1.6679-2.0429 1.6679a1.9792 1.9792 0 0 1 -1.8672-.9298zm4.4629-3.4257c0-.9063.4492-1.4532 1.164-1.4532.7188 0 1.1641.5469 1.1641 1.4532s-.4414 1.4648-1.1641 1.4648-1.164-.5547-1.164-1.4648zm1.6719 0c0-.6211-.1914-.9414-.5079-.9414s-.5078.3242-.5078.9453.1875.9531.5078.9531.5079-.332.5079-.957zm-.7422 4.0546a.36.36 0 0 1 .0742-.2187l1.7773-2.5664 1.7461-2.5391a.3337.3337 0 0 1 .3125-.1914.2783.2783 0 0 1 .293.27.3451.3451 0 0 1 -.07.2148l-1.7227 2.4961-1.8008 2.6172c-.0976.1406-.1718.1875-.3007.1875a.2828.2828 0 0 1 -.3089-.27zm2.8086-1.203c0-.9062.4492-1.4531 1.164-1.4531.7188 0 1.1641.543 1.1641 1.4531 0 .9024-.4414 1.4649-1.1641 1.4649-.7187-.0001-1.164-.5587-1.164-1.4649zm1.6757 0c0-.6211-.1914-.9453-.5117-.9453-.3164 0-.5078.3242-.5078.9453 0 .625.1914.9531.5078.9531.3203-.0001.5117-.3282.5117-.9531z'></path>
                                    </svg>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-valueprops-description'>
                                  <h3 className='rf-digitalmat-valueprops-header'>
                                    3% Daily Cash back with Apple&nbsp;Card
                                  </h3>
                                  <span>
                                    And pay 0% APR over 12 mo. when you choose
                                    to check out with Apple Card Monthly
                                    Installments.<sup>◊</sup>
                                  </span>
                                </div>
                              </div>
                              <div className='rf-digitalmat-valueprops-item'>
                                <div className='rf-digitalmat-valueprops-icon'>
                                  <div className='as-svgicon-container dd-color-razzmatazz'>
                                    <svg
                                      xmlns='http://www.w3.org/2000/svg'
                                      viewBox='0 0 36 56'
                                      className='as-svgicon as-svgicon-delivery as-svgicon-elevated as-svgicon-deliverydelevated'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <g>
                                        <rect
                                          width='36'
                                          height='56'
                                          fill='none'
                                        ></rect>
                                        <path d='M33.905,17.063l-14-7.581a3.991,3.991,0,0,0-3.811,0l-14,7.581A4,4,0,0,0,0,20.581V35.419a4,4,0,0,0,2.095,3.518l14,7.581a3.989,3.989,0,0,0,3.811,0l14-7.581A4,4,0,0,0,36,35.419V20.581A4,4,0,0,0,33.905,17.063ZM17.048,11.241a1.993,1.993,0,0,1,1.9,0l13.8,7.47-6.383,3.645L11.943,14.005ZM18,27.133,3.253,18.711l6.629-3.589L24.355,23.5ZM3.048,37.178A2,2,0,0,1,2,35.419V20.581a1.955,1.955,0,0,1,.036-.262L17,28.865V44.733ZM34,35.419a2,2,0,0,1-1.048,1.759L19,44.733V28.865l14.964-8.545a1.955,1.955,0,0,1,.036.262Z'></path>
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-valueprops-description'>
                                  <h3 className='rf-digitalmat-valueprops-header'>
                                    Free delivery
                                  </h3>
                                  <span>
                                    And free returns. See checkout for delivery
                                    dates.
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    aria-hidden='true'
                    data-core-fade-transition-wrapper=''
                    className='rf-digitalmat-overlay-tabcontent r-fade-transition-exit-done'
                    data-core-tabs-panel=''
                    id='panel-3de2be30-e0c2-11ec-bb44-35cae391b59c-8'
                    aria-labelledby='tab-3de2be30-e0c2-11ec-bb44-35cae391b59c-8'
                  >
                    <div
                      data-core-tabs=''
                      id='3df8de40-e0c2-11ec-bb44-35cae391b59c'
                      className='rf-digitalmat-inlinetabs'
                      data-core-tabs-transition-done=''
                    >
                      <div
                        data-core-tabs-panels=''
                        className='rf-digitalmat-inlinetabnav-contentsection'
                        style='height: 0px;'
                      >
                        <div
                          data-core-fade-transition-wrapper=''
                          className='rf-digitalmat-inlinetabnav-tabcontent r-fade-transition-enter-done r-fade-transition-appear-done'
                          data-core-tabs-panel=''
                          data-core-tabs-panel-selected=''
                          id='panel-3df8de40-e0c2-11ec-bb44-35cae391b59c-0'
                        >
                          <div className='row rf-digitalmat-inlinetabnav-tabcontent-container'>
                            <div className='column large-6 small-12 rf-digitalmat-gallerysection'>
                              <div className='rf-digitalmat-cardgallery with-paddlenav with-paddlenav-onhover'>
                                <div
                                  className='rc-inline-gallery rf-digitalmat-gallery'
                                  role='group'
                                  aria-label='Gallery'
                                >
                                  <div className='rc-gallery-dotnav dotnav'>
                                    <ul
                                      className=''
                                      role='tablist'
                                      aria-label='Mac Pro'
                                    >
                                      <li role='presentation'>
                                        <button
                                          id='3df8de41-e0c2-11ec-bb44-35cae391b59c-tab-item-0'
                                          type='button'
                                          role='tab'
                                          aria-controls='3df8de41-e0c2-11ec-bb44-35cae391b59c-gallery-item-0'
                                          aria-selected='true'
                                          aria-label='Item 1'
                                          tabIndex='0'
                                          className='rc-gallery-dotnav-item dotnav-item current'
                                          data-autom='gallery-dot-nav-0'
                                        ></button>
                                      </li>
                                      <li role='presentation'>
                                        <button
                                          id='3df8de41-e0c2-11ec-bb44-35cae391b59c-tab-item-1'
                                          type='button'
                                          role='tab'
                                          aria-controls='3df8de41-e0c2-11ec-bb44-35cae391b59c-gallery-item-1'
                                          aria-selected='false'
                                          aria-label='Item 2'
                                          tabIndex='-1'
                                          className='rc-gallery-dotnav-item dotnav-item'
                                          data-autom='gallery-dot-nav-1'
                                        ></button>
                                      </li>
                                      <li role='presentation'>
                                        <button
                                          id='3df8de41-e0c2-11ec-bb44-35cae391b59c-tab-item-2'
                                          type='button'
                                          role='tab'
                                          aria-controls='3df8de41-e0c2-11ec-bb44-35cae391b59c-gallery-item-2'
                                          aria-selected='false'
                                          aria-label='Item 3'
                                          tabIndex='-1'
                                          className='rc-gallery-dotnav-item dotnav-item'
                                          data-autom='gallery-dot-nav-2'
                                        ></button>
                                      </li>
                                      <li role='presentation'>
                                        <button
                                          id='3df8de41-e0c2-11ec-bb44-35cae391b59c-tab-item-3'
                                          type='button'
                                          role='tab'
                                          aria-controls='3df8de41-e0c2-11ec-bb44-35cae391b59c-gallery-item-3'
                                          aria-selected='false'
                                          aria-label='Item 4'
                                          tabIndex='-1'
                                          className='rc-gallery-dotnav-item dotnav-item'
                                          data-autom='gallery-dot-nav-3'
                                        ></button>
                                      </li>
                                      <li role='presentation'>
                                        <button
                                          id='3df8de41-e0c2-11ec-bb44-35cae391b59c-tab-item-4'
                                          type='button'
                                          role='tab'
                                          aria-controls='3df8de41-e0c2-11ec-bb44-35cae391b59c-gallery-item-4'
                                          aria-selected='false'
                                          aria-label='Item 5'
                                          tabIndex='-1'
                                          className='rc-gallery-dotnav-item dotnav-item'
                                          data-autom='gallery-dot-nav-4'
                                        ></button>
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    id='3df8de41-e0c2-11ec-bb44-35cae391b59c'
                                    className='rf-digitalmat-gallery-items'
                                    data-core-gallery='true'
                                    data-core-gallery-fade='false'
                                  >
                                    <div
                                      data-core-gallery-scroller='true'
                                      style='transform: translateX(0px); width: 500%; left: 0%; transition: none 0s ease 0s;'
                                    >
                                      <div
                                        id='3df8de41-e0c2-11ec-bb44-35cae391b59c-gallery-item-0'
                                        data-core-gallery-item='true'
                                        aria-hidden='false'
                                        className='rc-inline-gallery-item'
                                        role='tabpanel'
                                        aria-label='Item 1'
                                      >
                                        <div className='rf-digitalmat-cardgallery-img-wrapper'>
                                          <img
                                            width='364'
                                            height='333'
                                            alt=''
                                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-pro-digitalmat-gallery-1-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1636480313000'
                                            srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-pro-digitalmat-gallery-1-202111?wid=364&amp;hei=333&amp;fmt=png-alpha&amp;.v=1636480313000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-pro-digitalmat-gallery-1-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1636480313000 2x'
                                            className='rf-digitalmat-cardgallery-img'
                                          />
                                        </div>
                                      </div>
                                      <div
                                        id='3df8de41-e0c2-11ec-bb44-35cae391b59c-gallery-item-1'
                                        data-core-gallery-item='true'
                                        aria-hidden='true'
                                        className='rc-inline-gallery-item'
                                        role='tabpanel'
                                        aria-label='Item 2'
                                      >
                                        <div className='rf-digitalmat-cardgallery-img-wrapper'>
                                          <img
                                            width='364'
                                            height='333'
                                            alt=''
                                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-pro-digitalmat-gallery-2-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1636480313000'
                                            srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-pro-digitalmat-gallery-2-202111?wid=364&amp;hei=333&amp;fmt=png-alpha&amp;.v=1636480313000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-pro-digitalmat-gallery-2-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1636480313000 2x'
                                            className='rf-digitalmat-cardgallery-img'
                                          />
                                        </div>
                                      </div>
                                      <div
                                        id='3df8de41-e0c2-11ec-bb44-35cae391b59c-gallery-item-2'
                                        data-core-gallery-item='true'
                                        aria-hidden='true'
                                        className='rc-inline-gallery-item'
                                        role='tabpanel'
                                        aria-label='Item 3'
                                      >
                                        <div className='rf-digitalmat-cardgallery-img-wrapper'>
                                          <img
                                            width='364'
                                            height='333'
                                            alt=''
                                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-pro-digitalmat-gallery-3-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1636480312000'
                                            srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-pro-digitalmat-gallery-3-202111?wid=364&amp;hei=333&amp;fmt=png-alpha&amp;.v=1636480312000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-pro-digitalmat-gallery-3-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1636480312000 2x'
                                            className='rf-digitalmat-cardgallery-img'
                                          />
                                        </div>
                                      </div>
                                      <div
                                        id='3df8de41-e0c2-11ec-bb44-35cae391b59c-gallery-item-3'
                                        data-core-gallery-item='true'
                                        aria-hidden='true'
                                        className='rc-inline-gallery-item'
                                        role='tabpanel'
                                        aria-label='Item 4'
                                      >
                                        <div className='rf-digitalmat-cardgallery-img-wrapper'>
                                          <img
                                            width='364'
                                            height='333'
                                            alt=''
                                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-pro-digitalmat-gallery-4-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1636480312000'
                                            srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-pro-digitalmat-gallery-4-202111?wid=364&amp;hei=333&amp;fmt=png-alpha&amp;.v=1636480312000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-pro-digitalmat-gallery-4-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1636480312000 2x'
                                            className='rf-digitalmat-cardgallery-img'
                                          />
                                        </div>
                                      </div>
                                      <div
                                        id='3df8de41-e0c2-11ec-bb44-35cae391b59c-gallery-item-4'
                                        data-core-gallery-item='true'
                                        aria-hidden='true'
                                        className='rc-inline-gallery-item'
                                        role='tabpanel'
                                        aria-label='Item 5'
                                      >
                                        <div className='rf-digitalmat-cardgallery-img-wrapper'>
                                          <img
                                            width='364'
                                            height='333'
                                            alt=''
                                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-pro-digitalmat-gallery-5-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1636480311000'
                                            srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-pro-digitalmat-gallery-5-202111?wid=364&amp;hei=333&amp;fmt=png-alpha&amp;.v=1636480311000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-pro-digitalmat-gallery-5-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1636480311000 2x'
                                            className='rf-digitalmat-cardgallery-img'
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='rc-gallery-paddlenav paddlenav paddlenav-compact'>
                                    <button
                                      type='button'
                                      disabled=''
                                      aria-hidden='true'
                                      aria-label='Previous'
                                      className='paddlenav-arrow paddlenav-arrow-previous'
                                      data-autom='paddlenav-previous'
                                    ></button>
                                    <button
                                      type='button'
                                      aria-hidden='false'
                                      aria-label='Next'
                                      className='paddlenav-arrow paddlenav-arrow-next'
                                      data-autom='paddlenav-next'
                                    ></button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='column large-6 small-12 rf-digitalmat-contentsection'>
                              <h2
                                className='rf-digitalmat-overlay-header'
                                id='rf-digitalmat-overlay-label'
                                data-autom='DigitalMat-overlay-header-8'
                              >
                                Mac Pro
                              </h2>
                              <div className='rf-digitalmat-price-button'>
                                <div
                                  className='rf-digitalmat-price'
                                  data-autom='DigitalMat-price-8'
                                >
                                  <div className='rc-prices-inline rc-prices-inline-lead-with-full-price'>
                                    <div className='rc-price'>
                                      <span className='rc-prices-currentprice'>
                                        From{' '}
                                        <span className='nowrap'>$5999</span>
                                      </span>
                                      <span className='rc-prices-installmentsseparator'>
                                        {' '}
                                      </span>
                                      <span className='rc-monthly-price'>
                                        <span className='rc-prices-currentprice'>
                                          {' '}
                                          <span className='nowrap'>
                                            {' '}
                                            or $499.91
                                            <span aria-hidden='true'>
                                              /mo.{' '}
                                            </span>
                                            <span className='visuallyhidden'>
                                              {' '}
                                              per month
                                            </span>
                                          </span>{' '}
                                          <span className='nowrap'>
                                            <span className='acinstallment-term-length'>
                                              {' '}
                                              for 12{' '}
                                              <span aria-hidden='true'>
                                                mo.
                                              </span>
                                              <span className='visuallyhidden'>
                                                months
                                              </span>
                                            </span>
                                            <span className='visuallyhidden'>
                                              Footnote{' '}
                                            </span>
                                            *
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div className='rc-prices-footer'>
                                      <div className='rc-financing-message'>
                                        <span className='as-prices-installments as-price-installments'>
                                          <a
                                            href='/us/shop/go/finance'
                                            target='_blank'
                                            rel="noreferrer"
                                            name='browse'
                                            className='as-price-installments-items'
                                            data-analytics-title='learn more about financing'
                                          >
                                            {' '}
                                            <span className='more'>
                                              null% Financing Available
                                            </span>
                                          </a>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <a
                                  href='/shop/buy-mac/mac-pro/mac-pro'
                                  data-feature-name='Mac Pro modal'
                                  data-display-name='shop Mac Pro 2019 Main'
                                  data-autom='DigitalMat-buynow-button-8'
                                  className='button rf-digitalmat-button'
                                >
                                  Buy
                                  <span className='visuallyhidden'>
                                    {' '}
                                    - Mac Pro
                                  </span>
                                </a>
                              </div>
                              <div
                                className='rf-digitalmat-productdetails'
                                data-autom='DigitalMat-productdetails-8'
                              >
                                <div className='rf-digitalmat-productdetails-item'>
                                  <div className='rf-digitalmat-productdetails-content'>
                                    <svg
                                      height='35'
                                      viewBox='0 0 35 35'
                                      width='35'
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <path
                                        d='m0 0h35v35h-35z'
                                        fill='none'
                                      ></path>
                                      <path d='m24.5 29h-14a4.505 4.505 0 0 1 -4.5-4.5v-14a4.505 4.505 0 0 1 4.5-4.5h14a4.505 4.505 0 0 1 4.5 4.5v14a4.505 4.505 0 0 1 -4.5 4.5zm-14-22a3.5042 3.5042 0 0 0 -3.5 3.5v14a3.5042 3.5042 0 0 0 3.5 3.5h14a3.5042 3.5042 0 0 0 3.5-3.5v-14a3.5042 3.5042 0 0 0 -3.5-3.5zm-.6978 7.7812h1.0078v5.6368h-1.0078zm2.1368 1.3672h.9726v.6524h.0664a1.2418 1.2418 0 0 1 1.2305-.7344 1.3864 1.3864 0 0 1 1.4727 1.59v2.7616h-.9727v-2.5352c0-.664-.27-1-.8594-1a.9269.9269 0 0 0 -.9375 1.0469v2.4883h-.9726zm5.0273 3.1368v-2.3829h-.6641v-.7539h.6641v-1.0468h.9883v1.0468h.9023v.7539h-.9023v2.1524c0 .4258.168.6055.5742.6055a2.8472 2.8472 0 0 0 .3281-.0157v.75a2.7635 2.7635 0 0 1 -.5078.043c-.9804 0-1.3828-.3281-1.3828-1.1523zm2.4492-.9922v-.0039a1.9838 1.9838 0 0 1 1.9922-2.2227 1.9231 1.9231 0 0 1 1.9649 2.1406v.32h-2.9844c.0117.7657.4258 1.211 1.0859 1.211a.99.99 0 0 0 .9219-.461l.0117-.0273h.9258l-.0117.0352a1.7708 1.7708 0 0 1 -1.8672 1.2187 1.9722 1.9722 0 0 1 -2.0391-2.2106zm.98-.418h2.0273c-.0664-.6992-.4609-1.0469-1.0039-1.0469a1.03 1.03 0 0 0 -1.0229 1.0469zm3.8291-3.3789h.9727v5.9219h-.9727z'></path>
                                    </svg>
                                    <div className='rf-digitalmat-featuretext'>
                                      Intel Xeon W processor configurable up to
                                      28 cores
                                    </div>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-productdetails-item'>
                                  <div className='rf-digitalmat-productdetails-content'>
                                    <div className='rf-digitalmat-icontext'>
                                      W5500X
                                    </div>
                                    <div className='rf-digitalmat-featuretext'>
                                      Radeon Pro W5500X MPX Module, configurable
                                      with up to two Radeon Pro W6800X Duo MPX
                                      Modules
                                    </div>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-productdetails-item'>
                                  <div className='rf-digitalmat-productdetails-content'>
                                    <svg
                                      id='Assets'
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                      width='35'
                                      height='35'
                                      viewBox='0 0 35 35'
                                    >
                                      <rect
                                        id='Bounding_Box'
                                        data-name='Bounding Box'
                                        width='35'
                                        height='35'
                                        fill='none'
                                      ></rect>
                                      <path d='M27.8662,27H7.1338A4.1474,4.1474,0,0,1,4.07,25.9214,4.2041,4.2041,0,0,1,3,22.8428V12.1572A4.2021,4.2021,0,0,1,4.07,9.0791,4.1471,4.1471,0,0,1,7.1338,8H27.8662A4.1132,4.1132,0,0,1,30.94,9.0962v.0005a4.2286,4.2286,0,0,1,1.06,3.06V22.8428A4.224,4.224,0,0,1,30.94,25.9116,4.13,4.13,0,0,1,27.8662,27ZM7.1338,9a3.2045,3.2045,0,0,0-2.3545.7837A3.2581,3.2581,0,0,0,4,12.1572V22.8428a3.26,3.26,0,0,0,.7793,2.374A3.2033,3.2033,0,0,0,7.1338,26H27.8662a3.1832,3.1832,0,0,0,2.3584-.7881A3.2744,3.2744,0,0,0,31,22.8428V12.1572a3.2791,3.2791,0,0,0-.7764-2.3637h0A3.17,3.17,0,0,0,27.8662,9ZM13.5,28.025h-1v1.6759a.5988.5988,0,0,0,.1439.4112.4631.4631,0,0,0,.363.1629.4494.4494,0,0,0,.3493-.1629.5988.5988,0,0,0,.1438-.4112Zm4.5,0H17v1.6759a.5988.5988,0,0,0,.1439.4112.4631.4631,0,0,0,.363.1629.4494.4494,0,0,0,.3493-.1629A.5988.5988,0,0,0,18,29.7009Zm4.5,0h-1v1.6759a.5988.5988,0,0,0,.1439.4112.4631.4631,0,0,0,.363.1629.4494.4494,0,0,0,.3493-.1629.5988.5988,0,0,0,.1438-.4112Zm4.5,0H26v1.6759a.5988.5988,0,0,0,.1439.4112.4631.4631,0,0,0,.363.1629.4494.4494,0,0,0,.3493-.1629A.5988.5988,0,0,0,27,29.7009Zm-18,0H8v1.6759a.5988.5988,0,0,0,.1439.4112.4631.4631,0,0,0,.363.1629.4494.4494,0,0,0,.3493-.1629A.5988.5988,0,0,0,9,29.7009ZM13.5,5.2991a.5988.5988,0,0,0-.1438-.4112.4494.4494,0,0,0-.3493-.1629.4631.4631,0,0,0-.363.1629.5988.5988,0,0,0-.1439.4112V6.975h1Zm4.5,0a.5988.5988,0,0,0-.1438-.4112.4494.4494,0,0,0-.3493-.1629.4631.4631,0,0,0-.363.1629A.5988.5988,0,0,0,17,5.2991V6.975h1Zm4.5,0a.5988.5988,0,0,0-.1438-.4112.4494.4494,0,0,0-.3493-.1629.4631.4631,0,0,0-.363.1629.5988.5988,0,0,0-.1439.4112V6.975h1Zm4.5,0a.5988.5988,0,0,0-.1438-.4112.4494.4494,0,0,0-.3493-.1629.4631.4631,0,0,0-.363.1629A.5988.5988,0,0,0,26,5.2991V6.975h1Zm-18,0a.5988.5988,0,0,0-.1438-.4112.4494.4494,0,0,0-.3493-.1629.4631.4631,0,0,0-.363.1629A.5988.5988,0,0,0,8,5.2991V6.975H9Z'></path>
                                    </svg>
                                    <div className='rf-digitalmat-featuretext'>
                                      12 DIMM slots, configurable up to 1.5TB of
                                      memory
                                      <span className='visuallyhidden'>
                                        Footnote
                                      </span>
                                      ¹
                                    </div>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-productdetails-item'>
                                  <div className='rf-digitalmat-productdetails-content'>
                                    <svg
                                      enable-background='new 0 0 35 35'
                                      viewBox='0 0 35 35'
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <path
                                        d='m0 0h35v35h-35z'
                                        fill='none'
                                      ></path>
                                      <path d='m28.5 18c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-1.5v-3h1.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-1.5v-.49c0-2.48-2.02-4.5-4.5-4.5h-.5v-1.51c0-.28-.22-.5-.5-.5s-.5.22-.5.5v1.51h-3v-1.51c0-.28-.22-.5-.5-.5s-.5.22-.5.5v1.51h-3v-1.51c0-.28-.22-.5-.5-.5s-.5.22-.5.5v1.51h-.5c-2.48 0-4.5 2.02-4.5 4.5v.49h-1.5c-.28 0-.5.22-.5.5s.22.5.5.5h1.5v3h-1.5c-.28 0-.5.22-.5.5s.22.5.5.5h1.5v3h-1.5c-.28 0-.5.22-.5.5s.22.5.5.5h1.5v.51c0 2.48 2.02 4.5 4.5 4.5h.5v1.49c0 .28.22.5.5.5s.5-.22.5-.5v-1.49h3v1.49c0 .28.22.5.5.5s.5-.22.5-.5v-1.49h3v1.49c0 .28.22.5.5.5s.5-.22.5-.5v-1.49h.5c2.48 0 4.5-2.02 4.5-4.5v-.51h1.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-1.5v-3zm-2.5 4.51c0 1.93-1.57 3.5-3.5 3.5h-.97c-.01 0-.02-.01-.03-.01s-.02.01-.03.01h-3.94c-.01 0-.02-.01-.03-.01s-.02.01-.03.01h-3.94c-.01 0-.02-.01-.03-.01s-.02.01-.03.01h-.97c-1.93 0-3.5-1.57-3.5-3.5v-10c0-1.93 1.57-3.5 3.5-3.5h10c1.93 0 3.5 1.57 3.5 3.5zm-4.5-11.51h-8c-1.38 0-2.5 1.12-2.5 2.5v8c0 1.38 1.12 2.5 2.5 2.5h8c1.38 0 2.5-1.12 2.5-2.5v-8c0-1.38-1.12-2.5-2.5-2.5zm1.5 10.5c0 .83-.67 1.5-1.5 1.5h-8c-.83 0-1.5-.67-1.5-1.5v-8c0-.83.67-1.5 1.5-1.5h8c.83 0 1.5.67 1.5 1.5z'></path>
                                    </svg>
                                    <div className='rf-digitalmat-featuretext'>
                                      512GB SSD configurable up to 8TB
                                      <span className='visuallyhidden'>
                                        Footnote
                                      </span>
                                      ²
                                    </div>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-productdetails-item'>
                                  <div className='rf-digitalmat-productdetails-content'>
                                    <svg
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                      width='35'
                                      height='35'
                                      viewBox='0 0 35 35'
                                    >
                                      <rect
                                        width='35'
                                        height='35'
                                        fill='none'
                                      ></rect>
                                      <path d='M29,26.0229H6A3.0261,3.0261,0,0,1,2.9775,23V12A3.0261,3.0261,0,0,1,6,8.9771H29A3.0261,3.0261,0,0,1,32.0225,12V23A3.0261,3.0261,0,0,1,29,26.0229Zm-23-16A1.98,1.98,0,0,0,4.0225,12V23A1.98,1.98,0,0,0,6,24.9771H29A1.98,1.98,0,0,0,30.9775,23V12A1.98,1.98,0,0,0,29,10.0229Zm22.0225,12.29v-9.625a.5225.5225,0,1,0-1.045,0v9.625a.5225.5225,0,1,0,1.045,0Zm-20,0v-9.625a.5225.5225,0,1,0-1.045,0v9.625a.5225.5225,0,1,0,1.045,0Zm6.2186-9.38a.7306.7306,0,0,0-.5463.2269.7572.7572,0,0,0-.2194.5444.7675.7675,0,0,0,1.3061.5391.73.73,0,0,0,.2252-.5391.7469.7469,0,0,0-.2252-.5444A.7328.7328,0,0,0,14.2411,12.9323Zm3.2594,7.6042a.7538.7538,0,0,0-.76.76.7547.7547,0,0,0,.2207.5444.7252.7252,0,0,0,.54.2269.7349.7349,0,0,0,.5493-.2269.752.752,0,0,0,.2217-.5444.7347.7347,0,0,0-.2217-.5391A.7468.7468,0,0,0,17.5005,20.5365Zm0-7.6042a.7252.7252,0,0,0-.54.2269.7547.7547,0,0,0-.2207.5444.7538.7538,0,0,0,.76.76.7468.7468,0,0,0,.5493-.2208.7347.7347,0,0,0,.2217-.5391.752.752,0,0,0-.2217-.5444A.7349.7349,0,0,0,17.5005,12.9323Zm-3.2594,7.6042a.7518.7518,0,0,0-.7657.76.7572.7572,0,0,0,.2194.5444.764.764,0,0,0,1.0867,0,.7469.7469,0,0,0,.2252-.5444.73.73,0,0,0-.2252-.5391A.7446.7446,0,0,0,14.2411,20.5365ZM12.6062,16.74a.7559.7559,0,0,0-.7716.7713.7359.7359,0,0,0,.2211.539.75.75,0,0,0,.55.2209.7546.7546,0,0,0,.76-.76.7431.7431,0,0,0-.2211-.55A.73.73,0,0,0,12.6062,16.74Zm-1.6353,3.7965a.7409.7409,0,0,0-.5421.2208.7313.7313,0,0,0-.2235.5391.7485.7485,0,0,0,.2235.5444.7614.7614,0,0,0,1.0845,0,.7491.7491,0,0,0,.2233-.5444.7319.7319,0,0,0-.2233-.5391A.7408.7408,0,0,0,10.9709,20.5365Zm9.8,0a.7536.7536,0,0,0-.5447.2208.7235.7235,0,0,0-.2269.5391.7747.7747,0,0,0,.7716.7713.7246.7246,0,0,0,.5386-.2269.7543.7543,0,0,0,.2211-.5444.7544.7544,0,0,0-.76-.76Zm3.2583-7.6042a.73.73,0,0,0-.5429.2269.7471.7471,0,0,0-.2228.5444.73.73,0,0,0,.2228.5391.778.778,0,0,0,1.0859,0,.73.73,0,0,0,.2226-.5391.7469.7469,0,0,0-.2226-.5444A.7308.7308,0,0,0,24.0291,12.9323Zm0,7.6042a.7419.7419,0,0,0-.5429.2208.73.73,0,0,0-.2228.5391.7471.7471,0,0,0,.2228.5444.7631.7631,0,0,0,1.0859,0,.7469.7469,0,0,0,.2226-.5444.73.73,0,0,0-.2226-.5391A.7426.7426,0,0,0,24.0291,20.5365ZM19.1346,16.74a.7727.7727,0,1,0,.7662.7713.7516.7516,0,0,0-.2177-.55A.7325.7325,0,0,0,19.1346,16.74Zm3.26,0a.7656.7656,0,1,0,0,1.5312.7509.7509,0,0,0,.5372-.2209.724.724,0,0,0,.2284-.539.7342.7342,0,0,0-.2284-.55A.7469.7469,0,0,0,22.3941,16.74Zm-1.6233-3.8077a.7747.7747,0,0,0-.7716.7713.7235.7235,0,0,0,.2269.5391.7536.7536,0,0,0,.5447.2208.7544.7544,0,0,0,.76-.76.7543.7543,0,0,0-.2211-.5444A.7246.7246,0,0,0,20.7708,12.9323Zm-9.8,0a.7291.7291,0,0,0-.5421.2269.7485.7485,0,0,0-.2235.5444.7313.7313,0,0,0,.2235.5391.7762.7762,0,0,0,1.0845,0,.7319.7319,0,0,0,.2233-.5391.7491.7491,0,0,0-.2233-.5444A.729.729,0,0,0,10.9709,12.9323ZM15.8762,16.74a.7582.7582,0,0,0-.7656.7713.7292.7292,0,0,0,.2226.539.7776.7776,0,0,0,1.0858,0,.73.73,0,0,0,.2229-.539.7587.7587,0,0,0-.7657-.7713Z'></path>
                                    </svg>
                                    <div className='rf-digitalmat-featuretext'>
                                      Available in tower and rack configurations
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='rf-digitalmat-explorelink'>
                                <a
                                  href='https://www.apple.com/mac-pro'
                                  data-feature-name='Mac Pro modal'
                                  data-display-name='Explore Mac Pro further'
                                  data-autom='DigitalMat-explorelink-8'
                                  className='icon icon-after more'
                                >
                                  Explore Mac Pro further
                                </a>
                              </div>
                            </div>
                          </div>
                          <div
                            className='rf-digitalmat-valueprops'
                            data-autom='DigitalMat-valueprops-8'
                          >
                            <div className='rf-digitalmat-valueprops-container'>
                              <div className='rf-digitalmat-valueprops-item'>
                                <div className='rf-digitalmat-valueprops-icon'>
                                  <div className='as-svgicon-container dd-color-saffron'>
                                    <svg
                                      height='25'
                                      viewBox='0 0 25 25'
                                      width='25'
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <path
                                        d='m0 0h25v25h-25z'
                                        fill='none'
                                      ></path>
                                      <path d='m17.6406 21h-10a3.6272 3.6272 0 0 1 -3.6406-3.5v-10a3.6272 3.6272 0 0 1 3.6406-3.5h10a3.3868 3.3868 0 0 1 3.3594 3.5v10a3.3868 3.3868 0 0 1 -3.3594 3.5zm-10-16a2.6267 2.6267 0 0 0 -2.6406 2.5v10a2.6267 2.6267 0 0 0 2.6406 2.5h10a2.3863 2.3863 0 0 0 2.3594-2.5v-10a2.3863 2.3863 0 0 0 -2.3594-2.5zm-.3486 9.4941a.867.867 0 0 1 -.1133-.4218.3632.3632 0 0 1 .3945-.3868.3917.3917 0 0 1 .3868.2891 1.1691 1.1691 0 0 0 1.2031.7188c.6836 0 1.1445-.3907 1.1484-.9375.0039-.6446-.4609-1.0039-1.2148-1.0039h-.375a.3406.3406 0 1 1 0-.68h.3515a.9636.9636 0 0 0 1.0821-.9063c0-.5234-.336-.8711-1.0039-.8711a1.0481 1.0481 0 0 0 -1.086.7071c-.0937.2265-.1875.3085-.3945.3085a.3425.3425 0 0 1 -.3789-.375.88.88 0 0 1 .1055-.4257 1.8513 1.8513 0 0 1 1.7539-.9336c1.1484 0 1.8554.6289 1.8554 1.4687a1.3541 1.3541 0 0 1 -1.1875 1.3242v.02a1.3593 1.3593 0 0 1 1.3828 1.3672c0 .9921-.8671 1.6679-2.0429 1.6679a1.9792 1.9792 0 0 1 -1.8672-.9298zm4.4629-3.4257c0-.9063.4492-1.4532 1.164-1.4532.7188 0 1.1641.5469 1.1641 1.4532s-.4414 1.4648-1.1641 1.4648-1.164-.5547-1.164-1.4648zm1.6719 0c0-.6211-.1914-.9414-.5079-.9414s-.5078.3242-.5078.9453.1875.9531.5078.9531.5079-.332.5079-.957zm-.7422 4.0546a.36.36 0 0 1 .0742-.2187l1.7773-2.5664 1.7461-2.5391a.3337.3337 0 0 1 .3125-.1914.2783.2783 0 0 1 .293.27.3451.3451 0 0 1 -.07.2148l-1.7227 2.4961-1.8008 2.6172c-.0976.1406-.1718.1875-.3007.1875a.2828.2828 0 0 1 -.3089-.27zm2.8086-1.203c0-.9062.4492-1.4531 1.164-1.4531.7188 0 1.1641.543 1.1641 1.4531 0 .9024-.4414 1.4649-1.1641 1.4649-.7187-.0001-1.164-.5587-1.164-1.4649zm1.6757 0c0-.6211-.1914-.9453-.5117-.9453-.3164 0-.5078.3242-.5078.9453 0 .625.1914.9531.5078.9531.3203-.0001.5117-.3282.5117-.9531z'></path>
                                    </svg>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-valueprops-description'>
                                  <h3 className='rf-digitalmat-valueprops-header'>
                                    3% Daily Cash back with Apple&nbsp;Card
                                  </h3>
                                  <span>
                                    And pay 0% APR over 12 mo. when you choose
                                    to check out with Apple Card Monthly
                                    Installments.<sup>◊</sup>
                                  </span>
                                </div>
                              </div>
                              <div className='rf-digitalmat-valueprops-item'>
                                <div className='rf-digitalmat-valueprops-icon'>
                                  <div className='as-svgicon-container dd-color-blue-violet'>
                                    <svg
                                      viewBox='0 0 43 56'
                                      xmlns='http://www.w3.org/2000/svg'
                                      className='as-svgicon as-svgicon-financing as-svgicon-elevated as-svgicon-financingelevated'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <path
                                        d='m0 0h43v56h-43z'
                                        fill='none'
                                      ></path>
                                      <path d='m38.5 27a.99974.99974 0 0 0 -1 1v11a5.00588 5.00588 0 0 1 -5 5h-22a5.00588 5.00588 0 0 1 -5-5v-3.83594l1.543 1.543a.99989.99989 0 1 0 1.414-1.41406l-3.25-3.25a.99962.99962 0 0 0 -1.41406 0l-3.25 3.25a.99989.99989 0 1 0 1.41406 1.414l1.543-1.543v3.836a7.00818 7.00818 0 0 0 7 7h22a7.00818 7.00818 0 0 0 7-7v-11a.99974.99974 0 0 0 -1-1z'></path>
                                      <path d='m28.17188 32.71533a.31074.31074 0 0 0 -.35157.35156q0 .334.35157.334h2.62792a.29915.29915 0 0 0 .34278-.334.30692.30692 0 0 0 -.34278-.35156z'></path>
                                      <path d='m30.60156 21.32031a1.92007 1.92007 0 0 0 -1.40136-.47021h-15.75a1.94085 1.94085 0 0 0 -1.376.47021 1.81128 1.81128 0 0 0 -.50488 1.39307v10.43262h-.92481a.95033.95033 0 0 0 -.70312.29443 1.00858 1.00858 0 0 0 0 1.41553.9536.9536 0 0 0 .70312.29394h20.74416a1.96828 1.96828 0 0 0 1.415-.51855 1.78331 1.78331 0 0 0 .54492-1.35352v-8.376a1.78328 1.78328 0 0 0 -.54492-1.35352 1.96828 1.96828 0 0 0 -1.415-.51855h-.30762v-.31641a1.8689 1.8689 0 0 0 -.47949-1.39304zm-4.99609 3.58155v8.24414h-12.62109v-10.03711a.74576.74576 0 0 1 .84374-.84375h14.99415a.85949.85949 0 0 1 .63281.21093.827.827 0 0 1 .19971.55372h-2.08936a1.96828 1.96828 0 0 0 -1.415.51855 1.78328 1.78328 0 0 0 -.54496 1.35352zm5.53711-.334v-.35156h.09668a.94481.94481 0 0 1 .67676.23291.83527.83527 0 0 1 .24609.63721v8.00683a.83528.83528 0 0 1 -.24609.63721.94481.94481 0 0 1 -.67676.23291h-3.51563a.95761.95761 0 0 1 -.68554-.23291.83525.83525 0 0 1 -.2461-.63721v-8.00682a.83524.83524 0 0 1 .2461-.63721.95761.95761 0 0 1 .68554-.23291h.09668v.35156a.52959.52959 0 0 0 .14063.37793.48342.48342 0 0 0 .36914.14941h2.30273a.48342.48342 0 0 0 .36914-.14941.52959.52959 0 0 0 .14063-.37793z'></path>
                                      <path d='m42.457 19.293a.99962.99962 0 0 0 -1.41406 0l-1.543 1.543v-3.836a7.00818 7.00818 0 0 0 -7-7h-22a7.00818 7.00818 0 0 0 -7 7v11a1 1 0 0 0 2 0v-11a5.00588 5.00588 0 0 1 5-5h22a5.00588 5.00588 0 0 1 5 5v3.83594l-1.543-1.543a.99989.99989 0 0 0 -1.41394 1.41406l3.25 3.25a.99963.99963 0 0 0 1.41406 0l3.25-3.25a.99962.99962 0 0 0 -.00006-1.414z'></path>
                                    </svg>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-valueprops-description'>
                                  <h3 className='rf-digitalmat-valueprops-header'>
                                    Get more with Apple Trade In
                                  </h3>
                                  Get extra credit now through May&nbsp;31. Save
                                  $25–$2,010 toward a new Mac when you trade in
                                  your current one.**
                                </div>
                              </div>
                              <div className='rf-digitalmat-valueprops-item'>
                                <div className='rf-digitalmat-valueprops-icon'>
                                  <div className='as-svgicon-container dd-color-razzmatazz'>
                                    <svg
                                      xmlns='http://www.w3.org/2000/svg'
                                      viewBox='0 0 36 56'
                                      className='as-svgicon as-svgicon-delivery as-svgicon-elevated as-svgicon-deliverydelevated'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <g>
                                        <rect
                                          width='36'
                                          height='56'
                                          fill='none'
                                        ></rect>
                                        <path d='M33.905,17.063l-14-7.581a3.991,3.991,0,0,0-3.811,0l-14,7.581A4,4,0,0,0,0,20.581V35.419a4,4,0,0,0,2.095,3.518l14,7.581a3.989,3.989,0,0,0,3.811,0l14-7.581A4,4,0,0,0,36,35.419V20.581A4,4,0,0,0,33.905,17.063ZM17.048,11.241a1.993,1.993,0,0,1,1.9,0l13.8,7.47-6.383,3.645L11.943,14.005ZM18,27.133,3.253,18.711l6.629-3.589L24.355,23.5ZM3.048,37.178A2,2,0,0,1,2,35.419V20.581a1.955,1.955,0,0,1,.036-.262L17,28.865V44.733ZM34,35.419a2,2,0,0,1-1.048,1.759L19,44.733V28.865l14.964-8.545a1.955,1.955,0,0,1,.036.262Z'></path>
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-valueprops-description'>
                                  <h3 className='rf-digitalmat-valueprops-header'>
                                    Free delivery
                                  </h3>
                                  <span>
                                    And free returns. See checkout for delivery
                                    dates.
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    aria-hidden='true'
                    data-core-fade-transition-wrapper=''
                    className='rf-digitalmat-overlay-tabcontent r-fade-transition-exit-done'
                    data-core-tabs-panel=''
                    id='panel-3de2be30-e0c2-11ec-bb44-35cae391b59c-9'
                    aria-labelledby='tab-3de2be30-e0c2-11ec-bb44-35cae391b59c-9'
                  >
                    <div
                      data-core-tabs=''
                      id='3dfb7650-e0c2-11ec-bb44-35cae391b59c'
                      className='rf-digitalmat-inlinetabs'
                      data-core-tabs-transition-done=''
                    >
                      <div
                        data-core-tabs-panels=''
                        className='rf-digitalmat-inlinetabnav-contentsection'
                        style='height: 0px;'
                      >
                        <div
                          data-core-fade-transition-wrapper=''
                          className='rf-digitalmat-inlinetabnav-tabcontent r-fade-transition-enter-done r-fade-transition-appear-done'
                          data-core-tabs-panel=''
                          data-core-tabs-panel-selected=''
                          id='panel-3dfb7650-e0c2-11ec-bb44-35cae391b59c-0'
                        >
                          <div className='row rf-digitalmat-inlinetabnav-tabcontent-container'>
                            <div className='column large-6 small-12 rf-digitalmat-gallerysection'>
                              <div className='rf-digitalmat-cardgallery with-paddlenav with-paddlenav-onhover'>
                                <div
                                  className='rc-inline-gallery rf-digitalmat-gallery'
                                  role='group'
                                  aria-label='Gallery'
                                >
                                  <div className='rc-gallery-dotnav dotnav'>
                                    <ul
                                      className=''
                                      role='tablist'
                                      aria-label='Pro Display XDR'
                                    >
                                      <li role='presentation'>
                                        <button
                                          id='3dfb7651-e0c2-11ec-bb44-35cae391b59c-tab-item-0'
                                          type='button'
                                          role='tab'
                                          aria-controls='3dfb7651-e0c2-11ec-bb44-35cae391b59c-gallery-item-0'
                                          aria-selected='true'
                                          aria-label='Item 1'
                                          tabIndex='0'
                                          className='rc-gallery-dotnav-item dotnav-item current'
                                          data-autom='gallery-dot-nav-0'
                                        ></button>
                                      </li>
                                      <li role='presentation'>
                                        <button
                                          id='3dfb7651-e0c2-11ec-bb44-35cae391b59c-tab-item-1'
                                          type='button'
                                          role='tab'
                                          aria-controls='3dfb7651-e0c2-11ec-bb44-35cae391b59c-gallery-item-1'
                                          aria-selected='false'
                                          aria-label='Item 2'
                                          tabIndex='-1'
                                          className='rc-gallery-dotnav-item dotnav-item'
                                          data-autom='gallery-dot-nav-1'
                                        ></button>
                                      </li>
                                      <li role='presentation'>
                                        <button
                                          id='3dfb7651-e0c2-11ec-bb44-35cae391b59c-tab-item-2'
                                          type='button'
                                          role='tab'
                                          aria-controls='3dfb7651-e0c2-11ec-bb44-35cae391b59c-gallery-item-2'
                                          aria-selected='false'
                                          aria-label='Item 3'
                                          tabIndex='-1'
                                          className='rc-gallery-dotnav-item dotnav-item'
                                          data-autom='gallery-dot-nav-2'
                                        ></button>
                                      </li>
                                      <li role='presentation'>
                                        <button
                                          id='3dfb7651-e0c2-11ec-bb44-35cae391b59c-tab-item-3'
                                          type='button'
                                          role='tab'
                                          aria-controls='3dfb7651-e0c2-11ec-bb44-35cae391b59c-gallery-item-3'
                                          aria-selected='false'
                                          aria-label='Item 4'
                                          tabIndex='-1'
                                          className='rc-gallery-dotnav-item dotnav-item'
                                          data-autom='gallery-dot-nav-3'
                                        ></button>
                                      </li>
                                      <li role='presentation'>
                                        <button
                                          id='3dfb7651-e0c2-11ec-bb44-35cae391b59c-tab-item-4'
                                          type='button'
                                          role='tab'
                                          aria-controls='3dfb7651-e0c2-11ec-bb44-35cae391b59c-gallery-item-4'
                                          aria-selected='false'
                                          aria-label='Item 5'
                                          tabIndex='-1'
                                          className='rc-gallery-dotnav-item dotnav-item'
                                          data-autom='gallery-dot-nav-4'
                                        ></button>
                                      </li>
                                    </ul>
                                  </div>
                                  <div
                                    id='3dfb7651-e0c2-11ec-bb44-35cae391b59c'
                                    className='rf-digitalmat-gallery-items'
                                    data-core-gallery='true'
                                    data-core-gallery-fade='false'
                                  >
                                    <div
                                      data-core-gallery-scroller='true'
                                      style='transform: translateX(0px); width: 500%; left: 0%; transition: none 0s ease 0s;'
                                    >
                                      <div
                                        id='3dfb7651-e0c2-11ec-bb44-35cae391b59c-gallery-item-0'
                                        data-core-gallery-item='true'
                                        aria-hidden='false'
                                        className='rc-inline-gallery-item'
                                        role='tabpanel'
                                        aria-label='Item 1'
                                      >
                                        <div className='rf-digitalmat-cardgallery-img-wrapper'>
                                          <img
                                            width='364'
                                            height='333'
                                            alt=''
                                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/proxdr-digitalmat-gallery-1-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635206791000'
                                            srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/proxdr-digitalmat-gallery-1-202111?wid=364&amp;hei=333&amp;fmt=png-alpha&amp;.v=1635206791000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/proxdr-digitalmat-gallery-1-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635206791000 2x'
                                            className='rf-digitalmat-cardgallery-img'
                                          />
                                        </div>
                                      </div>
                                      <div
                                        id='3dfb7651-e0c2-11ec-bb44-35cae391b59c-gallery-item-1'
                                        data-core-gallery-item='true'
                                        aria-hidden='true'
                                        className='rc-inline-gallery-item'
                                        role='tabpanel'
                                        aria-label='Item 2'
                                      >
                                        <div className='rf-digitalmat-cardgallery-img-wrapper'>
                                          <img
                                            width='364'
                                            height='333'
                                            alt=''
                                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/proxdr-digitalmat-gallery-2-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635206790000'
                                            srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/proxdr-digitalmat-gallery-2-202111?wid=364&amp;hei=333&amp;fmt=png-alpha&amp;.v=1635206790000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/proxdr-digitalmat-gallery-2-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635206790000 2x'
                                            className='rf-digitalmat-cardgallery-img'
                                          />
                                        </div>
                                      </div>
                                      <div
                                        id='3dfb7651-e0c2-11ec-bb44-35cae391b59c-gallery-item-2'
                                        data-core-gallery-item='true'
                                        aria-hidden='true'
                                        className='rc-inline-gallery-item'
                                        role='tabpanel'
                                        aria-label='Item 3'
                                      >
                                        <div className='rf-digitalmat-cardgallery-img-wrapper'>
                                          <img
                                            width='364'
                                            height='333'
                                            alt=''
                                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/proxdr-digitalmat-gallery-3-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635206789000'
                                            srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/proxdr-digitalmat-gallery-3-202111?wid=364&amp;hei=333&amp;fmt=png-alpha&amp;.v=1635206789000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/proxdr-digitalmat-gallery-3-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635206789000 2x'
                                            className='rf-digitalmat-cardgallery-img'
                                          />
                                        </div>
                                      </div>
                                      <div
                                        id='3dfb7651-e0c2-11ec-bb44-35cae391b59c-gallery-item-3'
                                        data-core-gallery-item='true'
                                        aria-hidden='true'
                                        className='rc-inline-gallery-item'
                                        role='tabpanel'
                                        aria-label='Item 4'
                                      >
                                        <div className='rf-digitalmat-cardgallery-img-wrapper'>
                                          <img
                                            width='364'
                                            height='333'
                                            alt=''
                                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/proxdr-digitalmat-gallery-4-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635206789000'
                                            srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/proxdr-digitalmat-gallery-4-202111?wid=364&amp;hei=333&amp;fmt=png-alpha&amp;.v=1635206789000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/proxdr-digitalmat-gallery-4-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635206789000 2x'
                                            className='rf-digitalmat-cardgallery-img'
                                          />
                                        </div>
                                      </div>
                                      <div
                                        id='3dfb7651-e0c2-11ec-bb44-35cae391b59c-gallery-item-4'
                                        data-core-gallery-item='true'
                                        aria-hidden='true'
                                        className='rc-inline-gallery-item'
                                        role='tabpanel'
                                        aria-label='Item 5'
                                      >
                                        <div className='rf-digitalmat-cardgallery-img-wrapper'>
                                          <img
                                            width='364'
                                            height='333'
                                            alt=''
                                            src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/proxdr-digitalmat-gallery-5-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635206791000'
                                            srcset='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/proxdr-digitalmat-gallery-5-202111?wid=364&amp;hei=333&amp;fmt=png-alpha&amp;.v=1635206791000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/proxdr-digitalmat-gallery-5-202111?wid=728&amp;hei=666&amp;fmt=png-alpha&amp;.v=1635206791000 2x'
                                            className='rf-digitalmat-cardgallery-img'
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='rc-gallery-paddlenav paddlenav paddlenav-compact'>
                                    <button
                                      type='button'
                                      disabled=''
                                      aria-hidden='true'
                                      aria-label='Previous'
                                      className='paddlenav-arrow paddlenav-arrow-previous'
                                      data-autom='paddlenav-previous'
                                    ></button>
                                    <button
                                      type='button'
                                      aria-hidden='false'
                                      aria-label='Next'
                                      className='paddlenav-arrow paddlenav-arrow-next'
                                      data-autom='paddlenav-next'
                                    ></button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className='column large-6 small-12 rf-digitalmat-contentsection'>
                              <h2
                                className='rf-digitalmat-overlay-header'
                                id='rf-digitalmat-overlay-label'
                                data-autom='DigitalMat-overlay-header-9'
                              >
                                Pro Display XDR
                              </h2>
                              <div className='rf-digitalmat-price-button'>
                                <div
                                  className='rf-digitalmat-price'
                                  data-autom='DigitalMat-price-9'
                                >
                                  <div className='rc-prices-inline rc-prices-inline-lead-with-full-price'>
                                    <div className='rc-price'>
                                      <span className='rc-prices-currentprice'>
                                        From{' '}
                                        <span className='nowrap'>$4999</span>
                                      </span>
                                      <span className='rc-prices-installmentsseparator'>
                                        {' '}
                                      </span>
                                      <span className='rc-monthly-price'>
                                        <span className='rc-prices-currentprice'>
                                          {' '}
                                          <span className='nowrap'>
                                            {' '}
                                            or $416.58
                                            <span aria-hidden='true'>
                                              /mo.{' '}
                                            </span>
                                            <span className='visuallyhidden'>
                                              {' '}
                                              per month
                                            </span>
                                          </span>{' '}
                                          <span className='nowrap'>
                                            <span className='acinstallment-term-length'>
                                              {' '}
                                              for 12{' '}
                                              <span aria-hidden='true'>
                                                mo.
                                              </span>
                                              <span className='visuallyhidden'>
                                                months
                                              </span>
                                            </span>
                                            <span className='visuallyhidden'>
                                              Footnote{' '}
                                            </span>
                                            *
                                          </span>
                                        </span>
                                      </span>
                                    </div>
                                    <div className='rc-prices-footer'>
                                      <div className='rc-financing-message'>
                                        <span className='as-prices-installments as-price-installments'>
                                          <a
                                            href='/us/shop/go/finance'
                                            target='_blank'
                                            rel="noreferrer"
                                            name='browse'
                                            className='as-price-installments-items'
                                            data-analytics-title='learn more about financing'
                                          >
                                            {' '}
                                            <span className='more'>
                                              null% Financing Available
                                            </span>
                                          </a>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <a
                                  href='/shop/buy-mac/pro-display-xdr'
                                  data-feature-name='Pro Display XDR modal'
                                  data-display-name='shop Pro Display XDR'
                                  data-autom='DigitalMat-buynow-button-9'
                                  className='button rf-digitalmat-button'
                                >
                                  Buy
                                  <span className='visuallyhidden'>
                                    {' '}
                                    - Pro Display XDR
                                  </span>
                                </a>
                              </div>
                              <div
                                className='rf-digitalmat-productdetails'
                                data-autom='DigitalMat-productdetails-9'
                              >
                                <div className='rf-digitalmat-productdetails-item'>
                                  <div className='rf-digitalmat-productdetails-content'>
                                    <svg
                                      height='35'
                                      viewBox='0 0 35 35'
                                      width='35'
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <path
                                        d='m0 0h35v35h-35z'
                                        fill='none'
                                      ></path>
                                      <path d='m29 7.5v7.5068a.5.5 0 0 1 -1 0v-7.3l-8.6445 8.6451a.5.5 0 0 1 -.7071-.7071l8.6441-8.6448h-7.2993a.5.5 0 0 1 0-1h7.5068a1.5017 1.5017 0 0 1 1.5 1.5zm-13.3555 11.1484-8.6445 8.6451v-7.3a.5.5 0 0 0 -1 0v7.5065a1.5017 1.5017 0 0 0 1.5 1.5h7.5068a.5.5 0 0 0 0-1h-7.2993l8.6441-8.6445a.5.5 0 0 0 -.7071-.7071z'></path>
                                    </svg>
                                    <div className='rf-digitalmat-featuretext'>
                                      32-inch 6K Retina display
                                      <span className='visuallyhidden'>
                                        Footnote
                                      </span>
                                      <sup>1</sup> provides astoundingly sharp
                                      and detailed imagery
                                    </div>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-productdetails-item'>
                                  <div className='rf-digitalmat-productdetails-content'>
                                    <div className='rf-digitalmat-icontext'>
                                      XDR
                                    </div>
                                    <div className='rf-digitalmat-featuretext'>
                                      Extreme Dynamic Range (XDR) for next-level
                                      brightness, contrast, and color
                                    </div>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-productdetails-item'>
                                  <div className='rf-digitalmat-productdetails-content'>
                                    <svg
                                      height='35'
                                      viewBox='0 0 35 35'
                                      width='35'
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <path
                                        d='m0 0h35v35h-35z'
                                        fill='none'
                                      ></path>
                                      <path d='m17.5 6.4141a.5.5 0 0 1 -.5-.5v-3.9248a.5.5 0 0 1 1 0v3.9248a.5.5 0 0 1 -.5.5zm-7.8389 3.247a.5.5 0 0 0 0-.707l-2.7754-2.7754a.5.5 0 1 0 -.707.707l2.7754 2.7754a.5.5 0 0 0 .707 0zm-3.247 7.8389a.5.5 0 0 0 -.5-.5h-3.9248a.5.5 0 0 0 0 1h3.9248a.5.5 0 0 0 .5-.5zm.4716 11.3213 2.7754-2.7754a.5.5 0 1 0 -.707-.707l-2.7754 2.7754a.5.5 0 1 0 .707.707zm11.1143 4.1894v-3.9248a.5.5 0 1 0 -1 0v3.9248a.5.5 0 0 0 1 0zm10.8213-4.1894a.5.5 0 0 0 0-.707l-2.7754-2.7754a.5.5 0 0 0 -.707.707l2.7754 2.7754a.5.5 0 0 0 .707 0zm4.6894-11.3213a.5.5 0 0 0 -.5-.5h-3.9248a.5.5 0 1 0 0 1h3.9248a.5.5 0 0 0 .5-.5zm-7.4648-7.8389 2.7754-2.7754a.5.5 0 1 0 -.707-.707l-2.7754 2.7754a.5.5 0 1 0 .707.707zm-8.5459 1.3389a6.5 6.5 0 1 0 6.5 6.5 6.5074 6.5074 0 0 0 -6.5-6.5m0-1a7.5 7.5 0 1 1 -7.5 7.5 7.5 7.5 0 0 1 7.5-7.5z'></path>
                                    </svg>
                                    <div className='rf-digitalmat-featuretext'>
                                      1000 nits full-screen sustained brightness
                                      and 1600 nits peak brightness
                                      <span className='visuallyhidden'>
                                        Footnote
                                      </span>
                                      ²
                                    </div>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-productdetails-item'>
                                  <div className='rf-digitalmat-productdetails-content'>
                                    <svg
                                      height='35'
                                      viewBox='0 0 35 35'
                                      width='35'
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <path
                                        d='m0 0h35v35h-35z'
                                        fill='none'
                                      ></path>
                                      <path d='m15.0542 13.9414a2.4713 2.4713 0 0 1 0 2.4879 2.5318 2.5318 0 0 1 -.8933.8975 2.3767 2.3767 0 0 1 -1.2385.3307 2.4069 2.4069 0 0 1 -1.2437-.3307 2.5068 2.5068 0 0 1 -.8979-.8975 2.4707 2.4707 0 0 1 0-2.4879 2.552 2.552 0 0 1 .8979-.9028 2.38 2.38 0 0 1 1.2437-.3358 2.35 2.35 0 0 1 1.2385.3358 2.5781 2.5781 0 0 1 .8933.9028zm15.9458-1.4448v10.0034a4.505 4.505 0 0 1 -4.5 4.5h-18a4.505 4.505 0 0 1 -4.5-4.5v-10a4.505 4.505 0 0 1 4.5-4.5h18.0029a4.502 4.502 0 0 1 4.4971 4.4966zm-1 0a3.5 3.5 0 0 0 -3.4971-3.4966h-18.0029a3.5042 3.5042 0 0 0 -3.5 3.5v10a3.4542 3.4542 0 0 0 .4534 1.6881l4.3943-4.0008a2.6462 2.6462 0 0 1 .6506-.4462 1.6361 1.6361 0 0 1 .7024-.1522 1.7914 1.7914 0 0 1 .7405.1575 2.7575 2.7575 0 0 1 .6872.4514l1.9734 1.816 4.7771-4.2724a3.0565 3.0565 0 0 1 .7654-.4934 2.08 2.08 0 0 1 .83-.1679 2.0457 2.0457 0 0 1 .8608.1837 3.5341 3.5341 0 0 1 .7769.4986l6.961 6.3776a3.4567 3.4567 0 0 0 .427-1.64z'></path>
                                    </svg>
                                    <div className='rf-digitalmat-featuretext'>
                                      1,000,000:1 contrast ratio and stunningly
                                      real XDR imagery
                                    </div>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-productdetails-item'>
                                  <div className='rf-digitalmat-productdetails-content'>
                                    <svg
                                      height='35'
                                      viewBox='0 0 35 35'
                                      width='35'
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <path
                                        d='m0 0h35v35h-35z'
                                        fill='none'
                                      ></path>
                                      <path d='m25.8337 14.0687c.0262-.27.0413-.5423.0413-.8187a8.375 8.375 0 0 0 -16.75 0c0 .2764.0151.5491.0413.8187a8.3713 8.3713 0 1 0 8.3337 14.3886 8.37 8.37 0 1 0 8.3337-14.3886zm-15.7087-.8187a7.375 7.375 0 0 1 14.75 0c0 .1572-.0139.311-.0237.4658a8.3148 8.3148 0 0 0 -7.3513 1.3269 8.3148 8.3148 0 0 0 -7.3513-1.3269c-.0098-.1548-.0237-.3086-.0237-.4658zm9.75 8.5a7.3478 7.3478 0 0 1 -2.375 5.4056 7.3478 7.3478 0 0 1 -2.375-5.4056c0-.1572.0139-.311.0237-.4658a8.2816 8.2816 0 0 0 4.7026 0c.0098.1548.0237.3086.0237.4658zm-2.375-1.125a7.3454 7.3454 0 0 1 -2.2271-.3455 7.3652 7.3652 0 0 1 2.2271-3.9351 7.3652 7.3652 0 0 1 2.2271 3.9356 7.3454 7.3454 0 0 1 -2.2271.345zm-3.1636-.7231a7.3941 7.3941 0 0 1 -4.0635-5.1814 7.3409 7.3409 0 0 1 6.44.9848 8.3541 8.3541 0 0 0 -2.3765 4.1966zm3.9507-4.1966a7.3409 7.3409 0 0 1 6.44-.9848 7.3941 7.3941 0 0 1 -4.0635 5.1814 8.3541 8.3541 0 0 0 -2.3765-4.1966zm-5.7871 13.4197a7.3688 7.3688 0 0 1 -3.1636-14.0269 8.3841 8.3841 0 0 0 4.83 5.8332c-.0262.27-.0413.5423-.0413.8187a8.3446 8.3446 0 0 0 2.5879 6.0447 7.3277 7.3277 0 0 1 -4.213 1.3303zm10 0a7.3277 7.3277 0 0 1 -4.2129-1.33 8.3446 8.3446 0 0 0 2.5879-6.045c0-.2764-.0151-.5491-.0413-.8187a8.3841 8.3841 0 0 0 4.83-5.8332 7.3688 7.3688 0 0 1 -3.1637 14.0269z'></path>
                                    </svg>
                                    <div className='rf-digitalmat-featuretext'>
                                      P3 wide color gamut and 10-bit color depth
                                      for the highest-quality color possible
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className='rf-digitalmat-explorelink'>
                                <a
                                  href='https://www.apple.com/pro-display-xdr'
                                  data-feature-name='Pro Display XDR modal'
                                  data-display-name='Explore Pro Display XDR further'
                                  data-autom='DigitalMat-explorelink-9'
                                  className='icon icon-after more'
                                >
                                  Explore Pro Display XDR further
                                </a>
                              </div>
                            </div>
                          </div>
                          <div
                            className='rf-digitalmat-valueprops rf-digitalmat-valueprops-2items'
                            data-autom='DigitalMat-valueprops-9'
                          >
                            <div className='rf-digitalmat-valueprops-container'>
                              <div className='rf-digitalmat-valueprops-item'>
                                <div className='rf-digitalmat-valueprops-icon'>
                                  <div className='as-svgicon-container dd-color-saffron'>
                                    <svg
                                      height='25'
                                      viewBox='0 0 25 25'
                                      width='25'
                                      className='as-svgicon'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <path
                                        d='m0 0h25v25h-25z'
                                        fill='none'
                                      ></path>
                                      <path d='m17.6406 21h-10a3.6272 3.6272 0 0 1 -3.6406-3.5v-10a3.6272 3.6272 0 0 1 3.6406-3.5h10a3.3868 3.3868 0 0 1 3.3594 3.5v10a3.3868 3.3868 0 0 1 -3.3594 3.5zm-10-16a2.6267 2.6267 0 0 0 -2.6406 2.5v10a2.6267 2.6267 0 0 0 2.6406 2.5h10a2.3863 2.3863 0 0 0 2.3594-2.5v-10a2.3863 2.3863 0 0 0 -2.3594-2.5zm-.3486 9.4941a.867.867 0 0 1 -.1133-.4218.3632.3632 0 0 1 .3945-.3868.3917.3917 0 0 1 .3868.2891 1.1691 1.1691 0 0 0 1.2031.7188c.6836 0 1.1445-.3907 1.1484-.9375.0039-.6446-.4609-1.0039-1.2148-1.0039h-.375a.3406.3406 0 1 1 0-.68h.3515a.9636.9636 0 0 0 1.0821-.9063c0-.5234-.336-.8711-1.0039-.8711a1.0481 1.0481 0 0 0 -1.086.7071c-.0937.2265-.1875.3085-.3945.3085a.3425.3425 0 0 1 -.3789-.375.88.88 0 0 1 .1055-.4257 1.8513 1.8513 0 0 1 1.7539-.9336c1.1484 0 1.8554.6289 1.8554 1.4687a1.3541 1.3541 0 0 1 -1.1875 1.3242v.02a1.3593 1.3593 0 0 1 1.3828 1.3672c0 .9921-.8671 1.6679-2.0429 1.6679a1.9792 1.9792 0 0 1 -1.8672-.9298zm4.4629-3.4257c0-.9063.4492-1.4532 1.164-1.4532.7188 0 1.1641.5469 1.1641 1.4532s-.4414 1.4648-1.1641 1.4648-1.164-.5547-1.164-1.4648zm1.6719 0c0-.6211-.1914-.9414-.5079-.9414s-.5078.3242-.5078.9453.1875.9531.5078.9531.5079-.332.5079-.957zm-.7422 4.0546a.36.36 0 0 1 .0742-.2187l1.7773-2.5664 1.7461-2.5391a.3337.3337 0 0 1 .3125-.1914.2783.2783 0 0 1 .293.27.3451.3451 0 0 1 -.07.2148l-1.7227 2.4961-1.8008 2.6172c-.0976.1406-.1718.1875-.3007.1875a.2828.2828 0 0 1 -.3089-.27zm2.8086-1.203c0-.9062.4492-1.4531 1.164-1.4531.7188 0 1.1641.543 1.1641 1.4531 0 .9024-.4414 1.4649-1.1641 1.4649-.7187-.0001-1.164-.5587-1.164-1.4649zm1.6757 0c0-.6211-.1914-.9453-.5117-.9453-.3164 0-.5078.3242-.5078.9453 0 .625.1914.9531.5078.9531.3203-.0001.5117-.3282.5117-.9531z'></path>
                                    </svg>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-valueprops-description'>
                                  <h3 className='rf-digitalmat-valueprops-header'>
                                    3% Daily Cash back with Apple&nbsp;Card
                                  </h3>
                                  <span>
                                    And pay 0% APR over 12 mo. when you choose
                                    to check out with Apple Card Monthly
                                    Installments.<sup>◊</sup>
                                  </span>
                                </div>
                              </div>
                              <div className='rf-digitalmat-valueprops-item'>
                                <div className='rf-digitalmat-valueprops-icon'>
                                  <div className='as-svgicon-container dd-color-razzmatazz'>
                                    <svg
                                      xmlns='http://www.w3.org/2000/svg'
                                      viewBox='0 0 36 56'
                                      className='as-svgicon as-svgicon-delivery as-svgicon-elevated as-svgicon-deliverydelevated'
                                      aria-hidden='true'
                                      role='img'
                                    >
                                      <g>
                                        <rect
                                          width='36'
                                          height='56'
                                          fill='none'
                                        ></rect>
                                        <path d='M33.905,17.063l-14-7.581a3.991,3.991,0,0,0-3.811,0l-14,7.581A4,4,0,0,0,0,20.581V35.419a4,4,0,0,0,2.095,3.518l14,7.581a3.989,3.989,0,0,0,3.811,0l14-7.581A4,4,0,0,0,36,35.419V20.581A4,4,0,0,0,33.905,17.063ZM17.048,11.241a1.993,1.993,0,0,1,1.9,0l13.8,7.47-6.383,3.645L11.943,14.005ZM18,27.133,3.253,18.711l6.629-3.589L24.355,23.5ZM3.048,37.178A2,2,0,0,1,2,35.419V20.581a1.955,1.955,0,0,1,.036-.262L17,28.865V44.733ZM34,35.419a2,2,0,0,1-1.048,1.759L19,44.733V28.865l14.964-8.545a1.955,1.955,0,0,1,.036.262Z'></path>
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                                <div className='rf-digitalmat-valueprops-description'>
                                  <h3 className='rf-digitalmat-valueprops-header'>
                                    Free delivery
                                  </h3>
                                  <span>
                                    And free returns. See checkout for delivery
                                    dates.
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */
