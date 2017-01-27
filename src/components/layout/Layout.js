import React from 'react';

import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import styles from './layout.css';

export default props => (
  <div className={styles.layout}>
    <Header />
    <Nav />
    <main className={styles.content}>
      { props.children }
    </main>
    <Footer />
  </div>
);

