import React, {useCallback} from 'react';
import { Button, Icon } from 'semantic-ui-react';
// import styles from '../../styles/molecules/AppButton.module.css';

type Props = {
    style?: any;
    buttonText?: string;
    isDisabled?: boolean;
    isLoading?: boolean;
    onClick?: () => void;
    labelPosition?: 'left' | 'right';
    iconName?: any;
    iconColor?: any;
    iconSize? :any;
};

function AppButton(props: Props) {
    const {
        style,
        buttonText,
        isDisabled = false,
        isLoading,
        onClick = () => {},
        labelPosition = 'left',
        iconName = null,
        iconColor = null,
        iconSize = null,
    } = props;

    const click = useCallback(
        () => {
            if (onClick && !isDisabled) onClick();
        },
        [onClick, isDisabled]
    );

    return (
        <Button
            style={style}
            disabled={isDisabled || isLoading}
            // className={styles.appButton}
            labelPosition={labelPosition}
            content={buttonText}
            onClick={click}
            iconName={iconName}
        >
            { iconName &&
                <Icon
                    name={iconName}
                    size={iconSize}
                    color={iconColor}
                />
            }

        </Button>
    );
}

export default AppButton;
