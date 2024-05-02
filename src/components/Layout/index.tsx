import Footer from './Footer';
import Navbar from './Navbar';
const Layout = ({ children }: any) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
