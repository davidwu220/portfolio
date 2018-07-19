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
            <h2>About</h2>
            <p>
              I was born in Rolla, Missouri in 1990; my family had moved to Taiwan when I was about 3 years-old, and I came back to US in 2010 to attend college. I graduated from California State University, Northridge with a Bachelor of Science degree in Computer Science in 2016.<br />
              My first working experience was a summer internship at Princess Cruises as a web developer. My teammate and I were asked to give their web applications the offline capability so that their crew can use the apps as usual without internet connections or when the connection is slow or unstable (read more about it here). I started freelancing as a full-stack web developer and helped SingTao News built their site using the MERN (MongoDB, Express.js, React.js, and Node.js) stack and deployed the site on a Linux server on DigitalOcean (IaaS) (read more about it here).<br />
              During my free time, I like to work on my personal projects which are usually focused on bringing convenience to our routine tasks. I also like to hang out with friends and maybe hunt down hot/new restaurants and coffee shops. AND, I play MOBA games and watch YouTube, of course.<br />
              Feel free to <a href='/contact' onClick={(event) => this.props.navigateWithTimeout('page', '/contact', event)}>contact me</a> if you want to know more about me or just want a quick chat!
            </p>
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