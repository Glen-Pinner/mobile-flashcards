import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import TextButton from './TextButton'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'
import { nephritis, alizarin, white } from '../utils/colours'

class Quiz extends Component {
  static navigationOptions = {
    title: 'Quiz'
  }

  state = {
    answered: 0,
    rightAnswers: 0,
    showingQuestion: true
  }

  flipCard = () => this.setState({ showingQuestion: !this.state.showingQuestion })

  answeredCorrectly = () => {
    this.setState({
      answered: this.state.answered + 1,
      rightAnswers: this.state.rightAnswers + 1,
      showingQuestion: true
    })
  }

  answeredIncorrectly = () => {
    this.setState({
      answered: this.state.answered + 1,
      showingQuestion: true
    })
  }

  restartQuiz = () => {
    this.setState({
      answered: 0,
      rightAnswers: 0,
      showingQuestion: true
    })
  }

  render () {
    const { questions } = this.props.navigation.state.params
    const { answered, rightAnswers, showingQuestion } = this.state

    // Completed the quiz
    if (answered === questions.length) {
      // Clear notifications for today and set for tomorrow
      clearLocalNotification()
        .then(setLocalNotification)

      return (
        <View style={styles.center}>
          <Text style={styles.textMedium}>You've completed the quiz!</Text>
          <Text style={[styles.textMedium, { fontSize: 18 }]}>Score: {rightAnswers}/{questions.length}</Text>

          {/* Restart the quiz */}
          <TextButton
            onPress={() => this.restartQuiz()}
            buttonStyle={{ backgroundColor: 'transparent', marginTop: 20 }}
            textStyle={{ color: 'black' }}
          >
            Restart Quiz
          </TextButton>

          {/* Return to previous screen */}
          <TextButton
            buttonStyle={{ marginTop: 20 }}
            onPress={() => this.props.navigation.goBack()}
          >
            Back to Deck
          </TextButton>
        </View>
      )
    }

    // Main quiz screen with questions and answers
    return (
      <View style={styles.container}>
        <View style={styles.summary}>
          <Text style={{ fontSize: 18, fontWeight: '500' }}>{answered}/{questions.length}</Text>
        </View>

        {/* Representation of 'card' */}
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

        {/* Buttons to answer question */}
        <View style={styles.buttons}>
          <View>
            <TextButton
              onPress={() => this.answeredCorrectly()}
              buttonStyle={styles.correctBtn}
              textStyle={{ width: 200 }}>
              Correct
            </TextButton>
          </View>
          <View>
            <TextButton
              onPress={() => this.answeredIncorrectly()}
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
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-start',
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
    borderColor: 'transparent',
    marginTop: 10
  },
  correctBtn: {
    backgroundColor: nephritis,
    borderColor: nephritis,
    marginTop: 10
  },
  incorrectBtn: {
    backgroundColor: alizarin,
    borderColor: alizarin,
    marginTop: 10
  },
  center: {
    flex: 1,
    marginTop: -40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: white
  },
  textMedium: {
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
    padding: 10
  }
})

export default Quiz
