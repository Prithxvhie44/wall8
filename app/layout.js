import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";



const inter = Inter({ subsets : ["latin"]});

export const metadata = {
  title: "Wall8",
  description: "Your finance manager",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${inter.className}`}
      >

        {/*header*/}
      <Header/>
        
        <main className="min-h-screen">{children}</main>
        <Toaster richColors/>

        {/*footer*/}
        <footer className="bg-blue-50 py-12">
        <div className="container mx-auto text-center px-4 text-grey-600">
          <p>Made by Prithviraj </p>
        </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
