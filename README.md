
# Apple
![App Screenshot](https://res.cloudinary.com/daniilrobnikov/image/upload/v1657444688/apple/Apple_Accessories_Screenshot_io91xw.png)

 - Framework: [Next.js](https://nextjs.org/)
 - Database: [MongoDB](https://www.mongodb.com/)
 - Deployment: [Vercel](https://vercel.com/)
 - Styling: [Styled JSX](https://github.com/vercel/styled-jsx)
 
## Optimizations
 - Per page SEO
 - Responsive Web Design
 - Improved Core Web Vitals
 - PWA (Progressive Web Apps)
 - Generated XML Sitemap for web crawling
 - ISR (Incremental Static Regeneration), enabling to retain the benefits of static generation while scaling to millions of pages.
#### Images
 - Use .webp extension;
 - Lazy-loaded with [next/image](https://nextjs.org/docs/basic-features/image-optimization);
 - Compressed using [Cloudinary](https://cloudinary.com/documentation/node_image_and_video_upload), resulting in **3 times smaller size.**
## Features

#### Custom Hooks
 - useAnimation - applies animation according to the selected parent node; receives start and end state
 - useWhileInView - simplified useAnimation, animated only being visible for client
 - useStickyAnimation - for sticky objects (f.e. to animate videos on scroll)

For better user experience, all hooked animations advanced with easings. To see how it works view [Easings article](https://easings.net/#).


## Future Ideas
 - Test on other operating systems
 - Add built-in type declarations with Typescript
 - Add compatibility for mobile application
 
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`CLOUDINARY_NAME`
`CLOUDINARY_API_KEY`
`CLOUDINARY_API_SECRET`

`MONGODB_URI`
## API Reference

Basic CRUD functionality for accessories

#### Get all accessories

```http
  GET /api/accessories${query}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |
| `query`   | `string` | Retrieve only accessories that matches key values from [Accessories Schema](https://github.com/daniilrobnikov/apple/blob/main/mongodb/models/Accessory.js) f.e. `?brand=Apple&type.name=Headphones` |

#### Get accessory

```http
  GET /api/accessories/[slug]
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `slug`    | `string` | **Required**. Slug of accessory to fetch |

#### Create accessory

```http
  POST /api/accessories
```

#### Update accessory

```http
  PUT /api/accessories/[slug]
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `slug`    | `string` | **Required**. Slug of accessory to update |

#### Delete accessory

```http
  DELETE /api/accessories/[slug]
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `slug`    | `string` | **Required**. Slug of accessory to delete |


## Disclaimer

This site is not fully developed and designed only for learning purposes, visit [Sitemap](https://nextjs.org) to see all completed pages 
