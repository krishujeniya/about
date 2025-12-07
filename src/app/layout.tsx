import type { Metadata } from 'next';
import { Belleza, Alegreya, Noto_Sans_Gujarati } from 'next/font/google';
import './globals.css';
import { ClientProviders } from '@/components/client-providers';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';

const belleza = Belleza({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  variable: '--font-belleza',
});

const alegreya = Alegreya({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'], // Reduced from 4 to 2 weights
  variable: '--font-alegreya',
});

const notoSansGujarati = Noto_Sans_Gujarati({
  subsets: ['gujarati', 'latin'],
  display: 'swap',
  weight: ['400', '500', '700'], // Reduced from 9 to 3 weights
  variable: '--font-noto-sans-gujarati',
});


export const metadata: Metadata = {
  title: siteConfig.site.title,
  description: siteConfig.site.description,
  keywords: [...siteConfig.site.keywords],
  authors: [{ name: siteConfig.site.author }],
  creator: siteConfig.site.author,
  openGraph: {
    type: siteConfig.openGraph.type,
    locale: siteConfig.openGraph.locale,
    url: siteConfig.baseUrl,
    title: siteConfig.site.title,
    description: siteConfig.site.description,
    siteName: siteConfig.site.name,
    images: [
      {
        url: siteConfig.openGraph.image.url,
        width: siteConfig.openGraph.image.width,
        height: siteConfig.openGraph.image.height,
        alt: siteConfig.openGraph.image.alt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.site.title,
    description: siteConfig.site.description,
    images: [siteConfig.openGraph.image.url],
  },
  robots: {
    index: true,
    follow: true,
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(
        "font-body antialiased",
        belleza.variable,
        alegreya.variable,
        notoSansGujarati.variable
      )}>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}

