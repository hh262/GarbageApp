/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */


import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Button, H2, H3, Container, Content, Header, Form, Item, Input, Label, Icon, Picker, DatePicker} from 'native-base';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  static navigationOptions =
  {
    title: 'Product Details',
    headerStyle:
    {
      backgroundColor: 'f4511e',
    },
    headerTintColor: 'black'
  };

  state = {
    productName: '',
    descriptionName: '',
    conditionChange: '',
    pickupDate: ''
  };

  onProductNameChange = (productName) => {
    this.setState({ productName: productName });
  }
  onDescriptionChange = (descriptionName) => {
    this.setState({ descriptionName: descriptionName });
  }
  onConditionChange = (conditionChange) => {
    this.setState({ conditionChange: conditionChange });
  }
  onPickupDateChange = (pickupDate) => {
    this.setState({ pickupDate: pickupDate });
  }

  render() {
    return (
        <Container>
          <Content contentContainerStyle={styles.content}>

            <Item regular style={styles.searchBar}>
              <Input
                value={this.state.productName}
                placeholder="Enter The Product's Name"
                onChangeText={this.onProductNameChange}
              />
            </Item>

            <Button style = {styles.uploadButton} block success>
              <Text>Upload a Photo of the Item</Text>
            </Button>


            <Item regular style={styles.descriptionText}>
              <Input
                value={this.state.descriptionName}
                placeholder='Write An Awesome Description'
                onChangeText={this.onDescriptionChange}
              />
            </Item>


            <Text style = {styles.h3Text}>Condition</Text>


            <Item regular style={styles.descriptionText}>
              <Input
                value={this.state.conditionChange}
                placeholder='Tell Us More About The Condition'
                onChangeText={this.onConditionChange}
              />
            </Item>

            <H3 style = {styles.h3Text}>Pickup Date </H3>
              <Item regular style={styles.descriptionText}>
                <Input
                  value={this.state.pickupDate}
                  placeholder='Format (xx/xx/xxxx)'
                  maxLength = {6}
                  keyboardType = "number-pad"
                  onChangeText={this.onPickupDateChange}
                />
              </Item>







            <Button
            style = {styles.submitButton}
            block success
            onPress=
            {() => this.props.navigation.navigate( 'Third',
              {
                productName: this.productName,
                descriptionName: this.descriptionName,
                conditionChange: this.conditionChange,
                pickupDate: this.pickupDate
              }
            )}>
              <Text> Next: Customer Info</Text>
            </Button>


          </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row'
  },
  content: {
    paddingHorizontal: '5%',
    flexGrow: 1,
    backgroundColor: "#086826"
  },
  submitButton:{
    marginTop: "auto",
    marginBottom: 40,
    backgroundColor: "#ffffff"
  },
  uploadButton:{
    marginTop: "auto",
    marginBottom: 40,
    backgroundColor: "#ffffff",
    width: '65%',
    alignSelf: 'center'

  },
  descriptionText:{
    marginTop: 'auto',
    marginBottom: 30,
    backgroundColor: "#ffffff"
  },
  searchBar: {
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    backgroundColor: 'white',
    borderRadius: 3
  },
  whiteText: {
    color: "white"
  },
  conditionDropdown: {
    backgroundColor: 'white',
    flex: 1,
    alignSelf: 'center'

  },
  h3Text:{
    //paddingVertical: 3,
    fontSize: 18,
    color: 'white'
  },
  dateTest: {
    borderRadius: 4,
    backgroundColor: 'white',
    borderColor: 'black'
  }
});
