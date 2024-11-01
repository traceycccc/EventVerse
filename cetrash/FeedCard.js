


import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const FeedCard = ({ post }) => {
    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Image style={styles.icon} source={require('../assets/it_club.png')} />
                <Text style={styles.title}>{post.title}</Text>
            </View>
            <Image style={styles.image} source={{ uri: 'https://via.placeholder.com/300' }} />
            <View style={styles.actions}>
                <TouchableOpacity>
                    <MaterialIcons name="favorite-border" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialIcons name="bookmark-border" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.register}>REGISTER</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialIcons name="notifications-none" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <Text style={styles.stats}>{`${post.likes} likes  ${post.views} views`}</Text>
            <Text style={styles.date}>{post.date}</Text>
            <Text style={styles.description}>Lorem ipsum dolor sit amet...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    // styles go here
});

export default FeedCard;
