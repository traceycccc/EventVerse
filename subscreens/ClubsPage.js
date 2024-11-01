


// ClubsPage.js
import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ClubButton from '../components/ClubButton'; // Assuming ClubButton is in the same directory
import colors from '../colors';
import { useNavigation } from '@react-navigation/native';

const clubData = [
    { id: '1', title: 'IT Club', imageSource: require('../assets/IT.png') }, // Use your actual image paths
    { id: '2', title: 'IEC', imageSource: require('../assets/A.png') },
    { id: '3', title: 'Nerf Club', imageSource: require('../assets/B.png') },
    { id: '4', title: 'Anime Club', imageSource: require('../assets/C.png') },
    { id: '5', title: 'Chess Club', imageSource: require('../assets/D.png') }, // Odd item, ensure it aligns to the left
];

const ClubsPage = () => {
    const navigation = useNavigation(); // Using the navigation hook

    

    const renderClubButton = ({ item, index }) => (
        <View style={[styles.clubButtonContainer, (index % 2 === 1) ? styles.rightAlign : styles.leftAlign]}>
            <ClubButton
                title={item.title}
                imageSource={item.imageSource}
                onPress={() => {
                    if (item.title === 'IT Club') {
                        // Navigate to ITClub page when IT Club is clicked
                        navigation.navigate('ITClub');
                    } else {
                        console.log(`${item.title} pressed`);
                    }
                }}
            />
        </View>
    );


    return (
        <View style={styles.container}>
            <FlatList
                data={clubData}
                renderItem={renderClubButton}
                keyExtractor={(item) => item.id}
                numColumns={2}
                contentContainerStyle={styles.flatListContent}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        padding: 10,
    },
    flatListContent: {
        justifyContent: 'center',
    },
    clubButtonContainer: {
        flex: 1,
        marginHorizontal: 22,
        alignItems: 'center',
    },
    leftAlign: {
        alignItems: 'flex-start', // Aligns items to the left
    },
    rightAlign: {
        alignItems: 'flex-end', // Aligns items to the right
    },
});

export default ClubsPage;
