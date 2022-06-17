import StyledLink from '@/components/templates/layout/styled/StyledLink'
import RowGroup from './RowGroup'

export default function Overview() {
  return (
    <>
      <RowGroup>
        <figure className='image-block template-item-image'>
          <span className='image-techspecs-macbook-air-m2 image'></span>
          <div className='typography-label'>MacBook&nbsp;Air (M2, 2022)</div>
        </figure>
        <div className='compare-column-group template-item-default'>
          {' '}
          <div className='template-item-link'>
            <StyledLink
              link={{
                href: '/macbook-air-m2/specs/',
                text: 'Tech specs',
              }}
            />
          </div>
          <div className='template-item-link'>
            <StyledLink link={{ href: '/macbook-air-m2/' }} />
          </div>
        </div>
      </RowGroup>
    </>
  )
}
