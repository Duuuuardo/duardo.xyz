export const BaseUrl = 'https://duardo.xyz';
export const DefaultSeoProps = {
  titleTemplate: '%s | Duardo',
  title: 'Portfolio',
  description: 'Olá, meu nome é Eduardo e eu sou programador backend.',
  canonical: BaseUrl,
  additionalMetaTags: [
    { name: 'url', content: BaseUrl },
    { name: 'identifier-URL', content: BaseUrl },
    { name: 'shortlink', content: BaseUrl },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      name: 'keywords',
      content:
        'dev, developer, programador, software engineer, desenvolvedor, backend, fullstack, back end, full stack, mitsy, naia, sirius, poluxtrail, discord',
    },
    {
      name: 'summary',
      content: 'Olá, meu nome é Eduardo e eu sou programador backend.',
    },
    { name: 'subject', content: 'Website for Eduardo an backend developer' },
    {
      name: 'robots',
      content: 'archive,follow,imageindex,index,odp,snippet,translate',
    },
    { name: 'googlebot', content: 'index,follow' },
    { name: 'author', content: 'Eduardo Fabisiak, eduardofabisiak@proton.me' },
    { name: 'owner', content: 'Eduardo Fabisiak, eduardofabisiak@proton.me' },
    {
      name: 'designer',
      content: 'Eduardo Fabisiak, eduardofabisiak@proton.me',
    },
    { name: 'reply-to', content: 'eduardofabisiak@proton.me' },
    { name: 'target', content: 'all' },
    { name: 'audience', content: 'all' },
    { name: 'coverage', content: 'Worldwide' },
    { name: 'distribution', content: 'Global' },
    { name: 'rating', content: 'safe for kids' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    { name: 'HandheldFriendly', content: 'True' },
    { name: 'apple-mobile-web-app-title', content: 'Meu website pessoal' },
    { name: 'application-name', content: 'Portfolio' },
    { name: 'msapplication-TileColor', content: '#fff' },
    {
      name: 'msapplication-TileImage',
      content: 'https://github.com/duuuuardo.png',
    },
    { name: 'theme-color', content: '#fff' },
    { name: 'revisit-after', content: '7 days' },
    { property: 'og:email', content: 'eduardofabisiak@proton.me' },
  ],
  openGraph: {
    title: 'Meu website pessoal',
    url: BaseUrl,
    images: [
      {
        url: 'https://github.com/duuuuardo.png',
        alt: 'OpenGraphImage',
        width: 1024,
        height: 512,
      },
    ],
    type: 'website',
    locale: 'en_US',
    site_name: 'Meu website pessoal',
    profile: {
      firstName: 'Eduardo',
      username: 'Duardo',
      gender: 'male',
    },
  },
  twitter: {
    handle: '@Duuuuardo',
    site: '@Duuuuardo',
    cardType: 'summary',
  },
};
export const robotBlockingPageProps = {
  nosnippet: true,
  notranslate: true,
  noimageindex: true,
  noarchive: true,
  maxSnippet: -1,
  maxImagePreview: 'none',
  maxVideoPreview: -1,
};

export default DefaultSeoProps;
