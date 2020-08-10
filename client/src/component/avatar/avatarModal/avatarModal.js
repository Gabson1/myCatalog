import React, { useState } from 'react'
import { connect } from 'react-redux';

import history from '../../../middlewares/history';

import { logoutAction } from '../../../actions';

import Avatar from '../avatar/avatar';

import { LOGIN_BUTTON_TEXT, LOGOUT_BUTTON_TEXT, MY_PROFILE_BUTTON_TEXT } from '../../../text';
import dismissIcon from '../../../assets/close.svg'
import './avatarModal.css';

const AvatarModal = ({ fullName, email, isLoggedIn }) => {
  const [showAvatarModal, setShowAvatarModal] = useState(true)

  const avatarStyles = `${showAvatarModal ? 'showAvatarModalWrapper' : 'dismissAvatarModalWrapper'}`;

  const onChangeProfileClick = () => history.push('/edit-profile');
  const onLoginClick = () => history.push('/login');

  isLoggedIn = true;
  fullName = 'Gabriel Semaan';
  email = 'semaangabriel@gmail.com';

  return (
    <div className="avatarContainer">
      { showAvatarModal ?
        <div className={avatarStyles}>
          <div className="top">
            <div className="textWrapper">
              <p>{fullName}</p>
              <p>{email}</p>
            </div>
            <img className="dismissAvatarModalIcon" src={dismissIcon} alt="Dismiss Icon" onClick={() => setShowAvatarModal(false)}/>
          </div>
          <hr />
          <div className="bottom">
            <div className="myProfileWrapper">
              {
                isLoggedIn &&
                <p className="clickableText" onClick={() => onChangeProfileClick()}>{MY_PROFILE_BUTTON_TEXT}</p>
              }
            </div>
            <div className="signinOutWrapper">
              {
                isLoggedIn ?
                  <p className="clickableText" onClick={() => logoutAction()}>{LOGOUT_BUTTON_TEXT}</p>
                  :
                  <p className="clickableText" onClick={() => onLoginClick()}>{LOGIN_BUTTON_TEXT}</p>
              }
            </div>
          </div>
        </div>
        :
        <Avatar />
      }
    </div>
  )
}

export default connect(null, { logoutAction })(AvatarModal);
