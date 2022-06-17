import RowGroup from './RowGroup'

export default function Finish() {
  return (
    <>
      <RowGroup>
        <div className='gallery gallery-MacBook-Air-M2'>
          <figure
            role='presentation'
            className='gallery-image image-compare-macbook-air-m2-midnight active'
          ></figure>
          <figure
            role='presentation'
            className='gallery-image image-compare-macbook-air-m2-starlight'
          ></figure>
          <figure
            role='presentation'
            className='gallery-image image-compare-macbook-air-m2-spacegray'
          ></figure>
          <figure
            role='presentation'
            className='gallery-image image-compare-macbook-air-m2-silver'
          ></figure>
        </div>{' '}
        <div className='colornav-wrapper colornav-wrapper-MacBook-Air-M2'>
          <ul role='list' className='colornav-items'>
            <li className='colornav-item'>
              <button className='colornav-link current'>
                <figure className='colornav-swatch colornav-swatch-midnight'>
                  <figcaption className='colornav-label'>Midnight</figcaption>
                </figure>
              </button>
            </li>
            <li className='colornav-item'>
              <button className='colornav-link'>
                <figure className='colornav-swatch colornav-swatch-starlight'>
                  <figcaption className='colornav-label'>Starlight</figcaption>
                </figure>
              </button>
            </li>
            <li className='colornav-item'>
              <button className='colornav-link'>
                <figure className='colornav-swatch colornav-swatch-spacegray'>
                  <figcaption className='colornav-label'>Space Gray</figcaption>
                </figure>
              </button>
            </li>
            <li className='colornav-item'>
              <button className='colornav-link'>
                <figure className='colornav-swatch colornav-swatch-silver'>
                  <figcaption className='colornav-label'>Silver</figcaption>
                </figure>
              </button>
            </li>
          </ul>
        </div>
      </RowGroup>

      <style jsx>{`
        .template-gallery .row-gallery {
          margin: 82px auto 60px;
        }

        .template-gallery .gallery {
          display: block;
          margin-left: auto;
          margin-right: auto;
          position: relative;
          min-height: 216px;
          z-index: 1;
          align-items: flex-end;
        }

        .template-gallery .gallery-image {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          margin: 0 auto;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .template-gallery .gallery-image.active {
          opacity: 1;
          transition: opacity 0.3s;
        }

        .template-gallery .colornav-wrapper {
          margin-top: 34px;
          text-align: center;
        }

        .colornav-items {
          display: inline-block;
          list-style: none;
          margin: 0 -1px;
          padding-top: 17px;
        }
        .section-compare-table ul {
          margin: 0;
        }
        .template-gallery .colornav-wrapper .colornav-items {
          max-width: 220px;
          padding-top: 0;
          text-align: center;
        }

        .colornav-item {
          float: left;
          margin: -1px 5px;
        }
        .template-gallery .colornav-wrapper .colornav-item {
          float: none;
          margin: 0 2px;
          display: inline-block;
        }

        /* colornav-link */
        .colornav-link {
          border: 2px solid transparent;
          border-radius: 50%;
          box-sizing: border-box;
          color: #1d1d1f;
          cursor: pointer;
          float: left;
          margin-bottom: 2.47059em;
          padding: 3px;
          position: relative;
          width: 42px;
          height: 42px;
          z-index: 1;
        }
        .colornav-link.current,
        .colornav-value:checked ~ .colornav-link {
          border-color: #0071e3;
          cursor: default;
        }
        .template-gallery .colornav-wrapper .colornav-link {
          margin-bottom: 20px;
        }
        .template-gallery .colornav-wrapper .colornav-link.current {
          pointer-events: none;
        }

        .colornav-swatch {
          background: #f5f5f7 center center;
          border-radius: 50%;
          display: block;
          width: 32px;
          height: 32px;
        }
        .template-gallery
          .colornav-wrapper.colornav-wrapper-MacBook-Air-M2
          .colornav-swatch.colornav-swatch-midnight {
          background: var(--macbookair-midnight);
        }

        .colornav-link.current .colornav-label,
        .colornav-value:checked ~ .colornav-link .colornav-label {
          font-size: 12px;
          line-height: 1.33337;
          font-weight: 400;
          letter-spacing: -0.01em;
          font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue',
            'Helvetica', 'Arial', sans-serif;
          clip: auto;
          clip-path: none;
          margin-left: -50px;
          padding-top: 7px;
          position: absolute;
          top: 100%;
          left: 50%;
          text-align: center;
          white-space: nowrap;
          width: 100px;
          height: auto;
          z-index: 1;
        }
        .template-gallery .colornav-wrapper .colornav-link .colornav-label {
          font-size: 11px;
        }

        .colornav-label,
        .colornav-label-hidden {
          position: absolute;
          clip: rect(1px, 1px, 1px, 1px);
          -webkit-clip-path: inset(0px 0px 99.9% 99.9%);
          clip-path: inset(0px 0px 99.9% 99.9%);
          overflow: hidden;
          height: 1px;
          width: 1px;
          padding: 0;
          border: 0;
        }
        .colornav-label {
          overflow: visible;
        }

        .colornav-swatch:after {
          border-radius: inherit;
          box-shadow: inset 0 1px 1px rgb(0 0 0 / 10%);
          content: '';
          display: block;
          height: inherit;
          position: absolute;
          width: inherit;
        }
      `}</style>
    </>
  )
}
