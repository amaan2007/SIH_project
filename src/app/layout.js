import { Inter } from "next/font/google";
import "./globals.css";

// Setting up the Inter font
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Career Dashboard",
  description: "AI-Powered Career Intelligence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-slate-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}