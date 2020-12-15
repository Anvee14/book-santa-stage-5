import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer'
//import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import firebase from 'firebase';
import { Avatar } from "react-native-elements";
export default class CustomSideBarMenu extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 0.5,

            alignItems: "center",
            backgroundColor: "orange",
          }}
        >

        </View>
        <View style={styles.drawerItemsContainer}>
          <DrawerItems {...this.props} />
        </View>
        <View style={styles.logOutContainer}>
          <TouchableOpacity style={styles.logOutButton}
            onPress={() => {
              this.props.navigation.navigate('WelcomeScreen')
              firebase.auth().signOut()
            }}>
            <Text>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  drawerItemsContainer: {
    flex: 0.8
  },
  logOutContainer: {
    flex: 0.2,
    justifyContent: 'flex-end',
    paddingBottom: 30
  },
  imageContainer: {
    flex: 0.75,
    width: "40%",
    height: "20%",
    marginLeft: 20,
    marginTop: 30,
    borderRadius: 40,
  },
  logOutButton: {
    height: 30,
    width: '100%',
    justifyContent: 'center',
    padding: 10
  },
  logOutText: {
    fontSize: 30,
    fontWeight: 'bold'
  }
})
