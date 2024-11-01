import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TabButtonPage from '../components/TabButtonPage';
import ClubAProfilePage from '../subscreens/ClubAProfilePage';
import ClubAHub from '../subscreens/ClubAHub';
import ClubAFAQ from '../subscreens/ClubAFAQ';
import HubSearchingBar from '../components/HubSearchingBar';
import colors from '../colors';

const ClubA = () => {
    const [chosenTabIndex, setChosenTabIndex] = useState(0);
    const [isSearching, setIsSearching] = useState(false);
    const [posts, setPosts] = useState([
        { title: 'Title yyy', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', postDate: '15 Sept 2024', key: '1' },
        { title: 'Title zzz', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', postDate: '15 Sept 2024', key: '2' },
        { title: 'Title zzz', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', postDate: '15 Sept 2024', key: '3' },
        { title: 'Give suggestions on welcoming party', content: 'Hi club members!!! We would like to have an ear on any suggestions for the upcoming welcoming party! Your ideas will be helpful for us, thanks!!', postDate: '15 Sept 2024', key: '4' },
    ]);
    const navigation = useNavigation();

    const tabs = [
        { title: 'Profile' },
        { title: 'FAQ' },
        { title: 'Hub' },
    ];

    const handleSearchResultSelect = (searchResult) => {
        // Move the "Give suggestions on welcoming party" post to the top of the list
        const updatedPosts = posts.filter(post => post.title !== searchResult);
        const selectedPost = posts.find(post => post.title === searchResult);
        if (selectedPost) {
            setPosts([selectedPost, ...updatedPosts]);
        }
        setIsSearching(false); // Close search bar
    };

    const renderSelectedTab = () => {
        if (isSearching) {
            return <HubSearchingBar placeholder="Search Hub Posts..." onResultSelect={handleSearchResultSelect} onBackPress={() => setIsSearching(false)} />;
        }

        switch (chosenTabIndex) {
            case 0:
                return <ClubAProfilePage />;
            case 1:
                return <ClubAFAQ />;
            case 2:
                return <ClubAHub posts={posts} />;
            default:
                return <ClubAProfilePage />;
        }
    };

    useEffect(() => {
        if (chosenTabIndex === 2) {
            navigation.setOptions({
                headerRight: () => (
                    <MaterialIcons
                        name="search"
                        size={24}
                        color={colors.white}
                        style={{ marginRight: 15 }}
                        onPress={() => setIsSearching(true)}
                    />
                ),
            });
        } else {
            navigation.setOptions({
                headerRight: () => null,
            });
        }
    }, [chosenTabIndex, navigation]);

    return (
        <View style={styles.container}>
            <TabButtonPage
                tabs={tabs}
                chosenIndex={chosenTabIndex}
                onTabPress={(index) => {
                    setIsSearching(false);
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

export default ClubA;
