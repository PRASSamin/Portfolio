import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/nav";
import { Theme } from "./components/ThemeProvider";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      style={{ scrollBehavior: "smooth", overflowX: "hidden" }}
      lang="en"
      suppressHydrationWarning={true}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Theme>
          <div className="fixed hidden dark:block top-0 z-0 hue-rotate-60 grad-travel brightness-200">
            <img
              className="w-[500px] shadow-black/5 rounded-large"
              src={"/purple.png"}
              alt="gradient"
            />
          </div>
          <div className="fixed hidden dark:block xl:-top-[30%] -right-[60%] 2xl:-top-[60%] 2xl:-right-[45%] z-0 rotate-12">
            <img
              className=" shadow-black/5 rounded-large"
              src={"/pink-purple-grad.png"}
              alt="gradient"
            />
          </div>
          <div className="fixed hidden dark:block -bottom-[30%] -left-[30%] z-0 ">
            <img
              className=" shadow-black/5  rounded-large"
              src={"/purple.png"}
              alt="gradient"
            />
          </div>
          <div className="w-full backdrop-blur-[50px] dark:bg-black/50 bg-white fixed top-0 left-0 h-screen z-[1]" />
          <NavBar />
          <main className="z-20 relative">{children}</main>
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
