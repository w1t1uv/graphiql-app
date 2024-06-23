import { FC, ReactNode } from 'react';
import { Header } from './Header';
import Footer from './Footer';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col container mx-auto px-3 min-h-screen">
      <Header />
      <main className="flex justify-center items-center grow relative">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
