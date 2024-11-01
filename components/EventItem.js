

// // EventItem.js
// import React from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';
// import PropTypes from 'prop-types';
// import Tag from './Tag';
// import colors from '../colors';

// const EventItem = ({ imageSource, title, clubName, date, tagType }) => {
//     return (
//         <View style={styles.container}>
//             <Image source={imageSource} style={styles.image} />
//             <View style={styles.textContainer}>
//                 <View style={styles.titleRow}>
//                     <Text style={styles.title}>{title}</Text>
//                     <Text style={styles.date}>{date}</Text>
//                 </View>
//                 <View style={styles.tagContainer}>
//                     <Tag title={clubName} type={tagType} />
//                 </View>
//             </View>
//         </View>
//     );
// };

// EventItem.propTypes = {
//     imageSource: PropTypes.oneOfType([
//         PropTypes.string,
//         PropTypes.object,
//     ]).isRequired,
//     title: PropTypes.string.isRequired,
//     clubName: PropTypes.string.isRequired,
//     date: PropTypes.string.isRequired,
//     tagType: PropTypes.string, // Add new prop for tagType
// };

// EventItem.defaultProps = {
//     tagType: 'borderless', // Set default to 'borderless'
// };

// const styles = StyleSheet.create({
//     container: {
//         flexDirection: 'row',
//         alignItems: 'flex-start',
//         paddingVertical: 14,
//         paddingHorizontal: 15,
//         backgroundColor: colors.white,
        
//     },
//     image: {
//         width: 42,
//         height: 42,
//         borderRadius: 21,
//         marginRight: 15,
//     },
//     textContainer: {
//         flex: 1,
//     },
//     titleRow: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'flex-start', // Align title and date to the top
        
//     },
//     title: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         color: colors.blackText,
//     },
//     date: {
//         fontSize: 14,
//         color: colors.labelIcon,
//     },
//     tagContainer: {
        
//         alignItems: 'flex-start', // Align tag with the left edge of the text
//     },
// });

// export default EventItem;



// EventItem.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Tag from './Tag'; // Assuming the Tag component is imported here
import colors from '../colors';

const EventItem = ({ imageSource, title, clubName, date, tagType }) => {
    return (
        <View style={styles.container}>
            <Image source={imageSource} style={styles.image} />
            <View style={styles.textContainer}>
                <View style={styles.titleRow}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.date}>{date}</Text>
                </View>
                <View style={styles.tagContainer}>
                    <Tag title={clubName} type={tagType} /> 
                </View>
            </View>
        </View>
    );
};

EventItem.propTypes = {
    imageSource: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]).isRequired,
    title: PropTypes.string.isRequired,
    clubName: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    tagType: PropTypes.string, // Add new prop for tagType
};

EventItem.defaultProps = {
    tagType: 'borderless', // Set default to 'borderless'
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingVertical: 14,
        paddingBottom: 10,
        paddingHorizontal: 15,
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
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.blackText,
    },
    date: {
        fontSize: 14,
        color: colors.labelIcon,
    },
    tagContainer: {
        alignItems: 'flex-start',
    },
});

export default EventItem;
