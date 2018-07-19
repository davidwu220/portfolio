import React, { Component } from 'react';
import PropTypes from 'prop-types';

import pic01 from '../images/pic01.jpg';
import pic02 from '../images/pic02.jpg';
import pic03 from '../images/pic03.jpg';

class Blog extends Component {
  componentDidMount() {
    this.props.onPageIn();
  }

  render() {

    let close = <div className="close" onClick={(event) => this.props.navigateWithTimeout('page', '/')}></div>;
    let blogDataArr = this.props.blogData;

    return (
      <div id="wrapper">
        <div id="main">
          <article id="blog" className={this.props.articleTimeout ? 'timeout' : ''}>
            <h2 className="major">Blog</h2>
            <span className="image main"><img src={pic03} alt="" /></span>
            <ul className="alt">
              <a href="/postPage" onClick={(event) => this.props.navigateWithTimeout('page', '/postPage', event)}>Read the post...</a>
              {blogDataArr.map(({node}) => (
                <li key={node.id}>
                  <header>
                    <h3>{node.frontmatter.title}</h3>
                    <p className="date">{node.frontmatter.date} - {node.timeToRead} minute read</p>
                  </header>
                  <p>{node.excerpt}</p>
                </li>
              ))}
            </ul>
            {close}
          </article>
        </div>
      </div>
    )
  }
}

Blog.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Blog;