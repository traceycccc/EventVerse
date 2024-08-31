// import React from 'react';
// import {View, Text, Button} from 'react-native';

// function HomeScreen({ navigation }) {
//     return (
//         <View>
//             <Text>Home Screen</Text>
//             <Button
//                 title="Go to Details"
//                 onPress={() => navigation.navigate('Details')}
//             />
//         </View>
//     );
// }

// export default HomeScreen;


// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const HomeScreen = () => {
//     return (
//         <View style={styles.container}>
//             <Text>Welcome to EventVerse!</Text>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
// });

// export default HomeScreen;

import React from 'react';
import FeedScreen from './FeedScreen';

const HomeScreen = () => {
    return <FeedScreen />;
};

export default HomeScreen;


