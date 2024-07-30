import { Provider } from "react-redux";
//import "./globals.css";
import { Inter } from "next/font/google";
//import store from "@/store/store";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ICST_Works_Management",
  description: "This site belong to ICST",
  viewport: "initial-scale=1, width=device-width",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Head></Head> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
