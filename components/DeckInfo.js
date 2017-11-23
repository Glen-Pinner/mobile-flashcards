import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const DeckInfo = ({ title, questions }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={{ color: '#999', textAlign: 'center' }}>{questions.length} cards</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10
  },
  title: {
    fontSize: 28,
    textAlign: 'center'
  }
})

export default DeckInfo
