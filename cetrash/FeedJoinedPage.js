// TestScreen.js
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import FeedPost from '../components/FeedPost';
import colors from '../colors';

const TestScreen = () => {
    const handleBookmarkPress = () => {
        console.log('Bookmark pressed');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <FeedPost
                clubImage={require('../assets/it_club.png')}
                clubName="Club C"
                postImage={require('../assets/it_club.png')}
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                postDate="16 Sept 2024"
                onBookmarkPress={handleBookmarkPress}
                showRegisterButton={true}
                registerButtonTitle="Register"
            />
            <FeedPost
                clubImage={require('../assets/it_club.png')}
                clubName="Club C"
                postImage={require('../assets/it_club.png')}
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                postDate="16 Sept 2024"
                onBookmarkPress={handleBookmarkPress}
                showRegisterButton={true}
                registerButtonTitle="Register"
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: colors.white,
    },
});

export default TestScreen;