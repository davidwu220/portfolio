import React, { Component } from 'react';
import PropTypes from 'prop-types';

import pic01 from '../images/pic01.jpg';
import pic02 from '../images/pic02.jpg';
import pic03 from '../images/pic03.jpg';

require("prismjs/themes/prism-tomorrow.css");

class BlogTemplate extends Component {
  componentDidMount() {
    this.props.onPageIn();
  }

  render() {

    let close = <div className="close" onClick={() => this.props.navigateWithTimeout('page', '/blog')}></div>;
    let { markdownRemark } = this.props.data; // data.markdownRemark holds our post data
    let { frontmatter, html, timeToRead } = markdownRemark;

    return (
      <div id="wrapper">
        <div id="main">
          <article id="blog" className={this.props.articleTimeout ? 'timeout' : ''}>
            <h2 className="major">{frontmatter.title}</h2>
            <span className="image blog_page"><img src={pic03} alt="" /></span>
            <header>
              <p>{frontmatter.date} - {timeToRead} minute read</p>
            </header>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <a href="/" onClick={(event) => this.props.navigateWithTimeout('page', '/', event)}>Let's go back home...</a>
            {close}
          </article>
        </div>
      </div>
    )
  }
}

export default BlogTemplate;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { slug: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
      timeToRead
    }
  }
`;