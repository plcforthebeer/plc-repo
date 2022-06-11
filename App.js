import * as React from 'react';
import { Text, View, ScrollView, Image, ImageBackground } from 'react-native';
import styles from './styles.style.js';
import FormComponent from './components/formComponent.js';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount = () => {
    this.setState({ isLoading: false})
  }
 
  render() {
    return (
      <View style={styles.mainStyles}>
        <ImageBackground source={require('./assets/axiom-pattern.png')} resizeMode="repeat" style={styles.mainStyles}>
        <ScrollView >
          <View>
          <ImageBackground
              accessibilityRole="image"
              style={[ styles.headerBackground ]}
              imageStyle={styles.headerLogo}
              source={require('./assets/beer2.png')}>
            <Text
              style={[
              styles.headerText
              ]}>
              Process Lethality
              {'\n'}
              Calculator
            </Text>
          </ImageBackground>
          </View>
          <Text style={styles.beerPara}>
              This model will calculate Pasteurisation units of the process
              (PUtot) and Lethality of the process (LTproc) at specific
              temperature profile.
              {'\n'}

              {'\n'}D-value of the most heat resistant microorganism measured at
              the reference temperature and z-value must be given.{'\n'}
              
              {'\n'}Please download the dValue calculator of this series.{'\n'}
          </Text>
            <FormComponent />
          </ScrollView>
          </ImageBackground>
      </View>
    );
  } 
}