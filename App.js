import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

let numbers = ["AC", "DEL", "%", "/", 7, 8, 9, "*", 4, 5, 6, "-", 3, 2, 1, "+", 0, ".", "+/-", "="]

export default function App() {
  const [currentNumber, setCurrentNumber] = useState('')
  const [lastNumber, setLastNumber] = useState('')

  function AddNumber(caracter, index) {
    try{
      if(caracter === '='){ 
        setLastNumber(currentNumber)
        let result = eval(currentNumber) 
        setCurrentNumber(result.toString())
      }else if(caracter == "AC"){
        setCurrentNumber('')
        setLastNumber('')
      }else if(caracter === "DEL"){
        let delet = currentNumber.slice(0, -1)
        setCurrentNumber(delet)
      } else if (caracter === '+/-') {
        setCurrentNumber(
          currentNumber.startsWith('-') 
          ? currentNumber.substring(1) : '-' + currentNumber
        );
      } else {
        setCurrentNumber(currentNumber + caracter);
      }
    }catch(err){
      alert('{ Expressão inválida }')
      return;
    }

  }

  return (
    <View style={styles.container}>
      <TouchableOpacity></TouchableOpacity>
      <View style={styles.display}>
        <Text style={styles.lastn}>{lastNumber}</Text>
        <Text style={styles.currentn}>{currentNumber}</Text>
      </View>
      <View style={styles.keyboard}>
        {numbers.map((caracter, index) => (
            <TouchableOpacity key={caracter} style={styles.button} onPress={() => AddNumber(caracter, index)}>
              <Text style={{ fontSize: 22, color: '#000' }}>{caracter}</Text>
            </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  display: {
    backgroundColor: '#e9ffff',
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingRight: 10,
  },
  currentn:{
    color: '#000',
    fontSize: 60
  },
  lastn:{
    fontSize: 18
  },
  keyboard: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    minWidth: 90,
    minHeight: 80,
    justifyContent: 'center',
    alignItems: 'center'
  }
})