



// Notifications.js
import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import NotificationItem from '../components/NotificationItem';
import colors from '../colors';
import { useNavigation } from '@react-navigation/native';

const Notifications = () => {
    const navigation = useNavigation(); // Get the navigation object

    const handlePress = () => {
        // Navigate to FeedScreen and set "Joined" tab as active
        navigation.navigate('Events Feed', {
            tabIndex: 1, // 1 for "Joined" tab
        });
    };

    return (
        <ScrollView style={styles.container}>
            {/* Section for 2 Sept 2024 */}
            <View style={styles.dateSection}>
                <Text style={styles.dateText}>15 Sept 2024</Text>
                <View style={styles.listSection}>
                    <TouchableOpacity onPress={handlePress}>
                        <NotificationItem
                            imageSource={require('../assets/B.png')}
                            title="Nerf Club has a new event coming, Nerf Gun Workshop!"
                            clubName="Nerf Club"
                        />
                    </TouchableOpacity>
                    <NotificationItem
                        imageSource={require('../assets/A.png')}
                        title="You have successfully left the club"
                        clubName="IEC"
                    />
                    <NotificationItem
                        imageSource={require('../assets/IT.png')}
                        title="You have registered to join the club"
                        clubName="IT Club"
                    />
                </View>
            </View>

            {/* Section for 16 Sept 2024 */}
            <View style={styles.dateSection}>
                <Text style={styles.dateText}>12 Sept 2024</Text>
                <View style={styles.listSection}>
                    <TouchableOpacity onPress={handlePress}>
                        <NotificationItem
                            imageSource={require('../assets/B.png')}
                            title="You have successfully joined the club"
                            clubName="Nerf Club"
                        />
                    </TouchableOpacity>
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

export default Notifications;

