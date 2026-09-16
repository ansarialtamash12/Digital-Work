
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingSocialIcons from "./components/FloatingSocialIcons";
import Script from "next/script";

export const metadata = {
  title: "Learn Forex Trading for Free & Become a Successful IB | Forpips",
  description: "Kickstart your forex journey with free trading education and learn how to become a successful Introducing Broker (IB). Learn, grow, and earn with Forpips today.",
  keywords: "forpips, forpips forex education, forpips IB education, forpips education, Earn IB Commissions, forpips IB program",
  robots: "index,follow",
  authors: [{ name: "Forpips" }],
  copyright: "Forpips Education",
  openGraph: {
    title: "Learn Forex Trading for Free & Become a Successful IB | Forpips",
    description: "Kickstart your forex journey with free trading education and learn how to become a successful Introducing Broker (IB). Learn, grow, and earn with Forpips today.",
    url: "https://www.forpips.com/",
    siteName: "Forpips",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630,
        alt: "Forpips - Learn Forex Trading & Become a Successful IB",
      },
    ],
  },
  alternates: {
    canonical: "https://www.forpips.com/",
    languages: {
      en: "https://www.forpips.com/",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"

    >
      <head>
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NRPKVWXN');`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NRPKVWXN"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Header />
        {children}
        <Footer />
        <FloatingSocialIcons />
      </body>
    </html>
  );
}
