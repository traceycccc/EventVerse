// FeedSearchingBar.js
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, FlatList, Text, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../colors';

const FeedSearchingBar = ({ placeholder, onResultSelect, onBackPress }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [showResults, setShowResults] = useState(false);
    const searchResults = ['IT Seminar Oct 2024'];

    const handleClear = () => {
        setSearchQuery('');
        setShowResults(false);
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
        setShowResults(true);
    };

    const renderResultItem = ({ item }) => (
        <TouchableOpacity
            style={styles.resultItem}
            onPress={() => onResultSelect(item)} // Notify parent when a result is selected
        >
            <MaterialIcons name="search" size={20} color={colors.iconGrey} />
            <Text style={styles.resultText}>{item}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.searchBarContainer}>
                <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
                    <MaterialIcons name="arrow-back" size={24} color={colors.blackText} />
                </TouchableOpacity>
                <TextInput
                    style={styles.input}
                    value={searchQuery}
                    onChangeText={handleSearch}
                    placeholder={placeholder}
                    placeholderTextColor={colors.placeholderGrey}
                />
                {searchQuery.length > 0 && (
                    <TouchableOpacity onPress={handleClear} style={styles.clearButton}>
                        <MaterialIcons name="close" size={24} color={colors.blackText} />
                    </TouchableOpacity>
                )}
            </View>
            {showResults && (
                <FlatList
                    data={searchResults.filter(result => result.toLowerCase().includes(searchQuery.toLowerCase()))}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderResultItem}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.searchBar,
        borderRadius: 40,
        paddingHorizontal: 15,
        paddingVertical: 0,
        marginBottom: 15,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: colors.black,
    },
    backButton: {
        marginRight: 10,
    },
    clearButton: {
        marginLeft: 10,
    },
    resultItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor: colors.greyLine,
    },
    resultText: {
        fontSize: 16,
        marginLeft: 10,
        color: colors.blackText,
    },
});

export default FeedSearchingBar;
