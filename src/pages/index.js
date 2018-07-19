import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const IndexPage = (props) => (
  <div id="wrapper">
    <Header
      onMenuIn={props.onMenuIn}
      onMenuOut={props.onMenuOut}
      timeout={props.timeout}
      navigateWithTimeout={props.navigateWithTimeout}
    />
    <Footer timeout={props.timeout} />
  </div>
)

export default IndexPage;
