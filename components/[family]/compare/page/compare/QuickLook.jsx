import React, { useState } from 'react'
import RowGroup from './RowGroup'

export default function QuickLook() {
  const [activeSpec, setActiveSpec] = useState(0)
  return (
    <>
      <div role='rowheader' className='compare-rowheader'>
        <span className='visuallyhidden'>Quick Look</span>
      </div>
      <RowGroup setActiveSpec>
        {image ? (
          <div className='image-icon-wrapper'>
            <figure className='image-icon image-icon-m2'></figure>
            <p>Apple M2 chip</p>
          </div>
        ) : (
          <figure className='icon-badge'>
            <span className='badge-value'>13.6”</span>
            <span className='badge-copy'>Liquid Retina display</span>
          </figure>
        )}
      </RowGroup>
    </>
  )
}
