// import React from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';

// const FeedCard = ({ post }) => {
//     return (
//         <View style={styles.card}>
//             <View style={styles.header}>
//                 <Image style={styles.icon} source={require('../assets/it_club.png')} />
//                 <Text style={styles.title}>{post.title}</Text>
//             </View>
//             <Image style={styles.image} source={{ uri: 'https://via.placeholder.com/300' }} />
//             <View style={styles.actions}>
//                 <TouchableOpacity>
//                     <MaterialIcons name="favorite-border" size={24} color="black" />
//                 </TouchableOpacity>
//                 <TouchableOpacity>
//                     <MaterialIcons name="bookmark-border" size={24} color="black" />
//                 </TouchableOpacity>
//                 <TouchableOpacity>
//                     <Text style={styles.register}>REGISTER</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity>
//                     <MaterialIcons name="notifications-none" size={24} color="black" />
//                 </TouchableOpacity>
//             </View>
//             <Text style={styles.stats}>{`${post.likes} likes  ${post.views} views`}</Text>
//             <Text style={styles.date}>{post.date}</Text>
//             <Text style={styles.description}>Lorem ipsum dolor sit amet...</Text>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     card: {
//         backgroundColor: '#fff',
//         marginBottom: 15,
//         padding: 15,
//         borderRadius: 10,
//     },
//     header: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginBottom: 10,
//     },
//     icon: {
//         width: 40,
//         height: 40,
//         borderRadius: 20,
//         marginRight: 10,
//     },
//     title: {
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
//     image: {
//         width: '100%',
//         height: 200,
//         borderRadius: 10,
//         marginBottom: 10,
//     },
//     actions: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginBottom: 10,
//     },
//     register: {
//         fontSize: 14,
//         color: '#007BFF',
//     },
//     stats: {
//         fontSize: 14,
//         color: '#777',
//         marginBottom: 5,
//     },
//     date: {
//         fontSize: 12,
//         color: '#aaa',
//         marginBottom: 10,
//     },
//     description: {
//         fontSize: 14,
//         color: '#333',
//     },
// });

// export default FeedCard;


import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const FeedCard = ({ post }) => {
    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <Image style={styles.icon} source={require('../assets/it_club.png')} />
                <Text style={styles.title}>{post.title}</Text>
            </View>
            <Image style={styles.image} source={{ uri: 'https://via.placeholder.com/300' }} />
            <View style={styles.actions}>
                <TouchableOpacity>
                    <MaterialIcons name="favorite-border" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialIcons name="bookmark-border" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.register}>REGISTER</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialIcons name="notifications-none" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <Text style={styles.stats}>{`${post.likes} likes  ${post.views} views`}</Text>
            <Text style={styles.date}>{post.date}</Text>
            <Text style={styles.description}>Lorem ipsum dolor sit amet...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    // styles go here
});

export default FeedCard;
