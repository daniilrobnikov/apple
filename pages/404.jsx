import SearchBox from '@/components/templates/layout/SearchBox'
import StyledLink from '@/components/templates/layout/styled/StyledLink'

export default function Custom404() {
  return (
    <>
      <SearchBox />
      <div className='cta-sitemap'>
        <StyledLink link={{ href: '/sitemap', text: 'Or see our site map' }} />
      </div>

      <style jsx>{`
        .cta-sitemap {
          margin-bottom: 143px;
          text-align: center;
        }
        @media only screen and (max-width: 1068px) {
          .cta-sitemap {
            margin-bottom: 78px;
          }
        }
      `}</style>
    </>
  )
}
