import React, { Component } from 'react';

import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,  
} from 'react-native';

import Button from './src/componentes/Button'
import Display from './src/componentes/Display'

export default class App extends Component {
  state = {
    displayValue: "0"
  }
  
  render(){
  return (
    <SafeAreaView style = {styles.container} >
     <Display value={this.state.displayValue}/>
     <View style = {styles.buttons}>
      <Button label="C"/>
      <Button label="()"/>
      <Button label="%"/>
      <Button label="÷"/>
      <Button label="7"/>
       <Button label="8"/>
       <Button label="9"/>
       <Button label="X"/>
       <Button label="4"/>
       <Button label="5"/>
       <Button label="6"/>
       <Button label="-"/>
       <Button label="1"/>
       <Button label="2"/>
       <Button label="3"/>
       <Button label="+"/>
       <Button label="+/-"/>
       <Button label="0"/>
       <Button label=","/>
       <Button label="="/>
       </View>
    </SafeAreaView>
  );}
};

const styles = StyleSheet.create(
  {
    container:{
      flex: 1,
    },
    buttons:{
      flexDirection: 'row',
      flexWrap: 'wrap',
    }
  }
);

