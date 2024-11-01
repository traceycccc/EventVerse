// NotificationItem.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Tag from './Tag';
import colors from '../colors';

// const NotificationItem = ({ imageSource, title, clubName, tagType }) => {
//     return (
//         <View style={styles.container}>
//             <Image source={imageSource} style={styles.image} />
//             <View style={styles.textContainer}>
//                 <Text style={styles.title}>{title}</Text>
//                 <View style={styles.tagContainer}>
//                     <Tag title={clubName} type={tagType} />
//                 </View>
//             </View>
//         </View>
//     );
// };

const NotificationItem = ({ imageSource, title, clubName }) => {
    return (
        <View style={styles.container}>
            <Image source={imageSource} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.tagContainer}>
                    <Tag title={clubName} type="borderless" />
                </View>
            </View>
        </View>
    );
};

NotificationItem.propTypes = {
    imageSource: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]).isRequired,
    title: PropTypes.string.isRequired,
    clubName: PropTypes.string.isRequired,
    // tagType: PropTypes.string,
};

// NotificationItem.defaultProps = {
//     tagType: 'borderless', // Set default to 'borderless'
// };

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingVertical: 14, // Adjusted top and bottom padding
        paddingBottom: 8,
        paddingHorizontal: 16,
        backgroundColor: colors.white,
        
    },
    image: {
        width: 42,
        height: 42,
        borderRadius: 21,
        marginRight: 15,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.blackText,
        marginBottom: 0, // Adjusted space between title and tag
    },
    tagContainer: {
        alignItems: 'flex-start',
    },
});

export default NotificationItem;