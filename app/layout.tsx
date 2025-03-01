import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header/Heaader";
import Footer from "./components/Footer/Footer";
import Fonts from "./components/Fonts/Fonts";

export const metadata: Metadata = {
  title: "Enigma Comics HQ",
  description: "Online headquarters of Enigma Comics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className="min-h-[800px]"
      >
        <Fonts>
          <Header />
            {children}
          <Footer />
        </Fonts>
      </body>
    </html>
  );
}
