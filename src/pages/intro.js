import React, { Component } from 'react';
import PropTypes from 'prop-types';

import pic01 from '../images/pic01.jpg';

class Intro extends Component {
  componentDidMount() {
    this.props.onPageIn();
  }

  render() {

    let close = <div className="close" onClick={(event) => this.props.navigateWithTimeout('page', '/')}></div>;

    return (
      <div id="wrapper">
        <div id="main">
          <article id="intro" className={this.props.articleTimeout ? 'timeout' : ''}>
            <h2 className="major">Intro</h2>
            <span className="image main"><img src={pic01} alt="" /></span>
            <p>Hi there, I'm David and welcome to my site. I'm a full-stack web developer based in West LA. I’ve worked on various projects such as cross-platform mobile application, full-stack web application, and .NET web application. If you want to learn more about my previous projects, please check out my <a href="/work" onClick={(event) => this.props.navigateWithTimeout('page', '/work', event)}>awesome work</a>.</p>
            {close}
          </article>
        </div>
      </div>
      
    )
  }
}

Intro.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Intro;