// TextInputField.js
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../colors';

const TextInputField = ({ label, value, onChangeText, placeholder }) => {
    return (
        <View style={styles.container}>
            {label && <Text style={styles.label}>{label}</Text>}
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={colors.placeholderGrey}
            />
        </View>
    );
};

TextInputField.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
};

TextInputField.defaultProps = {
    label: '',
    placeholder: '',
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    label: {
        fontSize: 16,
        color: colors.labelGrey,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: colors.labelIcon,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontSize: 16,
        color: colors.blackText,
    },
});

export default TextInputField;