import React, { PureComponent } from 'react';
import avatar from '@/assets/avatar.png';
import logo from '@/assets/logo.svg';
import rwbm from '@/assets/RWBM.jpeg';
import './app.css';

class App extends PureComponent {
  render() {
    return (
      <div>
        <h1>React App</h1>
        <p>[webpack] Image&lt;4kb: DataURL</p>
        <img src={avatar} alt="avatar" />
        <p>[webpack] svg: file-loader</p>
        <img src={logo} alt="logo" />
        <p>[webpack] Image&gt;4kb: file-loader</p>
        <img src={rwbm} alt="rwbm" />
      </div>
    );
  }
}

export default App;
