import * as React from 'react';
import { Text, View, ScrollView, Image } from 'react-native';
import styles from './styles.style.js';
import FormComponent from './components/formComponent.js';
import beerImage from './assets/beer.png';

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
        <ScrollView contentContainerStyle={{ flex: 0}}>
          <View style={styles.headerContainer}>
              <Text style={styles.header}> 
                  Process Lethality Calculator 
              </Text>
              <Image style={styles.beerImage} source={require('./assets/beer.png')} />
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
      </View>
    );
  } 
}