export default function PaddleNav({
  disablePrevious,
  disableNext,
  handleArrowClick,
  parentClass,
}) {
  return (
    <div className='paddlenav paddlenav-framed paddlenav-compact'>
      <button
        type='button'
        aria-hidden='true'
        className='paddlenav-arrow paddlenav-arrow-previous'
        onClick={() => handleArrowClick(-1)}
        disabled={disablePrevious}
      >
        <svg
          stroke='currentColor'
          fill='currentColor'
          strokeWidth='0'
          viewBox='0 0 512 512'
          height='1em'
          width='1em'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z'></path>
        </svg>
        <span className='visuallyhidden'>Previous - The latest.</span>
      </button>
      <button
        type='button'
        aria-hidden='false'
        className='paddlenav-arrow paddlenav-arrow-next'
        onClick={() => handleArrowClick(1)}
        disabled={disableNext}
      >
        <svg
          stroke='currentColor'
          fill='currentColor'
          strokeWidth='0'
          viewBox='0 0 512 512'
          height='1em'
          width='1em'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z'></path>
        </svg>
        <span className='visuallyhidden'>Next - The latest.</span>
      </button>

      <style global jsx>{`
        /* paddlenav */
        .paddlenav,
        .paddlenav ul {
          margin: 0;
          list-style: none;
        }

        /* paddlenav-arrow */
        .paddlenav .paddlenav-arrow {
          display: block;
          font-style: normal;
          overflow: hidden;
          position: absolute;
          text-align: center;
          transition: background-color 0.25s linear, color 0.25s linear,
            opacity 0.25s linear;
        }
        .paddlenav .paddlenav-arrow {
          top: 50%;
          font-size: 53px;
          font-weight: 300;

          width: 5.29412rem;
          height: 5.29412rem;
          border-radius: 5.29412rem;
          line-height: 5.29412rem;

          margin-top: -2.64706rem;
        }
        .paddlenav .paddlenav-arrow {
          background-color: rgba(210, 210, 215, 0.2);
          color: rgba(134, 134, 139, 0.8);
        }
        .paddlenav-compact .paddlenav-arrow {
          width: 3.05882rem;
          height: 3.05882rem;
          border-radius: 3.05882rem;
          line-height: 3.05882rem;

          margin-top: -1.52941rem;
        }
        .paddlenav .paddlenav-arrow:disabled {
          cursor: default;
          opacity: 0;
        }

        /* previous next */
        .paddlenav-arrow-previous {
          left: 18px;
        }
        .paddlenav-arrow-next {
          right: 18px;
        }

        /*  > * */
        .paddlenav .paddlenav-arrow > * {
          font-family: SF Pro Icons, AOS Icons;
          color: inherit;
          display: inline-block;
          font-style: normal;
          font-weight: inherit;
          font-size: inherit;
          line-height: 1;
          text-decoration: underline;
          position: relative;
          z-index: 1;
          text-decoration: none;
          transform: scale(0.6);
        } /* previous next  > * */
        .paddlenav .paddlenav-arrow-previous > * {
          left: -0.035em;
        }
        .paddlenav .paddlenav-arrow-next > * {
          right: -0.035em;
        }

        /* INTERACTIVE */
        .${parentClass} .paddlenav-arrow {
          transform: scale(0.8);
          opacity: 0;
          transition: transform 0.5s ease-in,
            opacity 0.7s cubic-bezier(0.15, 0, 0.2, 1) 0.1s;
        }
        /* container : hover /////////////////////////////// */
        .${parentClass}:hover .paddlenav-arrow:not([disabled]) {
          transform: scale(1);
          transition-duration: 0.5s;
          opacity: 1;
        }

        /* container : hover, paddlenav-arrow : hover  /////////////////////////////// */
        .${parentClass}:hover .paddlenav-arrow:hover:not([disabled]) {
          transform: scale(1);
          transition-duration: 0.5s;
          opacity: 1;
          background-color: rgba(210, 210, 215, 0.28);
        }

        /* container : hover, paddlenav-arrow : active  /////////////////////////////// */
        .${parentClass}:hover .paddlenav-arrow:active:not([disabled]) {
          transform: scale(1);
          transition-duration: 0.5s;
          opacity: 1;
          background-color: rgba(210, 210, 215, 0.36);
        }
      `}</style>
    </div>
  )
}
