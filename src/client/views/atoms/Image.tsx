import React from 'react';
// import styles from '../../styles/views/atoms/Image.module.css';

type Props = {
    src: any;
    alt: any;
    width: any;
    height: any;
    onClick?: any;
}

function Image(props: Props) {
    const {
        src,
        alt,
        width,
        height,
        onClick,
    } = props;

    return (
        <img
            // className={styles.image}
            src={src}
            alt={alt}
            width={width}
            height={height}
            onClick={onClick}
        />
    );
}

export default Image;
