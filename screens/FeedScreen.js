import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import FeedCard from '../components/FeedCard';

const posts = [
    // Example post data
    { id: '1', title: 'IT Club', likes: 16, views: 20, date: '16 Apr 2022' },
    // Add more posts as needed
];

const FeedScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.tabs}>
                <Text style={styles.tab}>NEW</Text>
                <Text style={styles.tab}>HOT</Text>
                <Text style={styles.tab}>MY</Text>
            </View>
            <FlatList
                data={posts}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <FeedCard post={item} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabs: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        backgroundColor: '#f0f0f0',
    },
    tab: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
});

export default FeedScreen;
