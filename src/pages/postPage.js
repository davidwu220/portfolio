import React, { Component } from 'react';
import PropTypes from 'prop-types';

import pic01 from '../images/pic01.jpg';
import pic02 from '../images/pic02.jpg';
import pic03 from '../images/pic03.jpg';

class PostPage extends Component {
  componentDidMount() {
    this.props.onPageIn();
  }

  render() {

    let close = <div className="close" onClick={(event) => this.props.navigateWithTimeout('page', '/blog')}></div>;
    let blogDataArr = this.props.data.allMarkdownRemark.edges;

    return (
      <div id="wrapper">
        <div id="main">
          <article id="blog" className={this.props.articleTimeout ? 'timeout' : ''}>
            <h2 className="major">Blog</h2>
            <span className="image blog_page"><img src={pic03} alt="" /></span>
            {blogDataArr.map(({node}) => (
              <div key={node.id}>
                <header>
                  <h3>{node.frontmatter.title}</h3>
                  <p>{node.frontmatter.date} - {node.timeToRead} minute read</p>
                </header>
                <div dangerouslySetInnerHTML={{ __html: node.html }} />
              </div>
            ))}
            <a href="/" onClick={(event) => this.props.navigateWithTimeout('page', '/', event)}>Let's go back home...</a>
            {close}
          </article>
        </div>
      </div>
    )
  }
}

PostPage.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default PostPage;

export const blogQuery = graphql`
  query BlogQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          html
          excerpt
          timeToRead
        }
      }
    }
  }
`;