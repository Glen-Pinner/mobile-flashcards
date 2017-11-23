import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

const TextButton = ({ children, onPress, style = {} }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={[styles.text, style]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5
  },
  text: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  }
})

export default TextButton
