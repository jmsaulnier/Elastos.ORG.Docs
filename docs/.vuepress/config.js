module.exports = {
  title: 'Elastos',
  description: '',
  base: process.env.VUEPRESS_BASE || '/',
  head: [
    ['link', {
        rel: 'icon',
        href: 'https://raw.githubusercontent.com/elastos/Elastos.Community/master/ElastosLogoAssets/Icon/RGB/Elastos_Icon_RGB.png'
    }]
  ],
  // base: '/Elastos.ORG.Docs/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Elastos',
      description: '',
    },
    '/fr/': {
      lang: 'fr-FR',
      title: 'Elastos',
      description: '',
    },
  },
  themeConfig: {
      locales: {
        '/': {
            // text for the language dropdown
            selectText: 'Languages',
            // label for this locale in the language dropdown
            label: 'English',
            // text for the edit-on-github link
            editLinkText: 'Edit this page on GitHub',

            nav: [{
                text: 'Home',
                link: '/'
            }],
            sidebar: {
                '/': require('./sidebars/en/main.js'),
                '/developers/': require('./sidebars/en/developers'),
            },

            repoLabel: 'Contribute!',
            editLinkText: 'Help us improve this page!',
        },
        '/fr/': {
            
            // text for the language dropdown
            selectText: 'Langues',
            // label for this locale in the language dropdown
            label: 'Français',
            // text for the edit-on-github link
            editLinkText: 'Modifier cette page sur GitHub',
            
            nav: [{
                text: 'Accueil',
                link: '/fr/'
            }],
            sidebar: {
                '/fr/': require('./sidebars/fr/main.js'),
                '/fr/developers/': require('./sidebars/fr/developers'),
            },

            repoLabel: 'Contribuer !',
            editLinkText: 'Aidez-nous à améliorer cette page',
        },
      },
      logo: 'https://raw.githubusercontent.com/elastos/Elastos.Community/master/ElastosLogoAssets/Icon/RGB/Elastos_Icon_RGB.png',
      repo: 'elastos/Elastos.ORG.Docs',
      editLinks: true,
      docsDir: 'docs',
      lastUpdated: true,
  }
}