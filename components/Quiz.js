import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TextButton from './TextButton'

class Quiz extends Component {
  static navigationOptions = {
    title: 'Quiz'
  }

  state = {
    answered: 0,
    showingQuestion: true
  }

  flipCard = () => this.setState({ showingQuestion: !this.state.showingQuestion })

  render () {
    const { questions } = this.props.navigation.state.params
    const { answered, showingQuestion } = this.state

    return (
      <View style={styles.container}>
        <View style={styles.summary}>
          <Text>1/3</Text>
        </View>
        {showingQuestion ?
         <View style={styles.question}>
           <Text style={styles.text}>{questions[answered].question}</Text>
           <View>
             <TextButton
               onPress={() => this.flipCard()}
               buttonStyle={styles.answerBtn}
               textStyle={{ color: 'red' }}>
               Answer
             </TextButton>
           </View>
         </View>
          :
         <View style={styles.question}>
           <Text style={styles.text}>{questions[answered].answer}</Text>
           <TextButton
             onPress={() => this.flipCard()}
             buttonStyle={styles.answerBtn}
             textStyle={{ color: 'red' }}>
             Question
           </TextButton>
         </View>
        }
        <View style={styles.buttons}>
          <View>
            <TextButton
              buttonStyle={styles.correctBtn}
              textStyle={{ width: 200 }}>
              Correct
            </TextButton>
          </View>
          <View>
            <TextButton
              buttonStyle={styles.incorrectBtn}
              textStyle={{ width: 200 }}>
              Incorrect
            </TextButton>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  summary: {
  },
  question: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    flex: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    fontSize: 28,
    textAlign: 'center',
    padding: 10
  },
  answerBtn: {
    backgroundColor: 'transparent',
    borderColor: 'transparent'
  },
  correctBtn: {
    backgroundColor: 'green',
    borderColor: 'green',
    marginTop: 10
  },
  incorrectBtn: {
    backgroundColor: 'red',
    borderColor: 'red',
    marginTop: 10
  }
})

export default Quiz
