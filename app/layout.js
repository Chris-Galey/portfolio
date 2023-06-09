import "./globals.css";
import { Roboto_Mono, Schibsted_Grotesk } from "next/font/google";
import Layout from "./components/Layout";

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-secondary",
});
const schibsted_grotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-primary",
});

export const metadata = {
  title: "Christopher Galey",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${roboto_mono.variable} ${schibsted_grotesk.variable}`}
    >
      <body>
        <Layout>
          <main>{children}</main>
        </Layout>
      </body>
    </html>
  );
}
