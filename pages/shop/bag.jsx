import Banner from '@/components/shop/bag/page/Banner'
import BagItem from '@/components/shop/bag/page/BagItem'
import Summary from '@/components/shop/bag/page/Summary'
import CheckOut from '@/components/shop/bag/page/CheckOut'

import BagChat from '@/components/shop/bag/page/BagChat'
import Recommendations from '@/components/shop/bag/page/recommended/Recommendations'

import { useEffect, useState } from 'react'

import useSWR from 'swr'
function arrayFetcher(...urlArr) {
  const f = (u) => fetch(u).then((r) => r.json())
  return Promise.all(urlArr.map(f))
}
export default function Bag() {
  const [loading, setLoading] = useState(true)

  const [bagItems, setBagItems] = useState([])

  useEffect(() => {
    var bagItems = localStorage.getItem('BAG_ITEMS')
      ? JSON.parse(localStorage.getItem('BAG_ITEMS'))
      : []
    setBagItems(bagItems)
  }, [])

  const urlArray = []
  for (let i = 0; i < bagItems.length; i++) {
    urlArray.push(`/api/accessories/${bagItems[i]}`)
  }

  const { data } = useSWR(urlArray, arrayFetcher, {
    revalidate: true,
  })

  const [total, setTotal] = useState(0)
  const [monthlyInstallment, setMonthlyInstallment] = useState(0)

  useEffect(() => {
    data?.map((item) => {
      var total = 0
      for (let i = 0; i < bagItems.length; i++) {
        total += parseFloat(item.data.prices.fullPrice.replace('$', ''))
      }
      setTotal(total.toFixed(2))
      setMonthlyInstallment((total / bagItems.length / 6).toFixed(2))
    })
    setLoading(false)
  }, [data])

  if (loading) {
    return <div style={{ height: '100vw' }}></div>
  }
  return (
    <>
      <style global jsx>{`
        @media only screen and (min-width: 734px) {
          .rs-bag-content {
            padding-top: 50px;
            margin-bottom: 100px;
          }

          .rs-iteminfos {
            margin: 4.17647rem 0 20px;
          }
        }

        @media only screen and (max-width: 734px) {
          .rs-bag-content {
            padding-top: 58px;
            margin-bottom: 80px;
          }

          .rs-iteminfos {
            margin: 3.82353rem 0 20px;
          }
        }
      `}</style>
      <main className='rs-bag rs-page-content'>
        <div
          id='bag-content'
          className='rs-bag-content section-content rs-zoom-content'
        >
          <Banner monthlyInstallment={monthlyInstallment} />
          <ol className='rs-bag-items rs-iteminfos' data-autom='bag-items'>
            {data?.map((item) => (
              <BagItem product={item.data} key={item.data._id} />
            ))}
          </ol>
          <Summary total={total} />
          <CheckOut total={total} monthlyInstallment={monthlyInstallment} />
        </div>
        <BagChat />
        <Recommendations />
      </main>
    </>
  )
}
