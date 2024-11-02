

import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../colors';
import TabButtonPage from '../components/TabButtonPage';
import FeedExplorePage from '../subscreens/FeedPage';
import FeedSearchingBar from '../components/FeedSearchingBar';
import FilterModal from '../components/FilterModal'; // Import the FilterModal component

const FeedScreen = () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);
    const [isSearching, setIsSearching] = useState(false);
    const [isFiltering, setIsFiltering] = useState(false); // Add state for showing the filter modal

    // Array of posts for Explore tab
    const [posts, setPosts] = useState([
        { clubImage: require('../assets/A.png'), postImage: require('../assets/A_Event.png'), showTag: true, tagTitle: 'Workshop', showRegisterButton: true, clubName: 'IEC', title: 'XXX Event', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', postDate: '15 Sept 2024', key: '1' },
        { clubImage: require('../assets/B.png'), postImage: require('../assets/B_Event.png'), showTag: true, tagTitle: 'Activity', showRegisterButton: true, clubName: 'Nerf Club', title: 'XXX Event', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', postDate: '15 Sept 2024', key: '2' },
        { clubImage: require('../assets/D.png'), postImage: require('../assets/D_Event.png'), showTag: true, tagTitle: 'Competition', showRegisterButton: true, clubName: 'Chess Club', title: 'XXX Event', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', postDate: '15 Sept 2024', key: '3' },
        {
            clubImage: require('../assets/IT.png'), postImage: require('../assets/ITSeminar.png'), showTag: true, tagTitle: 'Seminar', showRegisterButton: true, clubName: 'IT Club', title: 'IT Seminar Oct 2024',
            content: 'Join the Seminar! The Seminar focuses on the impact of AI and Cloud Computing on the IT Industry. The event will be in 6th Oct 2024, 2-5pm, at MPH, IICP. No fee required! ', postDate: '15 Sept 2024', key: '4'
        },
        
    ]);

    // Array of posts for Joined tab
    const [joinedPosts, setJoinedPosts] = useState([
        { clubImage: require('../assets/B.png'), postImage: require('../assets/NEW_B_Event.png'), showTag: true, tagTitle: 'Workshop', showRegisterButton: true, clubName: 'Nerf Club', title: 'Nerf Club Gun Workshop (New Event)', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', postDate: '15 Sept 2024', key: '5' },
        { clubImage: require('../assets/B.png'), postImage: require('../assets/B_Event.png'), showTag: true, tagTitle: 'Activity', showRegisterButton: true, clubName: 'Nerf Club', title: 'XXX Event', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', postDate: '15 Sept 2024', key: '5' },
        
    ]);

    const navigation = useNavigation();
    const route = useRoute();

    useEffect(() => {
        if (route.params?.registeredEventTitle) {
            const updatedPosts = posts.map((post) => {
                if (post.title === route.params.registeredEventTitle) {
                    return {
                        ...post,
                        showRegisterButton: true,
                        registerButtonTitle: 'Registered',
                    };
                }
                return post;
            });
            setPosts(updatedPosts);
        }

        // Set the selected tab index if passed in route parameters
        if (route.params?.tabIndex !== undefined) {
            setSelectedTabIndex(route.params.tabIndex);
        }
    }, [route.params]);

    const tabs = [
        { title: 'Explore' },
        { title: 'Joined' },
    ];

    const handleSearchResultSelect = (searchResult) => {
        const updatedPosts = posts.filter(post => post.title !== searchResult);
        const selectedPost = posts.find(post => post.title === searchResult);
        if (selectedPost) {
            setPosts([selectedPost, ...updatedPosts]);
        }
        setIsSearching(false);
    };

    // Filter functionality: always show "IT Seminar Oct 2024" post
    const handleApplyFilters = () => {
        const filteredPosts = posts.filter(post => post.title === 'IT Seminar Oct 2024');
        setPosts(filteredPosts); // Only show the filtered post
        setIsFiltering(false); // Close the filter modal
    };

    const renderSelectedTab = () => {
        if (isSearching) {
            return (
                <FeedSearchingBar
                    placeholder="Search Feed Posts..."
                    onResultSelect={handleSearchResultSelect}
                    onBackPress={() => setIsSearching(false)}
                />
            );
        }

        return selectedTabIndex === 0 ? (
            <FeedExplorePage posts={posts} />
        ) : (
            <FeedExplorePage posts={joinedPosts} />
        );
    };

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View style={{ flexDirection: 'row' }}>
                    <MaterialIcons
                        name="search"
                        size={24}
                        color={colors.white}
                        style={{ marginRight: 15 }}
                        onPress={() => setIsSearching(true)}
                    />
                    <MaterialIcons
                        name="filter-list"
                        size={24}
                        color={colors.white}
                        style={{ marginRight: 15 }}
                        onPress={() => setIsFiltering(true)} // Open the filter modal
                    />
                </View>
            ),
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <TabButtonPage
                tabs={tabs}
                chosenIndex={selectedTabIndex}
                onTabPress={(index) => {
                    setIsSearching(false);
                    setSelectedTabIndex(index);
                }}
            />
            <View style={styles.contentContainer}>{renderSelectedTab()}</View>

            {/* Filter Modal */}
            <Modal
                visible={isFiltering}
                animationType="none"
                transparent={true}
                onRequestClose={() => setIsFiltering(false)}
            >
                <View style={styles.modalOverlay}>
                    <FilterModal
                        onApplyFilters={handleApplyFilters} // Call the filter function
                        onClose={() => setIsFiltering(false)} // Close the modal
                    />
                </View>
            </Modal>
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
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark background for the modal
    },
});

export default FeedScreen;






