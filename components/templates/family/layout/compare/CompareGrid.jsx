import StyledLink from '@/components/templates/layout/styled/StyledLink'
import Device from './Device'
import Feature from './Feature'

export default function CompareGrid() {
  const products = [0, 0, 0, 0]
  const features = [0, 0, 0, 0]
  return (
    <>
      <article
        className='section section-compare'
        aria-label='Compare'
        data-analytics-section-engagement='name:compare'
      >
        <div className='content-wrapper router-grid'>
          <h2 className='typography-headline-elevated compare-headline large-centered'>
            Which iPad is right for you?
          </h2>
          <div
            className={`grid compare-grid section-content with-${products.length}-columns`}
          >
            {products.map((product, i) => (
              <>
                <Device key={i} />
                {features.map((feature, i) => (
                  <Feature key={i} />
                ))}
              </>
            ))}
          </div>

          <ul className='links-inline'>
            <li className='typography-compare-section-cta'>
              <StyledLink
                link={{
                  href: '/ipad/compare/',
                  text: 'Compare all iPad models',
                }}
              />
            </li>
            <li className='typography-compare-section-cta'>
              <StyledLink
                link={{
                  href: '/shop/buy-ipad/',
                  text: 'Shop iPad',
                }}
              />
            </li>
          </ul>
        </div>
      </article>

      <style global jsx>{`
        .section-compare {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          background: #fff;

          text-align: center;
          padding: 0 20px;
        }

        .section-compare .content-wrapper {
          border-radius: var(--tile-border-radius);
          background: #fafafa;
          width: 100%;
          padding: 0;
        }

        .compare-grid {
          grid-auto-flow: column;
        }
        .compare-grid.with-3-columns {
          grid-template-columns: repeat(3, 1fr);
        }
        .compare-grid.with-2-columns {
          grid-template-columns: repeat(2, 1fr);
        }
        .compare-grid > * {
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        @media only screen and (min-width: 1068px) {
          .section-compare .compare-headline {
            max-width: 616px;
            margin-top: 67px;
          }

          .compare-grid {
            margin-bottom: 68px;
            grid-row-gap: 42px;
            grid-column-gap: 34px;
          }
          .compare-grid.with-4-columns {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        @media only screen and (min-width: 734px) and (max-width: 1068px) {
          .section-compare .compare-headline {
            max-width: 487px;
            margin-top: 51px;
          }

          .compare-grid {
            margin-bottom: 68px;
            grid-row-gap: 44px;
            grid-column-gap: 78px;
          }
          .compare-grid.with-4-columns {
            grid-template-columns: repeat(2, 1fr);
          }
          .compare-grid.with-3-columns {
            grid-column-gap: 34px;
          }
        }
        @media only screen and (max-width: 734px) {
          .section-compare .compare-headline {
            max-width: 340px;
            margin-top: 52px;

            padding-left: 15px;
            padding-right: 15px;
          }

          .compare-grid {
            margin-bottom: 50px;
            grid-row-gap: 34px;
            grid-column-gap: 10px;
          }
          .compare-grid.with-4-columns {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
      <style global jsx>{`
        .compare-grid div:nth-child(${features.length + 1}n) {
          border-bottom: 1px solid #d2d2d7;
        }
        @media only screen and (min-width: 1068px) {
          .compare-grid {
            grid-template-rows: repeat(${features.length + 1}, auto);
          }
          .compare-grid div:nth-child(${features.length + 1}n) {
            padding-bottom: 45px;
          }
        }

        @media only screen and (max-width: 1068px) {
          .compare-grid.compare-grid.with-4-columns {
            grid-template-rows: repeat(${(features.length + 1) * 2}, auto);
          }
          .compare-grid div:nth-child(${features.length + 1}n) {
            padding-bottom: 34px;
          }
        }
      `}</style>
    </>
  )
}
