import './globals.css';
import HomePage from '../components/HomePage';

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <HomePage />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;



