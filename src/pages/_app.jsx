import '../config/global.css';
import { DefaultSeo } from 'next-seo';
import DefaultSeoProps from '../config/SEO/DefaultSeoProps';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <DefaultSeo {...DefaultSeoProps} />
      <Component {...pageProps} />
    </div>
  );
}
