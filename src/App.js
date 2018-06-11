import React, { Component } from 'react';

import './App.css';
import Header from './Header'
import ArticleHeader from './ArticleHeader'
import ArticleBody from './ArticleBody'
import ArticleLinks from './ArticleLinks'
import Sponsor from './Sponsor'
import Ads from './Ads'
import Footer from './Footer'

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
          <Ads />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
