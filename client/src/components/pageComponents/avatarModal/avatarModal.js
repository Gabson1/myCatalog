import React, { useState } from 'react'
import { connect } from 'react-redux';

import avatarIcon from '../../../assets/avatar.svg'
import dismissIcon from '../../../assets/close.svg'

import './avatarModal.css';

const AvatarModal = ({fullName, email, isLoggedIn }) => {
  const [showAvatarModal, setShowAvatarModal] = useState(false)

  const avatarStyles = `${showAvatarModal ? 'showAvatarModalWrapper' : 'dismissAvatarModalWrapper'}`;

  const onSignOutClick = signoutAction();
  // const onChangeProfileClick = () => history.push('/edit-profile');

  return (
    <div className={avatarStyles}>
      <div className="top">
        <img src={avatarIcon} alt="Avatar Icon"/>
        <div className="textWrapper">
          <p>{fullName}</p>
          <p>{email}</p>
        </div>
        <img src={dismissIcon} alt="Dismiss Icon" onClick={() => setShowAvatarModal(false)}/>
      </div>
      <hr />
      <div className="bottom">
        <div className="myProfileWrapper">
          { isLoggedIn && <p className="clickableTxt">{myProfileBtn}</p> }
        </div>
        <div className="signinOutWrapper">
          { isLoggedIn ? <p className="clickableTxt">{loggedInBtn}</p> : <p className="clickableTxt">{loggedOutBtn}</p> }
        </div>
      </div>
    </div>
  )
}

export default connect(null, { signoutAction })(AvatarModal);
