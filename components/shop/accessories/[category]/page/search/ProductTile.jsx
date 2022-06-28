import PaddleNav from '@/components/templates/layout/nav/PaddleNav'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function ProductTile({ product }) {
  const [scroll, setScroll] = useState(0)
  function handleArrowClick(direction) {
    setScroll(scroll + 100 * direction)
  }
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
                transform: `translateX(0px)`,
                width: `${product.images.count}00%`,
                left: `-${scroll}%`,
                transition: 'left 0.4s ease 0s',
              }}
            >
              {[...Array(product.images.count)].map((image, i) => (
                <div
                  id='3022e2d0-e580-11ec-a339-638642604d22-gallery-item-0'
                  data-core-gallery-item='true'
                  aria-hidden='false'
                  className='rc-inline-gallery-item'
                  key={i}
                >
                  <Image
                    width='445'
                    height='445'
                    alt={product.name}
                    src={`${product.images.path}${
                      product.colors ? `-${product.colors[0].slug}` : ''
                    }-${i + 1}.webp`}
                    className='producttile-image'
                  />
                </div>
              ))}
            </div>
          </div>
          <PaddleNav
            parentClass='rf-producttile'
            handleArrowClick={handleArrowClick}
            disablePrevious={scroll === 0}
            disableNext={scroll === (product.images.count - 1) * 100}
          />
        </div>
      </div>
      <div className='rf-producttile-info' data-autom='productTileInfo-0'>
        <div className='rf-producttile-violator'>
          <span className='violator-reduced violator-frameless'>
            {product.eyebrow}
          </span>
        </div>
        <h2 className='rf-producttile-name' data-autom='productTile-0'>
          <Link href={`/shop/product/A/${product.slug}`}>
            <a
              data-relatedlink='2fba0ee0-e580-11ec-a339-638642604d22'
              data-feedback='/shop/searchfeedback?feedType=SEARCHSELECTED&amp;id=uJyeG7WcT6uXiwI9vadG5A&amp;position=0&amp;section=accessories'
              data-evar11='MLWK3|search'
              data-var-name='s.prop27|s.prop29'
            >
              {product.name}
            </a>
          </Link>
        </h2>
        <div className='rf-producttile-priceinfo' data-autom='productPrice-0'>
          <span className='rf-producttile-pricecurrent'>
            {product.prices.fullPrice}
          </span>
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
