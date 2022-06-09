import Image from 'next/image'
import Link from 'next/link'

export default function SmallCard() {
  function handleEnterPortal() {
    document.querySelector('#portal > *').className = document
      .querySelector('#portal > *')
      .className.replace(
        'r-fade-transition-exit-done',
        'r-fade-transition-enter-done'
      )
  }

  return (
    <div className='cards-scroller-item'>
      <div className='card card-17 dd-color-blue-violet'>
        <div className='cover-link' onClick={() => handleEnterPortal()}>
          <div className='card-content card-content-withfullimg'>
            <div className='card-content-info'>
              <div className='card-content-icon'>
                <svg
                  viewBox='0 0 43 56'
                  xmlns='http://www.w3.org/2000/svg'
                  className='as-svgicon as-svgicon-financing as-svgicon-elevated as-svgicon-financingelevated'
                  aria-hidden='true'
                  role='img'
                >
                  <path d='m0 0h43v56h-43z' fill='none'></path>
                  <path d='m38.5 27a.99974.99974 0 0 0 -1 1v11a5.00588 5.00588 0 0 1 -5 5h-22a5.00588 5.00588 0 0 1 -5-5v-3.83594l1.543 1.543a.99989.99989 0 1 0 1.414-1.41406l-3.25-3.25a.99962.99962 0 0 0 -1.41406 0l-3.25 3.25a.99989.99989 0 1 0 1.41406 1.414l1.543-1.543v3.836a7.00818 7.00818 0 0 0 7 7h22a7.00818 7.00818 0 0 0 7-7v-11a.99974.99974 0 0 0 -1-1z'></path>
                  <path d='m28.17188 32.71533a.31074.31074 0 0 0 -.35157.35156q0 .334.35157.334h2.62792a.29915.29915 0 0 0 .34278-.334.30692.30692 0 0 0 -.34278-.35156z'></path>
                  <path d='m30.60156 21.32031a1.92007 1.92007 0 0 0 -1.40136-.47021h-15.75a1.94085 1.94085 0 0 0 -1.376.47021 1.81128 1.81128 0 0 0 -.50488 1.39307v10.43262h-.92481a.95033.95033 0 0 0 -.70312.29443 1.00858 1.00858 0 0 0 0 1.41553.9536.9536 0 0 0 .70312.29394h20.74416a1.96828 1.96828 0 0 0 1.415-.51855 1.78331 1.78331 0 0 0 .54492-1.35352v-8.376a1.78328 1.78328 0 0 0 -.54492-1.35352 1.96828 1.96828 0 0 0 -1.415-.51855h-.30762v-.31641a1.8689 1.8689 0 0 0 -.47949-1.39304zm-4.99609 3.58155v8.24414h-12.62109v-10.03711a.74576.74576 0 0 1 .84374-.84375h14.99415a.85949.85949 0 0 1 .63281.21093.827.827 0 0 1 .19971.55372h-2.08936a1.96828 1.96828 0 0 0 -1.415.51855 1.78328 1.78328 0 0 0 -.54496 1.35352zm5.53711-.334v-.35156h.09668a.94481.94481 0 0 1 .67676.23291.83527.83527 0 0 1 .24609.63721v8.00683a.83528.83528 0 0 1 -.24609.63721.94481.94481 0 0 1 -.67676.23291h-3.51563a.95761.95761 0 0 1 -.68554-.23291.83525.83525 0 0 1 -.2461-.63721v-8.00682a.83524.83524 0 0 1 .2461-.63721.95761.95761 0 0 1 .68554-.23291h.09668v.35156a.52959.52959 0 0 0 .14063.37793.48342.48342 0 0 0 .36914.14941h2.30273a.48342.48342 0 0 0 .36914-.14941.52959.52959 0 0 0 .14063-.37793z'></path>
                  <path d='m42.457 19.293a.99962.99962 0 0 0 -1.41406 0l-1.543 1.543v-3.836a7.00818 7.00818 0 0 0 -7-7h-22a7.00818 7.00818 0 0 0 -7 7v11a1 1 0 0 0 2 0v-11a5.00588 5.00588 0 0 1 5-5h22a5.00588 5.00588 0 0 1 5 5v3.83594l-1.543-1.543a.99989.99989 0 0 0 -1.41394 1.41406l3.25 3.25a.99963.99963 0 0 0 1.41406 0l3.25-3.25a.99962.99962 0 0 0 -.00006-1.414z'></path>
                </svg>
              </div>
              <div className='card-content-header'>
                <Link href='/shop/browse/overlay/store/tradein'>
                  <a
                    data-slot-name='shelf-6'
                    data-display-name='Shelf-3|Click|1/6'
                    data-ase-loader='buyflow-info-overlay-loader'
                    data-ase-loader-action='load'
                    data-index='1'
                    data-trigger-stoppropagation='true'
                    role='button'
                    className='card-content-headerlink'
                  >
                    <p className='dd-card-header'>
                      <span className='dd-highlight'>
                        Save and get even more credit
                      </span>{' '}
                      with Apple Trade In. Now through May&nbsp;31.
                    </p>{' '}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style global jsx>{`
        .card-17 .card-content-info {
          width: 253px;
          padding-bottom: 0;
        }

        .card-content-icon {
          height: 48px;
        }

        /* as-svgicon */
        .as-svgicon {
          fill: currentColor;
        }
        .as-svgicon,
        .as-svgicon-container {
          display: block;
        }
        .card-content-icon .as-svgicon {
          height: 56px;
          position: absolute;
        }
        .dd-color-blue-violet span.dd-highlight,
        .dd-color-blue-violet svg.as-svgicon {
          color: #ac39ff;
        }

        /* dd-highlight */
        .card-content-header .card-content-headerlink span {
          pointer-events: none;
        }
        .dd-color-blue-violet span.dd-highlight,
        .dd-color-blue-violet svg.as-svgicon {
          color: #ac39ff;
        }

        /* desktop & tablet */
        @media only screen and (min-width: 735px) {
          .halfsize-cardshelf .cards-scroller-crop,
          .halfsize-cardshelf .cards-scroller-item {
            height: 240px;
          }

          /* card-content */
          .card-17 .card-content {
            width: 313px;
            height: 240px;
          }
          /* card-content-icon */
          .card-content-icon {
            padding-bottom: 5px;
          }
          .card-content-icon .as-svgicon {
            top: 22px;
          }
        }

        /* mobile */
        @media only screen and (max-width: 734px) {
          .halfsize-cardshelf .cards-scroller-crop,
          .halfsize-cardshelf .cards-scroller-item {
            height: 215px;
          }

          /* card-content */
          .card-17 .card-content {
            width: 309px;
            height: 215px;
          }
          /* card-content-icon */
          .card-content-icon {
            padding-bottom: 0;
          }
          .card-content-icon .as-svgicon {
            top: 18px;
          }
        }
      `}</style>
    </div>
  )
}
