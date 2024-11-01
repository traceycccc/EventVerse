



// ParticipatingEvents.js
import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EventItem from '../components/EventItem';

const ParticipatingEvents = () => {
    const navigation = useNavigation();

    const handleEventPress = () => {
        navigation.navigate('Events Feed');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleEventPress}>
                <EventItem
                    imageSource={require('../assets/IT.png')}
                    title="IT Seminar Oct 2024"
                    clubName="IT Club"
                    date="6 Oct 2024"
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        
    },
});

export default ParticipatingEvents;

