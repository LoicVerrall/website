module.exports = {
    async redirects() {
      return [
        {
          source: '/AboutMe.html',
          destination: '/',
          permanent: false,
        },
        {
          source: '/Projects&Work.html',
          destination: '/',
          permanent: false,
        },
        {
          source: '/Volunteering&Charity.html',
          destination: '/',
          permanent: false,
        },
        {
          source: '/Photography.html',
          destination: '/',
          permanent: false,
        },
        {
          source: '/ContactMe.html',
          destination: '/',
          permanent: false,
        },
      ]
    },
  }