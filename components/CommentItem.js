// CommentItem.js
import React from 'react';
import { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import ReactionElement from './ReactionElement';
import colors from '../colors';


const CommentItem = ({ imageSource, title, content, reactions }) => {
    const [liked, setLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(123);
    return (
        <View style={styles.container}>
            <Image source={imageSource} style={styles.image} />
            <View style={styles.textContainer}>
                <View style={styles.titleRow}>
                    <Text style={styles.title}>{title}</Text>
                    <ReactionElement
                        icon="heart"
                        count={likesCount}
                        isActive={liked}
                        onPress={() => {
                            setLiked(!liked);
                            setLikesCount(liked ? likesCount - 1 : likesCount + 1);
                        }}
                        iconSize={20} // Adjusted icon size
                        textSize={14} 
                    />
                    
                </View>
                <View style={styles.contentContainer}>
                    <Text style={styles.content}>{content}</Text>
                </View>
            </View>
        </View>
    );
};

CommentItem.propTypes = {
    imageSource: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]).isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    reactions: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: colors.white,
        borderRadius: 10,
        marginVertical: 5,
        marginHorizontal: 0
        
    },
    image: {
        width: 42,
        height: 42,
        borderRadius: 21,
        marginRight: 15,
    },
    textContainer: {
        flex: 1,
        
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.blackText,
    },
    contentContainer: {
        marginTop: 5,
        paddingRight: 40, // Add some padding to prevent content from going under ReactionElement
    },
    content: {
        fontSize: 14,
        color: colors.blackText,
    },
});

export default CommentItem;
