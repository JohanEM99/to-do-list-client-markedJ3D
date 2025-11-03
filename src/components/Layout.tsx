// ========================================
// src/components/Layout/Layout.tsx
// ========================================
import { type ReactNode } from 'react';
import Header from '../styles/Header.scss';
import Footer from '../styles/Footer.scss';
import '../styles/Layout.scss';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;