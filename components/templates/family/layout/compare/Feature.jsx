export default function Feature() {
  const badge = 'badge-red'
  return (
    <>
      <div className='ipad-pro display row'>
        {badge ? (
          <p className='typography-compare-grid-headline'>12.9” and 11”</p>
        ) : (
          <figure className='image-m1-chip'></figure>
        )}
        <p className='typography-body-reduced column large-12 small-11'>
          12.9” Liquid Retina XDR display
        </p>
        <p className='typography-body-reduced column large-12 small-11'>
          11” Liquid Retina display
        </p>
      </div>

      <style global jsx>{`
        .section-compare .display .typography-compare-grid-headline {
          margin-bottom: 6px;
        }

        .section-compare [class^='image'] {
          margin-bottom: 9px;
        }
        .section-compare .image-m1-chip {
          width: 38px;
          height: 38px;
        }

        .section-compare .typography-body-reduced {
          flex-basis: auto;
        }

        @media only screen and (min-width: 734px) {
          .typography-compare-grid-headline {
            font-size: 19px;
            line-height: 1.21053;
            font-weight: 600;
            letter-spacing: 0.006em;
            font-family: 'SF Pro Display', 'SF Pro Icons', 'Helvetica Neue',
              'Helvetica', 'Arial', sans-serif;
          }
        }
        @media only screen and (max-width: 734px) {
          .typography-compare-grid-headline {
            font-size: 17px;
            line-height: 1.23536;
            font-weight: 600;
            letter-spacing: 0.001em;
            font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue',
              'Helvetica', 'Arial', sans-serif;
          }
          .section-compare .typography-body-reduced {
            max-width: 140px;
          }
        }
      `}</style>
    </>
  )
}
