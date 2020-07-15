import React from 'react';
import Header from './components/header'
import Main from './components/main'
import styles from './app.module.css'
import Footer from './components/footer';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div>
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
