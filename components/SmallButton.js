// SmallButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../colors';

const SmallButton = ({ title, onPress, type, disabled }) => {
    const getButtonStyles = () => {
        switch (type) {
            case 'primary':
                return { container: styles.primary, text: styles.primaryText };
            case 'secondary':
                return { container: styles.secondary, text: styles.secondaryText };
            case 'disabled':
                return { container: styles.disabled, text: styles.disabledText };
            default:
                return { container: styles.primary, text: styles.primaryText };
        }
    };

    const { container, text } = getButtonStyles();

    return (
        <TouchableOpacity
            style={[styles.button, container]}
            onPress={onPress}
            disabled={disabled || type === 'disabled'}
        >
            <Text style={[styles.buttonText, text]}>{title}</Text>
        </TouchableOpacity>
    );
};

SmallButton.propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func,
    type: PropTypes.oneOf(['primary', 'secondary', 'disabled']),
    disabled: PropTypes.bool,
};

SmallButton.defaultProps = {
    type: 'primary',
    disabled: false,
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 5,
        paddingHorizontal: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 10,
    },
    primary: {
        backgroundColor: colors.primaryBlue,
    },
    secondary: {
        backgroundColor: colors.secondaryContainer,
    },
    disabled: {
        backgroundColor: colors.pendingContainer,
    },
    primaryText: {
        color: '#fff',
    },
    secondaryText: {
        color: colors.secondaryText,
    },
    disabledText: {
        color: colors.pendingText,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default SmallButton;




//testscreen

// // TestScreen.js
// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import SmallButton from '../components/SmallButton';

// const TestScreen = () => {
//     return (
//         <View style={styles.container}>
//             {/* Test different states of the button here */}
//             <SmallButton title="Apply Filters" type="primary" onPress={() => console.log('Primary Button Pressed')} />
//             <SmallButton title="Register" type="secondary" onPress={() => console.log('Secondary Button Pressed')} />
//             <SmallButton title="Registered" type="disabled" onPress={() => console.log('Disabled Button Pressed')} />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 20,
//     },
// });

// export default TestScreen;