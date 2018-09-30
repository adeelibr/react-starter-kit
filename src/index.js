// import React from 'react';
// import ReactDOM from 'react-dom';

// import './styles.scss';
// import App from './App';

// ReactDOM.render(<App />, document.getElementById('app'));

/* eslint-disable no-console */
/*
import React from 'react';
import ReactDOM from 'react-dom';

import './myStyles.scss';

class App extends React.Component {
  state = {
    CaptainKirkBio: {},
  };

  componentDidMount() {
    this.onGetKirkBio();
  }

  onGetKirkBio = async () => {
    try {
      const result = await fetch('http://stapi.co/api/v1/rest/character/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: {
          title: 'James T. Kirk',
          name: 'James T. Kirk',
        },
      });
      const resultJSON = await result.json();
      const character = resultJSON.characters[0];
      this.setState({ CaptainKirkBio: character });
    } catch (error) {
      console.log('error', error);
    }
  };

  render() {
    const { CaptainKirkBio } = this.state;
    return (
      <div className="app">
        <img alt="header" src="/dist/images/header.jpg" className="app-header" />
        <p>
          We are a most promising species, Mr. Spock, as predators go. Did you know that? I
          frequently have my doubts. I dont. Not any more. And maybe in a thousand years or so will
          be able to prove it.
        </p>
        <p>- Captain Kirk</p>
        <section>
          {Object.values(CaptainKirkBio).length === 0 ? (
            <p>Loading User Information</p>
          ) : (
            <p style={{ wordBreak: 'break-all' }}>{JSON.stringify(CaptainKirkBio)}</p>
          )}
        </section>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
*/
