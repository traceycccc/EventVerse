// Tag.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../colors';

const Tag = ({ title, type }) => {
    const getTagStyles = () => {
        switch (type) {
            case 'primary':
                return { container: styles.primary, text: styles.primaryText };
            case 'secondary':
                return { container: styles.secondary, text: styles.secondaryText };
            case 'pending':
                return { container: styles.pending, text: styles.pendingText };
            case 'disapproved':
                return { container: styles.disapproved, text: styles.disapprovedText };
            case 'borderless':
                return { container: styles.borderless, text: styles.borderlessText };
            default:
                return { container: styles.primary, text: styles.primaryText };
        }
    };

    const { container, text } = getTagStyles();

    return (
        <View style={[styles.tag, container]}>
            <Text style={[styles.tagText, text]}>{title}</Text>
        </View>
    );
};

Tag.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['primary', 'secondary', 'pending', 'disapproved', 'borderless']),
    fontSize: PropTypes.number, // Accept custom font size as a prop
};

Tag.defaultProps = {
    type: 'primary',
    fontSize: 12,
};

const styles = StyleSheet.create({
    tag: {
        paddingVertical: 2,
        paddingHorizontal: 8,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
    },
    tagText: {
        // fontSize: 12,
    },
    primary: {
        backgroundColor: colors.primaryBlue,
    },
    secondary: {
        backgroundColor: colors.secondaryContainer,
    },
    pending: {
        backgroundColor: colors.pendingContainer,
    },
    disapproved: {
        backgroundColor: colors.redContainer,
    },
    borderless: {
        backgroundColor: 'transparent',
        paddingVertical: 0,
        paddingHorizontal: 0,
    },
    primaryText: {
        color: '#fff',
    },
    secondaryText: {
        color: colors.secondaryText,
    },
    pendingText: {
        color: colors.pendingText,
    },
    disapprovedText: {
        color: colors.redText,
    },
    borderlessText: {
        color: colors.primaryBlue,
        fontSize: 14,
    },
    
});

export default Tag;