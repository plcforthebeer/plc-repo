import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    mainStyles : {
      backgroundColor: '#001924',
      alignItems: 'center',
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center",
      width: 10
    },
    innerPara: {
      paddingTop: 24, 
    }, 
    headerBackground: {
      paddingBottom: 40,
      paddingTop: 96,
      paddingHorizontal: 32,
    },
    headerText: {
      fontSize: 40,
      fontWeight: '700',
      textAlign: 'center',
      color: 'white'
    },
    headerLogo: {
      opacity: 0.5,
      overflow: 'visible',
      resizeMode: 'cover',
      /*
       * These negative margins allow the image to be offset similarly across screen sizes and component sizes.
       *
       * The source logo.png image is 512x512px, so as such, these margins attempt to be relative to the
       * source image's size.
       */
      marginLeft: -128,
      marginBottom: -192,
    },
    headerPadding: {
      padding: 20,
      flexDirection: 'row',
    },
    beerPara: {
      backgroundColor: '#001924',
      padding: '6%',
      color: 'white', 
      margin: 40,
    }, 
    beerImage: {
      marginRight: 40,
      height: 150, 
      width: 150,
      overflow: 'visible',
      resizeMode: 'cover',
      opacity: 0.1,
    },
    para2: {
      color: 'white', 
      fontSize: 15,
      margin: 10,
      marginLeft: 35,
    },
    para3: {
      color: 'white',
      fontSize: 15, 
      margin: 3,
      marginLeft: 35,
      marginTop: 5,
    },
    para5: {
      color: 'white',
      fontSize: 15, 
      marginTop: 5,
      textAlign: 'center',
    },
    padding: {
      margin: 2,
    },
    header: {
      marginLeft: 10,
      fontSize: 15,
      marginTop: 25,
      color: 'white',
      textAlign: 'center'
    },
    input: {
      height: 50,
      paddingHorizontal: 8,
      paddingBottom: 10,
      width: '80%',
      borderColor: '#ddd',
      borderWidth: 1,
      backgroundColor: '#fff',
      borderRadius: 15,
      textAlign: 'center',
      marginLeft: 40, 
      marginRight: 30,
      marginTop: 20,
    }, 
    dropDown: {
      height: 50,
      width: '80%', 
      borderRadius: 15,
      textAlign: 'center',
      marginLeft: 40, 
      paddingHorizontal: 8,
      marginRight: 30,
    },
    buttonStyle: {
      marginTop: 16,
      backgroundColor: "black",
      borderRadius: 25, 
      marginLeft: 40,
      marginRight: 30,
      marginBottom: 30,
      width: '80%',
    },
    Container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    SplashContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#3b5998',
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 300,
    }
  });