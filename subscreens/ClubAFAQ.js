import React from 'react';
import { View, StyleSheet } from 'react-native';
import FAQSection from '../components/FAQSection';

const faqDataGeneral = [
    { question: 'What is the IEC?', answer: 'The IEC is a place for Engineering enthusiasts...' },
    { question: 'Is there a membership fee required?', answer: 'No, membership in the IT Club is free...' },
];

const faqDataEvents = [
    { question: 'How do I register for an event?', answer: 'You can register for events by visiting our website...' },
    { question: 'Are the events online or in-person?', answer: 'We conduct both online and in-person events...' },
];

const faqDataMember = [
    { question: 'How do I register for an event?', answer: 'You can register for events by visiting our website...' },
    { question: 'Are the events online or in-person?', answer: 'We conduct both online and in-person events...' },
];

const ClubAFAQ = () => {
    const sections = [
        { title: 'General', faqData: faqDataGeneral },
        { title: 'Events', faqData: faqDataEvents },
        { title: 'Memberships and Leadership', faqData: faqDataMember },
    ];

    return (
        <View style={styles.container}>
            <FAQSection sections={sections} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default ClubAFAQ;