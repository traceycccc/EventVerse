// FAQSection.js
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import TabButtonFAQ from './TabButtonFAQ';
import FAQList from './FAQList';
import colors from '../colors';

const FAQSection = ({ sections }) => {
  const [selectedTab, setSelectedTab] = useState(sections[0].title);

  return (
    <View style={styles.container}>
      {/* Render the tab buttons */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false} 
        style={styles.tabScrollContainer}
        contentContainerStyle={styles.tabContainer}
      >
        {sections.map((section) => (
          <TabButtonFAQ
            key={section.title}
            title={section.title}
            chosen={selectedTab === section.title}
            onPress={() => setSelectedTab(section.title)}
          />
        ))}
      </ScrollView>
      {/* Render the FAQ list for the selected tab */}
      {sections.map(
        (section) =>
          selectedTab === section.title && (
            <FAQList key={section.title} faqData={section.faqData} />
          )
      )}
    </View>
  );
};

FAQSection.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      faqData: PropTypes.arrayOf(
        PropTypes.shape({
          question: PropTypes.string.isRequired,
          answer: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

const styles = StyleSheet.create({
  container: {

  },
  tabScrollContainer: {
    marginBottom: 6,
    marginTop: 16,
  },
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10, // Adjust this to create spacing between tabs
  },
});

export default FAQSection;
