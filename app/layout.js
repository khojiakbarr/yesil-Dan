import { Inter } from "next/font/google";
import "./globals.css";
import "@/src/scss/main.scss";
import Footer from "@/src/components/Footer/Footer";
import Navbar from "@/src/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yesil Dan",
  description:
    "Ilg'or texnologiyalarga ega kompaniya ga faqat un va un mahsulotlarini eksport qiladi Qirg'iziston, Tojikiston va Afg'oniston, balki O‘zbekiston ichki bozorini ta’minlaydi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <--- developer: https://github.com/khojiakbarr --/> */}
      <body className={inter.className}>
        <header className=" absolute top-0 left-0 w-full">
          <Navbar />
        </header>
        <main style={{ overflowX: "hidden" }}>{children}</main>
        <footer className="footer">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
