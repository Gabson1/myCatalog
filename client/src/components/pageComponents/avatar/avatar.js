import React, { useState } from 'react'
import { connect } from 'react-redux';

import avatarIcon from '../../../assets/avatar.svg'

import './avatar.css';

const AvatarModal = () => {
  const [showAvatar, setShowAvatar] = useState(false)

  const avatarStyles = `${showAvatar ? 'showAvatarWrapper' : 'dismissAvatarWrapper'}`;

  return <img className={avatarStyles} src={avatarIcon} alt="Avatar Icon" onClick={() => setShowAvatar}/>
}

export default AvatarModal;
