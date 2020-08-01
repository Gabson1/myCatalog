import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { Button } from "semantic-ui-react";

import { cookieAction } from "../../actions/cookieAction";

import './cookie.css';

const Cookie = () => {
  const [showCookie, setShowCookie] = useState(true)

  const loginButtonStyles = `${showCookie ? 'showCookieWrapper' : 'dismissCookieWrapper'}`;

  const updateStoreWithCookieConsent = (e) => {
    e.preventDefault();

    setShowCookie(false)

    const payload = {
      showCookie: showCookie.valueOf(),
    };

    cookieAction(payload)
  };

  return (
    <div className={loginButtonStyles}>
      <p>This website uses cookies to enhance the user experience. By using this website you agree to our policies</p>
      <Button basic color='brown' onClick={() => updateStoreWithCookieConsent}>X</Button>
    </div>
  )
}

export default connect(null, { cookieAction })(Cookie);
