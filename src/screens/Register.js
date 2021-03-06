import React from 'react';
import {
    StyleSheet,
    View, 
    Text,
    TextInput,
    Image,
    Dimensions,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,} from 'react-native';
import DentBudLogo from '../assets/images/dentbud-logo-md.png';


const Register = ({navigation}) => {
    return (<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.container}>
      <View style={styles.bigCircle}></View>
      <View style={styles.smallCircle}></View>
      <View style={styles.centerizedView}>
        <View style={styles.authBox}>
          <View style={styles.logoBox}>
            <Image source={DentBudLogo} style={{width: 60, height: 60, borderRadius: 0}}  />
          </View>
          <Text style={[styles.appName]}>DentBud</Text>
          <Text style={styles.loginTitleText}>Register</Text>
          <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Name</Text>
            <TextInput
              style={styles.input}
              autoCapitalize={"none"}
              keyboardType='email-address'
              textContentType='emailAddress'
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={styles.input}
              autoCapitalize={"none"}
              keyboardType='email-address'
              textContentType='emailAddress'
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              style={styles.input}
              autoCapitalize={false}
              secureTextEntry={true}
              textContentType='password'
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.inputLabel}>Retype Password</Text>
            <TextInput
              style={styles.input}
              autoCapitalize={false}
              secureTextEntry={true}
              textContentType='password'
            />
          </View>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.registerText}>
              Don't have an account? Register
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  </TouchableWithoutFeedback>)
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
    },
    bigCircle: {
      width: Dimensions.get('window').height * 0.7,
      height: Dimensions.get('window').height * 0.7,
      backgroundColor: "#4845D240",
      borderRadius: 1000,
      position: 'absolute',
      left: Dimensions.get('window').width * 0.25,
      top: -50,
    },
    smallCircle: {
      width: Dimensions.get('window').height * 0.4,
      height: Dimensions.get('window').height * 0.4,
      backgroundColor: "#4845D240",
      borderRadius: 1000,
      position: 'absolute',
      bottom: Dimensions.get('window').width * -0.2,
      left: Dimensions.get('window').width * -0.3,
    },
    centerizedView: {
      width: '100%',
      top: '10%',
    },
    authBox: {
      width: '85%',
      backgroundColor: '#fafafa',
      borderRadius: 20,
      alignSelf: 'center',
      paddingHorizontal: 14,
      paddingBottom: 30,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.05,
      shadowRadius: 11.84,
      elevation: 10,
    },
    logoBox: {
      width: 90,
      height: 90,
    //   backgroundColor: "#000000",
      borderRadius: 1000,
      alignSelf: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 5,
      marginBottom: -15
    },
    appName: {
      fontSize: 15,
      color: "black",
      fontFamily: "Euclid Circular A Medium",
      textAlign: "center"
    },
    loginTitleText: {
      fontSize: 22,
      marginTop: 10,
      color: "black",
      fontFamily: "Euclid Circular A Medium",
    //   textAlign: "center"
    },
    hr: {
      width: '100%',
      height: 0.5,
      backgroundColor: '#444',
      marginTop: 6,
    },
    inputBox: {
      marginTop: 10,
    },
    inputLabel: {
      fontSize: 18,
      marginBottom: 6,
      color: "black",
      fontFamily: "Euclid Circular A Regular",
    },
    input: {
      width: '100%',
      height: 40,
      backgroundColor: '#dfe4ea',
      borderRadius: 4,
      paddingHorizontal: 10,
    },
    loginButton: {
      backgroundColor: "#4845D2",
      marginTop: 20,
      paddingVertical: 10,
      borderRadius: 4,
    },
    loginButtonText: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 20,
      fontFamily: "Euclid Circular A Regular"
    },
    registerText: {
      textAlign: 'center',
      marginTop: 20,
      fontSize: 14,
      color: "black",
      fontFamily: "Euclid Circular A Regular"
    },
    forgotPasswordText: {
      textAlign: 'center',
      marginTop: 12,
      fontSize: 16,
      color: "black",
      fontFamily: "Euclid Circular A Regular"
    },
  });

export default Register;