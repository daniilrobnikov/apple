import { useKeyframe, useAnimation } from '@/components/hooks/useScroll'

export default function MBALogo() {
  const keyframe = useKeyframe('.hero-static')
  return (
    <>
      <div className='product-sticky-wrapper'>
        <div className='product-sticky-container'>
          <div className='product-wrapper'>
            <div
              className='product-container'
              data-anim-keyframe='{"start":"a0t-5vh","end":"a0t+50vh","anchors": [".product-sticky-wrapper"], "--mba-separation":["css(--mba-separation-start)","css(--mba-separation-end)", "%"],"easeFunction": "easeOutQuad", "ease": 0.8, "disabledWhen": ["no-enhance-xp"]}'
              style={{
                '--mba-separation': `${useAnimation(
                  [20, 0],
                  [0, 1],
                  keyframe
                )}%`,
              }}
            >
              <div className='product mba1'>
                <picture
                  id='overview-hero-hero-chevron-silver-1'
                  className='overview-hero-hero-chevron-silver loaded'
                  data-lazy=''
                  data-picture-loaded=''
                >
                  <source
                    srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/hero_chevron_silver__nidzjex8pv6q_small.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/hero_chevron_silver__nidzjex8pv6q_small_2x.jpg 2x'
                    media='(max-width:734px)'
                  />
                  <source
                    srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/hero_chevron_silver__nidzjex8pv6q_medium.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/hero_chevron_silver__nidzjex8pv6q_medium_2x.jpg 2x'
                    media='(max-width:1068px)'
                  />
                  <source
                    srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/hero_chevron_silver__nidzjex8pv6q_large.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/hero_chevron_silver__nidzjex8pv6q_large_2x.jpg 2x'
                    media='(min-width:0px)'
                  />
                  <img
                    src='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/hero_chevron_silver__nidzjex8pv6q_large.jpg'
                    alt=''
                  />
                </picture>
              </div>
              <div className='product mba2'>
                <picture
                  id='overview-hero-hero-chevron-starlight-1'
                  className='overview-hero-hero-chevron-starlight loaded'
                  data-lazy=''
                  data-picture-loaded=''
                >
                  <source
                    srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/hero_chevron_starlight__c36u0y98xw02_small.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/hero_chevron_starlight__c36u0y98xw02_small_2x.jpg 2x'
                    media='(max-width:734px)'
                  />
                  <source
                    srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/hero_chevron_starlight__c36u0y98xw02_medium.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/hero_chevron_starlight__c36u0y98xw02_medium_2x.jpg 2x'
                    media='(max-width:1068px)'
                  />
                  <source
                    srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/hero_chevron_starlight__c36u0y98xw02_large.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/hero_chevron_starlight__c36u0y98xw02_large_2x.jpg 2x'
                    media='(min-width:0px)'
                  />
                  <img
                    src='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/hero_chevron_starlight__c36u0y98xw02_large.jpg'
                    alt=''
                  />
                </picture>
              </div>
              <div className='product mba3'>
                <picture
                  id='overview-hero-hero-chevron-spacegray-1'
                  className='overview-hero-hero-chevron-spacegray loaded'
                  data-lazy=''
                  data-picture-loaded=''
                >
                  <source
                    srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/hero_chevron_spacegray__de41jkv6pryq_small.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/hero_chevron_spacegray__de41jkv6pryq_small_2x.jpg 2x'
                    media='(max-width:734px)'
                  />
                  <source
                    srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/hero_chevron_spacegray__de41jkv6pryq_medium.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/hero_chevron_spacegray__de41jkv6pryq_medium_2x.jpg 2x'
                    media='(max-width:1068px)'
                  />
                  <source
                    srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/hero_chevron_spacegray__de41jkv6pryq_large.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/hero_chevron_spacegray__de41jkv6pryq_large_2x.jpg 2x'
                    media='(min-width:0px)'
                  />
                  <img
                    src='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/hero_chevron_spacegray__de41jkv6pryq_large.jpg'
                    alt=''
                  />
                </picture>
              </div>
              <div className='product mba4'>
                <picture
                  id='overview-hero-hero-chevron-midnight-1'
                  className='overview-hero-hero-chevron-midnight loaded'
                  data-lazy=''
                  data-picture-loaded=''
                >
                  <source
                    srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/hero_chevron_midnight__zvs7q76qgmqq_small.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/hero_chevron_midnight__zvs7q76qgmqq_small_2x.jpg 2x'
                    media='(max-width:734px)'
                  />
                  <source
                    srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/hero_chevron_midnight__zvs7q76qgmqq_medium.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/hero_chevron_midnight__zvs7q76qgmqq_medium_2x.jpg 2x'
                    media='(max-width:1068px)'
                  />
                  <source
                    srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/hero_chevron_midnight__zvs7q76qgmqq_large.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/hero_chevron_midnight__zvs7q76qgmqq_large_2x.jpg 2x'
                    media='(min-width:0px)'
                  />
                  <img
                    src='https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/hero_chevron_midnight__zvs7q76qgmqq_large.jpg'
                    alt=''
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style global jsx>{`
        .section-hero .hero-static .product-sticky-wrapper {
          height: var(--chevron-sticky-wrapper-height);
          min-height: 878px;
        }

        .section-hero .hero-static .product-sticky-container {
          position: static;
          height: inherit;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .section-hero .hero-static .product-sticky-container {
          position: sticky;
          height: calc(100vh - var(--r-localnav-stacked-height));
          top: var(--r-localnav-stacked-height);
        }
        .section-hero .hero-static .product-sticky-container {
          align-items: start;
          min-height: 878px;
        }

        .section-hero .hero-static .product-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .section-hero .hero-static .product-container {
          position: relative;
          display: grid;
          grid-template-columns: repeat(4, var(--mba-column-width));
          grid-gap: var(--mba-gap);
          gap: var(--mba-gap);
          margin-left: var(--mba-offset-x);
          justify-items: end;
          align-items: center;
          min-height: var(--mba-chevron-height);
          padding: var(--mba-chevron-padding) 0;
        }

        /* .product.mba */
        .section-hero .hero-static .product {
          display: block;
          width: var(--p-width);
          height: var(--p-height);
          --p-width: 510px;
          --p-height: 508px;
          transform: rotate(var(--mba-rotation));
          will-change: transform;
        }
        .section-hero .hero-static .product.mba1 {
          --index: -1.5;
          z-index: 3;
        }
        .section-hero .hero-static .product.mba2 {
          --index: -0.5;
          z-index: 2;
        }
        .section-hero .hero-static .product.mba3 {
          --index: 0.5;
          z-index: 1;
        }
        .section-hero .hero-static .product.mba4 {
          --index: 1.5;
          z-index: 0;
        }
        .section-hero .hero-static .product.mba1,
        .section-hero .hero-static .product.mba2 {
          transform: translateX(calc(var(--mba-separation) * var(--index)))
            rotate(var(--mba-rotation));
        }
        .section-hero .hero-static .product.mba3,
        .section-hero .hero-static .product.mba4 {
          transform: translateX(calc(var(--mba-separation) * var(--index)))
            rotate(var(--mba-rotation));
        }
        @media only screen and (min-width: 1068px) {
          .section-hero .hero-static .product {
            --p-width: 510px;
            --p-height: 508px;
          }
        }
        @media only screen and (min-width: 734px) and (max-width: 1068px) {
          .section-hero .hero-static .product {
            --p-width: 468px;
            --p-height: 466px;
          }
        }
      `}</style>
    </>
  )
}
