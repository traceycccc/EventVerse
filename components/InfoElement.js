// InfoElement.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const InfoElement = ({ icon, text, colorState }) => {
    const getIconName = () => {
        switch (icon) {
            case 'date':
                return { type: 'MaterialIcons', name: 'event' };
            case 'location':
                return { type: 'MaterialIcons', name: 'place' };
            case 'time':
                return { type: 'MaterialIcons', name: 'access-time' };
            case 'name':
                return { type: 'MaterialIcons', name: 'person' };
            case 'course':
                return { type: 'MaterialIcons', name: 'menu-book' };
            case 'contact':
                return { type: 'MaterialIcons', name: 'phone' };
            case 'studentId':
                return { type: 'MaterialIcons', name: 'badge' };
            case 'email':
                return { type: 'MaterialIcons', name: 'mail-outline' };
            case 'instagram':
                return { type: 'FontAwesome', name: 'instagram' };
            case 'facebook':
                return { type: 'FontAwesome', name: 'facebook' };
            case 'money':
                return { type: 'MaterialIcons', name: 'attach-money' };
            default:
                return { type: 'MaterialIcons', name: 'help-outline' };
        }
    };

    const iconData = getIconName();
    const IconComponent = iconData.type === 'MaterialIcons' ? MaterialIcons : FontAwesome;

    return (
        <View style={styles.containerLeftAlign}>
            <IconComponent
                name={iconData.name}
                size={24}
                color={colorState === 'black' ? colors.blackText : colors.iconGrey}
                style={styles.icon}
            />
            <Text style={[styles.text, colorState === 'black' ? styles.blackText : styles.iconGrey]}>
                {text}
            </Text>
        </View>
    );
};

InfoElement.propTypes = {
    icon: PropTypes.oneOf(['date', 'location', 'time', 'name', 'course', 'contact', 'studentId', 'email', 'instagram', 'facebook']).isRequired,
    text: PropTypes.string.isRequired,
    colorState: PropTypes.oneOf(['black', 'grey']).isRequired,
};

const styles = StyleSheet.create({
    containerLeftAlign: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    icon: {
        marginRight: 20,
        width: 24,
        textAlign: 'center',
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
    },
    blackText: {
        color: colors.blackText,
    },
    greyText: {
        color: colors.iconGrey,
    },
});

export default InfoElement;