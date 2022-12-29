import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "../../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className='bg-primary'>
        <main className=''>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
