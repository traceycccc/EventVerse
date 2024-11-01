




import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import TabButtonPage from '../components/TabButtonPage';
import ClubsPage from '../subscreens/ClubsPage';
import Requests from '../subscreens/Requests';
import colors from '../colors';
import { useRoute } from '@react-navigation/native';

const ExploreClubs = () => {
    const route = useRoute();
    const [chosenTabIndex, setChosenTabIndex] = useState(0);

    useEffect(() => {
        // Update the chosenTabIndex whenever the route parameters change
        if (route.params?.chosenIndex !== undefined) {
            setChosenTabIndex(route.params.chosenIndex);
        }
    }, [route.params?.chosenIndex]);

    const tabs = [
        { title: 'Clubs' },
        { title: 'Requests' },
    ];

    const renderSelectedTab = () => {
        switch (chosenTabIndex) {
            case 0:
                return <ClubsPage />;
            case 1:
                return <Requests />;
            default:
                return <ClubsPage />;
        }
    };

    return (
        <View style={styles.container}>
            <TabButtonPage
                tabs={tabs}
                chosenIndex={chosenTabIndex}
                onTabPress={(index) => setChosenTabIndex(index)}
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

export default ExploreClubs;
