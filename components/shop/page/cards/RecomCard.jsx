import StyledSwatches from '@/components/templates/layout/styled/StyledSwatches'

export default function RecomCard() {
  return (
    <div className='cards-scroller-item'>
      <div className='recomcard recomcard-33'>
        <div className='recomcard-content tile cover-link'>
          <div className='recomcard-content-img'>
            <img
              width='200'
              height='200'
              alt=''
              src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MK0U3?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=90&amp;.v=1646446502337'
              srcSet='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MK0U3?wid=200&amp;hei=200&amp;fmt=jpeg&amp;qlt=95&amp;.v=1646446502337, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MK0U3?wid=400&amp;hei=400&amp;fmt=jpeg&amp;qlt=90&amp;.v=1646446502337 2x'
            />
          </div>
          <div className='recomcard-content-info'>
            <StyledSwatches />
            <div className='recomcard-content-violator'>
              <span className='recomcard-content-violatortext'>New</span>
            </div>
            <h3 className='recomcard-content-title'>
              <a
                href='https://www.apple.com/shop/product/MK0U3LL/A/standard-glass-tilt-adjustable-stand'
                data-display-name='Studio Display - Standard glass - Tilt-adjustable stand'
                data-part-number='MK0U3'
                data-slot-name='Shelf-4'
                data-index='2'
                data-evar11='MK0U3|mac: Shelf-4'
                data-rule-id='KdDSFPg6T2GTw65Mn3Wf-A:INLINE'
                data-algorithm-type='KdDSFPg6T2GTw65Mn3Wf-A:INLINE'
                data-trigger-stoppropagation='true'
              >
                <span data-index='2'>
                  Studio Display - Standard glass - Tilt-adjustable stand
                </span>
              </a>
            </h3>
            <div className='recomcard-content-price'>
              <span>$1,599.00</span>
            </div>
          </div>
        </div>
      </div>

      <style global jsx>{`
        .recomcard-content {
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
          background-color: #fff;
          border-radius: 18px;
          width: 309px;
          height: 500px;
          padding: 30px;
          box-shadow: 2px 4px 12px rgb(0 0 0 / 8%);
          transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
        }

        .recomcard-content-img {
          width: 100%;
          padding-bottom: 0;
          margin: 0 auto;
        }
        .recomcard-content-img img {
          display: block;
          width: auto;
          margin: 0 auto;
        }

        .recomcard-content-info {
          display: flex;
          flex-direction: column;
          height: 149px;
          position: relative;
          padding: 20px 0 0;
        }

        .recomcard-content-violator {
          position: absolute;
          margin-top: 41px;
          width: 100%;
        }

        .recomcard-content-violatortext {
          font-size: 12px;
          line-height: 1.33337;
          font-weight: 400;
          letter-spacing: -0.01em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
          color: #bf4800;
          display: block;
        }

        .recomcard-content-title {
          margin-top: 0;
          padding-top: 62px;
        }

        .recomcard-content-title a {
          font-size: 17px;
          line-height: 1.23536;
          font-weight: 400;
          letter-spacing: -0.022em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
          font-weight: 600;
          color: #1d1d1f;
          display: block;
        }

        .recomcard-content-title span {
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          display: -webkit-box;
          overflow: hidden;
          white-space: normal;
        }

        .recomcard-content-price {
          font-size: 14px;
          line-height: 1.28577;
          font-weight: 400;
          letter-spacing: -0.016em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
          padding-top: 0;
          margin-top: auto;
          white-space: normal;
        }

        /* Desktop & Tablet */
        @media only screen and (min-width: 735px) {
          .recomcard-content-img {
            min-height: 230px;
            padding-top: 41px;
          }
          .recomcard-content-img img {
            height: 230px;
          }
        }

        /* Mobile */
        @media only screen and (max-width: 734px) {
          .recomcard-content-img {
            min-height: 198px;
            padding-top: 34px;
          }
          .recomcard-content-img img {
            height: 198px;
          }

          .recomcard-content-info {
            height: 139px;
          }
          .recomcard-content-violator {
            margin-top: 33px;
          }
          .recomcard-content-title {
            padding-top: 54px;
          }
          .recomcard-content-price {
            position: relative;
            top: 2px;
          }
        }
        /* Mobile S */
        @media only screen and (max-width: 320px) {
          .recomcard-content-img {
            min-height: 160px;
            padding-top: 53px;
          }
          .recomcard-content-img img {
            height: 160px;
          }
          .recomcard-content-info {
            height: 158px;
          }
          .recomcard-content-violator {
            margin-top: 52px;
          }
          .recomcard-content-title {
            padding-top: 73px;
          }
        }
      `}</style>
    </div>
  )
}
