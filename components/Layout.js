import styles from "../styles/Layout.module.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
