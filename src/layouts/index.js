import React from 'react';
import '../assets/scss/main.scss';
import Helmet from 'react-helmet';
import { navigateTo } from 'gatsby-link';

import favicon from '../static/favicon.ico';

class Template extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      loading: 'is-loading',
    }
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
        this.setState({loading: ''});
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
  }

  handleMenuIn = () => {
    // set article display:none if not already set
    if(this.state.articleTimeout) {
      this.setState({
        articleTimeout: false
      });
    }

    // set menu and footer display:flex if not already set
    if(this.state.timeout) {
      this.setState({
        timeout: false
      })
    }

    // set background in-focus if not already set
    if(this.state.isArticleVisible) {
      setTimeout(() => {
        this.setState({
          isArticleVisible: false,
          article: ''
        })
      }, 25);
    }
  }

  handleMenuOut = () => {
    // set background out of focus
    this.setState({
      isArticleVisible: true
    });

    // set menu and footer display:none
    setTimeout(() => {
      this.setState({
        timeout: false
      })
    }, 325);
  }

  handlePageIn = () => {
    // set background out of focus if not already set
    if(!this.state.isArticleVisible) {
      this.setState({
        isArticleVisible: true
      })
    }

    // set menu and footer display:none if not already set
    if(this.state.timeout) {
      setTimeout(() => {
        this.setState({
          timeout: false
        })
      }, 325);
    }

    // set article display:flex
    setTimeout(() => {
      this.setState({
        articleTimeout: true
      })
    }, 125);
  }

  handlePageOut = () => {
    // set article display:none
    this.setState({
      articleTimeout: false
    });
  }

  navigateWithTimeout = (from, to, event) => {
    if(event) event.preventDefault();

    if(from === 'menu') this.handleMenuOut();
    else if(from === 'page') this.handlePageOut();

    setTimeout(() => {
      navigateTo(to);
    }, 300);
  }

  render() {
    const siteTitle = this.props.data.site.siteMetadata.title;
    const siteDescription = this.props.data.site.siteMetadata.description;

    return (
      <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
        <Helmet>
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription} />
            <link key="icon" rel="icon" href={favicon} />
        </Helmet>

        {this.props.children({
          ...this.props,
          article: this.state.article,
          articleTimeout: this.state.articleTimeout,
          // blogData: this.props.data.allMarkdownRemark.edges,
          onPageIn: this.handlePageIn,
          onPageOut: this.handlePageOut,
          onMenuIn: this.handleMenuIn,
          onMenuOut: this.handleMenuOut,
          navigateWithTimeout: this.navigateWithTimeout,
          timeout: this.state.timeout
        })}

        <div id="bg"></div>
      </div>
    )
  }
}

export default Template;

export const siteQuery = graphql`
  query SiteQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;