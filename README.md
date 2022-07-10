
# Apple

 - Framework: [Next.js](https://nextjs.org/)
 - Database: [MongoDB](https://www.mongodb.com/)
 - Deployment: [Vercel](https://vercel.com/)
 - Styling: [Styled JSX](https://github.com/vercel/styled-jsx)
 
## Optimizations
 - per page SEO
 - Responsive layout
 - improved Core Web Vitals
 - PWA (Progressive Web Apps)
 - generated XML Sitemap for web crawling
 - ISR (Incremental Static Regeneration), enabling to retain the benefits of static generation while scaling to millions of pages.
### Images
 - lazy-loaded with [next/image](https://nextjs.org/docs/basic-features/image-optimization);
 - compressed using [Cloudinary](https://cloudinary.com/), resulting in 3 times smaller size;
 - use .webp extension



## Features

### Custom Hooks
 - useAnimation - applies animation according to the selected parent node; receives start and end state
 - useStickyAnimation - for sticky objects (f.e. to animate videos on scroll)
 - useWhileInView - simplified useAnimation, animated only being visible for client

For better user experience, all hooked animations advanced with easings. To see how it works view [Easings article](https://easings.net/#).


## Disclaimer

This site is not fully developed, visit [Sitemap](https://nextjs.org) to see all completed pages 
## Future Ideas
 - Test on other operating systems
 - Full Typescript 
