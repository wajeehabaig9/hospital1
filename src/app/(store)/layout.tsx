import type { Metadata } from 'next';
import  "../globals.css"
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';


export const metadata: Metadata = {
  title: 'Clarington',
  description: 'Just Practice',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-oswald " >
        <Header  />
        {children}
        <Footer />
                {/* Add ScrollToTopButton below the Footer */}
      </body>
    </html>
  );
}

