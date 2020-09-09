import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Message, Button } from 'semantic-ui-react';

import { selectUser } from '../../selectors/userSelectors';

import { cookieConsentAction } from '../../actions';

import './cookie.css';

const Cookie = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [showCookie, setShowCookie] = useState(true);

  const cookieWrapperStyle = `${showCookie ? 'showCookieWrapper' : 'dismissCookieWrapper'}`;

  const updateStoreWithCookieConsent = () => {
    setShowCookie(false);

    const consent = { showCookie: showCookie.valueOf() };

    dispatch(cookieConsentAction(user._id, consent));
  };
  return (
    <Message className={cookieWrapperStyle}>
      <Message.Header>We use Cookies</Message.Header>
      <p>This website uses cookies to enhance the user experience. By using this website you agree to our policies</p>
      <Button basic color="brown" onClick={() => updateStoreWithCookieConsent}>X</Button>
    </Message>
  );
};

export default Cookie;
