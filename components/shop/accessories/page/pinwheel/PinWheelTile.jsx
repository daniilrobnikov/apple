import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function PinWheelTile({ product }) {
  const router = useRouter()
  return (
    <>
      <li
        className='rf-pinwheel-item column large-4 small-6'
        data-autom='pinwheel15-tile3'
      >
        <div
          className='as-pinwheel15-section as-pinwheel15-smalltile  as-pinwheel15-tile3 cover-link'
          data-position='2'
          data-relatedlink='pl_main6_MN6N3'
        >
          <div className='as-pinwheel-tile'>
            <div
              data-relatedlink='pl_main6_MN6N3'
              className='cover-link'
              onClick={() => router.push(`/shop/product/A/${product.slug}`)}
            >
              <div className='as-pinwheel-tilehero'>
                <Image
                  src={`https://res.cloudinary.com/daniilrobnikov/image/upload/v1656102373/apple/accessories/${product.type.toLowerCase()}/${
                    product.slug
                  }/${product.slug}-transparent.webp`}
                  className='ir as-pinwheel-tileheroimage'
                  alt={product.name}
                  layout='fill'
                  objectFit='contain'
                  data-scale-params-1='wid=266&amp;hei=291&amp;fmt=png-alpha&amp;.v=1651860910311'
                  data-scale-initial='2'
                />
              </div>
              <div className='as-pinwheel-infosection'>
                <div className='as-pinwheel-tileheader '>
                  <div className='violator-wrapper'>
                    <span className='violator-frameless as-violator-alt new'>
                      {product.eyebrow}
                    </span>
                  </div>
                </div>
                <h3 className='as-pinwheel-tiletitle'>
                  <Link href={`/shop/product/A/${product.slug}`}>
                    <a
                      data-slot-name='main6'
                      data-feature-name='PW15_LR1S4-react'
                      data-display-name='45mm Pride Edition 2022 Nike Sport Loop'
                      data-part-number='MN6N3'
                      className='as-pinwheel-tilelink'
                      data-relatedlink='pl_main6_MN6N3'
                      data-trigger-stoppropagation=''
                      data-evar11='MN6N3|pinwheel'
                    >
                      {product.name}
                    </a>
                  </Link>
                </h3>

                <div className='as-pinwheel-info'>
                  <div className='as-pinwheel-price'>
                    <span className='as-pinwheel-pricecurrent'>
                      {product.prices.fullPrice}
                    </span>
                    <div className='as-price-savings'>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='as-pinwheel-colorsection'>
                <div className='as-pinwheel-colorgallery'>
                  <div className='a11y'>Available colors:</div>
                  <ul className='color-gallery' role='list'>
                    {product.colors?.map((color, i) => (
                      <li
                        className='as-pinwheel-colorimage'
                        role='listitem'
                        key={i}
                      >
                        <img
                          src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MN6M3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1651774758181'
                          className='ir '
                          alt='Pride Edition'
                          width='16'
                          height='16'
                          data-scale-params-1='wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1651774758181'
                          data-scale-initial='2'
                        />
                      </li>
                    ))}
                    {product.colors?.length >= 6 && (
                      <li className='as-producttile-moretext' role='listitem'>
                        +
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <style jsx>{`
        .pinwheel-tile {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          height: 100%;
        }
        .tile1 {
          flex-grow: 1;
          display: flex;
          position: relative;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style global jsx>{`
        .rf-pinwheel-tiles .rf-pinwheel-item {
          background-color: #f2f2f2;
          border: 5px solid #fff;
          list-style-type: none;
          border-radius: 20px;
          overflow: hidden;
        }

        .as-pinwheel15-section {
          height: 100%;
        }
        /* as-pinwheel-tile */
        .as-pinwheel-tile {
          line-height: 17px;
          position: relative;
          height: 100%;
        }
        .as-pinwheel15-section .as-pinwheel-tile {
          border: 5px solid #fff;
          max-width: 100%;
          background-color: #f5f5f7;
          text-align: center;
          box-sizing: border-box;
        }
        .rf-pinwheel-tiles .as-pinwheel-tile {
          border: none;
        }
        .rf-pinwheel-item .as-pinwheel15-section .as-pinwheel-tile {
          background-color: #f2f2f2;
        }

        .as-pinwheel-tile > div {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        /* as-pinwheel-tilehero */
        .as-pinwheel-tilehero {
          text-align: center;
          line-height: 0;
          position: relative;
          width: 100%;
          display: flex;
          flex-grow: 1;
        }
        .as-pinwheel15-smalltile .as-pinwheel-tilehero {
          height: 291px;
        }
        .as-pinwheel15-largetile .as-pinwheel-tilehero {
          height: 466px;
        }

        /* as-pinwheel-infosection */
        .as-pinwheel-colorsection,
        .as-pinwheel-infosection {
          padding-left: env(safe-area-inset-left);
          padding-right: env(safe-area-inset-right);
        }
        .as-pinwheel-infosection {
          min-height: 129px;
        }
        .as-pinwheel15-tile2 .as-pinwheel-infosection {
          padding: 0 40px;
        }
        .rf-pinwheel-tiles .as-pinwheel-tile .as-pinwheel-infosection {
          min-height: 126px;
        }

        /* as-pinwheel-tileheader */
        .as-pinwheel-tileheader {
          bottom: 72px;
          position: absolute;
          z-index: 1;
          left: 0;
          right: 0;
          text-align: center;
        }
        .as-pinwheel15-section .as-pinwheel-tileheader {
          position: relative;
          bottom: 0;
          top: 0;
        }
        .as-pinwheel15-section .as-pinwheel-tileheader {
          min-height: 20px;
        }

        /* as-violator-alt */
        .as-pinwheel15-section .as-pinwheel-tileheader .as-violator-alt {
          font-size: 12px;
          line-height: 1.33337;
          font-weight: 400;
          letter-spacing: -0.01em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
          padding: 5px 0 9px;
        }

        .as-pinwheel-tiletitle {
          text-align: center;
          margin: 0;
          padding-bottom: 9px;
          min-height: 41px;
        }

        /* as-pinwheel-tilelink */
        .as-pinwheel-tilelink {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          text-decoration: none;
          color: #1d1d1f;
          display: inline-block;
          cursor: pointer;
        }
        .as-pinwheel15-section .as-pinwheel-tilelink {
          font-size: 14px;
          line-height: 1.42859;
          font-weight: 600;
          letter-spacing: -0.016em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
          padding: 0 15px 14px;
          white-space: normal;
          text-overflow: clip;
        }
        .as-pinwheel-tile:active .as-pinwheel-tilelink,
        .as-pinwheel-tile:focus .as-pinwheel-tilelink,
        .as-pinwheel-tile:hover .as-pinwheel-tilelink {
          color: #06c;
          text-decoration: none;
        }

        .as-pinwheel-info {
          text-align: center;
        }

        .as-pinwheel-price {
          display: inline;
        }

        .as-pinwheel-pricecurrent {
          font-size: 14px;
          line-height: 1.42859;
          font-weight: 400;
          letter-spacing: -0.016em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
          color: #1d1d1f;
          margin: 0 7px 3px 0;
        }
        .as-pinwheel15-section .as-pinwheel-pricecurrent {
          font-size: 17px;
          line-height: 1.47059;
          letter-spacing: -0.022em;
          margin: 0;
        }
        .as-pinwheel-info .as-pinwheel-pricecurrent {
          font-size: 14px;
          line-height: 1.42859;
          letter-spacing: -0.016em;
        }

        .as-pinwheel .as-pinwheel-colorsection {
          min-height: 28px;
        }

        .as-pinwheel15-section .as-pinwheel-colorgallery {
          overflow: hidden;
          padding-top: 13px;
          max-height: 1rem;
        }

        .as-pinwheel-colorsection ul {
          margin-left: 0;
        }

        .as-pinwheel15-section .as-pinwheel-colorimage {
          margin-right: 3px;
          display: inline-block;
        }
        .as-pinwheel15-section .as-pinwheel-colorimage > img {
          vertical-align: bottom;
          height: 14px;
          width: 14px;
        }

        .as-pinwheel-colorgallery .as-producttile-moretext {
          display: inline-block;
        }

        /* Desktop & Tablet */
        @media only screen and (min-width: 735px) {
          .as-pinwheel-tile {
            padding: 40px 40px 34px;
          }
          .as-pinwheel15-largetile.as-pinwheel-tile {
            padding: 0 0 34px;
          }

          .as-pinwheel15-section .as-pinwheel-tileheader .as-violator-alt {
            padding: 0 0 3px;
          }

          .as-pinwheel15-section .as-pinwheel-info {
            margin: 7px 0 0;
          }

          .as-pinwheel .as-pinwheel-colorsection {
            padding: 0;
          }

          .as-pinwheel15-section .as-pinwheel-colorgallery {
            max-height: 34px;
          }
        }
        /* Mobile */
        @media only screen and (max-width: 734px) {
          .as-pinwheel15-tile2 .as-pinwheel-tile {
            padding: 0;
            border-left: 0;
            border-right: 0;
          }
          .rf-pinwheel-tiles .as-pinwheel-tile {
            padding: 16px 16px 26px;
          }
          .as-pinwheel15-section.as-pinwheel15-largetile .as-pinwheel-tile {
            padding: 0 0 26px;
          }

          /* as-pinwheel-tilehero */
          .as-pinwheel15 .as-pinwheel-tilehero {
            padding: 0 58px;
          }
          .as-pinwheel15-section.as-pinwheel15-largetile .as-pinwheel-tilehero {
            margin-bottom: 13px;
          }

          .as-pinwheel15-section .as-pinwheel-tileheroimage {
            width: 100%;
            height: auto;
            margin-bottom: 0;
          }

          .as-pinwheel15 .as-pinwheel-colorsection,
          .as-pinwheel15 .as-pinwheel-infosection {
            padding-left: calc(max(16px, env(safe-area-inset-left)));
            padding-right: calc(max(16px, env(safe-area-inset-right)));
          }
          .rf-pinwheel-tiles .as-pinwheel-tile .as-pinwheel-infosection,
          .rf-pinwheel-tiles .as-pinwheel-tile .as-pinwheel-tilehero {
            padding: 0;
          }

          .as-pinwheel15-section .as-pinwheel-tileheader .as-violator-alt {
            padding: 5px 0;
          }

          .as-pinwheel15-section .as-pinwheel-tilelink {
            padding: 0;
          }

          .as-pinwheel15-section .as-pinwheel-info {
            margin: 9px 0 0;
          }
        }
      `}</style>
    </>
  )
}

{
  /* <div
        className='as-pinwheel15-section as-pinwheel15-largetile as-pinwheel15-largetileright as-pinwheel15-tile2 cover-link'
        data-position='1'
        data-relatedlink='pl_main6_MN6L3'
      >
        <div className='as-pinwheel-tile'>
          <div data-relatedlink='pl_main6_MN6L3' className='cover-link'>
            <div className='as-pinwheel-tilehero'>
              <Image
                src='/images/shop/accessories/page/pinwheel/MN6L3_FV402.png'
                className='ir as-pinwheel-tileheroimage'
                alt=''
                layout='fill'
                objectFit='contain'
                quality={80}
                data-scale-params-1='wid=710&amp;hei=465&amp;fmt=png-alpha&amp;.v=1651856288917'
                data-scale-initial='2'
              />
            </div>

            <div className='as-pinwheel-infosection'>
              <div className='as-pinwheel-tileheader '>
                <div className='violator-wrapper'>
                  <span className='violator-frameless as-violator-alt new'>
                    New
                  </span>
                </div>
              </div>

              <h3 className='as-pinwheel-tiletitle'>
                <a
                  href='/shop/product/MN6L3AM/A/45mm-pride-edition-sport-loop?fnode=7e5b059a1c8c56c537c84d1f783a15cc54002a8814de367eacfd74bc1e3ac866bf8382ed90644aa133deeb495d9763531e73743436a1eabfee60b9a72aa8a372e58aa393a7dc7622a1f444729d751cccfb4e5623cd9b1174f4b6326838a8f0fe'
                  data-slot-name='main6'
                  data-feature-name='PW15_LR1S4-react'
                  data-display-name='45mm Pride Edition Sport Loop'
                  data-part-number='MN6L3'
                  className='as-pinwheel-tilelink'
                  data-relatedlink='pl_main6_MN6L3'
                  data-trigger-stoppropagation=''
                  data-evar11='MN6L3|pinwheel'
                >
                  Pride Edition Sport Loop
                </a>
              </h3>

              <div className='as-pinwheel-info'>
                <div className='as-pinwheel-price'>
                  <span className='as-pinwheel-pricecurrent'>$49.00</span>
                  <div className='as-price-savings'>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>

            <div className='as-pinwheel-colorsection'>
              <div className='as-pinwheel-colorgallery'>
                <div className='a11y'>Available colors:</div>
                <ul className='color-gallery' role='list'>
                  <li className='as-pinwheel-colorimage' role='listitem'>
                    <img
                      src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MN6K3_SW_COLOR?wid=32&amp;hei=32&amp;fmt=png-alpha&amp;.v=1652803215931'
                      className='ir '
                      alt='Pride Edition'
                      width='16'
                      height='16'
                      data-scale-params-1='wid=16&amp;hei=16&amp;fmt=png-alpha&amp;.v=1652803215931'
                      data-scale-initial='2'
                    />
                  </li>
                  {/* TODO: if more than 6 */
}
{
  /*
                  <li className='as-producttile-moretext' role='listitem'>
                    +
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */
}
