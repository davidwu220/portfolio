import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    componentDidMount() {
        this.props.onMenuIn();
    }

    render() {
        return (
            <header id="header" style={this.props.timeout ? {display: 'none'} : {}}>
                <div className="logo">
                    <span className="icon fa-terminal"></span>
                </div>
                <div className="content">
                    <div className="inner">
                        <h1>David's</h1>
                        <p>
                            Hi there, welcome to my site. I hope you find it interesting.<br /> Feel free to contact me if you want to know more about me or just want a chat!
                        </p>
                    </div>
                </div>
                <nav>
                    <ul>
                        <li><a href="/intro" onClick={(event) => this.props.navigateWithTimeout("menu", "/intro", event)}>Intro</a></li>
                        <li><a href="/work" onClick={(event) => this.props.navigateWithTimeout("menu", "/work", event)}>Work</a></li>
                        {/* <li><a href="/resume" onClick={(event) => this.props.navigateWithTimeout("menu", "/resume", event)}>Résumé</a></li> */}
                        <li><a href="/blog" onClick={(event) => this.props.navigateWithTimeout("menu", "/blog", event)}>Blog</a></li>
                        <li><a href="/contact" onClick={(event) => this.props.navigateWithTimeout("menu", "/contact", event)}>Contact</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header;