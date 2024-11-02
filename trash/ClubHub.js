//-----------------HUb Page ----------------------------
// ClubHub.js
import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Modal, TouchableOpacity, Text } from 'react-native';
import HubPost from '../components/HubPost';
import CommentSection from '../components/CommentSection';
import colors from '../colors';

const ClubHub = () => {
    const [isCommentSectionVisible, setCommentSectionVisible] = useState(false);
    const [comments, setComments] = useState([
        { userImage: require('../assets/u3.png'), username: 'User 1', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', likesCount: 123 },
        { userImage: require('../assets/u2.png'), username: 'User 2', comment: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', likesCount: 45 },
        { userImage: require('../assets/u3.png'), username: 'User 3', comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.', likesCount: 78 },
    ]);

    const handleSendComment = (newComment) => {
        if (newComment.trim()) {
            setComments((prevComments) => [
                ...prevComments,
                { userImage: require('../assets/you.png'), username: 'You', comment: newComment, likesCount: 0 },
            ]);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Multiple HubPosts */}
            <HubPost
                clubImage={require('../assets/A.png')}
                clubName="Club A"
                postDate="10 Oct 2024"
                title="Title yyy"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                onCommentPress={() => setCommentSectionVisible(true)}
            />
            <HubPost
                clubImage={require('../assets/A.png')}
                clubName="Club A"
                postDate="12 Oct 2024"
                title="Title zzz"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                onCommentPress={() => setCommentSectionVisible(true)}
            />

            {/* Comment Section Modal */}
            <Modal
                visible={isCommentSectionVisible}
                animationType="slide"
                transparent={false} // Make sure the modal covers the full screen
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

export default ClubHub;