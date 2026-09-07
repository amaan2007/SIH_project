import { Inter } from "next/font/google";
import "./globals.css";

// Setting up the Inter font
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
   title: 'Praxi — Learn. Build. Apply',
  description: 'Praxi',
  icons: {
    icon: '/praxi-icon.png',
  },
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