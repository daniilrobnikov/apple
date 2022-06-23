import SaveItem from '../../product/A/page/SaveItem'
import Hardware from './Hardware'
import Software from './Software'

export default function MainPanel() {
  return (
    <>
      <div className='column large-6 small-12 rs-cto-main-panel'>
        <div className='rf-configuration-header typography-manifesto'>
          <h1
            className='rf-configuration-maintitle typography-headline-reduced'
            data-autom='Mac-configuration-maintitle'
          >
            Customize your Blue 24‑inch iMac with Apple M1 chip.
          </h1>
        </div>
        <div
          className='rf-configuration-productsummary'
          data-autom='productSummary'
        >
          <div>
            <ul className='rf-configuration-subheader typography-body-reduced'>
              <li>
                Apple M1 chip with 8-core CPU with 4 performance cores and 4
                efficiency cores, 8-core GPU, and 16-core Neural Engine
              </li>
              <li>8GB unified memory</li>
              <li>512GB SSD storage</li>
              <li>Two Thunderbolt / USB 4 ports</li>
              <li>Two USB 3 ports</li>
              <li>Gigabit Ethernet</li>
              <li>Magic&nbsp;Mouse</li>
              <li>Magic&nbsp;Keyboard with Touch&nbsp;ID - US English</li>
            </ul>
          </div>
        </div>
        <div className='rf-tradeupbanner'>
          <section className='rf-tradeupbanner-content'>
            <h2
              className='rf-tradeupbanner-header'
              data-autom='tradeupBannerHeader'
            >
              <span>Apple Trade In</span>
            </h2>
            <div className='rf-tradeupbanner-message-row'>
              <span>
                <img
                  src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/tradein-icon-currency?wid=50&amp;hei=50&amp;fmt=png-alpha&amp;.v=1594421189000'
                  alt=''
                  width='25'
                  height='25'
                  data-scale-params-1='wid=25&amp;hei=25&amp;fmt=png-alpha&amp;.v=1594421189000'
                  data-scale-initial='2'
                  className='as-tradeupbanner-icon ir'
                />
              </span>
              <div
                className='rf-tradeupbanner-message'
                data-autom='tradeupBannerMessage'
              >
                <h3 className='rf-tradeupbanner-logo-message'>
                  <span>Apple Trade In</span>
                </h3>
                <div className='rf-tradeupbanner-message-desc'>
                  <span>
                    Get credit toward a new Mac when you trade in your eligible
                    computer. Or recycle it for free.
                    <span className='visuallyhidden'>Footnote</span>
                    <sup>◊◊</sup>
                  </span>
                </div>
              </div>
              <div className='rf-tradeupbanner-action'>
                <button
                  className='as-buttonlink rf-tradeupbanner-button rf-tradeupbanner-focus-add'
                  type='button'
                  data-autom='tradeupStartButton_MGPL3LL/A'
                  aria-disabled='false'
                  data-trigger-id='tradeup-start'
                >
                  <span>
                    Get started
                    <span className='visuallyhidden'> with trade in</span>
                  </span>
                </button>
              </div>
            </div>
          </section>
        </div>
        <div className='rf-configuration-main'>
          <Hardware />
          <Software />
        </div>
        <SaveItem />
      </div>

      <style global jsx>{`
        .rs-cto-main-panel {
          width: 490px;
          height: auto;
          padding: 20px 0 14px;
        }

        .rf-configuration-productsummary {
          margin-bottom: 35px;
        }

        .rf-configuration-subheader {
          margin: 0;
          padding-top: 12px;
        }
        .rf-configuration-subheader li {
          margin-bottom: 11px;
        }

        /* rf-tradeupbanner */
        .rf-configuration-main,
        .rf-configuration-section,
        .rf-tradeupbanner {
          border-top: 1px solid #d2d2d7;
          font-size: 14px;
          line-height: 1.42859;
          font-weight: 400;
          letter-spacing: -0.016em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
        }
        .rf-tradeupbanner {
          padding: 11px 0 27px;
        }

        .rf-tradeupbanner .rf-tradeupbanner-header,
        .rf-tradeupbanner-logo-message {
          font-size: 14px;
          line-height: 1.42859;
          font-weight: 600;
          letter-spacing: -0.016em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
          padding: 10px 0 12px;
        }

        .rf-tradeupbanner-message-row {
          display: flex;
          margin: 0;
          align-items: flex-start;
          flex-direction: column;
        }

        /* as-tradeupbanner-icon */
        .rf-tradeupbanner-message-row .as-tradeupbanner-icon {
          display: block;
          width: auto;
          margin-top: 4px;
          height: 25px;
        }
        .rf-tradeupbanner .as-tradeupbanner-icon,
        .rf-tradeupbanner .rf-tradeupbanner-logo-message {
          display: none;
        }

        .rf-tradeupbanner-message {
          flex: 3;
        }

        .rf-tradeupbanner-message-desc {
          padding-right: 6px;
          padding-bottom: 4px;
        }

        .rf-tradeupbanner-action {
          font-size: 14px;
          line-height: 1.42859;
          font-weight: 400;
          letter-spacing: -0.016em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
          margin-top: 3px;
          min-width: 16%;
          text-align: right;
          flex: 1;
        }
        .rf-tradeupbanner .rf-tradeupbanner-action {
          font-weight: 400;
          text-align: left;
        }

        /* rf-saveditem-container */
        .rs-cto-main-panel .rf-saveditem-container {
          background: #fbfbfd;
          margin-top: 14px;
          padding: 30px;
        }
      `}</style>
    </>
  )
}
