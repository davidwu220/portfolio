import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Recaptcha from 'react-recaptcha';

class Contact extends Component {
  componentDidMount() {
    this.props.onPageIn();
  }

  executeCaptcha = (e) => {
    e.preventDefault();
    this.recaptchaInstance.execute();
  }

  verifyCallback = (token) => {
    document.getElementById("contact-form").submit();
  }

  render() {

    let close = <div className="close" onClick={() => this.props.navigateWithTimeout('page', '/')}></div>;

    return (
      <div id="wrapper">
        <Helmet>
          <style>{`
            .grecaptcha-badge {
              z-index: 10;
            }
          `}</style>
        </Helmet>

        <div id="main">
          <article id="contact" className={this.props.articleTimeout ? 'timeout' : ''}>
            <h2 className="major">Contact</h2>
            <form id='contact-form' method="post" action="https://www.briskforms.com/go/b39c731c225796dcb77619376be15ed0">
              <div className="field half first">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="field half">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="field">
                <label htmlFor="company">Company</label>
                <input type="text" name="company" id="company" />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="4"></textarea>
              </div>
              <ul className="actions">
                <li><input type="submit" value="Send Message" className="special" onClick={(e) => this.executeCaptcha(e)} /></li>
                <li><input type="reset" value="Reset" /></li>
              </ul>
            </form>
            <ul className="icons">
              <li><a href="https://www.linkedin.com/in/davidwaynewu/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
              <li><a href="https://www.github.com/davidwu220/" className="icon fa-github"><span className="label">GitHub</span></a></li>
            </ul>
            {close}
          </article>

          <Recaptcha
            ref={e => this.recaptchaInstance = e}
            sitekey="6Ld3PmYUAAAAAP231FYNvfKESWdrqUkskPxMzDrU"
            theme="dark"
            size="invisible"
            verifyCallback={this.verifyCallback}
          />
        </div>
      </div>
    )
  }
}

Contact.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Contact;