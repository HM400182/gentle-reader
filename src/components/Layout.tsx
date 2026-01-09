import { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import useScrollToTop from '@/hooks/useScrollToTop';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  useScrollToTop();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
