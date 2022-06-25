import Metadata from '@/components/templates/layout/global/head'

import SearchBox from '@/components/templates/layout/components/SearchBox'
import StyledLink from '@/components/templates/layout/styled/StyledLink'
export default function Custom500({ page }) {
  return (
    <>
      <Metadata page={page} />
      <SearchBox title='500 - Server-side error occurred' />
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

export async function getStaticProps() {
  const pageRes = await fetch(`${process.env.API_URL}/pages?url=/500`)
  const page = await pageRes.json().then((page) => page.data[0])
  return {
    props: {
      page,
    },
  }
}
