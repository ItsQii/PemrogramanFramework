import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/layouts/navbar';
import { SessionProvider } from "next-auth/react";
import Script from 'next/script';
import dynamic from 'next/dynamic';

const AppShell = dynamic(() => import('@/components/layouts/Appshell'), {
  ssr: false,
});

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      {/* POIN 3: Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-123456789"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-123456789');
        `}
      </Script>

      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    </SessionProvider>
  );
};