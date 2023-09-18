import './globals.css'
import parse from 'html-react-parser';
// import fetch from 'node-fetch';

const https = require('https');

const agent = new https.Agent({
  rejectUnauthorized: false,
});


export const metadata = {
  title: 'Skinaro - Beauty Aro Tea Skin Care',
  description: 'Skinaro - Beauty Aro Tea Skin Care dengan kandungan Ekstrak Teh & Glycolic Acid yang dapat membantu mencerahkan dan membersihkan wajah',
  keywords: ['Skinaro', 'Skincare', 'Beauty'],
  applicationName: 'Skinaro',
  authors: [{ name: 'CPXi Asia' }, { name: 'CPXi Asia', url: 'https://skinaro.id' }],
  creator: 'CPXi Asia',
  publisher: 'CPXi Asia',
  metadataBase: new URL('https://skinaro.id'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'id-ID': '/id-ID',
    },
  },
  openGraph: {
    title: 'Next.js',
    description: 'Skinaro - Beauty Aro Tea Skin Care dengan kandungan Ekstrak Teh & Glycolic Acid yang dapat membantu mencerahkan dan membersihkan wajah',
    url: 'https://skinaro.id',
    siteName: 'Skinaro',
    images: [
      {
        url: 'https://skinaro.id/images/Logo-with-Tagline.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://skinaro.id/images/Logo-with-Tagline.png',
        width: 1800,
        height: 1600,
        alt: 'Skinaro Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default async function RootLayout({ children }) {
  const scriptString = `<script type="text/javascript" async="" src="https://www.googletagmanager.com/gtag/js?id=DC-10827733&amp;l=dataLayer&amp;cx=c"></script>
          <script async src="https://www.googletagmanager.com/gtag/js?id=DC-10203694"></script>
          <script async src="https://www.googletagmanager.com/gtag/js?id=DC-10203694"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'DC-10203694');
          </script>
        <script>
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '755549682423303');
        fbq('track', 'PageView');
        </script>
        <noscript><img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=755549682423303&ev=PageView&noscript=1"
        /></noscript>
          `;
  const { data } = await getData()

  return (
    <html lang="en">
      <head>
        {parse(data?.setting.head_script)}
        <link rel="icon" href="/favicon-skinaro.png" />
        {/* <meta description={data.title} />
        <title>{data.title}</title> */}
      </head>
      <body>
        {children}
        {parse(data?.setting.body_script)}
      </body>
    </html>
  )
}
async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_API_KEY}/home`, { next: { revalidate: 36000 }, method: 'GET', agent: agent })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
