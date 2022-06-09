import GlobalNav from './nav/GlobalNav'

import GlobalFooter from './footer/GlobalFooter'

export default function Layout({ children }) {
  return (
    <>
      <GlobalNav />
      {children}
      <GlobalFooter />
    </>
  )
}
