import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import TabButtonPage from '../components/TabButtonPage';
import ITProfilePage from '../subscreens/ITProfilePage';
import ITClubFAQ from '../subscreens/ITClubFAQ';
import colors from '../colors';

const ITClub = () => {
    const [chosenTabIndex, setChosenTabIndex] = useState(0);
 

    const tabs = [
        { title: 'Profile' },
        { title: 'FAQ' },
    ];

    

    const renderSelectedTab = () => {
       

        switch (chosenTabIndex) {
            case 0:
                return <ITProfilePage />;
            case 1:
                return <ITClubFAQ />;
            default:
                return <ITProfilePage />;
        }
    };

    

    return (
        <View style={styles.container}>
            <TabButtonPage
                tabs={tabs}
                chosenIndex={chosenTabIndex}
                onTabPress={(index) => {
                    setChosenTabIndex(index);
                }}
            />
            <View style={styles.contentContainer}>
                {renderSelectedTab()}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    contentContainer: {
        flex: 1,
    },
});

export default ITClub;
