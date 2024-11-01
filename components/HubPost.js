// HubPost.js
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import ReactionElement from './ReactionElement';
import colors from '../colors';

const HubPost = ({ clubImage, clubName, postDate, title, content, onCommentPress }) => {
    const [liked, setLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(123);
    const [commentsCount, setCommentsCount] = useState(45);

    return (
        <View style={styles.container}>
            {/* Club Info */}
            <View style={styles.clubInfoContainer}>
                <Image source={clubImage} style={styles.clubImage} />
                <View>
                    <Text style={styles.clubName}>{clubName}</Text>
                    <Text style={styles.date}>{postDate}</Text>
                </View>
            </View>

            {/* Title */}
            <Text style={styles.title}>{title}</Text>

            {/* Content */}
            <Text style={styles.content}>{content}</Text>

            {/* Reactions */}
            <View style={styles.reactionsContainer}>
                <View style={styles.reactionContainer}>
                    <ReactionElement
                        icon="heart"
                        count={likesCount}
                        isActive={liked}
                        onPress={() => {
                            setLiked(!liked);
                            setLikesCount(liked ? likesCount - 1 : likesCount + 1);
                        }}
                    />
                </View>
                <View style={styles.reactionContainer}>
                    <ReactionElement
                        icon="comment"
                        count={commentsCount}
                        onPress={onCommentPress}
                    />
                </View>
            </View>
        </View>
    );
};

HubPost.propTypes = {
    clubImage: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    clubName: PropTypes.string.isRequired,
    postDate: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    onCommentPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        padding: 15,
        marginBottom: 20,
    },
    clubInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    clubImage: {
        width: 42,
        height: 42,
        borderRadius: 21,
        marginRight: 10,
    },
    clubName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.blackText,
    },
    date: {
        fontSize: 14,
        color: colors.labelGrey,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.blackText,
        marginBottom: 5,
    },
    content: {
        fontSize: 16,
        color: colors.blackText,
        marginBottom: 10,
    },
    moreText: {
        color: colors.secondaryText,
        fontWeight: 'bold',
    },
    reactionsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    reactionContainer: {
        marginRight: 20,
    },
});

export default HubPost;