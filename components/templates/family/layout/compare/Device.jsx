import StyledLink from '@/components/templates/layout/styled/StyledLink'

export default function Device() {
  return (
    <>
      <div className='ipad-pro device'>
        <div className='image-wrap'>
          <a
            href='/ipad-pro/'
            data-analytics-title='learn more - ipad pro'
            aria-label='Learn more about iPad Pro'
          >
            <figure className='image-ipad-pro' data-anim-lazy-image=''></figure>
          </a>
        </div>
        <div className='device-content'>
          <figure
            className='image-ipad-pro-swatches image-swatches'
            aria-label='Available in Space Gray, and Silver'
            data-anim-lazy-image=''
          ></figure>
          <h3 className='typography-compare-device-headline'>iPad Pro</h3>
          <p className='typography-body-tight tagline'>
            The ultimate iPad&nbsp;experience.
          </p>
          <p className='typography-body-reduced pricing has-dynamic-content'>
            <span
              data-pricing-product='ipad-pro'
              data-product-template='${price.display.from}'
              data-pricing-loaded=''
            >
              From $799
            </span>
          </p>

          <StyledLink
            link={{ href: '/shop/ipad-pro', type: 'button' }}
            styles='button-reduced cta'
          />
          <p className='typography-body-reduced cta'>
            <StyledLink link={{ href: '/ipad-pro/' }} />
          </p>
        </div>
      </div>

      <style global jsx>{`
        .section-compare .device {
          border-bottom: 1px solid #d2d2d7;
        }

        .section-compare .device .image-wrap {
          min-height: 214px; // delete
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
        }

        .section-compare .device .device-content {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .section-compare .device .device-content .image-swatches {
          margin-top: 9px;
        }

        .section-compare .device .device-content .tagline {
          line-height: 21px;
          margin-top: 6px;
        }

        .section-compare .device .device-content .cta {
          margin-top: 10px;
        }

        @media only screen and (min-width: 1068px) {
          .section-compare .device {
            padding-bottom: 32px;
            margin-bottom: 7px;
          }
          .section-compare .device .image-wrap {
            margin-bottom: 13px;
          }
          .section-compare .device .device-content .image-swatches {
            margin-bottom: 31px;
          }
          .section-compare .device .device-content .pricing {
            margin-top: 10px;
          }
        }
        @media only screen and (min-width: 734px) and (max-width: 1068px) {
          .section-compare .device {
            padding-bottom: 22px;
            margin-bottom: 5px;
          }
          .section-compare .device .image-wrap {
            margin-bottom: 9px;
          }
          .section-compare .device .device-content .image-swatches {
            margin-bottom: 26px;
          }
          .section-compare .device .device-content .pricing {
            margin-top: 13px;
          }
        }
        @media only screen and (min-width: 734px) {
          .typography-compare-device-headline {
            font-size: 24px;
            line-height: 1.16667;
            font-weight: 600;
            letter-spacing: 0.009em;
            font-family: 'SF Pro Display', 'SF Pro Icons', 'Helvetica Neue',
              'Helvetica', 'Arial', sans-serif;
          }
        }
        @media only screen and (max-width: 734px) {
          .section-compare .device {
            padding-bottom: 32px;
            margin-bottom: -3px;
          }
          .section-compare .device .image-wrap {
            margin-bottom: 7px;
          }
          .section-compare .device .device-content .image-swatches {
            margin-bottom: 24px;
          }
          .typography-compare-device-headline {
            font-size: 21px;
            line-height: 1.19048;
            font-weight: 600;
            letter-spacing: 0.011em;
            font-family: 'SF Pro Display', 'SF Pro Icons', 'Helvetica Neue',
              'Helvetica', 'Arial', sans-serif;
          }
          .section-compare .device .device-content .pricing {
            margin-top: 15px;
          }
        }
      `}</style>
    </>
  )
}
