import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { SessionProvider, getSession } from "next-auth/react";

import { Navbar } from "./_components/Navigation/Navbar";
import { Footer } from "./_components/Footer/Footer";


export default async function RootLayout({ children }) {
  const locale = await getLocale();
  const messages = await getMessages();
  //const session = await getSession();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
            <Navbar />
            {children}
            <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
