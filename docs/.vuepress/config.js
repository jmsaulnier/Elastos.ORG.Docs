module.exports = {
  title: 'Elastos',
  description: '',
  head: [
    ['link', {
        rel: 'icon',
        href: 'https://raw.githubusercontent.com/elastos/Elastos.Community/master/ElastosLogoAssets/Icon/RGB/Elastos_Icon_RGB.png'
    }]
  ],
  base: '/Elastos.ORG.Docs/',
  themeConfig: {
      logo: 'https://raw.githubusercontent.com/elastos/Elastos.Community/master/ElastosLogoAssets/Icon/RGB/Elastos_Icon_RGB.png',
      repo: 'elastos/Elastos.ORG.Docs',
      repoLabel: 'Contribute!',
      editLinks: true,
      editLinkText: 'Help us improve this page!',
      docsDir: 'docs',
      lastUpdated: true,
      nav: [{
          text: 'Home',
          link: '/'
      }],
      sidebar: {
          '/developers/': require('./sidebars/developers'),
          '/': require('./sidebars/main.js'),
      }
  }
}