// InfoSection.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import InfoElement from './InfoElement';
import TextInputField from './TextInputField';
import colors from '../colors';

const InfoSection = ({ title, infoData, isEditMode }) => {
    return (
        <View style={styles.container}>
            {/* Section Title */}
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.underline} />
            </View>

            {/* Render Info Elements based on mode */}
            {infoData.map((info, index) => (
                <View key={index} style={styles.infoContainer}>
                    {isEditMode ? (
                        <TextInputField
                            label={info.label}
                            value={info.value}
                            onChangeText={info.onChangeText}
                            isEditable={!info.isDisabled}
                        />
                    ) : (
                        <InfoElement icon={info.icon} text={info.value} colorState={info.colorState} />
                    )}
                </View>
            ))}
        </View>
    );
};

InfoSection.propTypes = {
    title: PropTypes.string.isRequired,
    infoData: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            icon: PropTypes.string,
            value: PropTypes.string.isRequired,
            onChangeText: PropTypes.func,
            colorState: PropTypes.oneOf(['black', 'grey']),
            isDisabled: PropTypes.bool,
        })
    ).isRequired,
    isEditMode: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    titleContainer: {
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.blackText,
    },
    underline: {
        height: 1,
        backgroundColor: colors.pendingText,
        marginTop: 10,
    },
    infoContainer: {
        marginVertical: 0,
    },
});

export default InfoSection;