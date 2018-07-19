import React from 'react'

let inlineStyle = {
  'backgroundImage': 'radial-gradient(rgba(0, 0, 0, 0.25) 25%, rgba(0, 0, 0, 0) 55%)',
  'textAlign': 'center'
}

const NotFoundPage = () => (
  <div id="wrapper">
    <div id="main">
      <div style={inlineStyle}>
        <h1>NOT FOUND</h1>
        <p>
          You just hit a route that doesn&#39;t exist... the sadness.<br />
          <a href='/'>Let's go back home, shall we?</a>
        </p>
      </div>
    </div>
  </div>
)

export default NotFoundPage
