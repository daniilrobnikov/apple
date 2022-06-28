import Image from 'next/image'

export default function SidePanel({ product }) {
  return (
    <>
      <div className='column large-7 small-12'>
        <div data-autom='productImage' className='product-image'>
          <div
            className='rc-inline-gallery rf-pdp-inline-gallery'
            role='group'
            aria-label='Gallery'
          >
            <div className='rf-pdp-inline-gallery-thumbnav-wrapper'>
              <ul className='rf-pdp-inline-gallery-thumbnav' role='tablist'>
                {[...Array(product.images.count)].map((_, i) => (
                  <li role='presentation' key={i}>
                    <button
                      id='839e1600-ea58-11ec-a513-15ba5200123b-tab-item-0'
                      type='button'
                      role='tab'
                      aria-controls='839e1600-ea58-11ec-a513-15ba5200123b-gallery-item-0'
                      aria-selected='true'
                      aria-label='Item 1'
                      tabIndex='0'
                      className='rf-pdp-inline-gallery-thumbnav-item rf-pdp-inline-gallery-thumbnav-current'
                    >
                      <Image
                        width='38'
                        height='38'
                        alt={`${product.name} ${i + 1}`}
                        src={`${product.images.path}-${
                          product.colors ? `${product.colors[0].slug}-` : ''
                        }${i + 1}.webp`}
                      />
                    </button>
                  </li>
                ))}
                <li
                  role='presentation'
                  className='rf-pdp-inline-gallery-thumbnav-slider'
                  style={{
                    transition: 'transform 400ms ease 0s',
                    transform: 'translate(0px, 68px)',
                  }}
                ></li>
              </ul>
            </div>
            <div
              id='839e1600-ea58-11ec-a513-15ba5200123b'
              data-core-gallery='true'
              data-core-gallery-fade='false'
            >
              <div
                data-core-gallery-scroller='true'
                style={{
                  width: `${product.images.count}00%`,
                  transform: 'translateX(0px)',
                  left: '0%',
                  transition: 'none 0s ease 0s',
                }}
              >
                {[...Array(product.images.count)].map((_, i) => (
                  <div
                    id='839e1600-ea58-11ec-a513-15ba5200123b-gallery-item-0'
                    data-core-gallery-item='true'
                    aria-hidden='true'
                    role='tabpanel'
                    aria-label={`Item ${i + 1}`}
                    className='rf-pdp-inline-gallery-item rf-pdp-inline-gallery-item-focusable rc-inline-gallery-item'
                    tabIndex='0'
                    key={i}
                  >
                    <Image
                      width={572}
                      height={572}
                      alt={`${product.name} ${i + 1}`}
                      src={`${product.images.path}-${
                        product.colors ? `${product.colors[0].slug}-` : ''
                      }${i + 1}.webp`}
                      className='rf-pdp-inline-gallery-image'
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .product-image {
          height: auto;
          position: sticky;
          top: 25px;
        }

        .rc-inline-gallery {
          position: relative;
        }
        .rf-pdp-inline-gallery {
          display: flex;
          flex-direction: column;
        }

        .rf-pdp-inline-gallery-thumbnav-wrapper {
          order: 2;
          text-align: center;
        }

        .rf-pdp-inline-gallery-thumbnav {
          margin: 0;
          display: inline-flex;
          position: relative;
          flex-wrap: wrap;
          max-width: 512px;
        }

        .rf-pdp-inline-gallery-thumbnav-item {
          padding-top: 15px;
          margin-right: 16px;
          box-sizing: border-box;
          border-bottom: 2px solid hsla(0, 0%, 100%, 0);
        }

        .rf-pdp-inline-gallery-thumbnav-item img {
          width: 38px;
          height: auto;
          padding: 4px;
        }

        .rf-pdp-inline-gallery-thumbnav-slider {
          width: 46px;
          position: absolute;
          border-bottom: 2px solid #d2d2d7;
        }

        .rc-inline-gallery-item {
          text-align: center;
        }

        .rf-pdp-inline-gallery-image {
          width: 100%;
          height: auto;
        }
      `}</style>
    </>
  )
}
