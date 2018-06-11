import React, { Component } from 'react';

import './App.css';
import Header from './Header'
import ArticleHeader from './ArticleHeader'
import ArticleBody from './ArticleBody'
import ArticleLinks from './ArticleLinks'
import Sponsor from './Sponsor'
import Ads from './Ads'
import Footer from './Footer'
import Ad1 from './Ad1'
import Ad2 from './Ad2'
import Ad3 from './Ad3'
import Ad4 from './Ad4'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="expanded row">
          <div className="large-8 medium-12 columns article">
            <ArticleHeader />
            <ArticleBody />
            <ArticleLinks />
          </div>
          <Sponsor />
          <Ads>
            <Ad1 />
            <Ad2 />
            <Ad3 />
            <Ad4 />
          </Ads>  
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
