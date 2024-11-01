// TabButtonFAQ.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../colors';

const TabButtonFAQ = ({ title, chosen, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, chosen ? styles.chosen : styles.notChosen]}
      onPress={onPress}
    >
      <Text style={[styles.text, chosen ? styles.chosenText : styles.notChosenText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

TabButtonFAQ.propTypes = {
  title: PropTypes.string.isRequired,
  chosen: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 6,
    paddingHorizontal: 18,
    borderRadius: 25,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  chosen: {
    backgroundColor: colors.primaryBlue,
  },
  notChosen: {
    backgroundColor: colors.secondaryContainer,
  },
  text: {
    fontSize: 18,
    fontWeight: 'medium',
  },
  chosenText: {
    color: colors.white,
  },
  notChosenText: {
    color: colors.primaryBlue,
  },
});

export default TabButtonFAQ;