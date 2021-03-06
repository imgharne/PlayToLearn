import React, { Component } from 'react';
import { Text,Button, View, StyleSheet, TextInput, TouchableHighlight, ScrollView, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Header } from 'react-native-elements';
import Colors from '../../constants/Colors';
import Fonts from '../../utils/fonts/Fonts';
import MenuButton from '../../components/MenuButton/MenuButton';
import NavBarButton from '../../components/NavBarButton/NavBarButton';
import ScreensLabel from '../../utils/labels/screensLabel';
import avatarsManager from '../../utils/avatars/avatarsManager';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import InputValue from '../../components/InputValue/InputValue';


class Sttings extends Component {
  static navigationOptions ={
    header: null
  };

  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    console.log('value: ', value);
  }
  handleInput = () =>  {
    console.log('test ');
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          containerStyle={styles.headerStyle}
          leftComponent={<MenuButton />}
          centerComponent={
            <NavBarButton
              iconName='dashboard'
              navigationTo={ScreensLabel.labels.DASHBOARD}
            />
          }
          rightComponent={
            <NavBarButton
            iconName='notifications'
            navigationTo={ScreensLabel.labels.NOTIFICATIONS}
            />
          }
        />


        <View style={styles.topLinks}>
            <View style={styles.profile}>
                <View style={styles.imgView}>
                    <Image style={styles.img} source={avatarsManager.getAvatar('User05b')} />
                </View>

                <View>
                    <Text style={styles.username}>
                     {this.props.navigation.getParam('name', 'J.Smith')}
                    </Text>
                </View>
            </View>

            </View>
            <View>
            <Text></Text>
            <InputValue style={{height: 43, width:'70%', textAlign:"center", alignSelf: 'center', padding: 15, borderColor: 'gray', borderWidth: 1}} placeholder="Username" onChangeText={this.handleInput} />
            <Text></Text>
            <InputValue style={{height: 45, width:'70%', textAlign:"center", alignSelf: 'center', padding: 15, borderColor: 'gray', borderWidth: 1}} placeholder="Email" onChangeText={this.handleInput} />
            <Text></Text>
            <InputValue style={{height: 45, width:'70%', textAlign:"center", alignSelf: 'center', padding: 15, borderColor: 'gray', borderWidth: 1}} placeholder="Password" onChangeText={this.handleInput} />
            <Text></Text>
            <InputValue style={{height: 45, width:'70%', textAlign:"center", alignSelf: 'center', padding: 15, borderColor: 'gray', borderWidth: 1}} placeholder="Password Confirmation" onChangeText={this.handleInput} />
            <Text></Text>

            <View style={styles.button}>
            <Button
              title="UPDATE!"
              onPress={this.handleSubmit}
            />
            </View>

             </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {

    justifyContent: 'center',
},
  container1: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:5,
    padding: 2,
    backgroundColor: '#ffffff',
  },

  profile: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
  },
  imgView: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      paddingTop: 20,
      paddingBottom: 10
  },
  topLinks: {
      backgroundColor: Colors.blueThemeColor,
      height: 120,
      borderBottomWidth: 6,
      borderBottomColor: Colors.redThemeColor
  },

  img: {
      width: 75,
      height: 75,
      borderRadius: 50
  },
  username: {
    //  flex: 1,
      flexDirection: 'column',
    //  justifyContent: 'center',
      color: '#fff',

      fontFamily: Fonts.InknutAntiquaSemiBold
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {

    height: 70,
    width:'70%',

    marginBottom: 10,
    alignSelf: 'center',
    justifyContent: 'center'
  },

  headerStyle: {
    backgroundColor: Colors.blueThemeColor,
  }
});

export default withNavigation(Sttings);
