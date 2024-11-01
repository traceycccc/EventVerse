




import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from './colors';

import { ClubProvider } from './context/ClubContext';
import { useClub } from './context/ClubContext';  // Import the useClub hook 

import FeedScreen from './screens/FeedScreen';
import ClubA from './screens/ClubA';
import UserProfile from './screens/UserProfile';
import EditProfile from './screens/EditProfile';
import EventParticipationPage from './screens/EventParticipationPage';
import ParticipatingEvents from './screens/ParticipatingEvents';
import Notifications from './screens/Notifications';
import ExploreClubs from './screens/ExploreClubs';
import ITClub from './screens/ITClub';
import MemberRequestPage from './subscreens/MemberRequestPage';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function CustomDrawerContent(props) {
  const [clubsExpanded, setClubsExpanded] = React.useState(false); // State for dropdown
  const { clubAJoined } = useClub();


  const toggleClubsDropdown = () => {
    setClubsExpanded(!clubsExpanded); // Toggle dropdown state
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Text style={styles.headerText}>EventVerse</Text>
      </View>

      {/* Drawer Items */}
      <DrawerItem
        label={() => <Text style={styles.drawerLabel}>Events Feed</Text>}
        icon={() => <MaterialIcons name="feed" size={24} color={colors.iconColor} />}
        onPress={() => props.navigation.navigate('Events Feed')}
      />
      <DrawerItem
        label={() => <Text style={styles.drawerLabel}>Participating Events</Text>}
        icon={() => <MaterialIcons name="event" size={24} color={colors.iconColor} />}
        onPress={() => props.navigation.navigate('Participating Events')}
      />
      <DrawerItem
        label={() => <Text style={styles.drawerLabel}>Explore Clubs</Text>}
        icon={() => <MaterialIcons name="groups" size={24} color={colors.iconColor} />}
        onPress={() => props.navigation.navigate('Explore Clubs')}
      />

      {/* My Clubs with Dropdown */}
      <DrawerItem
        label={() => <Text style={styles.drawerLabel}>My Clubs</Text>}
        icon={() => <MaterialIcons name="group" size={24} color={colors.iconColor} />}
        onPress={toggleClubsDropdown}  // Toggle dropdown on press
      />

      {clubsExpanded && (
        <View style={styles.dropdown}>
          {clubAJoined && (
            <DrawerItem
              label={() => <Text style={styles.drawerLabel}>IEC</Text>}
              onPress={() => props.navigation.navigate('IEC')}
            />
          )}
          <DrawerItem
            label={() => <Text style={styles.drawerLabel}>Nerf Club</Text>}
            onPress={() => console.log('Club B')}
          />
        </View>
      )}

      <DrawerItem
        label={() => <Text style={styles.drawerLabel}>Notifications</Text>}
        icon={() => <MaterialIcons name="notifications" size={24} color={colors.iconColor} />}
        onPress={() => props.navigation.navigate('Notifications')}
      />
      <DrawerItem
        label={() => <Text style={styles.drawerLabel}>User Profile</Text>}
        icon={() => <MaterialIcons name="account-circle" size={24} color={colors.iconColor} />}
        onPress={() => props.navigation.navigate('User Profile')}
      />

    </DrawerContentScrollView>
  );
}

function UserProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primaryBlue,
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={({ navigation }) => ({
          title: 'User Profile',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{ marginLeft: 15 }}>
              <MaterialIcons name="menu" size={24} color={colors.white} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('EditProfile', {
              name: navigation.getParam('name'),
              programme: navigation.getParam('programme'),
              contact: navigation.getParam('contact'),
              setName: navigation.getParam('setName'),
              setProgramme: navigation.getParam('setProgramme'),
              setContact: navigation.getParam('setContact'),
            })} style={{ marginRight: 15 }}>
              <MaterialIcons name="edit" size={24} color={colors.white} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={({ navigation }) => ({
          title: 'Edit Profile',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 15 }}>
              <MaterialIcons name="arrow-back" size={24} color={colors.white} />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      initialRouteName="Feed"
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: colors.primaryBlue,
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{ marginLeft: 15 }}>
            <MaterialIcons name="menu" size={24} color={colors.white} />
          </TouchableOpacity>
        ),
      })}
    >
      <Drawer.Screen name="Events Feed" component={FeedScreen} />
      <Drawer.Screen name="IEC" component={ClubA} />
      <Drawer.Screen name="Participating Events" component={ParticipatingEvents} />
      <Drawer.Screen name="Notifications" component={Notifications} />
      <Drawer.Screen name="Explore Clubs" component={ExploreClubs} />
      <Drawer.Screen name="User Profile" component={UserProfileStack} options={{ headerShown: false }} />
      {/* <Drawer.Screen name="EventParticipationPage" component={EventParticipationPage} /> */}
      <Drawer.Screen
        name="EventParticipationPage"
        component={EventParticipationPage}
        options={({ navigation }) => ({
          title: 'Event Participation Page',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 15 }}>
              <MaterialIcons name="arrow-back" size={24} color={colors.white} />
            </TouchableOpacity>
          ),
        })}
      />
      <Drawer.Screen
        name="ITClub"
        component={ITClub}
        options={({ navigation }) => ({
          title: 'IT Club',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Explore Clubs', { chosenIndex: 0 })}
              style={{ marginLeft: 15 }}
            >
              <MaterialIcons name="arrow-back" size={24} color={colors.white} />
            </TouchableOpacity>
          ),
        })}
      />

      <Drawer.Screen
        name="MemberRequestPage"
        component={MemberRequestPage}
        options={({ navigation }) => ({
          title: 'Member Request Page',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('ITClub', { tabIndex: 0 })} style={{ marginLeft: 15 }}>
              <MaterialIcons name="arrow-back" size={24} color={colors.white} />
            </TouchableOpacity>
          ),
        })}
      />



    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <ClubProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </ClubProvider>
  );
}

const styles = StyleSheet.create({
  drawerHeader: {
    padding: 20,
    backgroundColor: colors.secondaryContainer,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.iconColor,
  },
  drawerLabel: {
    fontSize: 15.5,
    fontWeight: 'normal', // or 'normal'
    color: colors.blackText, // Customize this with your color choice
  },
  dropdown: {
    paddingLeft: 80,  // Indent the dropdown items
  },
});