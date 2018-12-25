import React, { PureComponent } from 'react';
import avatar from '@/assets/avatar.png';
import logo from '@/assets/logo.svg';
import rwbm from '@/assets/RWBM.jpeg';
import styles from './app.css';

class App extends PureComponent {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="app-box">
        <h1>React App</h1>
        <p>[webpack] Image&lt;4kb: DataURL</p>
        <div className={styles.avatarArea}>
          <h2>Avatar</h2>
          <img src={avatar} alt="avatar" />
        </div>
        <p>[webpack] svg: file-loader</p>
        <img src={logo} alt="logo" />
        <p>[webpack] Image&gt;4kb: file-loader</p>
        <img src={rwbm} alt="rwbm" />
      </div>
    );
  }
}

export default App;
