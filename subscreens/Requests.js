// Requests.js
import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import EventItem from '../components/EventItem';
import colors from '../colors';
import { useNavigation } from '@react-navigation/native';

const Requests = () => {
    const navigation = useNavigation(); // Get the navigation object

    const handlePress = () => {
        // Navigate to FeedScreen and set "Joined" tab as active
        navigation.navigate('Feed', {
            tabIndex: 1, // 1 for "Joined" tab
        });
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.dateSection}>
                <Text style={styles.dateText}>Join Requests</Text>
                <View style={styles.listSection}>

                    <EventItem
                        imageSource={require('../assets/IT.png')}
                        title="IT Club"
                        clubName="Pending"
                        tagType="pending"
                        date="15 Sept 2024"
                    />
                    <EventItem
                        imageSource={require('../assets/B.png')}
                        title="Nerf Club"
                        clubName="Approved"
                        tagType="secondary"
                        date="14 Sept 2024"
                    />
                    <EventItem
                        imageSource={require('../assets/A.png')}
                        title="IEC"
                        clubName="Approved"
                        tagType="secondary"
                        date="13 Sept 2024"
                    />
                    <EventItem
                        imageSource={require('../assets/C.png')}
                        title="Anime Club"
                        clubName="Rejected"
                        tagType="disapproved"
                        date="11 Sept 2024"
                    />


                </View>
            </View>


        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    dateSection: {
    },
    dateText: {
        fontSize: 16,
        fontWeight: 'semibold',
        color: colors.pendingText,
        marginBottom: 10,
        marginTop: 10,
        paddingHorizontal: 16,
    },
    listSection: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: colors.greyLine, // You can adjust the color to match the design
        marginBottom: 16,
        paddingVertical: 0,
    },
});

export default Requests;