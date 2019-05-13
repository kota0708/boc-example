module.exports = {
  siteMetadata: {
    title: 'BUMP OF CHICKEN official website',
    description: 'BUMP OF CHICKENオフィシャルサイト。ニュース、ディスコグラフィー、スタッフダイアリー、GOODS、PICSなど。',
    author: '@bump of chicken'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        options: {
          fix: true
        }
      }
    },
    {
      resolve: 'gatsby-plugin-styled-components'
    },
    {
      resolve: 'gatsby-plugin-react-helmet'
    },
    {
      resolve: 'gatsby-plugin-flow'
    }
  ]
};
