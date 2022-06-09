export default function BillBoard() {
  return (
    <div className='fullwidth as-navtuck' data-events='event52'>
      <div>
        <div className='rf-category-billboard'>
          <div className='section-content rf-category-billboard-content'>
            <h1 className='rf-category-billboard-header'>Made by Apple</h1>
          </div>
        </div>
      </div>

      <style jsx>{`
        .rf-category-billboard {
          background-color: #f5f5f7;
          border-bottom: 1px solid #d2d2d7;
          display: flex;
          align-items: center;
          min-height: 128px;
        }
        .rf-category-billboard .rf-category-billboard-header {
          font-weight: 600;
          font-family: SF Pro Display, SF Pro Icons, AOS Icons, Helvetica Neue,
            Helvetica, Arial, sans-serif;
        }

        @media only screen and (min-width: 735px) {
          font-size: 40px;
          line-height: 1.1;
          letter-spacing: 0;
          font-weight: 500;
        }
        @media only screen and (max-width: 734px) {
          .rf-category-billboard {
            height: auto;
            min-height: 104px;
          }

          .rf-category-billboard .rf-category-billboard-content {
            width: 100%;
            padding: 0 16px;
          }

          .rf-category-billboard .rf-category-billboard-header {
            font-size: 28px;
            line-height: 1.14286;
            letter-spacing: 0.007em;
          }
        }
      `}</style>
    </div>
  )
}
