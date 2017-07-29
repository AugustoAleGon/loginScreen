/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class ReactTest extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.imageWrapper}
          source={{uri: 'http://lorempixel.com/570/250/nightlife/'}}
         />
         <TouchableOpacity style={styles.buttonStyle}>
           <Icon
             style = {{ marginLeft: 20}}
             name = "ios-contact"
             size = {40}
             color = "#FFF"
           />
           <Text style={styles.buttonText}>
             Login
           </Text>
         </TouchableOpacity>
         <View style={styles.dividerButtons}>
           <View style={styles.dividerLine} />
           <Text style={styles.textDivider}>Or</Text>
           <View style={styles.dividerLine} />
         </View>
        <TouchableOpacity style={styles.buttonStyleB}>
          <Icon
            style = {{ marginLeft: 20}}
            name = "logo-facebook"
            size = {30}
            color = "#FFF"
          />
          <Text style={styles.buttonText}>
            Connect With Facebook
          </Text>
        </TouchableOpacity>
        <Text style={{ textAlign: 'center', color: '#fff', fontSize: 17, marginTop: 50, marginBottom: 25}}>
          Don't Have an Account?
        </Text>
        <TouchableOpacity style={styles.buttonBottom}>
          <Text style={{ textAlign: 'center', color: '#3f9dd9', fontSize: 20}}>
            Create Account?
          </Text>
        </TouchableOpacity>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1a234c',
  },
  imageWrapper: {
    width: 250,
    height: 125,
    marginBottom: 80,
    marginTop: 80,
  },
  buttonStyle: {
    flexDirection: 'row',
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'flex-start',
    width:300,
    height:50,
    backgroundColor:'#be5116',
    borderRadius:25,
  },
  buttonText: {
    flex: 1,
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
  },
  dividerButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: 300,
  },
  dividerLine: {
    flex: 1,
    backgroundColor: '#b0c1d5',
    height: 1
  },
  textDivider: {
    fontSize: 15,
    color: '#b0c1d5',
    textAlign: 'center',
  },
  buttonStyleB: {
    flexDirection: 'row',
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'flex-start',
    width:300,
    height:50,
    backgroundColor:'#1e5791',
    borderRadius:25,
  },
  buttonBottom: {
    flexDirection: 'row',
    borderWidth:1,
    borderColor:'#3f9dd9',
    alignItems:'center',
    justifyContent:'center',
    width:200,
    height:50,
    backgroundColor:'#1e5791',
    borderRadius:25,
  },
});

AppRegistry.registerComponent('ReactTest', () => ReactTest);
