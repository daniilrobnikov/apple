import GlobalNav from './nav/GlobalNav'
import GlobalFooter from './footer/GlobalFooter'
import PageHead from './head'

export default function Layout({ children }) {
  return (
    <>
      <PageHead />

      <GlobalNav />
      {children}
      <GlobalFooter />
    </>
  )
}
