


// ClubAHub.js
import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Modal, TouchableOpacity, Text } from 'react-native';
import HubPost from '../components/HubPost';
import CommentSection from '../components/CommentSection';
import colors from '../colors';

const ClubAHub = ({ posts }) => {
    const [isCommentSectionVisible, setCommentSectionVisible] = useState(false);
    const [comments, setComments] = useState([
        { imageSource: require('../assets/u1.png'), username: 'User 1', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', likesCount: 123 },
        { imageSource: require('../assets/u2.png'), username: 'User 2', comment: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', likesCount: 45 },
        { imageSource: require('../assets/u3.png'), username: 'User 3', comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.', likesCount: 78 },
    ]);

    const handleSendComment = (newComment) => {
        if (newComment.trim()) {
            setComments((prevComments) => [
                ...prevComments,
                { imageSource: require('../assets/profile_pic.png'), username: 'You', comment: newComment, likesCount: 0 },
            ]);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {posts.map((post) => (
                <HubPost
                    key={post.key}
                    clubImage={require('../assets/A.png')}
                    clubName="IEC"
                    postDate={post.postDate}
                    title={post.title}
                    content={post.content}
                    onCommentPress={() => setCommentSectionVisible(true)}
                />
            ))}

            {/* Comment Section Modal */}
            <Modal
                visible={isCommentSectionVisible}
                animationType="slide"
                transparent={false}
                onRequestClose={() => setCommentSectionVisible(false)}
            >
                <View style={styles.commentContainer}>
                    <TouchableOpacity onPress={() => setCommentSectionVisible(false)}>
                        <Text style={styles.headerText}>Comments</Text>
                    </TouchableOpacity>
                    <CommentSection
                        comments={comments}
                        onSendComment={handleSendComment}
                        onClose={() => setCommentSectionVisible(false)}
                    />
                </View>
            </Modal>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 0,
        backgroundColor: colors.white,
    },
    commentContainer: {
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: 20,
        paddingHorizontal: 0,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.blackText,
        textAlign: 'center',
        paddingVertical: 10,
    },
});

export default ClubAHub;

