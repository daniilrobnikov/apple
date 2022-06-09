import '@/styles/globals.css'
import '@/styles/classes.css'
import '@/styles/data.css'

import { useState, useEffect } from 'react'

export default function MyApp({ Component, pageProps }) {
  // const [links, setLinks] = useState([])

  // const fetcher = (url) => fetch(url).then((r) => r.status)

  // var developedPages = []
  // links.forEach((link) => {
  //   fetcher(link).then((status) => {
  //     // highlight only developed
  //     if (status !== 200) {
  //       document
  //         .querySelectorAll(
  //           `[href="${link.replace('http://localhost:3000', '')}"]`
  //         )
  //         .forEach((el) => {
  //           el.setAttribute('style', 'opacity: 0.2;')
  //         })
  //     }
  //     // console.log only developed
  //     if (status === 200) {
  //       developedPages.push(link.split('#')[0])
  //       console.log([...new Set(developedPages)])
  //     }
  //   })
  // })

  // useEffect(() => {
  //   var arr = [],
  //     l = document.links
  //   for (var i = 0; i < l.length; i++) {
  //     arr.push(l[i].href)
  //   }
  //   arr = [...new Set(arr)]
  //   arr = arr.filter((link) => link.startsWith('http://localhost:3000'))
  //   setLinks(arr)
  // }, [])

  /* 
  // hide undeveloped (OPTIMISED)
  useEffect(() => {
    var developedPages = [
      'http://localhost:3000/',
      'http://localhost:3000/store',
    ]

    document.querySelectorAll('[href^="/"]:not([href*="#"])').forEach((el) => {
      if (!developedPages.includes(el.href)) {
        el.setAttribute('style', 'opacity: 0.2;')
        // console.log(el.href)
      }
    })
  }, [])
  */

  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}
