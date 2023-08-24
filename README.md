# Welcome to Sotla Lab Experts eCommerce Website

The project is hosted on [https://sotla-lab.vercel.app/](https://sotla-lab.vercel.app/).

This is a thesis project for the [Faculty of Information Studies](https://fis.unm.si) in Novo Mesto, Slovenia as well as a proof of concept requested by the company [COLO Lab Experts](https://colo.si).

This is a Business to Business eCommerce website built using Contentful content management system, Next.js for server-side rendering and front-end development, and Ant Design for its intuitive UI components. The goal of this project is to create a seamless and efficient online platform that enables businesses to engage in B2B transactions, offering a streamlined user experience for both buyers and sellers. This README serves as a comprehensive guide to help you understand the project's architecture, setup instructions, and key functionalities.

## Challenges & Solutions

### Client-Side vs. Server-Side

Next.js distinguishes between server-side and client-side rendering, which can lead to various technical challenges. Most UI libraries that have been tested in this project such as Mantine, ChakraUI, Flowbite, NextUI and others are able to be rendered only if they are in a client-side component.

### useDataRetriever & useFilterProducts custom hooks

TODO: describe the challenges and solutions related to the use of custom hooks.

#### Displaying Metadata

Incorporating website metadata into the top-level page.js file, following the guidelines outlined in the Next.js documentation, presents challenges due to its server-side functionality. However, rendering the page.js on the client side is necessary as it leverages AntD UI components.
