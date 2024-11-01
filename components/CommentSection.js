


// CommentSection.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Keyboard, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';
import CommentInput from './CommentInput';
import colors from '../colors';

const CommentSection = ({ comments, onSendComment, onClose }) => {
    const [commentText, setCommentText] = useState('');

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerLine} />
                    {/* <Text style={styles.headerText}>Comments</Text> */}
                </View>
                <FlatList
                    data={comments}
                    renderItem={({ item }) => (
                        <CommentItem
                            imageSource={item.imageSource}
                            title={item.username}
                            content={item.comment}
                            reactions={item.likesCount}
                        />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={styles.commentList}
                />
                <CommentInput
                    avatarSource={require('../assets/profile_pic.png')}
                    value={commentText}
                    onChangeText={setCommentText}
                    onSendPress={() => {
                        onSendComment(commentText);
                        setCommentText(''); // Clear input after sending
                        Keyboard.dismiss();  // Close keyboard after sending
                    }}
                />
            </View>
        </TouchableWithoutFeedback>
    );
};

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            userImage: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
            username: PropTypes.string.isRequired,
            comment: PropTypes.string.isRequired,
            likesCount: PropTypes.number.isRequired,
        })
    ).isRequired,
    onSendComment: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    header: {
        alignItems: 'center',
        paddingVertical: 0,
    },
    headerLine: {
        width: 50,
        height: 4,
        backgroundColor: colors.grey,
        borderRadius: 2,
        marginBottom: 5,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.blackText,
    },
    commentList: {
        paddingBottom: 10,
    },
});

export default CommentSection;
