const withImages = require('next-images')

module.exports =  withImages({
  esModule: true,
  webpack(config, options) {
    return config
  }
})

module.exports = {
  env: {
    PRISMIC_URL: process.env.PRISMIC_URL,
    PRISMIC_TOKEN: process.env.PRISMIC_TOKEN,
    MONGODBURI: process.env.MONGODBURI,
  }
}

module.exports = {
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH
}
