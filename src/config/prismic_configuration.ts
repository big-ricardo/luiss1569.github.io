import Prismic from "prismic-javascript";

// Prismic API endpoint
export const apiEndpoint = process.env.PRISMIC_URL;

// Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = process.env.PRISMIC_TOKEN;

// Client method to query Prismic
export const client = Prismic.client(apiEndpoint, { accessToken });

export const ClientPreview = (req = null) =>
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken));

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {};
  return {
    ...reqOption,
    ...accessTokenOption,
  };
};

export const linkResolver = (doc) => {
  if (doc.type === "page") {
    return `${doc.uid}`;
  }
  return "/";
};
