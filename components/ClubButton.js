// ClubButton.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../colors';

const ClubButton = ({ title, imageSource, onPress }) => {
    return (
        <TouchableOpacity style={styles.touchableArea} onPress={onPress}>
            <View style={styles.container}>
                <Image source={imageSource} style={styles.image} />
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

ClubButton.propTypes = {
    title: PropTypes.string.isRequired,
    imageSource: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]).isRequired,
    onPress: PropTypes.func,
};

ClubButton.defaultProps = {
    onPress: () => { },
};

const styles = StyleSheet.create({
    touchableArea: {
        padding: 20,
        borderRadius: 15,
    },
    container: {
        alignItems: 'center',
        marginVertical: 15,
    },
    image: {
        width: 110,
        height: 110,
        borderRadius: 60,
    },
    title: {
        marginTop: 16,
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.blackText,
    },
});

export default ClubButton;