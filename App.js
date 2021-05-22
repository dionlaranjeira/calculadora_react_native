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


const initialState = {
 displayValue: "0",
 clearDisplay: false,
 operation: null,
 values: [0,0],
 current: 0,   
}


export default class App extends Component {
  
  state = {...initialState} 

  addDigit = n => {
      
      const clearDisplay = this.state.displayValue === "0" || this.state.clearDisplay
      
      if( n === "." && !clearDisplay && this.state.displayValue.includes(".") ){
        return;
      }
      
      const currentValue = clearDisplay ? '' : this.state.displayValue
      const displayValue = currentValue + n
      this.setState({displayValue, clearDisplay: false})
      
      if(n !== '.'){
        const newValue = parseFloat(displayValue)
        const values = [...this.state.values]
        values[this.state.current] = newValue
        this.setState({values})
      }

    }

  clearDisplay = () => {
    this.setState({... initialState})
  }

  setOperation = operation =>{
    
     if(this.state.current == 0){
       this.setState({operation, current: 1, clearDisplay: true})
     }else{
       const equals = operation === "0"
       const values = [... this.state.values]

       try {
         values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`)
       } catch (error) {
         values[0] = this.state.values[0]
       }
       values[1] = this.setState({
        displayValue: `${values[0]}`,
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: true,
        values,
       })
     }

  }
  
  render(){
  return (
    <SafeAreaView style = {styles.container} >
     <Display  length = {this.state.displayValue.length} value={this.state.displayValue}/>
     <View style = {styles.buttons}>
      <Button label="C" tamDouble onClick={this.clearDisplay} />
      <Button label="%"  onClick={this.setOperation} />
      <Button operation label="/" onClick={this.setOperation} />
      <Button label="7" onClick={this.addDigit} />
       <Button label="8" onClick={this.addDigit} />
       <Button label="9" onClick={this.addDigit} />
       <Button operation label="*" onClick={this.setOperation} />
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

