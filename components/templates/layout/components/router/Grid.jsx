import React from 'react'
import StyledImage from '../../styled/StyledImage'

export default function Grid({ tiles }) {
  console.log('tiles', tiles)
  return (
    <div className='router-grid-wrapper'>
      <div className='router-grid grid'>
        {tiles?.map((tile) => (
          <div
            key={tile._id}
            className='router-item router-item-accessories'
            data-analytics-section-engagement='name:accessories'
          >
            <div className='router-content-wrapper'>
              <div className='router-item-content'>
                <h2 className='router-item-eyebrow'>Accessories</h2>
                <p className='router-item-headline'>{tile.page.title}</p>
                <p className='router-button'>
                  <a
                    href={tile.page.url}
                    data-analytics-title='shop accessories'
                    aria-label='Shop Mac accessories'
                    className='button'
                  >
                    Shop
                  </a>
                </p>
              </div>
              <div className='router-item-picture align-middle'>
                <StyledImage
                  image={{
                    imagePath: tile.imagePath,
                    imagePosition: tile.imagePosition || 'center',
                  }}
                />
                {/* <picture
                  id='overview-routers-accessories-1'
                  className='overview-routers-accessories loaded'
                  data-lazy=''
                  data-picture-loaded=''
                >
                  <source
                    srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/routers/accessories__chi5b7pc92eu_small.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/routers/accessories__chi5b7pc92eu_small_2x.jpg 2x'
                    media='(max-width:734px)'
                  />
                  <source
                    srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/routers/accessories__chi5b7pc92eu_medium.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/routers/accessories__chi5b7pc92eu_medium_2x.jpg 2x'
                    media='(max-width:1068px)'
                  />
                  <source
                    srcSet='https://www.apple.com/v/macbook-air-m2/b/images/overview/routers/accessories__chi5b7pc92eu_large.jpg, https://www.apple.com/v/macbook-air-m2/b/images/overview/routers/accessories__chi5b7pc92eu_large_2x.jpg 2x'
                    media='(min-width:0px)'
                  />
                  <img
                    src='https://www.apple.com/v/macbook-air-m2/b/images/overview/routers/accessories__chi5b7pc92eu_large.jpg'
                    alt=''
                  />
                </picture> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
