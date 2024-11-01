// FAQList.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../colors';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <View style={[styles.itemContainer, isOpen && styles.openItem]}>
            <TouchableOpacity style={styles.questionContainer} onPress={() => setIsOpen(!isOpen)}>
                <Text style={[styles.questionText, isOpen && styles.openQuestionText]}>{question}</Text>
                <MaterialIcons name={isOpen ? 'expand-less' : 'expand-more'} size={24} color={colors.blackText} />
            </TouchableOpacity>
            {isOpen && <Text style={styles.answerText}>{answer}</Text>}
        </View>
    );
};

FAQItem.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
};

const FAQList = ({ faqData }) => {
    return (
        <View style={styles.listContainer}>
            {faqData.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
        </View>
    );
};

FAQList.propTypes = {
    faqData: PropTypes.arrayOf(
        PropTypes.shape({
            question: PropTypes.string.isRequired,
            answer: PropTypes.string.isRequired,
        })
    ).isRequired,
};

const styles = StyleSheet.create({
    listContainer: {
        marginVertical: 10,
    },
    itemContainer: {
        backgroundColor: colors.white,
        borderRadius: 0,
        paddingHorizontal: 20,
        paddingVertical: 18,
        marginVertical: 0,
    },
    openItem: {
        backgroundColor: colors.secondaryContainer,
    },
    questionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    questionText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.blackText,
    },
    openQuestionText: {
        color: colors.primaryBlue,
    },
    answerText: {
        marginTop: 10,
        fontSize: 16,
        color: colors.blackText,
    },
});

export default FAQList;