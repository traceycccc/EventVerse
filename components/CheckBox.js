// CheckBox.js
import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../colors';

const CheckBox = ({ isChecked, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.checkbox, isChecked ? styles.checked : null]}>
                {isChecked && <MaterialIcons name="check" size={16} color="#fff" />}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: colors.labelIcon,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    checked: {
        backgroundColor: colors.primaryBlue,
        borderColor: colors.primaryBlue,
    },
});

export default CheckBox;
