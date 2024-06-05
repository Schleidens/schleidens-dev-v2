// contentfulClient.js
import { createClient, ContentfulClientApi } from 'contentful';

const client: ContentfulClientApi<undefined> = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

console.log(
  'Contentful Client Configured with Space ID:',
  process.env.CONTENTFUL_SPACE_ID
);
console.log(
  'Contentful Client Configured with Access Token:',
  process.env.CONTENTFUL_ACCESS_TOKEN
);

export default client;
