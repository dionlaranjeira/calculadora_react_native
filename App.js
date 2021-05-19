import React, { Component, useState } from 'react';

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
    displayValue: "0",
    valor1: 0,
    valor2: 0,
    operacaoIniciada: false,
  } 

  

  addDigit = n => {

    if(this.state.operacaoIniciada){
      if(n == '.'){
        this.setState({displayValue: '0.', operacaoIniciada: false});
        return
      }
      this.setState({displayValue: n, operacaoIniciada: false});

      return
    }

    var aux = this.state.displayValue;
    if(this.state.displayValue.length >=15){
      return
    }
    if (this.state.displayValue === '0' && n=="."){
      this.setState({displayValue: '0.'})
      return
    }

    if( n=== '.' && this.state.displayValue.includes('.')){
      return
    }
    if(this.state.displayValue === '0'){
      this.setState({displayValue: n})
      return
    }
   
    this.setState({displayValue: aux + n})
  }

  clearDisplay = () => {
    this.setState({displayValue: '0'})
  }

  setOperation = operation =>{
      if (operation != "="){
        if(operation == "+"){
       
      }
        this.setState({operacaoIniciada: true})
      }

  }
  
  render(){
  return (
    <SafeAreaView style = {styles.container} >
     <Display  length = {this.state.displayValue.length} value={this.state.displayValue}/>
     <View style = {styles.buttons}>
      <Button label="C" onClick={this.clearDisplay} />
      <Button label="()"  />
      <Button label="%"  onClick={this.setOperation} />
      <Button operation label="÷" onClick={this.setOperation} />
      <Button label="7" onClick={this.addDigit} />
       <Button label="8" onClick={this.addDigit} />
       <Button label="9" onClick={this.addDigit} />
       <Button operation label="X" onClick={this.setOperation} />
       <Button label="4" onClick={this.addDigit} />
       <Button label="5" onClick={this.addDigit}/>
       <Button label="6" onClick={this.addDigit} />
       <Button operation label="-" onClick={this.setOperation} />
       <Button label="1" onClick={this.addDigit} />
       <Button label="2" onClick={this.addDigit} />
       <Button label="3" onClick={this.addDigit}/>
       <Button operation label="+" onClick={this.setOperation} />
       <Button label="0" onClick={this.addDigit} />
       <Button label="." onClick={this.addDigit} />
       <Button operation tamDouble label="=" onClick={this.setOperation} />
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

