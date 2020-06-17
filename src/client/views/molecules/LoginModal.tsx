import React, {useCallback, useMemo} from 'react';
import { Button, Icon } from 'semantic-ui-react';
// import styles from '../../styles/molecules/AppButton.module.css';

import Image from "../atoms/Image";
import Divider from "../atoms/Divider";
import Text from "../atoms/Text";


type Props = {
    email: any;
    fullName: any;
    isLoggedIn: boolean;
    profileText?: string;
    loginText?: string;
    logoutText?: string;
};

function LoginModal(props: Props) {
    const {
        fullName,
        email,
        isLoggedIn,
        profileText = 'Mein Profil',
        loginText = 'Anmelden',
        logoutText = 'Abmelden',
    } = props;

    const avatarImg = useMemo(() => {
        return '';
    }, []);

    const altText = useMemo(() => {
        return 'User Avatar Image';
    }, []);

    const redirectToRegistration = () => {

    }

    const handleLogout = () => {

    }

    return (
        <div>
            <Image
                src={avatarImg}
                alt={altText}
                width="35"
                height="20"
            />
            { isLoggedIn &&
                <div>
                  <Text text={fullName}/>
                  <Text text={email}/>
                </div>
            }
            <Divider />
            <div>
                { isLoggedIn &&
                    <Text text={profileText}/>
                }
                <Text
                    text={isLoggedIn ? loginText : logoutText}
                    click={isLoggedIn ? this.handleLogout() : this.redirectToRegistration()}
                />
            </div>
        </div>
    );
}

export default LoginModal;
