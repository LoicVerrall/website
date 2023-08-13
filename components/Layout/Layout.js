import styles from "./styles.module.css";
import Footer from "./Footer";

export const Layout = ({ children }) => (
  <div className={styles.container}>
    {children}
    <Footer />
  </div>
);

export default Layout;
