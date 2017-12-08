import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { midnight_blue, clouds } from '../utils/colours'

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
    borderColor: midnight_blue,
    backgroundColor: midnight_blue,
  },
  text: {
    textAlign: 'center',
    color: clouds,
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  }
})

export default TextButton
