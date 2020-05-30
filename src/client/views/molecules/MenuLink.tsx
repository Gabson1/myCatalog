// @ts-nocheck
import React, { useCallback, useMemo } from 'react';
import styles from '../styles/views/MenuLink.module.css';

type Props = {
    buttonText: string;
    onClick?: () => void;
    textAlign?: 'right' | 'left' | 'center';
    style?: any;
    textStyles?: any;
    href: any;
    target?: '_blank' | '_parent' | '_self' | '_top';
};

function AppButton(props: Props) {
    const {
        buttonText,
        onClick = () => {},
        textAlign = 'center',
        style,
        textStyles,
        href,
        target = '_blank',
    } = props;

    const click = useCallback(
        () => onClick && onClick(),
        [onClick]
    );

    const textPosition = useMemo(
        () => ({ textAlign }),
        [textAlign]
    );
    return (
        <a
            style={style && textPosition}
            className={styles.menuLink}
            onClick={click}
            href={href}
            target={target}
        >
            { buttonText && <p style={textStyles}>{buttonText}</p> }
        </a>

    );
}

export default AppButton;
