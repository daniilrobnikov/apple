export default function RowGroup({ children, products }) {
  // const products = [0, 0, 0]
  // const allSpecs = [0, 0, 0, 0, 0, 0]
  // const products = [
  //   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  //   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  //   [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  // ]

  // var allSpecs = [
  //   'CPU',
  //   'GPU',
  //   'RAM',
  //   'Storage',
  //   'Screen',
  //   'Camera',
  //   'Battery',
  //   'Connectivity',
  //   'Display',
  //   'Memory',
  //   'OS',
  //   'Price',
  // ]
  // var currentSpec = []
  // var restructuredData = []

  // allSpecs.forEach((spec) => {
  //   products.forEach((product, index) => {
  //     currentSpec.push(
  //       product.find((specInProduct) => {
  //         specInProduct.slug === spec
  //       })
  //     )
  //   })
  //   if (currentSpec.length > 0) {
  //     restructuredData.push(currentSpec)
  //   }
  //   currentSpec = []
  // })
  // {restructuredData.map((specArray, index) => (
  //               <Spec key={index} specArray={specArray} />
  //             ))}

  return (
    <>
      <div
        role='rowgroup'
        data-analytics-activitymap-region-id='finish'
        className='compare-section section-finish template-gallery hide-rowheader section-content'
      >
        <div role='row' className='compare-row row-gallery'>
          {products.map((product, index) => (
            <div role='cell gridcell' className='compare-column' key={index}>
              {children}
            </div>
          ))}
        </div>
      </div>

      <style global jsx>{`
        .section-compare-table .compare-section {
          position: relative;
          padding-top: 1.45em;
          padding-bottom: 75px;
          border: 0;
        }
        .section-compare-table .compare .hide-rowheader {
          margin: 0 auto;
          padding: 0 0 0;
        }

        .section-compare-table .compare-header-row,
        .section-compare-table .compare-row {
          display: grid;
          --column-gap: 3%;
          --columns: 3;
          margin: 20px auto;
          grid-template-columns: repeat(
            var(--columns),
            calc(
              (100% - var(--column-gap) * (var(--columns) - 1)) / var(--columns)
            )
          );
          column-gap: var(--column-gap);
        }

        .section-compare-table .compare .compare-rowheader {
          width: 100%;
          grid-column: 1/3 span;
        }
      `}</style>
    </>
  )
}
