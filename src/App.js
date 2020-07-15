import React from 'react';
import Header from './components/header'
import Main from './components/main'
import styles from './app.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
