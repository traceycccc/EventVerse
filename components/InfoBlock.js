// InfoBlock.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import InfoElement from './InfoElement';
import SmallButton from './SmallButton';
import colors from '../colors';

const InfoBlock = ({ title, clubTag, infoElements }) => {
    return (
        <View style={styles.container}>
            {/* Title and Club Info */}
            <View style={styles.headerContainer}>
                <Text style={styles.title}>{title}</Text>
                {clubTag && (
                    <View style={styles.clubTagContainer}>
                        <SmallButton title={clubTag} type="disabled" onPress={() => console.log('Disabled Button Pressed')} />
                    </View>
                )}
            </View>
            {/* Info Elements */}
            {infoElements.map((element, index) => (
                <InfoElement key={index} icon={element.icon} text={element.text} colorState={element.colorState} />
            ))}
        </View>
    );
};

InfoBlock.propTypes = {
    title: PropTypes.string.isRequired,
    clubTag: PropTypes.string,
    infoElements: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            colorState: PropTypes.oneOf(['black', 'grey']).isRequired,
        })
    ).isRequired,
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: colors.white,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: colors.club_name_tag,
        marginBottom: 14,
    },
    headerContainer: {
        marginBottom: 3,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.blackText,
    },
    clubTagContainer: {
        marginTop: 5,
        marginBottom: 0,
        alignSelf: 'flex-start', 
    },
});

export default InfoBlock;