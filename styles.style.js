import { StyleSheet } from 'react-native';
import Image from './assets/axiom-pattern.png';

export default StyleSheet.create({
    mainStyles : {
      backgroundColor: '#001924',
      backgroundImage: `url(${Image})`,
      alignItems: 'center',
      flex: 1,
    },
    innerPara: {
      paddingTop: 24, 
    }, 
    headerContainer: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'nowrap',
      marginTop: 30, 
      marginBottom: 30,
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
      height: 50, 
      width: 50,
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
      marginLeft: 40,
      fontSize: 20,
      marginTop: 25,
      color: 'white',
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
    welcomeContainer: {
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