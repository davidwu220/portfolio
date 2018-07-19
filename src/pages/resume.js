import React, { Component } from 'react';
import PropTypes from 'prop-types';

import pic03 from '../images/pic03.jpg';

class Resume extends Component {
  componentDidMount() {
    this.props.onPageIn();
  }

  render() {

    let close = <div className="close" onClick={(event) => this.props.navigateWithTimeout('page', '/')}></div>;

    return (
      <div id="wrapper">
        <div id="main">
          <article id="resume" className={this.props.articleTimeout ? 'timeout' : ''}>
            <h2 className="major">Resume</h2>
            <span className="image main"><img src={pic03} alt="" /></span>
            <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
            {close}
          </article>
        </div>
      </div>
    )
  }
}

Resume.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Resume;