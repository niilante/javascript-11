import './base.less';
import Constants, { Articles, Pages } from './Constants';
import HomePage from './pages/HomePage';
import Article from './pages/ArticlePage';
import React, { Component } from 'react';

const ArticleMap = {
  BABEL: require('../content/Babel/index.md')
};

export default class IndexPage extends Component {
  static getDoctype() {
    return '<!doctype html>';
  }

  static renderToString(props) {
    return IndexPage.getDoctype() +
           React.renderToString(<IndexPage {...props} />);
  }

  constructor(props) {
    super(props);
    this.state = {
      renderPage: !this.props.devMode
    };
  }

  render() {
    // Dump out our current props to a global object via a script tag so
    // when initialising the browser environment we can bootstrap from the
    // same props as what each page was rendered with.
    const browserInitScriptObj = {
      __html: 'window.INITIAL_PROPS = ' + JSON.stringify(this.props) + ';\n'
    };

    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>DžejEs - JavaScript pro web</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
          <link rel="stylesheet" type="text/css" href={this.props.files['main.css']} />
          <base target="_blank" />
        </head>
        <body>
          {this.state.renderPage && this.renderPage()}

          <script dangerouslySetInnerHTML={browserInitScriptObj} />
          <script src={this.props.files['main.js']}></script>
        </body>
      </html>
    );
  }

  renderPage() {
    switch (this.props.location) {
    case Pages.HOME.location:
      return <HomePage />;
    }

    const pageKeys = Object.keys(Articles);
    for (let i = 0; i < pageKeys.length; i++) {
      const key = pageKeys[i];
      const page = Articles[key];
      if (this.props.location === page.location) {
        return <Article example={page}
                        html={ArticleMap[key]} />;
      }
    }

    throw new Error(
      'Page of location ' +
        JSON.stringify(this.props.location) +
        ' not found.'
    );
  }

  componentDidMount() {
    if (!this.state.renderPage) {
      this.setState({
        renderPage: true
      });
    }
  }
}