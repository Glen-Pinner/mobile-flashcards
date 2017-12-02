import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

const TextButton = ({ children, onPress, buttonStyle = {}, textStyle = {} }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, buttonStyle]}>
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'black',
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  }
})

export default TextButton
