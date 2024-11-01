


// FeedExplorePage.js
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import FeedPost from '../components/FeedPost';
import colors from '../colors';

const FeedPage = ({ posts }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {posts.map((post, index) => (
                <FeedPost
                    key={post.key}
                    clubImage={post.clubImage}
                    clubName={post.clubName}
                    postImage={post.postImage}
                    content={post.content}
                    postDate={post.postDate}
                    onBookmarkPress={() => console.log('Bookmark pressed')}
                    showRegisterButton={post.showRegisterButton}
                    registerButtonTitle="Register"
                    title={post.title}
                    showTag={post.showTag}
                    tagTitle={post.tagTitle}
                />
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: colors.white,
    },
});

export default FeedPage;

