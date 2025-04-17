import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const inter = Inter({ subsets : ["latin"]});

export const metadata = {
  title: "Wall8",
  description: "Your finance manager",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-gradient-to-b from-[#e0f7fa] to-[#ffffff]">
          {/* Header */}
          <Header />

          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          {/* Footer */}
          <footer className="bg-[#1e3a8a] py-12 text-white">
            <div className="container mx-auto text-center px-4">
              <p className="mb-4">Made by Prithviraj ❤️</p>
              <div className="flex justify-center space-x-6">
                <a href="https://www.linkedin.com/in/prithviraj44/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition duration-300">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://github.com/Prithxvhie44?tab=repositories" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition duration-300">
                  <FaGithub size={24} />
                </a>
                <a href="https://www.instagram.com/prithxvhie.44/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition duration-300">
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
