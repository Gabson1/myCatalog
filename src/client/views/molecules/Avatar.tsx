import React, {useMemo, useState} from 'react';
// import styles from '../../styles/views/atoms/Avatar.module.css';

import Image from '../atoms/Image';
import LoginModal from './LoginModal';

type Props = {
    isLoginOpen: boolean;
    hideLogin: any;
    showLogin: any;
    email: any;
    fullName: any;
    isLoggedIn: boolean;
}

function Avatar(props: Props) {
    const {
        isLoginOpen,
        hideLogin,
        showLogin,
        email,
        fullName,
        isLoggedIn
    } = props;

    const avatarImg = useMemo(() => {
        return '';
    }, []);

    const altText = useMemo(() => {
        return 'User Avatar Image';
    }, []);

    return (
        <div
            // className={styles.avatarWrapper}
        >
            <Image
                src={avatarImg}
                alt={altText}
                width="35"
                height="20"
                onClick={isLoginOpen ? hideLogin : showLogin}
            />
            { showLogin &&
            <LoginModal
              email={email}
              fullName={fullName}
              isLoggedIn={isLoggedIn}
            />
            }
        </div>
    );
}

export default Avatar;

// TODO: Write method for handling onclick event on avatar...
// TODO: Write method for handling image src...
