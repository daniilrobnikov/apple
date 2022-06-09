import Link from 'next/link'

export default function Card() {
  return (
    //   TODO: add functionality for 2 cards
    <div className='cards-scroller-item'>
      <div className='card card-50 dd-card-info-100'>
        <div className='cover-link'>
          <div className='card-content card-content-withfullimg'>
            <div className='card-img-full-wrapper'>
              <img
                width='309'
                height='450'
                alt=''
                src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-specialist-202108_FMT_WHH?wid=618&amp;hei=900&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1627331862000'
                srcSet='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-specialist-202108_FMT_WHH?wid=309&amp;hei=450&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1627331862000, https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-50-specialist-202108_FMT_WHH?wid=618&amp;hei=900&amp;fmt=p-jpg&amp;qlt=95&amp;.v=1627331862000 2x'
                className='card-img-full'
              />
            </div>
            <div className='card-content-info'>
              <div className='card-content-header'>
                <Link href='/shop/browse/overlay/store/specialist'>
                  <a
                    data-index='1'
                    data-trigger-stoppropagation='true'
                    role='button'
                    className='card-content-headerlink'
                  >
                    <div className='small-mr-5'>
                      Shop one on one with a Specialist. Online or in store.
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style global jsx>{`
        /* .cards-scroller-item */
        .cards-scroller-item {
          display: flex;
          margin: 0 10px;
          scroll-margin: 10px;
        }
        .cards-scroller-item:first-child {
          margin-left: 0 !important;
          padding-left: calc(max(22px, env(safe-area-inset-left)));
        }
        .cards-scroller-item:last-child {
          padding-right: calc(max(22px, env(safe-area-inset-right)));
        }

        /* card-content */
        .card-content {
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          background-color: #fff;
          border-radius: 18px;
          white-space: normal;
          box-shadow: 2px 4px 12px rgb(0 0 0 / 8%);
          transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);

          /* Test */
          justify-content: space-between;
        }
        .card-content.card-content-withfullimg {
          flex-direction: row;
          justify-content: center;
        }
        .card-content:hover {
          box-shadow: 2px 4px 16px rgb(0 0 0 / 16%);
          transform: scale(1.01);
        }

        /* card-img-full-wrapper */
        .card-img-full-wrapper {
          width: 100%;
        }

        /* card-img-full */
        .card-img-full {
          /* width: 100%;
          height: 100%;
          object-fit: cover;
          display: block; */

          width: 100% !important;
          height: auto;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translate(-50%, 0);
        }

        .card-img-full-wrapper + .card-content-info,
        .card-video-full-wrapper + .card-content-info {
          position: absolute;
          left: 0;
        }

        .card-content-eyebrow {
          font-size: 12px;
          line-height: 1.33337;
          letter-spacing: -0.01em;
          color: #6e6e73;
          width: 204px;
          padding-bottom: 7.5px;
        }
        [class*='t-eyebrow'] {
          display: block;
          margin-bottom: 0.4em;
        }

        /* card-content-header */
        .card-content-header {
          font-weight: 600;
          font-family: SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
          color: #1d1d1f;
          padding-top: 24px;
        }
        [class*='t-eyebrow'] + * {
          margin-top: 0;
        }
        .card-content-eyebrow + .card-content-header,
        .card-content-icon + .card-content-header {
          padding-top: 0;
        }

        /* card-content-headerlink */
        .card-content-header .card-content-headerlink {
          color: #1d1d1f;
          text-decoration: none;
          display: inline-block;
        }

        /* card-content-desc */
        .card-content-desc {
          font-size: 17px;
          line-height: 1.23536;
          letter-spacing: -0.022em;
          margin-top: 0;
        }

        /* desktop & tablet */
        @media only screen and (min-width: 735px) {
          /* cards-scroller-item */
          .cards-scroller-crop,
          .cards-scroller-item,
          .card-content {
            height: 500px;
          }
          .card-content {
            width: 480px;
          }
          .card-40 .card-content {
            width: 400px;
          }

          /* card-content-info */
          .card-content-info {
            padding: 30px;
            width: 340px;
          }

          /* card-content-header */
          .card-content-header {
            font-size: 28px;
            line-height: 1.14286;
            letter-spacing: 0.007em;
          }
          .card-13 .card-content-header,
          .card-17 .card-content-header,
          .card-25 .card-content-header {
            font-size: 24px;
            line-height: 1.16667;
            letter-spacing: 0.009em;
          }
          /* card-content-desc */
          .card-content-desc {
            padding-top: 10px;
          }
        }

        /* mobile */
        @media only screen and (max-width: 734px) {
          /* cards-scroller-item */
          .cards-scroller-crop,
          .cards-scroller-item,
          .card-content {
            height: 450px;
          }
          /* card-content */
          .card-content {
            width: 309px;
          }

          /* card-content-info */
          .card-content-info {
            padding: 28px;
            width: 253px;
          }
          /* card-content-header */
          .card-content-header,
          .card-13 .card-content-header,
          .card-17 .card-content-header,
          .card-25 .card-content-header {
            font-size: 21px;
            line-height: 1.19048;
            letter-spacing: 0.011em;
          }
          /* card-content-desc */
          .card-content-desc {
            padding-top: 6px;
          }
        }
        /* Mobile S */
        @media only screen and (max-width: 320px) {
          .card-content,
          .cards-scroller-2cards,
          .card-13 .card-content,
          .card-17 .card-content,
          .card-25 .card-content,
          .recomcard-33 .recomcard-content {
            width: 260px;
          }
          .card-content-info,
          .card-13 .card-content-info,
          .card-17 .card-content-info,
          .card-25 .card-content-info {
            width: 204px;
          }
        }
      `}</style>
      <style global jsx>{`
        .cards-scroller-2cards {
          flex-direction: column;
          justify-content: space-between;
          width: 480px;
        }

        .card-25 .card-content {
          height: 240px;
        }

        .large-mr-20 {
          margin-right: 20% !important;
        }

        /* mobile */
        @media only screen and (max-width: 734px) {
          .cards-scroller-2cards {
            width: 309px;
          }
          .card-25 .card-content {
            height: 215px;
          }
        }
      `}</style>
    </div>
  )
}
