import Head from 'next/head'
import { useRouter } from 'next/router'

export default function PageHead({
  title,
  description = 'Discover the innovative world of Apple and shop everything iPhone, iPad, Apple Watch, Mac, and Apple TV, plus explore accessories, entertainment, and expert device support.',
  keywords = 'apple, iphone, mac, ipad, apple watch, apple tv, accessories, entertainment, expert device support',
}) {
  const router = useRouter()
  const { asPath } = router

  const domain = 'https://apple-ashen.vercel.app'
  const url = router && asPath ? asPath : undefined
  const canonical = url && url === '/' ? domain : domain + url

  function addProductJsonLd() {
    return {
      __html: `{
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "Executive Anvil",
      "image": [
        "https://example.com/photos/1x1/photo.jpg",
        "https://example.com/photos/4x3/photo.jpg",
        "https://example.com/photos/16x9/photo.jpg"
       ],
      "description": "Sleeker than ACME's Classic Anvil, the Executive Anvil is perfect for the business traveler looking for something to drop from a height.",
      "sku": "0446310786",
      "mpn": "925872",
      "brand": {
        "@type": "Brand",
        "name": "ACME"
      },
      "review": {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Fred Benson"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.4",
        "reviewCount": "89"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://example.com/anvil",
        "priceCurrency": "USD",
        "price": "119.99",
        "priceValidUntil": "2020-11-20",
        "itemCondition": "https://schema.org/UsedCondition",
        "availability": "https://schema.org/InStock"
      }
    }
  `,
    }
  }
  return (
    <Head>
      <title>{title ? `${title} - Apple` : 'Apple'}</title>
      <meta name='description' content={description} key='desc' />
      <meta name='keywords' content={keywords} />

      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=2, user-scalable=1, viewport-fit=cover'
      />
      <link rel='canonical' href={canonical} key='canonical' />

      {/* Open Graph protocol */}
      <meta property='og:locale' content='en_US' />
      <meta property='og:title' content={title} />
      <meta property='og:url' content={canonical} />
      <meta property='og:type' content='product' />
      <meta property='og:site_name' content='Apple' />
      <meta property='og:description' content={description} />
      <meta property='og:image' content='/favicons/og-default.jpeg' />

      <meta name='twitter:site' content='@Apple' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:creator' content='@DaniilRobnikov' />

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={addProductJsonLd()}
        key='product-jsonld'
      />
    </Head>
  )
}
