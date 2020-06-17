import React from 'react';
// import styles from '../../styles/views/atoms/Text.module.css';

type Props = {
    text: string;
    click?: any;
}

function Text(props: Props) {
    const {
        text,
        click,
    } = props;

    return (
        <p
            // className={styles.text}
            // @ts-ignore
            onClick={click}
        >
            {text}
        </p>
    );
}

export default Text;
