import React from 'react';

import Navigation from './components/Navigation';
import styles from './styles/layout.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout;
