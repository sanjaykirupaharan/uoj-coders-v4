import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";

const inter = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "UoJCoders v3.0",
  description:
    "Coding competition referred as UoJCoders is aimed to enhance the problem-solving skills and programming skills among the undergraduate students in computing and that will provide efficient programmers. The competition is a 12-hours inter-university coding competition that was inspired by IEEEXtreme. The competition is open to all undergraduate students in Sri Lanka, especially for those who follow degrees in the computing discipline. UoJCoders v2.0 is planned to be held on 4th and 5th of April 2020 in the Department of Computer Science, University of Jaffna.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-neutral-950`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <Navbar />
          <div className="overflow-x-hidden relative">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
