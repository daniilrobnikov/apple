import Pagination from './Pagination'
import ProductTile from './ProductTile'
import SearchControls from './SearchControls'
import SearchFilters from './SearchFilters'

export default function SearchResults({ products }) {
  return (
    <>
      <div className='rf-accessories-container rf-accessories-section'>
        <SearchControls />
        <div className='rf-accessories-section-results'>
          <SearchFilters />
          <div className='rf-serp-results-tiles'>
            <section
              className='rf-accessoriesgrid column'
              data-analytics-region='results'
              role='list'
            >
              {products.data?.map((product) => (
                <ProductTile key={product._id} product={product} />
              ))}
            </section>
          </div>
        </div>
        {products.pagination.prev ||
          (products.pagination.next && (
            <Pagination pagination={products.pagination} />
          ))}
      </div>

      <style global jsx>{`
        .rf-accessories-container {
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          position: static;
          padding-bottom: 20px;
        }

        .rf-accessories-section .rf-accessories-section-results {
          display: flex;
          align-items: flex-start;
          margin: 0 auto;
          width: 100%;
        }

        .rf-serp-results-tiles {
          transition: all 0.4s ease-in-out;
        }

        .rf-accessoriesgrid {
          display: flex;
          flex-wrap: wrap;
        }
        .rf-serp-results-tiles .rf-accessoriesgrid {
          max-width: 1200px;
          border-left: 1px solid #d2d2d7;
        }

        @media only screen and (min-width: 735px) {
          .rf-serp-results-tiles {
            width: auto;
          }
        }
        @media only screen and (max-width: 734px) {
          .rf-serp-results-tiles {
            width: 100%;
            margin: 0 auto;
          }
        }
      `}</style>
    </>
  )
}
