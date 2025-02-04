import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Footer from "@/components/footer";
import { darkTheme } from "./(auth)/styles/styles";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Budget Buddy",
  description: "One stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={darkTheme}>
      <html lang="en">
        <head>
          <link rel="icon" href="/icon.svg" sizes="any" />
        </head>
        <body className={`${inter.className} bg-gray-950`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
