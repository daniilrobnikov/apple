import Image from 'next/image'
import Link from 'next/link'

export default function FamilyNav() {
  return (
    <div className='cards-scroller-item'>
      <Link href='/shop/buy-mac'>
        <div className='family-card cover-link'>
          <div className='family-card-content'>
            <div className='family-card-image'>
              <img
                width='200'
                height='130'
                alt=''
                src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-mac-nav-202203?wid=400&amp;hei=260&amp;fmt=png-alpha&amp;.v=1645051958490'
                srcSet='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-mac-nav-202203?wid=200&amp;hei=130&amp;fmt=png-alpha&amp;.v=1645051958490, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-mac-nav-202203?wid=400&amp;hei=260&amp;fmt=png-alpha&amp;.v=1645051958490 2x'
              />
            </div>
            <div className='family-card-info'>
              <div>
                <Link href='/shop/buy-mac'>
                  <a
                    className='family-card-title'
                    data-slot-name='Shelf-0'
                    data-display-name='AOS: home/shop_mac'
                    data-index='1'
                    data-trigger-stoppropagation='true'
                  >
                    Mac
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Link>

      <style global jsx>{`
        .family-cardshelf .cards-scroller-item {
          height: 148px;
          margin: 0 5px;
          scroll-margin: 5px;
        }

        .family-card {
          vertical-align: top;
        }

        /* .family-card-content */
        .family-card-content {
          overflow: hidden;
          border-radius: 18px;
          box-sizing: border-box;
        }

        /* family-card-image img */
        .family-card-image img {
          display: block;
          margin: 0 auto;
          width: auto;
        }

        /* family-card-title */
        .family-card-title {
          font-size: 14px;
          line-height: 1.42859;
          font-weight: 400;
          letter-spacing: -0.016em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
          font-weight: 600;
          display: block;
          color: #1d1d1f;
          text-align: center;
          white-space: nowrap;
        }

        /* desktop & tablet */
        @media only screen and (min-width: 735px) {
          /* family-cardshelf */
          .cardshelf.family-cardshelf {
            padding-bottom: 62px;
          }

          /* cards-scroller-crop */
          .family-cardshelf .cards-scroller-crop {
            height: 148px;
          }

          /* family-card-content */
          .family-card-content {
            height: 148px;
            min-width: 136px;
            padding: 18px 8px 16px;
          }

          /* family-card-image */
          .family-card-image {
            padding-bottom: 16px;
          } /* family-card-image img */
          .family-card-image img {
            max-height: 78px;
          }
        }
        /* mobile */
        @media only screen and (max-width: 734px) {
          /* family-cardshelf */
          .cardshelf.family-cardshelf {
            padding-bottom: 30px;
          }

          /* cards-scroller-crop */
          .family-cardshelf .cards-scroller-crop {
            height: 120px;
          }

          .family-cardshelf .cards-scroller-crop {
            padding-bottom: 15px;
          }

          .family-cardshelf .cards-scroller-item {
            height: 120px;
          }

          /* family-card-content */
          .family-card-content {
            height: 120px;
            min-width: 96px;
            padding: 16px 4px;
          }

          /* family-card-image */
          .family-card-image {
            padding-bottom: 12px;
          } /* family-card-image img */
          .family-card-image img {
            max-height: 60px;
          }
        }
      `}</style>
    </div>
  )
}
