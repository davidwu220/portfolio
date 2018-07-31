import React, { Component } from 'react';
import PropTypes from 'prop-types';

import pic02 from '../images/pic02.jpg';
import resume from '../static/DavidWu.pdf';

class Work extends Component {
  componentDidMount() {
    this.props.onPageIn();
  }

  render() {

    let close = <div className="close" onClick={(event) => this.props.navigateWithTimeout('page', '/')}></div>;

    return (
      <div id="wrapper">
        <div id="main">
          <article id="work" className={this.props.articleTimeout ? 'timeout' : ''}>
            <h2 className="major">Work</h2>
            <span className="image main"><img src={pic02} alt="" /></span>
            <p>Check out my pass projects and working experiences below, or you can <a href={resume} target="_blank">download my resume (PDF)</a>.</p>
            <h4>Projects</h4>
            <table>
              <tbody>
                <tr>
                  <td><h4><a href="https://poolpal.wudavid.com/">PoolPal</a></h4></td>
                  <td>Cross-platform mobile application for easily arranging carpool rides. Generates the quickest and easiest route to a final destination while allowing the driver to pick up all the passengers along the way.</td>
                  <td>​ionic Framework, Firebase, HTML, CSS, JavaScript, Google Maps API</td>
                </tr>
                <tr>
                  <td><h4>NEST</h4></td>
                  <td>Award-winning senior design project developing an Airline Operations Center System. Provides a front-end interface for a real-world control center in monitoring 100+ UAVs at the same time.</td>
                  <td>C#, ASP.NET framework, REST API, Microsoft SQL</td>
                </tr>
              </tbody>
            </table>
            <h4>Working Experiences</h4>
            <table>
              <tbody>
                <tr>
                  <td><h4>Freelance Web Developer</h4><i>Sep. 2017 - Present</i></td>
                  <td>Developed and deployed “st_life.singtaola.com” on a remote server for Sing Tao Daily Newspapers using the MERN stack. Includes a control center for their staff to manage and monitor contents on the main site.</td>
                  <td>HTML, CSS, MERN (MongoDB, Express.js, React, and Node.js) stack, IaaS (Linux Ubuntu Server deployed on DigitalOcean)</td>
                </tr>
                <tr>
                  <td><h4>Princess Cruises</h4><i>Jun. 2016 - Aug. 2016</i></td>
                  <td>Collaborated with the financial support team in developing offline functionality to an online web application.</td>
                  <td>​HTML, CSS, JavaScript, ServiceWorker, IndexedDB, Oracle Application Express (APEX), Oracle Database Express.</td>
                </tr>
              </tbody>
            </table>
            {close}
          </article>
        </div>
      </div>
    )
  }
}

Work.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Work;