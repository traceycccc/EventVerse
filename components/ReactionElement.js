

// ReactionElement.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../colors';

const ReactionElement = ({ icon, count, isActive, onPress, iconSize, textSize }) => {
    const getIconName = () => {
        switch (icon) {
            case 'heart':
                return isActive ? 'favorite' : 'favorite-border';
            case 'bookmark':
                return isActive ? 'bookmark' : 'bookmark-border';
            case 'comment':
                return 'chat-bubble-outline';
            case 'calendar':
                return 'event';
            default:
                return 'help-outline';
        }
    };

    const getIconColor = () => {
        switch (icon) {
            case 'heart':
                return isActive ? colors.redText : colors.iconGrey;
            case 'bookmark':
                return isActive ? colors.iconGrey : colors.iconGrey;
            default:
                return isActive ? colors.primaryBlue : colors.iconGrey;
        }
    };

    const renderContent = () => (
        <View style={styles.container}>
            <MaterialIcons
                name={getIconName()}
                size={iconSize}
                color={getIconColor()}
            />
            {icon !== 'bookmark' && <Text style={[styles.countText, { fontSize: textSize }]}>{count}</Text>}
        </View>
    );

    return icon === 'calendar' ? (
        <View style={styles.container}>{renderContent()}</View>
    ) : (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {renderContent()}
        </TouchableOpacity>
    );
};

ReactionElement.propTypes = {
    icon: PropTypes.oneOf(['heart', 'bookmark', 'comment', 'calendar']).isRequired,
    count: PropTypes.number,
    isActive: PropTypes.bool,
    onPress: PropTypes.func,
    iconSize: PropTypes.number,
    textSize: PropTypes.number,
    style: PropTypes.object, // Add style prop
};

ReactionElement.defaultProps = {
    isActive: false,
    onPress: () => { },
    count: 0,
    iconSize: 24, // Default icon size
    textSize: 16, // Default text size
    
    
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 0, 
    },
    countText: {
        color: colors.iconGrey,
        marginLeft: 5,
        textAlignVertical: 'center',
    },
});

export default ReactionElement;
