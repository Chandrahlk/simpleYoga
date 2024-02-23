import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aadhyantha Academy",
  description:
    "Join us for yoga, meditation, chess and more at our calming heaven.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
