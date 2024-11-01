// CommentInput.js
import React from 'react';
import { View, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../colors';

const CommentInput = ({ avatarSource, placeholder, onSendPress, value, onChangeText }) => {
    return (
        <View style={styles.container}>
            <Image source={avatarSource} style={styles.avatar} />
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={colors.placeholderGrey}
                value={value}
                onChangeText={onChangeText}
            />
            <TouchableOpacity onPress={onSendPress} style={styles.sendButton}>
                <MaterialIcons name="send" size={24} color={colors.blackText} />
            </TouchableOpacity>
        </View>
    );
};

CommentInput.propTypes = {
    avatarSource: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]).isRequired,
    placeholder: PropTypes.string,
    onSendPress: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
};

CommentInput.defaultProps = {
    placeholder: 'Write a comment...'
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 8,
        marginVertical: 5,
    },
    avatar: {
        width: 42,
        height: 42,
        borderRadius: 21,
        marginRight: 15,
    },
    input: {
        flex: 1,
        fontSize: 14,
        color: colors.blackText,
        padding: 0,
    },
    sendButton: {
        marginLeft: 10,
    },
});

export default CommentInput;