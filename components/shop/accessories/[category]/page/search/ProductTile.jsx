import PaddleNav from '@/components/templates/layout/nav/PaddleNav'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function ProductTile() {
  const router = useRouter()
  const { family, category } = router.query
  const product = 'airpods'
  return (
    <div
      className='rf-producttile medium-6 large-4'
      data-testid='product-tile'
      role='listitem'
    >
      <div className='rf-producttile-gallery' data-autom='productgallery-0'>
        <div className='rc-inline-gallery' role='group' aria-label='Gallery'>
          <div
            id='3022e2d0-e580-11ec-a339-638642604d22'
            data-core-gallery='true'
            data-core-gallery-fade='false'
          >
            <div
              data-core-gallery-scroller='true'
              style={{
                transform: 'translateX(0px)',
                width: '600%',
                left: '0%',
                transition: 'none 0s ease 0s',
              }}
            >
              <div
                id='3022e2d0-e580-11ec-a339-638642604d22-gallery-item-0'
                data-core-gallery-item='true'
                aria-hidden='false'
                className='rc-inline-gallery-item'
              >
                <img
                  width='445'
                  height='445'
                  alt=''
                  src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=890&amp;hei=890&amp;fmt=jpeg&amp;qlt=90&amp;.v=1591634795000'
                  srcSet='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=445&amp;hei=445&amp;fmt=jpeg&amp;qlt=95&amp;.v=1591634795000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=890&amp;hei=890&amp;fmt=jpeg&amp;qlt=90&amp;.v=1591634795000 2x'
                  className='producttile-image'
                />
              </div>
              <div
                id='3022e2d0-e580-11ec-a339-638642604d22-gallery-item-1'
                data-core-gallery-item='true'
                aria-hidden='true'
                className='rc-inline-gallery-item'
              >
                <img
                  width='445'
                  height='445'
                  alt=''
                  src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22_AV1?wid=890&amp;hei=890&amp;fmt=jpeg&amp;qlt=90&amp;.v=1591634652000'
                  srcSet='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22_AV1?wid=445&amp;hei=445&amp;fmt=jpeg&amp;qlt=95&amp;.v=1591634652000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22_AV1?wid=890&amp;hei=890&amp;fmt=jpeg&amp;qlt=90&amp;.v=1591634652000 2x'
                  className='producttile-image'
                />
              </div>
              <div
                id='3022e2d0-e580-11ec-a339-638642604d22-gallery-item-2'
                data-core-gallery-item='true'
                aria-hidden='true'
                className='rc-inline-gallery-item'
              >
                <img
                  width='445'
                  height='445'
                  alt=''
                  src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22_AV2?wid=890&amp;hei=890&amp;fmt=jpeg&amp;qlt=90&amp;.v=1591634643000'
                  srcSet='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22_AV2?wid=445&amp;hei=445&amp;fmt=jpeg&amp;qlt=95&amp;.v=1591634643000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22_AV2?wid=890&amp;hei=890&amp;fmt=jpeg&amp;qlt=90&amp;.v=1591634643000 2x'
                  className='producttile-image'
                />
              </div>
              <div
                id='3022e2d0-e580-11ec-a339-638642604d22-gallery-item-3'
                data-core-gallery-item='true'
                aria-hidden='true'
                className='rc-inline-gallery-item'
              >
                <img
                  width='445'
                  height='445'
                  alt=''
                  src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22_AV3?wid=890&amp;hei=890&amp;fmt=jpeg&amp;qlt=90&amp;.v=1591634662000'
                  srcSet='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22_AV3?wid=445&amp;hei=445&amp;fmt=jpeg&amp;qlt=95&amp;.v=1591634662000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22_AV3?wid=890&amp;hei=890&amp;fmt=jpeg&amp;qlt=90&amp;.v=1591634662000 2x'
                  className='producttile-image'
                />
              </div>
              <div
                id='3022e2d0-e580-11ec-a339-638642604d22-gallery-item-4'
                data-core-gallery-item='true'
                aria-hidden='true'
                className='rc-inline-gallery-item'
              >
                <img
                  width='445'
                  height='445'
                  alt=''
                  src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22_AV4_GEO_US?wid=890&amp;hei=890&amp;fmt=jpeg&amp;qlt=90&amp;.v=1604112691000'
                  srcSet='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22_AV4_GEO_US?wid=445&amp;hei=445&amp;fmt=jpeg&amp;qlt=95&amp;.v=1604112691000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22_AV4_GEO_US?wid=890&amp;hei=890&amp;fmt=jpeg&amp;qlt=90&amp;.v=1604112691000 2x'
                  className='producttile-image'
                />
              </div>
              <div
                id='3022e2d0-e580-11ec-a339-638642604d22-gallery-item-5'
                data-core-gallery-item='true'
                aria-hidden='true'
                className='rc-inline-gallery-item'
              >
                <img
                  width='445'
                  height='445'
                  alt=''
                  src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22_AV5_GEO_US?wid=890&amp;hei=890&amp;fmt=jpeg&amp;qlt=90&amp;.v=1591634793000'
                  srcSet='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22_AV5_GEO_US?wid=445&amp;hei=445&amp;fmt=jpeg&amp;qlt=95&amp;.v=1591634793000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22_AV5_GEO_US?wid=890&amp;hei=890&amp;fmt=jpeg&amp;qlt=90&amp;.v=1591634793000 2x'
                  className='producttile-image'
                />
              </div>
            </div>
          </div>
          <PaddleNav parentClass='rf-producttile' />
        </div>
      </div>
      <div className='rf-producttile-info' data-autom='productTileInfo-0'>
        <div className='rf-producttile-violator'>
          <span className='violator-reduced violator-frameless'>
            Free Engraving
          </span>
        </div>
        <h2 className='rf-producttile-name' data-autom='productTile-0'>
          <Link
            href={{
              pathname: `/shop/product/id/A/${product}?category=${category}`,
            }}
          >
            <a
              data-relatedlink='2fba0ee0-e580-11ec-a339-638642604d22'
              data-feedback='/shop/searchfeedback?feedType=SEARCHSELECTED&amp;id=uJyeG7WcT6uXiwI9vadG5A&amp;position=0&amp;section=accessories'
              data-evar11='MLWK3|search'
              data-var-name='s.prop27|s.prop29'
            >
              AirPods Pro
            </a>
          </Link>
        </h2>
        <div className='rf-producttile-priceinfo' data-autom='productPrice-0'>
          <span className='rf-producttile-pricecurrent'>$249.00</span>
        </div>
      </div>

      <style global jsx>{`
        .rf-producttile {
          border: 1px solid #d2d2d7;
          border-top: none;
          border-left: none;
          color: #1d1d1f;
          padding: 38px 0;
          cursor: pointer;
          box-sizing: border-box;
        }

        .rc-inline-gallery {
          position: relative;
        }
        .rc-inline-gallery-item {
          text-align: center;
        }

        .rc-inline-gallery-item .producttile-image {
          max-width: 90%;
          max-height: 90%;
          height: auto;
        }
        .rf-producttile
          .rf-producttile-gallery
          .rc-inline-gallery
          .rc-inline-gallery-item
          img {
          width: auto;
          z-index: 1;
        }

        .rf-producttile .rf-producttile-info {
          padding: 0 26px;
          text-align: center;
        }

        .rf-producttile .rf-producttile-violator {
          position: relative;
        }

        .rf-producttile .rf-producttile-violator .violator-frameless {
          left: 0;
          position: absolute;
          width: 100%;
        }

        .rf-producttile .rf-producttile-name {
          font-weight: 400;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .rf-producttile .rf-producttile-name a {
          color: #1d1d1f;
        }

        .rf-producttile .rf-producttile-priceinfo {
          margin-bottom: 12px;
        }

        @media only screen and (min-width: 1069px) {
          .rf-producttile {
            border: 1px solid #d2d2d7;
            border-top: none;
            border-left: none;
          }

          .rf-producttile .rf-producttile-name {
            font-size: 17px;
            line-height: 1.47059;
            letter-spacing: -0.022em;
            padding: 45px 0 0;
          }
        }
        @media only screen and (max-width: 1068px) {
          .rf-producttile:nth-child(odd) {
            border: 1px solid #d6d6d6;
            border-top: none;
            border-left: none;
          }
          .rf-producttile:nth-child(2n) {
            border: none;
            border-right: 1px solid transparent;
            border-bottom: 1px solid #d6d6d6;
          }

          .rf-producttile .producttile-image {
            display: block;
            margin: 0 auto;
          }

          .rf-producttile .rf-producttile-name {
            font-size: 14px;
            line-height: 1.42859;
            letter-spacing: -0.016em;
            padding: 32px 0 0;
          }
          .rf-producttile .rf-producttile-priceinfo {
            font-size: 14px;
            line-height: 1.42859;
            letter-spacing: -0.016em;
          }
        }
      `}</style>
    </div>
  )
}
