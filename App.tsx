import { Alert, Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function App() {

  const [counter,setCounter] = useState(0)

  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    setCounter(counter - 1)
  }

  const reset = () => {
    setCounter(0)
  }


  if (counter == 10) {
    setCounter(0)
    Alert.alert("Limit Reached","You cannot increament the counter beyond 10")
  }
  if (counter == -5) {
    setCounter(0)
    Alert.alert("Limit Reached","You cannot decreament the counter below -5")
    
  }

  return (
    <View style = {styles.container}>
      <View style = {styles.counterContainer}>
      <TouchableOpacity onPress={increment}>
        <Image
        source={{uri:'https://cdn-icons-png.flaticon.com/512/2550/2550289.png'}}
        style = {styles.image}
        />
      </TouchableOpacity>
      <Text style = {styles.counterText}>{counter}</Text>
      <TouchableOpacity onPress={decrement}>
        <Image
        source={{uri:'https://cdn-icons-png.flaticon.com/512/929/929430.png'}}
        style = {styles.image}
        />
      </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity 
      onPress={reset}
      style= {[styles.primaryBtn , counter === 0 && { backgroundColor: '#ecf0f1' }]}
      disabled={counter === 0}
      >
        <Text>Reset</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#cd84f1'
  },
  counterContainer:{
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    marginBottom:80
  },
  counterText:{
    fontSize:30,
    fontWeight:'bold',
    marginHorizontal:50
  },
  primaryBtn: {
    width: 80,
    alignItems:'center',
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  image:{
    width:50,
    height:50
  }
})
