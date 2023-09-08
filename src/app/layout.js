import './globals.css'
import { Inter } from 'next/font/google'
import parse from 'html-react-parser';
// import fetch from 'node-fetch';

const https = require('https');

const agent = new https.Agent({
  rejectUnauthorized: false,
});


export const metadata = {
  title: 'Skinaro - Beauty Aro Tea Skin Care',
  description: 'Skinaro - Beauty Aro Tea Skin Care',
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_API_KEY}/home`, { cache: 'no-store', method: 'GET', agent: agent })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return (
      <h1 className="text-gray-700 font-luxyna text-center">
        Something Went Wrong With Data !!!
      </h1>
    )
  }

  return res.json()
}
