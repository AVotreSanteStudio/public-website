import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <h1 className="m-b-20">À Votre Santé Studio</h1>
          <p><span role="img" aria-label="construction emoji">🚧</span></p>
          <p className="m-b-20">Our website is under construction. We will be here soon with our new, <strong>awesome</strong> site.</p>
          {/* <form>
            <p className="m-b-15">Subscribe for updates.</p>
            <label for="email">Email address</label>
            <input name="email" id="email" placeholder="email address" />
            <button className="m-l-10">Subscribe</button>
          </form> */}
        </main>
        <footer>
          <p>&copy; À Votre Santé Studio, LLC 2018 - All rights reserved</p>
        </footer>
      </div>
    );
  }
}

export default App;
