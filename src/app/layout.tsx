import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat", // Variable untuk CSS jika dibutuhkan
});

export const metadata: Metadata = {
  title: "SIM KKN Universitas Siliwangi | Portal Terpadu",
  description: "Platform manajemen Kuliah Kerja Nyata Universitas Siliwangi berbasis Modern SaaS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${montserrat.className} bg-slate-50 text-slate-800 antialiased selection:bg-unsil-500 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}