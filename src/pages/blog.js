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

    let close = <div className="close" onClick={() => this.props.navigateWithTimeout('page', '/')}></div>;
    let { edges } = this.props.data.allMarkdownRemark;

    return (
      <div id="wrapper">
        <div id="main">
          <article id="blog" className={this.props.articleTimeout ? 'timeout' : ''}>
            <h2 className="major">Blog</h2>
            <span className="image main"><img src={pic03} alt="" /></span>
            <ul className="alt">
              {edges.map(({node}) => (
                <li key={node.id}>
                  <header>
                    <h3>{node.frontmatter.title}</h3>
                    <p className="date">{node.frontmatter.date} - {node.timeToRead} minute read</p>
                  </header>
                  <p>{node.excerpt}</p>
                  <a href={node.frontmatter.slug} onClick={(event) => this.props.navigateWithTimeout('page', node.frontmatter.slug, event)}>Continue reading...</a>
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

export const blogQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            slug
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`;