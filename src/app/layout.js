import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AgeGateModal from "@/components/AgeGateModal";

export const metadata = {
  title: "1 Above",
  description: "1 Above official site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AgeGateModal />
        <Header />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
