import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../colors';

const TabButtonPage = ({ tabs, chosenIndex, onTabPress }) => {
    const screenWidth = Dimensions.get('window').width;
    const tabWidth = screenWidth / tabs.length - 30;  // Adjusted tab width to fit better

    return (
        <View style={styles.outerContainer}>
            <View style={styles.innerContainer}>
                {tabs.map((tab, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[
                            styles.button,
                            chosenIndex === index ? styles.chosen : styles.notChosen,
                            { width: tabWidth },
                        ]}
                        onPress={() => onTabPress(index)}
                    >
                        <Text
                            style={[
                                styles.text,
                                chosenIndex === index ? styles.chosenText : styles.notChosenText,
                            ]}
                        >
                            {tab.title}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

TabButtonPage.propTypes = {
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
    chosenIndex: PropTypes.number.isRequired,
    onTabPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    outerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.primaryBlue,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal: 0,
        marginVertical: 0,
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.tab_not,
        borderRadius: 45,
        paddingVertical: 4,
        flex: 1,
    },
    button: {
        paddingVertical: 10,
        borderRadius: 25,
        alignItems: 'center',
        marginHorizontal: 5,  // Add horizontal margin for better spacing
    },
    chosen: {
        backgroundColor: colors.white,
    },
    notChosen: {
        backgroundColor: 'transparent',
    },
    text: {
        fontSize: 16,
        fontWeight: '600',
    },
    chosenText: {
        color: colors.primaryBlue,
    },
    notChosenText: {
        color: colors.white,
    },
});

export default TabButtonPage;
