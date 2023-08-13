module.exports = {
    async redirects() {
      return [
        {
          source: '/about-me',
          destination: '/',
          permanent: false,
        },
      ]
    },
  }