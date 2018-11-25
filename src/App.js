import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    email: '',
    error: '',
    wasSubmitted: false,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = () => {
    const email = this.state.email;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: this.encode({ 'form-name': 'subscribe', email }),
    })
      .then(this.wasSuccessful = true)
      .catch(error => this.setState({ error: error }));
    this.wasSubmitted = true;
  }

  validateForm = (event) => {
    event.preventDefault();
    if(this.emailIsValid(this.state.email)) {
      this.setState({ error: '' });
      this.handleSubmit();
    } else {
      this.setState({ error: 'You must provide a valid email address.' });
    }
  }

  emailIsValid = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  encode = (data) => {
    return Object.keys(data)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
      .join('&');
  }

  render() {
    return (
      <div className="App">
        <main>
          <h1 className="m-b-20">À Votre Santé Studio</h1>
          <p><span role="img" aria-label="construction emoji">🚧</span></p>
          <p className="m-b-20">Our website is under construction. We will be here soon with our new, <strong>awesome</strong> site.</p>
          <div className="form__container">
            {!this.wasSubmitted &&
              <form onSubmit={this.validateForm}>
                <p className="m-b-15">Subscribe for updates.</p>
                <label htmlFor="email">Email address</label>
                <input name="email" id="email" type="email" placeholder="email address" value={this.state.email} onChange={this.handleChange} />
                <button className="m-l-10">Subscribe</button>
              </form>
            }
            {this.wasSubmitted &&
              <p>Thank you for subscribing. We will keep you up to date with any news!</p>
            }
          </div>
        </main>
        <footer>
          <p>&copy; À Votre Santé Studio, LLC 2018 - All rights reserved</p>
        </footer>
      </div>
    );
  }
}

export default App;
