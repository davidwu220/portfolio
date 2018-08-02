import React, { Component } from 'react';

class ThankYou extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      countdown: 10
    }
  }
  
  componentDidMount() {
    this.props.onPageIn();

    this.countdownTimerID = setInterval(() => {
      if(this.state.countdown > 1) {
        this.setState(prevState => ({
          countdown: prevState.countdown-1
        }));
      } else {
        clearInterval(this.countdownTimerID);
        this.props.navigateWithTimeout('page', '/');
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.countdownTimerID);
  }

  render() {
    let close = <div className="close" onClick={() => this.props.navigateWithTimeout('page', '/')}></div>;

    return (
      <div id="wrapper">
        <div id="main">
          <article className={this.props.articleTimeout ? 'timeout' : ''}>
            <h2>Awesome!</h2>
            <p>
              Thanks for contacting me! I'll get back to you ASAP :)<br />
              Auto redirecting in {this.state.countdown} second(s).
            </p>
            {close}
          </article>
        </div>
      </div>
    );
  }
}

export default ThankYou;