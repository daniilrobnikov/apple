export default function DesignSubSection() {
  return (
    <>
      <div
        className='subsection-grid margin-top-short frameless'
        data-analytics-activitymap-region-id='design grid'
      >
        <div className='section-content'>
          <div className='grid large-8 medium-10 small-10 small-offset-1'>
            <div className='tile tile-rounded grid-item grid-item-noise large-span-6 small-span-12 with-icon'>
              <div className='tile-content'>
                <picture
                  id='overview-design-icon-silence-1'
                  className='overview-design-icon-silence tile-icons icon-noise'
                  data-lazy=''
                >
                  <source
                    srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/design/icon_silence__cxe67jrrqwsy_large.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/design/icon_silence__cxe67jrrqwsy_large_2x.png 2x'
                    media='(min-width:0px)'
                  />
                  <img
                    src='https://www.apple.com/v/macbook-air-m2/b/images/overview/design/icon_silence__cxe67jrrqwsy_large.png'
                    alt=''
                  />
                </picture>
                <p className='tile-copy'>
                  <strong>There’s power in silence.</strong> Thanks to the
                  efficiency of the M2&nbsp;chip, MacBook&nbsp;Air can deliver
                  amazing performance without a fan — so it stays completely
                  silent no matter how intense the&nbsp;task.
                </p>
              </div>
            </div>
            <div className='tile tile-rounded grid-item grid-item-durability large-span-6 small-span-12 with-icon'>
              <div className='tile-content'>
                <picture
                  id='overview-design-icon-built-to-last-1'
                  className='overview-design-icon-built-to-last tile-icons icon-durability'
                  data-lazy=''
                >
                  <source
                    srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/design/icon_built_to_last__gk1xo6k0m5aq_large.png, https://www.apple.com/v/macbook-air-m2/b/images/overview/design/icon_built_to_last__gk1xo6k0m5aq_large_2x.png 2x'
                    media='(min-width:0px)'
                  />
                  <img
                    src='https://www.apple.com/v/macbook-air-m2/b/images/overview/design/icon_built_to_last__gk1xo6k0m5aq_large.png'
                    alt=''
                  />
                </picture>
                <p className='tile-copy'>
                  <strong>Built to last. Puts the earth first.</strong>{' '}
                  As&nbsp;responsible as it is durable, MacBook&nbsp;Air
                  features 100 percent recycled aluminum in its compact
                  enclosure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style global jsx>{`
        .grid {
          margin-left: auto;
          margin-right: auto;
          grid-row-gap: 20px;
          grid-column-gap: 20px;
          padding: 0 24px;
          display: grid;
          grid-template-columns: repeat(12, minmax(0, 1fr));
        }
        .subsection-grid .grid {
          padding-left: 0;
          padding-right: 0;
        }
        .subsection-grid.frameless .grid {
          grid-column-gap: 8.3333333333%;
          padding-left: 0;
          padding-right: 0;
        }

        /* tile */
        .grid-item {
          position: relative;
          box-sizing: border-box;
        }
        .tile {
          margin-left: auto;
          margin-right: auto;
          box-sizing: border-box;
          height: 100%;
          position: relative;
          overflow: hidden;
          background-color: #fff;
        }
        .tile-rounded {
          border-radius: 12px;
        }
        .subsection-grid .tile {
          background-color: #fafafa;
          max-width: 100%;
        }
        .subsection-grid.frameless .tile {
          background-color: initial;
        }

        /* tile-content */
        .tile-content {
          padding: 60px 8.3333333333%;
        }
        .subsection-grid .tile .tile-content {
          display: flex;
          flex-direction: column;
        }
        .subsection-grid.frameless .with-icon .tile-content {
          padding: 0;
        }

        /* section-design */
        .section-design .icon-noise {
          --p-width: 40px;
        }
        .section-design .icon-durability {
          --p-width: 58px;
        }
        .section-design .icon-durability,
        .section-design .icon-noise {
          display: block;
          width: var(--p-width);
          height: var(--p-height);
          --p-height: 43px;
        }
        .subsection-grid .tile .tile-icons {
          margin-bottom: 20px;
        }
        .subsection-grid.frameless .tile-icons {
          margin-bottom: 16px;
        }

        @media only screen and (min-width: 1068px) {
          .subsection-grid.margin-top-short {
            margin-top: 80px;
          }

          .subsection-grid .tile .tile-content {
            padding: 70px 42px;
          }
        }
        @media only screen and (min-width: 734px) and (max-width: 1068px) {
          .subsection-grid.margin-top-short {
            margin-top: 70px;
          }

          .subsection-grid .tile .tile-content {
            padding: 60px 56px;
          }
        }
      `}</style>
    </>
  )
}
