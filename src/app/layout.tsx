import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Juicy Hub | Pure Fruit. Freshly Pressed. Made Daily.",
  description: "Handcrafted fresh juices, smoothies, milkshakes, teas and healthy beverages made daily with real ingredients. Experience Scarborough's premium wellness destination.",
  keywords: ["fresh juice", "smoothies", "milkshakes", "Scarborough", "healthy beverages", "Juicy Hub", "Toronto juice bar"],
  authors: [{ name: "Juicy Hub" }],
  creator: "Juicy Hub",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://juicyhub.ca",
    title: "Juicy Hub | Zero Compromise Fresh Juice",
    description: "Experience the taste of real ingredients with 100% fresh juices, smoothies and healthy beverages.",
    siteName: "Juicy Hub",
  },
  twitter: {
    card: "summary_large_image",
    title: "Juicy Hub | Zero Compromise Fresh Juice",
    description: "Experience the taste of real ingredients with 100% fresh juices, smoothies and healthy beverages.",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "JuiceShop",
              "name": "Juicy Hub",
              "image": "https://juicyhub.ca/logo.png",
              "description": "Premium fresh juices, smoothies, and healthy beverages in Scarborough.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "3331 Markham Rd Unit 117",
                "addressLocality": "Scarborough",
                "addressRegion": "ON",
                "postalCode": "M1X 1S8",
                "addressCountry": "CA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 43.8350875,
                "longitude": -79.2503986
              },
              "url": "https://juicyhub.ca",
              "telephone": "+14164340909",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                  ],
                  "opens": "10:00",
                  "closes": "22:00"
                }
              ]
            })
          }}
        />
      </head>
      <body className={`min-h-screen bg-white text-[#111111] flex flex-col ${geistSans.variable} ${geistMono.variable} font-sans`}>
        <div className="flex-1 flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
