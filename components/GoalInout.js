import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal,Image } from 'react-native';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput
        c
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
        
            <Button  color="#f31282" title="Cancel" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
          <Button color="#5e0acc"
            title="Add Goal" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    padding: 16,
  
    backgroundColor:'#311b6b'
  },
  image:{
    width:100,
    height:100,
    margin:20,

  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    backgroundColor:'#cccccc',
    width: '100%',
    padding: 8,
    color:'#120438',
    borderRadius:16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8
  }
});