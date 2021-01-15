import React from "react";
import Navbar from "../../components/Navbar/Navbar";
//arriba tenemos algo que se conoce como 'import hell'
//remplazamos por path aliases js

// import styles from "./layout.module.css";
// CSS Module.

const Layout = ({ children }) => {
  return (
    // <div className={styles.container}>
    <div>
      <Navbar />
      {children}
      <footer className="container">This is the footer</footer>
      <style jsx>{`
        .container {
          background: red;
        }
      `}</style>
    </div>
  );
};

export default Layout;
