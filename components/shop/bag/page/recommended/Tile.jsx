import ColorNav from '@/layout/nav/ColorNav'

export default function Tile() {
  return (
    <>
      <div
        tabIndex='-1'
        id='rf-recommendations-MN6N3AM/A'
        className='rf-recommendations-tile small-12'
      >
        <div className='rf-recommendations-accessory rf-recommendations-accessory-inline tile'>
          <div className='rf-recommendations-accessory-image'>
            <img
              width='200'
              height='200'
              alt=''
              src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MN6N3?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=90&amp;.v=1651891539144'
              srcSet='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MN6N3?wid=200&amp;hei=200&amp;fmt=jpeg&amp;qlt=95&amp;.v=1651891539144, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MN6N3?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=90&amp;.v=1651891539144 2x'
              className='cover-link'
              data-trigger-click="click [data-relatedlink='9f84d2a0-f57a-11ec-a6a1-41dc380ed313']"
            />
          </div>
          <div className='rf-recommendations-accessory-info'>
            <div className='rf-recommendations-accessory-violator'>
              <span className='rf-recommendations-accessory-violatortext'>
                New
              </span>
            </div>
            <h3 className='rf-recommendations-accessory-title'>
              <a
                href='https://www.apple.com/shop/product/MN6N3AM/A/45mm-pride-edition-nike-sport-loop'
                data-evar1='AOS: Bag || PDP link | Recommended | 0 | 45mm Pride Edition Nike Sport&nbsp;Loop | MN6N3AM/A'
                data-relatedlink='9f84d2a0-f57a-11ec-a6a1-41dc380ed313'
                data-evar11='MN6N3AM/A|recommended cart'
                data-algorithm-type='ey07fL-gSoeb46IaJR2s3g:INLINE'
                data-display-name='45mm Pride Edition Nike Sport&nbsp;Loop'
                data-part-number='MN6N3'
                data-slot-name='12'
                tabIndex='0'
              >
                <span>45mm Pride Edition Nike Sport&nbsp;Loop</span>
              </a>
            </h3>
            <div className='rf-recommendations-accessory-price'>
              <span>$49.00</span>
            </div>
            <div className='rf-recommendations-productselection'>
              <ColorNav />
            </div>
          </div>
          <button
            type='button'
            className='button button-block button-super rf-recommendations-accessory-button'
            data-autom='recommendations-addToBag-button'
          >
            <span aria-hidden='true'>Add to Bag</span>
            <span className='visuallyhidden'>
              Add 45mm Pride Edition Nike Sport&nbsp;Loop to Bag
            </span>
          </button>
        </div>
      </div>

      <style global jsx>{`
        .rf-recommendations-tile {
          box-sizing: border-box;
          display: flex;
        }

        .rf-recommendations-accessory-inline {
          width: 100%;
          position: relative;
        }

        .rf-recommendations-accessory-inline
          .rf-recommendations-accessory-image {
          width: 100%;
          max-width: 194px;
          height: auto;
          margin: 0 auto 21px;
        }
        .rf-recommendations-accessory-image img {
          width: 100%;
          height: auto;
        }

        .rf-recommendations-accessory-violator {
          margin-bottom: 6px;
          min-height: 20px;
        }

        .rf-recommendations-accessory-violatortext {
          font-size: 12px;
          line-height: 1.33337;
          font-weight: 400;
          letter-spacing: -0.01em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
          color: #bf4800;
          display: block;
        }

        .rf-recommendations-accessory-title {
          font-size: 17px;
          line-height: 1.47059;
          font-weight: 400;
          letter-spacing: -0.022em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
          font-weight: 600;
        }

        .rf-recommendations-accessory-title a {
          color: #1d1d1f;
          display: block;
        }
        .rf-recommendations-accessory-title a:hover {
          text-decoration: none;
          color: #06c;
        }

        .rf-recommendations-accessory-price {
          font-size: 17px;
          line-height: 1.47059;
          font-weight: 400;
          letter-spacing: -0.022em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
          margin-top: 0;
          margin-bottom: 18px;
        }

        .rf-recommendations-productselection .colornav-wrapper {
          justify-content: flex-start;
        }
        .rf-recommendations-productselection .colornav {
          text-align: left;
        }

        .rf-recommendations-productselection legend {
          font-size: 14px;
          line-height: 1.42859;
          font-weight: 400;
          letter-spacing: -0.016em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
        }

        .rf-recommendations-accessory .colornav-items {
          margin: 0 -8px;
          padding-top: 12px;
        }

        .rf-recommendations-accessory .colornav-item {
          margin: 0 5px;
        }

        .rf-recommendations-accessory .colornav-link {
          width: 36px;
          height: 36px;
          padding: 2px;
          margin-bottom: 10px;
        }
        .rf-recommendations-accessory .colornav-swatch {
          width: 28px;
          height: 28px;
        }
        .rf-recommendations-accessory .colornav-label {
          display: none;
        }
        @media only screen and (min-width: 734px) {
          .rf-recommendations-tile {
            width: 25%;
            padding: 58px 0;
          }
          .rf-recommendations-accessory-inline {
            padding-bottom: 74px;
          }

          .rf-recommendations-accessory-inline
            .rf-recommendations-accessory-button {
            position: absolute;
            bottom: 0;
          }
        }
        @media only screen and (max-width: 734px) {
          .rf-recommendations-tile {
            width: 100%;
            padding: 58px 0 60px;
            border-top: 1px solid #d2d2d7;
          }
          .rf-recommendations-tile:first-child {
            border-top: none;
          }
          .rf-recommendations-accessory-inline {
            padding-bottom: 0;
          }

          .rf-recommendations-accessory-inline
            .rf-recommendations-accessory-button {
            margin-top: 20px;
            position: static;
            bottom: auto;
          }
        }
      `}</style>
    </>
  )
}
