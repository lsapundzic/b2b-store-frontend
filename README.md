# Welcome to Sotla Lab Experts eCommerce Website

This is a bachelor thesis project for the Faculty of Information Studies in Novo Mesto, Slovenia.

This is a Business to Business eCommerce website built using Contentful as the content management system, Next.js for server-side rendering and front-end development, and Ant Design for its intuitive UI components. The goal of this project is to create a seamless and efficient online platform that enables businesses to engage in B2B transactions, offering a streamlined user experience for both buyers and sellers. This README serves as a comprehensive guide to help you understand the project's architecture, setup instructions, and key functionalities.

## Challenges & Solutions

### Client-Side vs. Server-Side

Next.js distinguishes between server-side and client-side rendering, which can lead to various technical challenges. Most UI libraries that have been tested in this project such as Mantine, ChakraUI, Flowbite, NextUI and others are able to be rendered only if they are in a client-side component. This presents a challenge beyond SEO optimization and performance issues, it also impacts the way data is fetched and how other server-side Next.js functionalities are impacted.

#### Displaying Metadata

Incorporating website metadata into the top-level page.js file, following the guidelines outlined in the Next.js documentation, presents challenges due to its server-side functionality. However, rendering the page.js on the client side is necessary as it leverages AntD UI components.

#### Fetching Data

There are a number of ways to [fetch data in Next.js](https://medium.com/@brianridolcedev/every-possible-way-to-fetch-data-in-next-js-a569a816784a) and according to the latest documentation the [recommended method](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching) is with async-await which is also a server-side function. The alternative utilized in this project is an older [client-side](https://nextjs.org/docs/pages/building-your-application/data-fetching/client-side) fetching with useState and useEffect hooks, much like in React.

## Using Environment Variables

Following the standard practice of keeping API keys as environment variables in an .env.local file does not work and it may also be related to server vs. client rendering issue. When printing the environment variable in the console it is undefined.

The first workaround was to add NEXT_PUBLIC prefix to the variable names which does work well locally in the development, during the build time on Vercel, even when in production. However, once the data fetch is triggered, the browser console throws a vague error and the page is not rendered.
