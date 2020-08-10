import React, { useState } from 'react'
import { connect } from 'react-redux';

import AvatarModal from '../avatarModal/avatarModal';

import avatarIcon from '../../../assets/avatar.svg'

import './avatar.css';

const Avatar = () => {
  const [showAvatar, setShowAvatar] = useState(true)

  const avatarStyles = `${showAvatar ? 'showAvatarWrapper' : 'dismissAvatarWrapper'}`;

  return (
    <div className='avatarContainer'>
      { showAvatar ?
        <img className={avatarStyles} src={avatarIcon} alt="Avatar Icon" onClick={() => setShowAvatar(false)}/>
        :
        <AvatarModal />
      }
    </div>
  )
}

export default Avatar;
