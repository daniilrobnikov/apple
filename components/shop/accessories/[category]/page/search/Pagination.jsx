import { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

export default function Pagination() {
  const [page, setPage] = useState(1)
  return (
    <nav
      className='pagination'
      aria-label='Pagination'
      delimiter='of'
      data-analytics-region='router'
    >
      <div>
        <div className='pagination-arrow'>
          <button
            className='icon icon-chevronleft'
            type='button'
            disabled
            aria-label='Previous'
            aria-disabled='true'
            data-analytics-pagination='prev'
            onClick={() => setPage(Math.max(page - 1))}
          >
            <span className='visuallyhidden'>Previous</span>
            <IoIosArrowBack />
          </button>
        </div>
        <div className='pagination-spacing' id='current-page-pagination'>
          <label className='visuallyhidden' htmlFor=''>
            Go to page
          </label>
          <input
            type='number'
            min='1'
            step='1'
            value={page}
            onChange={(e) => setPage(Number(e.target.value))}
            id='pagination-pageinput'
            className='pagination-pageinput'
            data-autom='paginationPageInput'
            data-analytics-pagination='pageinput'
            aria-describedby='pagination-inputhint'
          />
          <span
            id='pagination-inputhint'
            className='visuallyhidden'
            aria-hidden='true'
          >
            Press Return/Enter key to go to the page
          </span>
          <span className='visuallyhidden'>Page 1</span>
          <span className='pagination-delimiter'>of</span>
          <span
            className='pagination-total-pages'
            data-autom='paginationTotalPages'
          >
            8
          </span>
        </div>
        <div className='pagination-arrow'>
          <button
            className='icon icon-chevronright'
            type='button'
            aria-label='Next'
            data-analytics-pagination='next'
            onClick={() => setPage(page + 1)}
          >
            <span className='visuallyhidden'>Next</span>
            <IoIosArrowForward />
          </button>
        </div>
      </div>

      <style global jsx>{`
        .pagination {
          display: flex;
          justify-content: center;
          border-top: 1px solid #d2d2d7;
          padding-top: 18px;
        }
        .rf-accessories-container .pagination {
          border-top: none;
        }

        .pagination > div {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 320px;
          list-style: none;
        }

        .pagination .pagination-arrow {
          font-weight: 200;
          font-size: 26px;
          color: #1d1d1f;
        }

        /* pagination-arrow button */
        .pagination .pagination-arrow button {
          padding: 0 12px;
        }
        .pagination .pagination-arrow button:disabled {
          color: rgba(29, 29, 31, 0.32);
        }
        .pagination .pagination-arrow button svg {
          vertical-align: middle;
          font-size: 17px;
          line-height: 1.47059;
          font-weight: 400;
          letter-spacing: -0.022em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
        }

        .pagination .pagination-arrow button svg {
          stroke: white;
          stroke-width: 10;
        }

        .pagination .pagination-spacing input {
          font-size: 17px;
          line-height: 1.47059;
          font-weight: 400;
          letter-spacing: -0.022em;
          font-family: SF Pro Text, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
          width: 28px;
          height: 2.12em;
          border-radius: 8px;
          text-align: center;
          border: 1px solid #d2d2d7;
          color: #6e6e73;
        }
        .pagination .pagination-spacing input::-webkit-outer-spin-button,
        .pagination .pagination-spacing input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        .pagination .pagination-spacing span {
          color: #6e6e73;
          padding-left: 8px;
        }

        @media only screen and (min-width: 1069px) {
          .pagination {
            padding-left: 238px;
          }
        }
        @media only screen and (min-width: 735px) and (max-width: 1068px) {
          .pagination > div {
            padding-right: calc(50% - 357px);
          }
        }
      `}</style>
    </nav>
  )
}
