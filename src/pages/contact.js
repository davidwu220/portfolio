import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Helmet from 'react-helmet';

class Contact extends Component {
  componentDidMount() {
    this.props.onPageIn();
  }

  render() {

    let close = <div className="close" onClick={(event) => this.props.navigateWithTimeout('page', '/')}></div>;

    return (
      <div id="wrapper">
        <Helmet>
          <style>{`
            .grecaptcha-badge {
              z-index: 10;
            }
          `}</style>
          <script>{`
            function onSubmit(token) {
              document.getElementById("contact-form").submit();
            }
            function validate(event) {
              event.preventDefault();
              grecaptcha.execute();
            }
          `}
          </script>
          <script src="https://www.google.com/recaptcha/api.js" async defer></script>
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
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="4"></textarea>
              </div>
              <ul className="actions">
                <li><input type="submit" value="Send Message" className="special" onClick={(e) => validate(e)} /></li>
                <li><input type="reset" value="Reset" /></li>
              </ul>
            </form>
            <ul className="icons">
              <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
              <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
              <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
              <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
            </ul>
            {close}
          </article>
          
          <div id='recaptcha' className="g-recaptcha"
            data-sitekey="6Ld3PmYUAAAAAP231FYNvfKESWdrqUkskPxMzDrU"
            data-callback="onSubmit"
            data-size="invisible"></div>
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