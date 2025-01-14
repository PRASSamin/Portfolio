import "../globals.css";
import ChatNavBar from "./components/nav";
export { metadata } from "..//layout";
import { poppins } from "@/lib/fonts";
import { Theme } from "../context/ThemeProvider";
import { ClerkProvider } from "@clerk/nextjs";

export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html
        style={{ scrollBehavior: "smooth", overflowX: "hidden" }}
        lang="en"
        suppressHydrationWarning={true}
      >
        <Theme>
          <body className={`${poppins.className} max-h-screen antialiased `}>
            <ChatNavBar />
            <main className="z-20 relative max-h-[calc(100vh-64px)]">
              {children}
            </main>
          </body>
        </Theme>
      </html>
    </ClerkProvider>
  );
}
